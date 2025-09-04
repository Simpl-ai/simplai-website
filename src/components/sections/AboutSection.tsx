import Card from "../ui/Card";
import Image from "next/image";
import { FaUserCircle } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <>
      <section className="scroll-mt-20 bg-gradient-to-r from-indigo-900 to-gray-100 text-white py-20" id="vision">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              About SIMPL AI
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We&#39;re revolutionizing how organizations interact with their business data through
              private AI technology that never compromises your security.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              To make business intelligence and reporting as simple as having a conversation.
              We believe that every team member, regardless of technical expertise, should be
              able to access and understand their organization&#39;s data instantly.
            </p>
            <p className="text-lg text-gray-700">
              Our private AI technology ensures that your sensitive business data remains secure
              while providing unprecedented access to insights and reporting capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-indigo-500 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To democratize data access within organizations by removing technical barriers
                and enabling natural language interactions with business systems, all while
                maintaining the highest standards of security and privacy.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-indigo-500 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Privacy-first approach
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Simplicity in complexity
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Innovation with security
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Empowering every user
                </li>
              </ul>
            </div>

          </div>
          {/* People Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {/* Greg, CEO Card */}
            <Card
              icon={
                <Image
                  src="/images/team/greg.jpg"
                  alt="Greg, CEO"
                  fill
                  className="w-8 h-8 rounded-full"
                  unoptimized
                />
              }
              title="Greg, CEO"
              subtitle="Visionary leader with a passion for AI and data-driven decision making."
              items={[
                '• 10+ years in tech industry',
                '• Expert in AI and machine learning',
                '• Committed to ethical AI practices'
              ]}
              accentColor="bg-indigo-600 text-indigo-400"
              titleColor=" text-indigo-400"
              subTitleColor=" text-indigo-300"
              link={{ href: '/team/greg', label: 'View Profile →', color: 'text-indigo-400 hover:text-indigo-300' }}
            />
            {/* Ryan, Designer Card */}
            <Card
              icon={<FaUserCircle className="w-8 h-8 text-white" />}
              title="Ryan, Design"
              subtitle="Creative designer with a focus on user experience and interface design."
              items={[
                '• 5+ years in UX/UI design',
                '• Passionate about user-centered design',
                '• Experienced in design thinking methodologies'
              ]}
              accentColor="bg-blue-600 text-blue-400"
              titleColor="text-blue-400"
              subTitleColor="text-blue-300"
              link={{ href: '/team/ryan', label: 'View Profile →', color: 'text-indigo-400 hover:text-indigo-300' }}
            />
            {/* Clancey, Technical Card */}
            <Card
              icon={
                <Image
                  src="/images/team/clancey.jpg"
                  alt="Clancey, Technical"
                  fill
                  className="w-8 h-8 rounded-full"
                  unoptimized
                />
              }
              title="Clancey, Technical"
              subtitle="Full-stack developer with expertise in building scalable web applications."
              items={[
                '• 7+ years in software development',
                '• Skilled in Ruby, JavaScript, and Python',
                '• Advocate for quality code and best practices'
              ]}
              accentColor="bg-pink-600 text-pink-400"
              titleColor="text-pink-400"
              subTitleColor="text-pink-300"
              link={{ href: '/team/clancey', label: 'View Profile →', color: 'text-indigo-400 hover:text-indigo-300' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
