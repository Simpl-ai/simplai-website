'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapLocation, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { email, newsletter });
    // Reset form
    setEmail('');
    setNewsletter(false);
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/simplai-website/images/backgrounds/footer.avif"
          alt="SIMPL AI Footer Background"
          fill
          className="object-cover w-full h-full opacity-40"
          unoptimized
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-300">Contact us:</h3>
            <div className="space-y-2 text-gray-400">
              <p><FaPhone className="inline mr-2" />780-246-0602</p>
              <p><FaEnvelope className="inline mr-2" />
                <Link
                  href="mailto:contact@simplai.ca?subject=Let's%20Connect%20%26%20Make%20it%20Simpl"
                  className="underline hover:text-white transition-colors duration-200"
                >
                  contact@simplai.ca
                </Link>
              </p>
              <p><FaMapLocation className="inline mr-2" /> 10303 Jasper Ave, Edmonton, AB, Canada</p>
            </div>
          </div>

          {/* Navigation Links */}

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <FaEnvelope className="inline mr-2" />Email<span className="text-indigo-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 text-indigo-500 bg-gray-800 border-gray-600 rounded focus:ring-red-500"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-300 leading-tight">
                  Yes, subscribe me to your newsletter.<span className="text-indigo-500 ml-1">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors duration-200 font-semibold"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Social Media & Copyright */}
          <div>
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-300 mb-4">Follow Us</h4>
                <Link
                  href="https://x.com/SimplAI_Connect"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-block hover:opacity-70 transition-opacity duration-200"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-6 h-6 text-white" />
                </Link>
              </div>

              <div className="text-sm text-gray-400">
                <p>&copy; 2025 by Simpl AI</p>
                <p>All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-center">
            If you would like to discuss partnering with Simpl Ai through investment or other opportunities, please reach out.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
