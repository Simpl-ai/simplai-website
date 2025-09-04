import Link from 'next/link';
import Card from '../ui/Card';
import { FaCogs, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa'; // FontAwesome

export default function ServicesSection() {
  return (
    <>
      <section className="scroll-mt-20 bg-black py-20" id="services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-8">
              Our Services
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Service Information
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {/* Implementation Card */}
            <Card
              icon={<FaCogs className="w-8 h-8 text-white" />}
              title="Implementation"
              subtitle="Full implementation of SIMPL AI into your existing business systems with zero disruption to your current operations."
              items={[
                '• System integration assessment',
                '• Custom deployment planning',
                '• Data security validation',
                '• Performance optimization',
              ]}
              accentColor="bg-indigo-600"
              titleColor=" text-indigo-400"
              subTitleColor=" text-indigo-300"
              link={{ href: '/get-started', label: 'Learn More →', color: 'text-indigo-400 hover:text-indigo-300' }}
            />

            {/* Training & Support Card */}
            <Card
              icon={<FaChalkboardTeacher className="w-8 h-8 text-white" />}
              title="Training & Support"
              subtitle="Comprehensive training programs to ensure your team can maximize the benefits of natural language data querying."
              items={[
                '• User training workshops',
                '• Administrative training',
                '• 24/7 technical support',
                '• Regular system updates',
              ]}
              accentColor="bg-blue-600 text-blue-400"
              titleColor="text-blue-400"
              subTitleColor="text-blue-300"
              link={{ href: '/get-started', label: 'Learn More →', color: 'text-blue-400 hover:text-blue-300' }}
            />

            {/* Consulting Card */}
            <Card
              icon={<FaUserTie className="w-8 h-8 text-white" />}
              title="Consulting"
              subtitle="Strategic consulting to help you identify the best opportunities for AI-powered reporting within your organization."
              items={[
                '• Business process analysis',
                '• ROI assessment',
                '• Custom solution design',
                '• Compliance guidance',
              ]}
              accentColor="bg-pink-600 text-pink-400"
              titleColor="text-pink-400"
              subTitleColor="text-pink-300"
              link={{ href: '/get-started', label: 'Learn More →', color: 'text-pink-400 hover:text-pink-300' }}
            />
          </div>

          {/* ...rest of your section... */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-red-500 mb-3">Expert Team</h4>
                <p className="text-gray-700">
                  Our team of AI specialists and business analysts ensure seamless integration
                  and maximum value from your investment.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-red-500 mb-3">Proven Results</h4>
                <p className="text-gray-700">
                  Track record of successful implementations across various industries and
                  business systems.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-red-500 mb-3">Ongoing Support</h4>
                <p className="text-gray-700">
                  Continuous support and optimization to ensure your systems evolve with
                  your business needs.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-red-500 mb-3">Security First</h4>
                <p className="text-gray-700">
                  All services designed with privacy and security as the foundation, ensuring
                  your data remains protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
