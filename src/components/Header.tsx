'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

type HeaderProps = {
  onOpenSurvey: () => void;
  onOpenInvestment: () => void;
  onOpenGetStarted: () => void;
};

const Header: React.FC<HeaderProps> = ({ onOpenSurvey, onOpenInvestment, onOpenGetStarted }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation: { name: string; href?: string }[] = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#vision' },
    { name: 'SIMPL Survey' }, // no href
    { name: 'Investment' }, // no href
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#home" className="flex items-center space-x-3">
              <Image
                src="/simplai-website/images/branding/simplai_logo.svg"
                alt="SIMPL AI"
                width={120}
                height={80}
                className="h-12 w-auto"
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) =>
              item.name === 'SIMPL Survey' ? (
                <button
                  key={item.name}
                  onClick={onOpenSurvey}
                  className="text-gray-300 hover:text-white transition-colors duration-200 border-t-4 border-transparent hover:border-white px-2 py-1 bg-transparent"
                  type="button"
                >
                  {item.name}
                </button>
              ) : item.name === 'Investment' ? (
                <button
                  key={item.name}
                  onClick={onOpenInvestment}
                  className="text-gray-300 hover:text-white transition-colors duration-200 border-t-4 border-transparent hover:border-white px-2 py-1 bg-transparent"
                  type="button"
                >
                  {item.name}
                </button>
              ) : item.href ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 border-t-4 border-transparent hover:border-white px-2 py-1"
                >
                  {item.name}
                </Link>
              ) : null
            )}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenGetStarted}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors duration-200 font-semibold"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) =>
              item.name === 'SIMPL Survey' ? (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenSurvey();
                  }}
                  className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-left bg-transparent"
                  type="button"
                >
                  {item.name}
                </button>
              ) : item.name === 'Investment' ? (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenInvestment();
                  }}
                  className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-left bg-transparent"
                  type="button"
                >
                  {item.name}
                </button>
              ) : item.href ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : null
            )}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors duration-200 font-semibold text-center"
              type="button"
            >
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
