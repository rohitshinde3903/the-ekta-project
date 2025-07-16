import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo-white.png"
                alt="The Ekta Project Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">The Ekta Project</span>
            </Link>
            <p className="text-gray-400">
              Empowering communities through sustainable development initiatives.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white transition">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-white transition">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>123 Community Street</p>
              <p>Mumbai, India 400001</p>
              <p className="mt-2">info.ektaproject.org</p>
              <p>+91 98765 43210</p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                {/* Facebook icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                {/* Twitter icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                {/* Instagram icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                {/* LinkedIn icon */}
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-gray-800 rounded-l focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-primary px-4 py-2 rounded-r hover:bg-primary-dark transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} The Ekta Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}