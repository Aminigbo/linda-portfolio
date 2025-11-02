import Link from 'next/link';
import programsData from '@/data/programs.json';
import testimonialsData from '@/data/testimonials.json';
import AnimateOnScroll from './components/AnimateOnScroll';

export default function Home() {
  const featuredPrograms = programsData.slice(0, 4);
  const featuredTestimonials = testimonialsData.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32 min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <AnimateOnScroll animation="slide-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering
                <br />
                Okrika Through
                <br />
                Action & Impact
          </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Hon. Lindah, Member of Rivers State House of Assembly, representing Okrika Constituency. 
                Dedicated to technology empowerment, social intervention, and community development.
              </p>
              <Link
                href="/programs"
                className="inline-block border-2 border-yellow-400 bg-white text-gray-900 px-8 py-3 font-bold uppercase tracking-wide hover:bg-yellow-400 hover:text-white transition-colors"
              >
                View More
              </Link>
            </AnimateOnScroll>

            {/* Right Side - Graphic Element */}
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="relative h-[500px] flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Large Letter L for Lindah */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[300px] md:text-[400px] font-serif font-bold text-gray-900 leading-none opacity-90">
                      L
                    </div>
                  </div>
                  
                  {/* Yellow Geometric Shapes */}
                  <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full"></div>
                  <div className="absolute top-32 right-32 w-16 h-16 bg-yellow-400 rounded-full"></div>
                  <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-80"></div>
                  
                  {/* Semi-circles */}
                  <div className="absolute top-16 left-16 w-20 h-20 border-8 border-yellow-400 rounded-full border-b-transparent border-r-transparent"></div>
                  <div className="absolute bottom-32 left-10 w-16 h-16 border-8 border-yellow-400 rounded-full border-t-transparent border-l-transparent"></div>
                  
                  {/* Curved lines */}
                  <svg className="absolute top-24 right-24 w-32 h-32" viewBox="0 0 100 100" fill="none">
                    <path d="M 10 50 Q 30 30, 50 50 T 90 50" stroke="#FACC15" strokeWidth="3" fill="none"/>
                  </svg>
                  <svg className="absolute bottom-24 left-24 w-40 h-40" viewBox="0 0 100 100" fill="none">
                    <path d="M 50 10 Q 70 30, 50 50 T 50 90" stroke="#FACC15" strokeWidth="3" fill="none"/>
                  </svg>
                  
                  {/* Dotted pattern */}
                  <div className="absolute top-1/4 right-1/4 w-16 h-16 opacity-60">
                    <div className="grid grid-cols-4 gap-1 w-full h-full">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
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
                  Introducing Hon. Lindah's Commitment to Okrika Constituency
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A comprehensive approach to community development and empowerment that ensures you WIN. 
                  Our initiatives are designed as one integrated system that addresses everything about 
                  your community's needs, and we work transparently with the resources we have.
                </p>
              </div>
              
              <div>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  We created the <strong>Tech Empowerment Program</strong> for every skill your community 
                  needs to thrive in the digital economy. The <strong>Social Intervention Fund</strong> for 
                  women, children, and families in need. <strong>Community Engagement</strong> for transparent 
                  governance and direct dialogue with constituents.
                </p>
              </div>

               

              <p className="text-base text-gray-700 italic">
                Yes, it is true. Check our reports and testimonials yourself.
              </p> 

              <p className="text-lg text-gray-900 font-semibold mt-8" style={{ fontFamily: 'cursive' }}>
                — Hon. Lindah
              </p>
              </div>
            </AnimateOnScroll>

            {/* Right Column - Quote Box */}
            <AnimateOnScroll animation="slide-right" delay={200}>
              <div className="bg-blue-50 rounded-lg p-8 md:p-10 relative">
              {/* Large Quotation Marks */}
              <div className="absolute top-6 left-6">
                <svg className="w-16 h-16 text-blue-600 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <div className="relative z-10 pt-8">
                <p className="text-xl md:text-2xl font-bold text-teal-700 mb-6 leading-relaxed">
                  Community members are the backbone of society.
                  <br />
                  We believe that it's time to give control back to <span className="text-blue-900">YOU</span>.
                </p>

                <p className="text-base text-gray-800 leading-relaxed mb-8">
                  Our programs are that control. An entire ecosystem of everything you need to 
                  build a successful, empowered community. All for the commitment of <strong>ONE 
                  dedicated representative</strong>.
                </p>

                {/* Signature Section */}
                <div className="flex items-start space-x-4 pt-4 border-t border-blue-200">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg text-gray-900 font-semibold mb-1" style={{ fontFamily: 'cursive' }}>
                      Hon. Lindah
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
              Funding for Okrika Programs
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:flex lg:justify-around">
            <AnimateOnScroll animation="slide-up" delay={200}>
              <div>
                <div className="text-sm text-gray-600 mb-2">Total requirements (USD)</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">6.5M</div>
                <div className="text-sm text-gray-500">2025</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={300}>
              <div>
                <div className="text-sm text-gray-600 mb-2">Opening balance (USD)</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">9,497</div>
                <div className="text-sm text-gray-500">2025</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={400}>
              <div>
                <div className="text-sm text-gray-600 mb-2">Earmarked funding (USD)</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">1.9M</div>
                <div className="text-sm text-gray-500">2025</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-up" delay={500}>
              <div>
                <div className="text-sm text-gray-600 mb-2">Total (USD)</div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">1.9M</div>
                <div className="text-sm text-gray-500">2025</div>
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
              {featuredPrograms.map((program, index) => (
                <AnimateOnScroll key={index} animation="slide-up" delay={index * 100 + 200}>
                  <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <h3 className="text-l font-bold text-gray-900 mb-4">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {program.description}
                    </p>
                    <Link
                      href="/programs"
                      className="text-blue-600 font-semibold hover:text-blue-800"
                    >
                      Learn More →
                    </Link>
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
            {/* Blog Card 1 */}
            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-white hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img
                    src="https://www.unocha.org/sites/default/files/styles/full_width_2_1_246/public/2024-07/DSC00206.jpg.webp"
                    alt="Community program"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content with padding */}
                <div className="px-4 pb-4">
                  {/* Category */}
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    Story
                  </div>
                  {/* Headline */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    "It gave us the strength to believe in tomorrow." How our programs help families prepare for the future
                  </h3>
                  {/* Date and Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">23 December 2024</span>
                    <Link
                      href="/blog"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read more &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Blog Card 2 */}
            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="bg-white hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img
                    src="https://www.unocha.org/sites/default/files/styles/full_width_2_1_246/public/2024-07/DSC00206.jpg.webp"
                    alt="Community engagement"
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
                    Today's highlights: Tech Bootcamp Graduation, Women's Empowerment Launch, Quarterly Reports
                  </h3>
                  {/* Date and Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">10 December 2024</span>
                    <Link
                      href="/blog"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read more &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Blog Card 3 */}
            <AnimateOnScroll animation="slide-up" delay={400}>
              <div className="bg-white hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="w-full h-64 mb-4 overflow-hidden">
                  <img
                    src="https://www.unocha.org/sites/default/files/styles/full_width_2_1_246/public/2024-07/DSC00206.jpg.webp"
                    alt="Program impact"
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
                    Community impact: Q3 2024 transparency report shows continued progress in Okrika
                  </h3>
                  {/* Date and Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">8 December 2024</span>
                    <Link
                      href="/blog"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read more &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
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
