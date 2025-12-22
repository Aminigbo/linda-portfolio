import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import AnimateOnScroll from '../components/AnimateOnScroll';

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    author?: string;
  };
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const contentDirectory = path.join(process.cwd(), 'content', 'blog');
  
  try {
    const files = await fs.readdir(contentDirectory);
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
        .map(async (file) => {
          const filePath = path.join(contentDirectory, file);
          const fileContents = await fs.readFile(filePath, 'utf8');
          const { data } = matter(fileContents);
          
          return {
            slug: file.replace(/\.(md|mdx)$/, ''),
            frontmatter: {
              title: data.title || 'Untitled',
              date: data.date || '',
              excerpt: data.excerpt || '',
              author: data.author || 'Hon. Linda',
            },
          };
        })
    );
    
    // Sort by date, newest first
    return posts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime();
      const dateB = new Date(b.frontmatter.date).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    // If directory doesn't exist or has no posts, return empty array
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="slide-up">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our programs, impact stories, community activities, and transparency reports.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Blog Posts */}
        {posts.length === 0 ? (
          <AnimateOnScroll animation="slide-up" delay={200}>
            <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">
              No blog posts available yet.
            </p>
            <p className="text-gray-500">
              Check back soon for updates about our programs and community activities.
            </p>
            </div>
          </AnimateOnScroll>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <AnimateOnScroll key={post.slug} animation="slide-up" delay={index * 100 + 200}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow block"
                >
                {/* <div className="text-sm text-gray-500 mb-2">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div> */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.frontmatter.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.frontmatter.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By Admin
                  </span>
                  <span className="text-blue-600 font-semibold">
                    Read More →
                  </span>
                </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        {/* Sample Posts (for when no markdown files exist) */}
        {posts.length === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-gray-500 mb-2">
                December 2024
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Q4 Tech Bootcamp Graduation
              </h2>
              <p className="text-gray-600 mb-4">
                50 young people completed our intensive tech training program and are now ready for the job market. 
                This quarter's program saw record enrollment and success rates.
              </p>
              <div className="text-sm text-gray-500">
                By Hon. Linda
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-gray-500 mb-2">
                November 2024
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Women's Empowerment Initiative Launch
              </h2>
              <p className="text-gray-600 mb-4">
                New micro-grant program launched to support women entrepreneurs in Okrika. 
                Applications are now open for the first cohort.
              </p>
              <div className="text-sm text-gray-500">
                By Hon. Linda
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-gray-500 mb-2">
                October 2024
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Quarterly Transparency Report Published
              </h2>
              <p className="text-gray-600 mb-4">
                Q3 2024 financial report now available, showing all program disbursements and impact metrics. 
                Transparency is our commitment.
              </p>
              <div className="text-sm text-gray-500">
                By Hon. Linda
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

