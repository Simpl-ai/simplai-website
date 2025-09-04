import Link from 'next/link';
import { useEffect } from 'react';
import { HiX } from 'react-icons/hi';
import { FaEnvelope, FaPhone, FaMapLocation } from 'react-icons/fa6';

type GetStartedOverlayProps = {
    open: boolean;
    onClose: () => void;
    className?: string;
};

export default function GetStartedOverlay({ open, onClose, className }: GetStartedOverlayProps) {
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
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                            Get Started with SIMPL AI
                        </h1>
                        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                            Ready to revolutionize your data reporting? Let&#39;s make it SIMPL for your organization.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Our Team</h3>
                                <p className="text-gray-600 mb-6">
                                    Speak with our experts to understand how SIMPL AI can transform your business systems.
                                </p>
                                <Link
                                    href="mailto:contact@simplai.ca?subject=Let's%20Connect%20%26%20Make%20it%20Simpl"
                                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors duration-200 font-semibold inline-block"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn More</h3>
                                <p className="text-gray-600 mb-6">
                                    Explore our solutions and see how we can help modernize your data reporting.
                                </p>
                                <Link
                                    href="/#solutions"
                                    onClick={onClose}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors duration-200 font-semibold inline-block"
                                >
                                    View Solutions
                                </Link>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Contact</h2>
                            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                                <div className="text-left space-y-3">
                                    <p><FaPhone className="inline mr-2" /><strong>Phone:</strong> 780-246-0602</p>
                                    <p><FaEnvelope className="inline mr-2" /><strong>Email:</strong> <a href="mailto:contact@simplai.ca" className="text-indigo-500 hover:text-red-600">contact@simplai.ca</a></p>
                                    <p><FaMapLocation className="inline mr-2" /><strong>Address:</strong> 10303 Jasper Ave, Edmonton, AB, Canada</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
