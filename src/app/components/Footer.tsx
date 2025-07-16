import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800 py-16 border-t border-green-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="text-2xl font-bold text-green-700 tracking-wide">
              The Ekta Project
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Empowering communities through sustainable development and innovative grassroots programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-700 hover:text-green-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-700 hover:text-green-600 transition">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-700 hover:text-green-600 transition">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-green-600 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-600 space-y-1">
              <p>123 Community Street</p>
              <p>Mumbai, India 400001</p>
              <p>Email: info@ektaproject.org</p>
              <p>Phone: +91 98765 43210</p>
            </address>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">Stay Connected</h3>
            <div className="flex space-x-4 mb-6 text-green-700">
              <a href="#" className="hover:text-green-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-green-500 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-green-500 transition">
                <FaLinkedinIn />
              </a>
            </div>

            <h4 className="text-sm font-semibold mb-2">Join our newsletter</h4>
            <form className="flex rounded overflow-hidden shadow-sm max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm text-gray-700 bg-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-green-200 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} The Ekta Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
