type SolutionSectionProps = {
  onOpenGetStarted: () => void;
};

import Image from 'next/image';

export default function SolutionSection({ onOpenGetStarted }: SolutionSectionProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="scroll-mt-20 bg-gradient-to-r from-gray-800 to-indigo-900 text-white py-20" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            Our <span className="text-indigo-500">SIMPL</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our private AI technology transforms your business systems without ever touching your data.
          </p>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Natural Language Querying
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Transform how your team interacts with data using everyday language. No more complex SQL queries
                or technical barriers - just ask questions naturally and get instant answers.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Ask questions in plain English
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Get instant, accurate responses
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  No technical expertise required
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 text-red-500">
                <svg viewBox="20.532 45.947 158.928 108.107" className="w-full h-full fill-current">
                  <path d="M82.935 75.852l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.828 4.828 0 0 0 0-8.768l-44.836-20.692a4.826 4.826 0 0 0-4.047 0L82.935 67.083a4.828 4.828 0 0 0 0 8.769zm46.86-19.759l33.312 15.374-33.312 15.374-33.312-15.374 33.312-15.374z" />
                  <path d="M172.608 95.616l-42.813 19.758-42.813-19.758a4.83 4.83 0 0 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" />
                  <path d="M172.608 124.149l-42.813 19.758-42.813-19.758a4.828 4.828 0 1 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Intelligent Data Processing</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-100 rounded-lg p-8 text-center order-2 lg:order-1">
              <div className="w-32 h-32 mx-auto mb-6 text-red-500">
                <svg viewBox="19.868 38.586 160.264 121.194" className="w-full h-full fill-current">
                  <path d="M149.73 83.547c-2.538-25.284-24.211-44.961-49.73-44.961S52.808 58.263 50.269 83.547c-17.67 3.837-30.401 19.54-30.401 37.674 0 21.261 17.297 38.559 38.559 38.559h83.146c21.261 0 38.559-17.297 38.559-38.559 0-18.135-12.732-33.838-30.402-37.674zm-8.157 64.423H58.427a26.755 26.755 0 0 1-16.198-5.482l21.237-21.114 13.181 13.19 36.505-35.875 8.081 8.047 6.076-30.357-30.353 6.177 8.281 8.243-28.512 28.025-13.236-13.239-28.56 28.399a26.646 26.646 0 0 1-3.252-12.763c0-13.887 10.85-25.598 24.701-26.661l5.452-.419v-5.488l-.003-.16C61.868 67.486 78.992 50.395 100 50.395c21.047 0 38.171 17.078 38.172 38.069l-.004 5.677 5.453.419c13.851 1.063 24.701 12.774 24.701 26.661 0 14.749-11.999 26.749-26.749 26.749z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cloud-Native Architecture</h3>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Secure & Private Processing
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Your data never leaves your systems. Our AI technology works alongside your existing
                infrastructure, ensuring maximum security and privacy compliance.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Zero data extraction or migration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Enterprise-grade security
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Full compliance support
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Unlimited Reporting
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Generate comprehensive reports instantly without worrying about processing limits or delays.
                Scale your reporting capabilities as your business grows.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Real-time report generation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  No usage limitations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Automated compliance reports
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 text-red-500">
                <svg viewBox="20.124 26.752 159.752 146.495" className="w-full h-full fill-current">
                  <path d="M117.275 125.299c8.267-5.705 13.161-14.963 13.161-25.039 0-16.782-13.653-30.435-30.435-30.435S69.566 83.478 69.566 100.26c0 10.076 4.892 19.333 13.159 25.039-17.083 6.994-28.462 23.834-28.462 42.343v5.605h91.474v-5.605c0-18.509-11.38-35.349-28.462-42.343zm-17.274-5.814c-10.6 0-19.225-8.624-19.225-19.225 0-10.6 8.625-19.224 19.225-19.224s19.225 8.624 19.225 19.224c0 10.601-8.625 19.225-19.225 19.225zm-34.074 42.552c2.713-16.546 17.215-28.921 34.074-28.921 16.857 0 31.36 12.375 34.072 28.921H65.927z" />
                  <path d="M100.001 62.03c9.726 0 17.639-7.913 17.639-17.639 0-9.726-7.913-17.639-17.639-17.639-9.727 0-17.64 7.913-17.64 17.639 0 9.726 7.912 17.639 17.64 17.639zm-6.429-17.639a6.435 6.435 0 0 1 6.429-6.428 6.435 6.435 0 0 1 6.428 6.428 6.435 6.435 0 0 1-6.428 6.429 6.437 6.437 0 0 1-6.429-6.429z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Team Collaboration</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/backgrounds/red_swirls.avif"
              alt="SIMPL AI Footer Background"
              fill
              className="object-cover w-full h-full opacity-40"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Data Reporting?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&#39;s discuss how SIMPL AI can revolutionize your business systems.
            </p>
            {/* Get Started Button */}

            <button
              onClick={onOpenGetStarted}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors duration-200 font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
