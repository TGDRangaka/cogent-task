import React from 'react'
import { Badge, Card, CardContent } from '../ui'
import Image from 'next/image'


export default function AgendaComponent() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-tl from-gray-900 to-blue-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <Badge className="bg-yellow-400 !text-black hover:bg-yellow-500 mb-3 sm:mb-4 text-xs sm:text-sm">
                        EVENT AGENDA
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                        One Day of Intensive Learning
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto px-4">
                        Comprehensive sessions covering the latest trends, technologies, and regulatory updates
                    </p>
                </div>

                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">DAY 1</div>
                                <div className="text-white">
                                    <div className="font-semibold">February 15, 2025</div>
                                    <div className="text-sm text-blue-100">Registration & Welcome</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { time: "08:00 - 09:00", title: "Registration & Breakfast", type: "networking" },
                                    { time: "09:00 - 09:30", title: "Welcome Remarks and Opening", type: "opening" },
                                    { time: "09:30 - 10:30", title: "Keynote: Future of Financial Crime Prevention", type: "keynote" },
                                    { time: "10:30 - 11:00", title: "Networking Break", type: "break" },
                                    { time: "11:00 - 12:00", title: "Panel: AI in AML Compliance", type: "panel" },
                                    { time: "12:00 - 13:00", title: "Lunch & Networking", type: "networking" },
                                ].map((session, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium min-w-fit">
                                            {session.time}
                                        </div>
                                        <div className="text-white">
                                            <div className="font-medium">{session.title}</div>
                                            <Badge variant="outline" className="border-yellow-400 text-yellow-400 text-xs mt-1">
                                                {session.type}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">DAY 2</div>
                                <div className="text-white">
                                    <div className="font-semibold">February 16, 2025</div>
                                    <div className="text-sm text-blue-100">Deep Dive Sessions</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { time: "08:30 - 09:00", title: "Registration & Coffee", type: "networking" },
                                    { time: "09:00 - 10:00", title: "Regulatory Updates & Compliance", type: "presentation" },
                                    { time: "10:00 - 11:00", title: "Case Studies: Implementation Success", type: "case-study" },
                                    { time: "11:00 - 11:30", title: "Networking Break", type: "break" },
                                    { time: "11:30 - 12:30", title: "Workshop: Risk Assessment Tools", type: "workshop" },
                                    { time: "12:30 - 13:30", title: "Closing Remarks & Next Steps", type: "closing" },
                                ].map((session, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium min-w-fit">
                                            {session.time}
                                        </div>
                                        <div className="text-white">
                                            <div className="font-medium">{session.title}</div>
                                            <Badge variant="outline" className="border-yellow-400 text-yellow-400 text-xs mt-1">
                                                {session.type}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div> */}

                <div className="flex justify-center items-center">
                    <Image
                        src="/agenda.png"
                        alt="Event Agenda"
                        width={1200}
                        height={1200}
                        className="mt-8 w-1/2"
                    />
                </div>

            </div>
        </section>
    )
}
