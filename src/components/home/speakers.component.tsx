"use client";

import React, { useState } from 'react'
import { Badge, Card, CardContent } from '../ui'
import Image from 'next/image';
import TiltedCard from '../ui/titledCard';

export default function SpeakersComponent() {
    const [selected, setSelected] = useState<null | number>(null);
    const speakers = [
        {
            img: "/speakers/sp1.jpg",
            name: "Faisal Alghefari",
            title: "Chief Compliance Officer",
            description: "Banking Sector, KSA",
            details: "Faisal AlGhefari is a distinguished Chief Compliance Officer with more than 16 years of experience in Compliance, AML, Enforcement, and Internal Controls at Saudi and international Banks. He excels in Regulatory Frameworks, Compliance, and Governance, and has played a key role in various digital transformation projects within the compliance domain. His certifications in Compliance, Governance, and AML underscore his extensive expertise."
        },
        {
            img: "/speakers/sp2.jpg",
            name: "Gordon Berrie",
            title: "MENA Regional Head",
            description: "",
            details: "Gordon Berrie is Napier AI's Head of Middle East Region. Previously Head of Professional Services & Customer Success MENA at Fenergo and Director at PwC Middle East, Gordon has 20 years of experience leading agile teams in various industries,and specialises in Client Lifecycle Management (Onboarding, KYC, AML, Offboarding), Software development and delivery, Program and project management in large scope complex initiatives"
        },
        {
            img: "/speakers/sp3.jpg",
            name: "Nour Jamil",
            title: "Senior Solutions Consultant",
            description: "",
            details: "Nour Jamil is a Senior Client Solutions Consultant at Napier, managing the MENA region. With extensive experience in AML, financial crime compliance, and regulatory technology, he specialises in helping financial institutions enhance their compliance frameworks through AI-driven solutions. Nour has worked closely with banks, fintechs, and regulators to implement innovative risk-based approaches, optimise transaction monitoring, and streamline client screening processes."
        },
        {
            img: "/speakers/sp4.jpg",
            name: "Abdulrahman Aladel",
            title: "SVP - Head of Anti-Financial Crimes Compliance",
            description: "Riyad Bank",
            details: "A seasoned Financial Crime Compliance Professional with over 18 years of experience in the banking and financial services industry. Currently serves as Head of Anti-Financial Crime Compliance at Riyad Bank. Previously held the position of Chief Compliance Officer at American Express for over 9 years. Extensive experience as CCO, MLRO, and in other senior Compliance and AML roles at multinational and local institutions and banks. Holds a bachelor’s degree in business administration and has completed post-graduate studies at INSEAD"
        },
        {
            img: "/speakers/sp5.jpg",
            name: "Mishal Al Ismail",
            title: "Head of Compliance & AML",
            description: "Albilad Capital",
            details: "Mishal Al Ismail currently holds the esteemed position of Chairman of the Governance Capital Market Institution Committee while serving as the Head of Compliance & AML at Albilad Capital. Boasting an impressive professional tenure exceeding 20 years, Mr. Al Ismail has demonstrated exemplary leadership in both Finance and Administration. His educational foundation is characterized by academic distinction, culminating in a bachelor's degree in Business Administration (Finance Management) from King Saud University. Complementing this, he earned a postgraduate diploma in Marketing Management, equivalent to a master's degree, from the Institute of Public Administration. Further augmenting his credentials, he pursued advanced studies at Henley Business School, University of Reading, UK. Mishal Al Ismail's commitment to excellence is underscored by his acquisition of Professional Diplomas in regulation, compliance, Anti-Money Laundering, and Corporate Governance. Notably, he has obtained all requisite professional certificates from the CMA, attesting to his unwavering dedication to upholding the highest standards within the realm of his professional pursuits."
        },
        {
            img: "/speakers/sp6.jpg",
            name: "Abdulaziz Alanezi",
            title: "Head of Compliance & AML",
            description: "Leading International Bank in KSA",
            details: "Abdulaziz AlAnezi is a seasoned compliance and anti-money laundering (AML) leader with over 12 years of experience in the banking and financial services sector in both local and international banks. Currently serving as the Head of Compliance and AML Department in the banking sector AlAnezi has spearheaded the development and implementation of comprehensive compliance programs, ensuring adherence to regulatory requirements and fostering a culture of ethical behavior across the organization.Abdulaziz holds a strong academic foundation with a bachelor’s degree in Economics from Leeds Becket University and numerous professional certifications in compliance, risk management, and financial analysis."
        },
        {
            img: "/speakers/sp7.jpg",
            name: "Manar Saif Al-Assaf",
            title: "Head of Compliance & AML",
            description: "Banking Sector in KSA",
            details: "Manar is holding a bachelor’s degree in accounting with professional license in compliance and AML from CMA an ACAMS and Certificates in Governance GRCP & GCRCA. along with leadership programs from Harvard, INSEAD and IESCE. With work experience of around 19 years in controlling functions “Internal Audit, Compliance& AML”. The diverse experience and practical and scientific skills made her a great example for women of her generation in taking leadership roles in the field of GRC. Manar was nominated as one of Women Leaders for the kingdom vision 2030 and G20/B20 (Integrity and Compliance) Task Force Member 2020. during 2023 she was appointed by Central Bank as Chairman of Anti Financial Crime and Money Laundering Committee. Currently she is holding a position as Head of Compliance, Emirates NBD."
        },
        {
            img: "/speakers/sp8.jpg",
            name: "Khushnood Khan",
            title: "Financial Crime Leader",
            description: "Deloitte Middle East",
            details: "Khush is the Financial Crime Leader for Deloitte Middle East and focuses on supporting financial institutions to be regulatory compliant. Khush has worked extensively with banks and regulators across the GCC and Europe for over 20 years. His areas of expertise include FCC Strategy, Large scale Transformation programs and Regulatory Reviews. Khush developed and leads Deloitte’s Fincrime Technology Lab."
        }
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-3 sm:mb-4 text-xs sm:text-sm">
                        EXPERT SPEAKERS
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Learn from Industry Leaders
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Connect with renowned experts and thought leaders shaping the future of financial compliance
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {speakers.map((speaker, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50 cursor-pointer"
                            onClick={() => setSelected(index)}
                        >
                            <CardContent className="p-6 text-center">
                                <div className="aspect-square w-40 h-40 mx-auto mb-4 flex items-center justify-center transition-transform duration-300">
                                    {/* <Image
                                        src={speaker.img}
                                        alt={speaker.name}
                                        width={120}
                                        height={120}
                                        className="rounded-full object-cover"
                                    /> */}

                                    <TiltedCard
                                        imageSrc={speaker.img}
                                        altText={speaker.name}
                                        // captionText={speaker.name}
                                        containerHeight="160px"
                                        containerWidth="160px"
                                        imageHeight="160px"
                                        imageWidth="160px"
                                        rotateAmplitude={12}
                                        scaleOnHover={1.2}
                                        showMobileWarning={false}
                                        showTooltip={false}
                                        displayOverlayContent={true}
                                    />
                                </div>
                                <h3 className="font-bold text-xl text-gray-900 mb-2">{speaker.name}</h3>
                                <p className="text-gray-700 font-semibold mb-1">{speaker.title}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            {selected !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-fadeInUp">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold"
                            onClick={() => setSelected(null)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col items-center">
                            <Image
                                src={speakers[selected].img}
                                alt={speakers[selected].name}
                                width={120}
                                height={120}
                                className="rounded-full object-cover mb-4"
                            />
                            <h3 className="font-bold text-2xl text-gray-900 mb-1">{speakers[selected].name}</h3>
                            <p className="text-blue-700 font-semibold mb-1">{speakers[selected].title}</p>
                            {speakers[selected].description && (
                                <p className="text-gray-600 mb-2 text-center">{speakers[selected].description}</p>
                            )}
                            {speakers[selected].details && (
                                <p className="text-gray-500 text-sm text-center">{speakers[selected].details}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
