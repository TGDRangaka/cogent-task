
import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui'
import { Globe, Shield, TrendingUp } from 'lucide-react'

export default function OverviewComponent() {

    return (
        // Event Overview - Enhanced with scroll animations
        <section className="py-12 sm:py-16 lg:py-20 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    <div className="relative order-2 lg:order-1 animate-on-scroll">
                        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl opacity-20 blur-xl animate-pulse-slow"></div>
                        <Image
                            src="/about.png"
                            alt="Financial compliance conference"
                            width={600}
                            height={500}
                            className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-700 hover:shadow-3xl"
                        />
                    </div>

                    <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 animate-on-scroll animation-delay-300">
                        <div className="space-y-3 sm:space-y-4">
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm hover:scale-105 transition-all duration-300">
                                EVENT OVERVIEW
                            </Badge>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 animate-gradient-text">
                                Shaping the Future of
                                <span className="block text-blue-600 animate-text-shimmer">Financial Compliance</span>
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                                As a global leader in financial innovation and compliance, the Kingdom of Saudi Arabia continues to set benchmarks in Anti-Money Laundering (AML) efficiency and effectiveness. Despite these advancements and spending <span className="font-semibold text-blue-700">$1.10 billion</span> as cost of compliance, the country still lost <span className="font-semibold text-blue-700">5.74% of its gross domestic product (GDP)</span> to money laundering in 2023.<br /><br />
                                Vision 2030 and the Saudi Central Bank's efforts embrace an innovation-centric, risk-based approach to anti-money laundering. This exclusive roundtable brings together compliance leaders and industry experts to discuss how financial institutions can embrace next-generation AML technologies with a compliance-first approach. Delve into cutting-edge strategies, regulatory updates, and technology trends shaping the future of financial crime compliance in Saudi Arabia.
                            </p>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            {[
                                {
                                    icon: Shield,
                                    title: "Vision 2030 & Innovation",
                                    desc: "Explore how Vision 2030 and the Saudi Central Bank are driving an innovation-centric, risk-based approach to AML.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "$1.10 Billion Compliance Spend",
                                    desc: "Understand the impact and challenges of Saudi Arabia's $1.10B annual compliance cost and the 5.74% GDP lost to money laundering in 2023.",
                                },
                                {
                                    icon: Globe,
                                    title: "Next-Gen AML Technologies",
                                    desc: "Delve into next-generation AML technologies, regulatory updates, and strategies for a compliance-first future.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start gap-3 sm:gap-4 hover:transform hover:translate-x-2 transition-all duration-300 animate-slide-in-left`}
                                    style={{ animationDelay: `${600 + index * 200}ms` }}
                                >
                                    <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0 hover:bg-blue-200 hover:scale-110 transition-all duration-300">
                                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base hover:text-blue-600 transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
