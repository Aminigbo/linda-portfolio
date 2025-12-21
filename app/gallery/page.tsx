'use client';

import { useState } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

// Sample gallery data - in production, this would come from a CMS or file system
const galleryImages = [
  {
    id: 1,
    title: 'Tech Bootcamp 2024',
    category: 'Tech Empowerment',
    description: 'Students during the intensive coding workshop',
    image: '../slides/s1.jpeg', // Replace with actual images
  },
  {
    id: 2,
    title: 'Community Town Hall',
    category: 'Events',
    description: 'Monthly town hall meeting with constituents',
    image: '../slides/s2.jpeg',
  },
  {
    id: 3,
    title: 'Women Empowerment Workshop',
    category: 'Social Intervention',
    description: 'Training session for women entrepreneurs',
    image: '../slides/s3.jpeg',
  },
  {
    id: 4,
    title: 'Graduation Ceremony',
    category: 'Tech Empowerment',
    description: 'Celebrating our program graduates',
    image: '../slides/s4.jpeg',
  },
  {
    id: 5,
    title: 'Youth Engagement',
    category: 'Events',
    description: 'Engaging with young people in Okrika',
    image: '../slides/s5.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/s6.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/s7.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/s8.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/s9.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/s10.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/s11.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/12.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/13.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/14.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/15.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/16.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/17.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/18.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/19.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/20.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/21.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/22.jpeg',
  },
  {
    id: 6,
    title: 'Scholarship Distribution',
    category: 'Social Intervention',
    description: 'Supporting students with education aid',
    image: '../slides/23.jpeg',
  },
];

const categories = ['All', 'Tech Empowerment', 'Social Intervention', 'Events'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="slide-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Photos from our programs, events, and community engagement activities
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category Filter */}
        {/* <AnimateOnScroll animation="slide-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
          </div>
        </AnimateOnScroll> */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <AnimateOnScroll key={item.id} animation="slide-up" delay={index % 3 * 100 + 200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 bg-gray-200">
                {/* Placeholder for image - replace with actual Image component when images are available */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  {/* <svg
                    className="w-16 h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg> */}
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </div>
              {/* <div className="p-4">
                <span className="text-sm text-blue-600 font-semibold">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div> */}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Empty State Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No images found in this category.
            </p>
          </div>
        )}

        {/* Info Message */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            <strong>Note:</strong> Gallery images will be added as events and programs are documented. 
            Check back regularly for updates.
          </p>
        </div>
      </div>
    </div>
  );
}

