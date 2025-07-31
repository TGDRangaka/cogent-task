import Image from 'next/image'
import React from 'react'
import { Badge, Button } from '../ui'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import BlurText from '../ui/blurText'
import Link from 'next/link'

export default function HeroComponent() {
  return (
    <section className="relative overflow-hidden min-h-screen lg:min-h-[90vh]">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-20 z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center">
        {/* include background video here. it in public -> video1.mp4 */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="text-white space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <Badge className="bg-yellow-400 !text-black hover:bg-yellow-500 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 w-fit">
                EXCLUSIVE EVENT
              </Badge>
              <BlurText
                text="Saudi Arabia's"
                delay={150}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              />
              <BlurText
                text="Financial Crime"
                delay={250}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-yellow-400"
              />
              <BlurText
                text="Compliance Roundtable"
                delay={350}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8"
              />
              {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Saudi Arabia's
                <span className="block text-yellow-400">Financial Crime</span>
                <span className="block">Compliance Roundtable</span>
              </h1> */}
              <Image
                src="/napier-ai.png"
                alt="Napier AI Logo"
                width={200}
                height={100}
                className="rounded-sm shadow-lg"
              />

            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 lg:gap-6 text-sm lg:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <span>19 th February, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <span>HYATT REGENCY RIYADH OLAYA, RIYADH, KSA</span>
              </div>
              {/* <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                  <span>200+ Attendees</span>
                </div> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="#contact" className='cursor-pointer'>
                <Button
                  size="lg"
                  className="bg-yellow-400 flex !text-gray-800 items-center hover:bg-yellow-500 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-60"
                >
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto"
              >
                {/* include download for agenda image */}
                <a href="/agenda.png" download>
                  Download Agenda
                </a>
              </Button>
            </div>
          </div>

          {/* <div className="relative order-1 lg:order-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Event Highlights</h3>
                  <p className="text-sm sm:text-base text-blue-100">What you'll experience</p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-white/10 rounded-lg sm:rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-400">15+</div>
                    <div className="text-xs sm:text-sm text-blue-100">Expert Speakers</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/10 rounded-lg sm:rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-400">8</div>
                    <div className="text-xs sm:text-sm text-blue-100">Sessions</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/10 rounded-lg sm:rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-400">2</div>
                    <div className="text-xs sm:text-sm text-blue-100">Days</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/10 rounded-lg sm:rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-400">200+</div>
                    <div className="text-xs sm:text-sm text-blue-100">Professionals</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  )
}
