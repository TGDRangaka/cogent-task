import React from 'react'
import { Badge } from '../ui'
import Image from 'next/image'
import LightRays from '../ui/lightRays'


export default function AgendaComponent() {
    return (
        <section className="py-12 sm:py-16 relative lg:py-20 bg-gradient-to-tl from-gray-900 to-blue-900">
            <div className="absolute h-full inset-0 bg-[url('/agenda-bg.jpg')] bg-cover bg-center opacity-80">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={1}
                    rayLength={1.5}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.0}
                    className="custom-rays"
                />
            </div>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
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
                <div className="flex justify-center items-center animate-on-scroll">
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
