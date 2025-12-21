import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hon. Linda - Member, Rivers State House of Assembly | Okrika Constituency",
  description: "Official portfolio of Hon. Linda, Member of Rivers State House of Assembly, representing Okrika Constituency. Explore programs, initiatives, and community engagements including Tech Empowerment and Social Intervention Fund.",
  keywords: ["Rivers State", "Okrika", "House of Assembly", "Tech Empowerment", "Social Intervention", "Community Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Hon. Linda Somiari-Stewart</h3>
                <p className="text-gray-400">
                  Member, Rivers State House of Assembly
                  <br />
                  Representing Okrika Constituency
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/programs" className="hover:text-white">Programs</a></li>
                  <li><a href="/blog" className="hover:text-white">Blog</a></li>
                  <li><a href="/reports" className="hover:text-white">Reports</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Programs</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Tech Empowerment Program</li>
                  <li>Social Intervention Fund</li>
                  <li>Community Outreach</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Hon. Linda. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
