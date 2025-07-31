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
                <div className="flex justify-center items-center">
                    <Image
                        src="/agenda.png"
                        alt="Event Agenda"
                        width={1200}
                        height={1200}
                        className="mt-8 w-full md:w-1/2"
                    />
                </div>

            </div>
        </section>
    )
}
