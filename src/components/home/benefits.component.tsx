import React from 'react'
import { Badge, Card, CardContent } from '../ui'
import { Award, CheckCircle, Globe, Shield, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image';

export default function BenefitsComponent() {
    const benefits = [
        {
            icon: Shield,
            img: '/benefits-icons/6.svg',
            title: "Regulatory innovations",
            description:
                "Discuss the latest regulatory changes and technology advancements transforming compliance into a business advantage.",
        },
        {
            icon: TrendingUp,
            img: '/benefits-icons/4.svg',
            title: "Trends from the Napier AI/ AML Index",
            description:
                "Deep dive into the Napier AI / AML Index methodology, local trends influencing AI adoption, and opportunities for Saudi institutions.",
        },
        {
            icon: Award,
            img: '/benefits-icons/2.svg',
            title: "Vision 2030 Readiness",
            description:
                "With just 5 years to go, uncover how financial institutions can modernise AML systems to align with the nation’s Vision 2030 goals.",
        },
        {
            icon: Globe,
            img: '/benefits-icons/8.svg',
            title: "Real-world case studies",
            description:
                "Hear from industry experts on how global financial institutions use multi-configuration, sandbox environments and alternative scoring for dynamic risk assessments.",
        },
        {
            icon: Users,
            img: '/benefits-icons/7.svg',
            title: "Future-Proofing Your AML Strategy",
            description:
                "Learn how to prepare your organisation for the future of AML – perpetual client risk assessment. Use dynamic segmentation to minimise false positives and achieve the highest level of compliance efficiency.",
        },
        {
            icon: CheckCircle,
            img: '/benefits-icons/5.svg',
            title: "Reducing compliance costs",
            description:
                "Discover how implementing AI into your AML systems can help save up to $0.36billion in compliance costs.",
        },
    ];
    
    return (
        <section className="py-12 relative sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-blue-900">
            {/* include a background image */}
            <div className="absolute inset-0 bg-[url('/about.png')] bg-cover bg-center opacity-10"></div>

            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <Badge className="bg-yellow-400 !text-black hover:bg-yellow-500 mb-3 sm:mb-4 text-xs sm:text-sm">
                        KEY BENEFITS
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                        Why Attend This Roundtable?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto px-4">
                        Discover the transformative benefits of joining Saudi Arabia&apos;s premier financial compliance event
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <Card
                            key={index}
                            className="bg-white/10 backdrop-blur-lg animate-fade-in-up border-white/20 hover:bg-white/20 transition-all duration-300 group"
                        >
                            <CardContent className="p-8 text-center">
                                <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float-gentle">
                                    {/* <benefit.icon className="w-8 h-8 text-black" /> */}
                                    <Image
                                        src={benefit.img}
                                        alt="Benefits Icon"
                                        width={40}
                                        height={40}
                                        className="size-12 group-hover:animate-bounce"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
