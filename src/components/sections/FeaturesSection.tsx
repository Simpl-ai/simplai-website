import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineCloudServer } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";

import Card from "../ui/Card"

export default function FeaturesSection() {
    return (
        <>
            <section className="scroll-mt-20 bg-black py-20" id="features">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-50 mb-8">
                            Our solution makes getting data from your system <span className="text-indigo-500 font-normal tracking-wider">SIMPL</span>
                        </h2>
                        <h3 className="text-2xl text-indigo-500 font-bold mb-8">
                            And we do it without ever touching your data.
                        </h3>
                        <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
                            Use <span className="font-semibold">regular normal language</span> to get information from your system.
                        </p>
                        <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
                            Get your information without waiting, and do it unlimited reporting.
                        </p>
                        <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                            Make your regulatory and <span className="font-semibold">compliance reporting</span> <em>easy</em>.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        {/* Natural Language Card */}
                        <Card
                            icon={<FaBarsStaggered className="w-8 h-8 text-white" />}
                            title="Natural Language"
                            subtitle="Modernize the Way Your Team Interacts with Your Data"
                            items={[
                                'Using natural language to query your data simplifies operations and boosts the efficiency of your team.',
                                'This leaves them more time to focus on data-driven innovation instead of reporting frustration.',
                            ]}
                            accentColor="bg-red-500 text-red-500"
                            titleColor="text-red-500"
                            subTitleColor="text-lg font-semibold text-gray-100 mb-4"
                            link={{ href: '/get-started', label: 'Learn More →', color: 'text-blue-400 hover:text-blue-300' }}
                        />
                        {/* Enhance Capabilities Card */}
                        <Card
                            icon={<AiOutlineCloudServer className="w-12 h-12 text-white" />}
                            title="Enhance Your Capabilities"
                            subtitle="Give your Existing System New Capabilities and Use it Longer"
                            items={[
                                'Utilize our cutting-edge technology to modernize your data reporting and analytics effortlessly, empowering your current business system with real-time, actionable insights.',
                            ]}
                            accentColor="bg-red-500 text-red-500"
                            titleColor="text-red-500"
                            subTitleColor="text-lg font-semibold text-gray-100 mb-4"
                            link={{ href: '/get-started', label: 'Learn More →', color: 'text-blue-400 hover:text-blue-300' }}
                        />
                        {/* Compliance Card */}
                        <Card
                            icon={<RiTeamLine className="w-12 h-12 text-white" />}
                            title="Compliance & Regulatory"
                            subtitle="Boost Your Ability to Report on Corporate Objectives and Risks"
                            items={[
                                'Elevate your ability to report on one of the core data science capabilities with a user-friendly, natural language interface that accelerates data-driven decision-making and innovation.',
                            ]}
                            accentColor="bg-red-500 text-red-500"
                            titleColor="text-red-500"
                            subTitleColor="text-lg font-semibold text-gray-100 mb-4"
                            link={{ href: '/get-started', label: 'Learn More →', color: 'text-blue-400 hover:text-blue-300' }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}