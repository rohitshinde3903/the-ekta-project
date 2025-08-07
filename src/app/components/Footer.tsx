import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaGlobe
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-cyan-50 via-white to-cyan-100 text-gray-800 py-16 border-t border-cyan-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Logo & Description */}
          <div>
            <Link href="/" className="text-2xl font-bold text-cyan-700 tracking-wide">
              The Ekta Project
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Empowering communities through sustainable development and innovative grassroots programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-700 hover:text-cyan-600 transition">About Us</Link></li>
              <li><Link href="/mission" className="text-gray-700 hover:text-cyan-600 transition">Our Mission</Link></li>
              <li><Link href="/impact" className="text-gray-700 hover:text-cyan-600 transition">Our Impact</Link></li>
              <li><Link href="/donate" className="text-gray-700 hover:text-cyan-600 transition">Donate</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-cyan-600 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-800 mb-4">Contact</h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <FaEnvelope className="inline mr-2 text-cyan-700" />
                <a href="mailto:theektaprojecct2023@gmail.com" className="hover:text-cyan-600 transition">
                  theektaprojecct2023@gmail.com
                </a>
              </p>
              <p>
                <FaInstagram className="inline mr-2 text-cyan-700" />
                <a
                  href="https://www.instagram.com/theektaproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 transition"
                >
                  @theektaproject
                </a>
              </p>
              <p>
                <FaLinkedinIn className="inline mr-2 text-cyan-700" />
                <a
                  href="https://www.linkedin.com/company/the-ekta-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 transition"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Stones Web Attribution */}
        <div className="mt-12 pt-10 border-t border-cyan-200 text-sm text-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600 font-medium">
              <FaCode className="text-cyan-700" />
              <span className="text-sm md:text-base text-gray-700">Developed by Stones Web Services</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-600 text-center md:text-right space-y-1">
              <p>
                <FaEnvelope className="inline mr-1 text-cyan-700" />
                <a href="mailto:stoneswebservices@gmail.com" className="hover:text-cyan-600 transition">
                  stoneswebservices@gmail.com
                </a>
              </p>
              <p>
                <FaPhone className="inline mr-1 text-cyan-700" />
                <span>+91 7499273903</span> | <span>+91 8010165063</span>
              </p>
              <p>
                <FaMapMarkerAlt className="inline mr-1 text-cyan-700" />
                Chinchwad, Pune
              </p>
              <p>
                <FaGlobe className="inline mr-1 text-cyan-700" />
                <a
                  href="https://stonesweb.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600 transition"
                >
                  www.stonesweb.in
                </a>
              </p>
              <p className="italic text-cyan-700 font-medium">Lead Developer: Rohit Shinde</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-200 mt-8 pt-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} The Ekta Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
