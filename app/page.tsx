import Link from 'next/link';
import Image from 'next/image';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import programsData from '@/data/programs.json';
import testimonialsData from '@/data/testimonials.json';
import AnimateOnScroll from './components/AnimateOnScroll';
import HeroCarousel from './components/HeroCarousel';

interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    author?: string;
    image?: string;
  };
}

async function getLatestBlogPosts(limit: number = 3): Promise<BlogPost[]> {
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
              image: data.image || '',
            },
          };
        })
    );

    // Sort by date, newest first, and limit to specified number
    return posts
      .sort((a, b) => {
        const dateA = new Date(a.frontmatter.date).getTime();
        const dateB = new Date(b.frontmatter.date).getTime();
        return dateB - dateA;
      })
      .slice(0, limit);
  } catch (error) {
    // If directory doesn't exist or has no posts, return empty array
    return [];
  }
}

export default async function Home() {
  const featuredBlogPosts = await getLatestBlogPosts(3);
  const featuredPrograms = programsData.slice(0, 4);
  const featuredTestimonials = testimonialsData.slice(0, 3);

  const heroSlides = [
    {
      title: 'Transforming Okrika with Visionary Leadership, Service & Results',
      subtitle: 'Welcome',
      description: 'Hon. Linda, Member of Rivers State House of Assembly, representing Okrika Constituency. Dedicated to technology empowerment, social intervention, and community development.',
      link: '/programs',
      linkText: 'View More',
      image: '/slides/s1.jpeg',
    },
    {
      title: 'Driving Development, Opportunity & Hope for Every Okrika Citizen',
      subtitle: 'Tech Programs',
      description: 'Building digital skills and creating opportunities for the Okrika community through comprehensive technology training and empowerment programs.',
      link: '/programs',
      linkText: 'Explore Programs',
      image: '/slides/s2.jpeg',
    },
    {
      title: 'Committed to People-Focused Representation that Delivers Real Impact',
      subtitle: 'Community Support',
      description: 'Supporting women, children, and families in need through transparent and impactful social intervention initiatives.',
      link: '/reports',
      linkText: 'View Impact',
      image: '/slides/s3.jpeg',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Carousel */}
      <HeroCarousel slides={heroSlides} autoPlayInterval={6000} />

      {/* Three small cards */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <AnimateOnScroll animation="slide-up" delay={100}>
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Quality Representation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensuring the voice, needs, and priorities of Okrika people are boldly presented and defended at the State Assembly.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Community Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Driving impactful projects and interventions that uplift communities, improve living standards, and create lasting progress.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="text-xl md:text-xl font-bold text-gray-900 mb-4">
                  Youth & Women Empowerment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Promoting programs that equip young people and women with opportunities, skills, and support to thrive.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <AnimateOnScroll animation="slide-left">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Introducing Hon. Linda's Commitment to Okrika Constituency
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    My dedication to the people of Okrika goes beyond legislative duties; it is a personal vow to
                    champion development, protect community interests, and ensure every citizen feels the impact
                    of effective governance. I am committed to representing our constituency with integrity, courage,
                    and unwavering focus, pushing for policies and initiatives that address our most pressing needs.
                  </p>
                </div>

                <div>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    From accessible education and improved infrastructure to economic empowerment and
                    community welfare, my mission is clear: to deliver responsible leadership that listens, serves,
                    and produces measurable results. Together, we will build an Okrika where opportunities are
                    abundant, voices are heard, and progress is shared by all.
                  </p>
                </div>



                {/* <p className="text-base text-gray-700 italic">
                  Yes, it is true. Check our reports and testimonials yourself.
                </p> */}

                <p className="text-lg text-gray-900 font-semibold mt-8" style={{ fontFamily: 'cursive' }}>
                  — Hon. Linda
                </p>
              </div>
            </AnimateOnScroll>

            {/* Right Column - Quote Box */}
            <AnimateOnScroll animation="slide-right" delay={200}>
              <div className="bg-blue-50 rounded-lg p-8 md:p-10 relative">
                {/* Large Quotation Marks */}
                <div className="absolute top-6 left-6">
                  <svg className="w-16 h-16 text-blue-600 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative z-10 pt-8">
                  {/* Professional Portrait Photo */}
                  <div className="mb-6 rounded-lg overflow-hidden shadow-lg max-w-xs mx-auto">
                    <Image
                      // Image from the public folder
                      src="/original.jpeg"
                      alt="Hon. Linda - Member of Rivers State House of Assembly"
                      width={200}
                      height={250}
                      className="w-full h-auto object-cover rounded-lg"
                      priority
                    />
                  </div>

                  {/* <p className="text-base text-gray-800 leading-relaxed mb-8">
                  Our programs are that control. An entire ecosystem of everything you need to 
                  build a successful, empowered community. All for the commitment of <strong>ONE 
                  dedicated representative</strong>.
                </p> */}

                  {/* Signature Section */}
                  <div className="flex items-start space-x-4 pt-4 border-t border-blue-200">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg text-gray-900 font-semibold mb-1" style={{ fontFamily: 'cursive' }}>
                        Hon. Linda
                      </p>
                      <p className="text-sm text-gray-600">
                        Member, Rivers State House of Assembly
                        <br />
                        Representing Okrika Constituency
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Hon. Linda’s Impact
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:flex lg:justify-around">
            <AnimateOnScroll animation="slide-up" delay={200}>
              <div>
                <div className="text-sm text-gray-600 mb-2">Constituents Reached</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">3,000+</div>
                {/* <div className="text-sm text-gray-500">2025</div> */}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={300}>
              <div>
                <div className="text-sm text-gray-600 mb-2">Opening balance</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">500+</div>
                {/* <div className="text-sm text-gray-500">2025</div> */}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={400}>
              <div>
                <div className="text-sm text-gray-600 mb-2">Projects Delivered</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">20+</div>
                {/* <div className="text-sm text-gray-500">2025</div> */}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={500}>
              <div>
                <div className="text-sm text-gray-600 mb-2">Legislative Actions</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">30+</div>
                {/* <div className="text-sm text-gray-500">2025</div> */}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Empowering the Okrika community through targeted initiatives that create lasting impact
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Programs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPrograms.slice(1, 3).map((program, index) => (
                <AnimateOnScroll key={index} animation="slide-up" delay={index * 100 + 200}>
                  <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <h3 className="text-l font-bold text-gray-900 mb-4">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {program.description}
                    </p>
                    {/* <Link
                      href="/programs"
                      className="text-blue-600 font-semibold hover:text-blue-800"
                    >
                      Learn More →
                    </Link> */}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Right Side - YouTube Thumbnail */}
            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="w-full">
                <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden shadow-xl mb-6">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Program Overview Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <AnimateOnScroll animation="slide-up" delay={400}>
                  <div className="text-center">
                    <Link
                      href="/programs"
                      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View All Programs
                    </Link>
                  </div>
                </AnimateOnScroll>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Blog Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with View All Link */}
          <AnimateOnScroll animation="slide-up">
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Latest News and Stories
              </h2>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View all &gt;
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {
              featuredBlogPosts.map((post, index) => (
                <AnimateOnScroll key={post.slug} animation="slide-up" delay={index * 100 + 200}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="bg-white hover:shadow-lg transition-shadow block"
                  >
                    {/* Image */}
                    <div className="w-full h-64 mb-4 overflow-hidden">
                      <img
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Content with padding */}
                    <div className="px-4 pb-4">
                      {/* Category */}
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                        News
                      </div>
                      {/* Headline */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                        {post.frontmatter.title}
                      </h3>
                      {/* Date and Read More */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                          Read more &gt;
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))
            }
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What People Are Saying
              </h2>
              <p className="text-lg text-gray-600">
                Real stories from beneficiaries and community members
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <AnimateOnScroll key={index} animation="slide-up" delay={index * 100 + 200}>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Calls to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Involved
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slide-up" delay={200}>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join our programs, attend events, or learn more about how we're making a difference in Okrika
            </p>
          </AnimateOnScroll>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Apply to Programs
            </Link>
            <Link
              href="/events"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors border border-blue-300"
            >
              View Events
            </Link>
            <Link
              href="/reports"
              className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-white"
            >
              View Reports
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
