import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import AnimateOnScroll from '../components/AnimateOnScroll';

interface Report {
  title: string;
  date: string;
  description: string;
  filename: string;
  size?: string;
}

async function getReports(): Promise<Report[]> {
  const reportsDirectory = path.join(process.cwd(), 'public', 'reports');
  
  try {
    const files = await fs.readdir(reportsDirectory);
    const pdfFiles = files.filter((file) => file.endsWith('.pdf'));
    
    // In a real implementation, you might extract metadata from filenames
    // or use a JSON file to store report metadata
    const reports: Report[] = pdfFiles.map((file) => {
      const dateMatch = file.match(/(\d{4})-(\d{2})/);
      const date = dateMatch
        ? new Date(`${dateMatch[1]}-${dateMatch[2]}-01`).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })
        : 'Unknown Date';
      
      return {
        title: file.replace(/\.pdf$/, '').replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
        date,
        description: `Quarterly transparency report for ${date}`,
        filename: file,
      };
    });
    
    return reports.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    // If directory doesn't exist or has no reports, return empty array
    return [];
  }
}

export default async function ReportsPage() {
  const reports = await getReports();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="slide-up">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transparency Reports
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Public reports showing quarterly disbursements, program activities, and financial transparency. 
              All reports are available for download.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Reports List */}
        {reports.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
              <svg
                className="w-16 h-16 mx-auto text-blue-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Reports Available Yet
              </h3>
              <p className="text-gray-600">
                Quarterly transparency reports will be published here. Check back soon for updates.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {reports.map((report, index) => (
              <AnimateOnScroll key={index} animation="slide-up" delay={index * 100 + 200}>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <svg
                        className="w-8 h-8 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {report.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-2">
                      {report.date}
                    </p>
                    <p className="text-gray-700">
                      {report.description}
                    </p>
                  </div>
                  <div className="md:ml-6">
                    <a
                      href={`/reports/${report.filename}`}
                      download
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        {/* Sample Reports (for when no PDFs exist) */}
        {reports.length === 0 && (
          <div className="space-y-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <svg
                      className="w-8 h-8 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      Q3 2024 Transparency Report
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-2">
                    September 2024
                  </p>
                  <p className="text-gray-700">
                    Quarterly report showing program disbursements, beneficiary numbers, and financial transparency.
                  </p>
                </div>
                <div className="md:ml-6">
                  <button
                    disabled
                    className="inline-flex items-center px-6 py-3 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Transparency Commitment */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Commitment to Transparency
          </h2>
          <p className="text-gray-700 mb-4">
            We believe in complete transparency and accountability. All program disbursements, 
            beneficiary numbers, and financial activities are documented and published quarterly 
            for public review.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Quarterly financial reports with detailed breakdowns</li>
            <li>Program impact metrics and beneficiary statistics</li>
            <li>Complete transparency in all expenditures</li>
            <li>Public access to all reports and documentation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

