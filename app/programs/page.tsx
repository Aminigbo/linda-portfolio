import Link from 'next/link';
import programsData from '@/data/programs.json';
import AnimateOnScroll from '../components/AnimateOnScroll';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="slide-up">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Programs
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering the Okrika community through targeted initiatives that create lasting impact 
              and sustainable development opportunities.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Programs List */}
        <div className="space-y-12 mb-16">
          {programsData.map((program, index) => (
            <AnimateOnScroll key={index} animation="slide-up" delay={index * 200 + 200}>
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {program.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {program.description}
                  </p>
                  <p className="text-base text-gray-700 mb-6">
                    {program.details}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Program Benefits
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start space-x-3 text-gray-700"
                    >
                      <svg
                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility */}
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ultimate Goal
                </h3>
                <p className="text-gray-700">
                  {program.eligibility}
                </p>
              </div>

              {/* CTA */}
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={program.applicationLink}
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Apply Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div> */}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Additional Info Section */}
        {/* <AnimateOnScroll animation="slide-up" delay={600}>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Our Programs?
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Get in touch with us to learn more about eligibility, application processes, 
            and upcoming program opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
          </div>
        </AnimateOnScroll> */}
      </div>
    </div>
  );
}