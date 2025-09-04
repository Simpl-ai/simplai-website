import Link from 'next/link';
import { useEffect } from 'react';
import { HiX } from 'react-icons/hi';

type InvestmentOverlayProps = {
    open: boolean;
    onClose: () => void;
    className?: string;
};

export default function InvestmentOverlay({ open, onClose, className }: InvestmentOverlayProps) {
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
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                                Investment Opportunities
                            </h1>
                            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                                Partner with SIMPL AI and be part of the future of business intelligence.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Invest in SIMPL AI?</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                The business intelligence market is rapidly evolving, and organizations are seeking
                                solutions that provide immediate value without compromising data security. SIMPL AI
                                addresses this critical need with our revolutionary private AI technology.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-500 mb-3">Market Opportunity</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Growing demand for AI-powered analytics</li>
                                        <li>• Increasing data privacy regulations</li>
                                        <li>• Need for accessible business intelligence</li>
                                        <li>• Large addressable market</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-500 mb-3">Competitive Advantages</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Private AI technology</li>
                                        <li>• No data extraction required</li>
                                        <li>• Natural language interface</li>
                                        <li>• Unlimited reporting capabilities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-500 text-white rounded-lg p-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">
                                Interested in Partnership or Investment?
                            </h2>
                            <p className="text-lg mb-6 opacity-90">
                                If you would like to discuss partnering with Simpl AI through investment
                                or other opportunities, please reach out.
                            </p>
                            <div className="space-y-4">
                                <p className="text-lg">
                                    <strong>Contact:</strong> 780-246-0602
                                </p>
                                <p className="text-lg">
                                    <strong>Email:</strong>{' '}
                                    <Link
                                        href="mailto:contact@simplai.ca?subject=Investment%20Opportunity"
                                        className="underline hover:opacity-80"
                                    >
                                        contact@simplai.ca
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
