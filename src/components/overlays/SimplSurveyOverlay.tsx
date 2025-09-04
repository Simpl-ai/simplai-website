'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiX } from 'react-icons/hi';

interface SimplSurveyOverlayProps {
  open: boolean;
  onClose: () => void;
  className?: string;
}

export default function SimplSurveyOverlay({ open, onClose, className }: SimplSurveyOverlayProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    dataVolume: '',
    currentTools: '',
    challenges: '',
    priorities: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);
  
  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Survey submitted:', formData);
    alert('Thank you for your submission! We will contact you soon.');
    onClose();
  };


  return (
    <>
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 ${className || ''}`} role='dialog' aria-modal='true'>
        <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh] px-6 py-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-indigo-500 text-2xl font-bold"
            aria-label="Close"
          >
            <HiX className="w-8 h-8" />
          </button>
          <div className="px-6 py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                Thank you for<br />taking our survey!
              </h1>
              <div className="mb-8">
                <p className="text-lg font-semibold text-indigo-500 mb-2">SIMPL Founder</p>
                <p className="text-xl font-bold text-gray-900 mb-4">Greg Pearson</p>
                <Image
                  src="/images/team/greg_pearson.avif"
                  alt="Greg Pearson"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-2"
                  unoptimized
                />
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                We just might have the solution that you and your team need in order to reach your data better,
                and to give your existing systems new life.
              </p>
              <p className="text-lg font-semibold text-indigo-500 max-w-3xl mx-auto">
                We need your help understanding what people really need.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select your role</option>
                      <option value="ceo">CEO/President</option>
                      <option value="cto">CTO/Technology Director</option>
                      <option value="data-analyst">Data Analyst</option>
                      <option value="business-analyst">Business Analyst</option>
                      <option value="manager">Manager</option>
                      <option value="director">Director</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Business Intelligence Needs */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Intelligence Needs</h2>
                <div className="space-y-6">
                  {/* ...fields for dataVolume, currentTools, challenges, priorities... */}
                  <div>
                    <label htmlFor="dataVolume" className="block text-sm font-medium text-gray-700 mb-2">
                      How much data does your organization typically analyze?
                    </label>
                    <select
                      id="dataVolume"
                      name="dataVolume"
                      value={formData.dataVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select data volume</option>
                      <option value="small">Small (&lt; 1GB)</option>
                      <option value="medium">Medium (1GB - 100GB)</option>
                      <option value="large">Large (100GB - 1TB)</option>
                      <option value="enterprise">Enterprise (&gt; 1TB)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="currentTools" className="block text-sm font-medium text-gray-700 mb-2">
                      What tools do you currently use for data analysis?
                    </label>
                    <textarea
                      id="currentTools"
                      name="currentTools"
                      value={formData.currentTools}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="e.g., Excel, Tableau, Power BI, SQL databases..."
                    />
                  </div>
                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                      What are your biggest data analysis challenges?
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Describe your main pain points..."
                    />
                  </div>
                  <div>
                    <label htmlFor="priorities" className="block text-sm font-medium text-gray-700 mb-2">
                      What are your top priorities for a new BI solution?
                    </label>
                    <textarea
                      id="priorities"
                      name="priorities"
                      value={formData.priorities}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="e.g., ease of use, data security, real-time insights..."
                    />
                  </div>
                </div>
              </div>
              {/* Implementation Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Implementation Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (&lt; 1 month)</option>
                      <option value="short">Short term (1-3 months)</option>
                      <option value="medium">Medium term (3-6 months)</option>
                      <option value="long">Long term (6+ months)</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range (Annual)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-plus">$500,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Any additional details you'd like to share about your needs or requirements..."
                />
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Submit Survey
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}