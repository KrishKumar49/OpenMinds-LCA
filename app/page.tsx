"use client"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card-homepage"
import { Badge } from "@/components/ui/badge-home"
import { Target, User, Recycle, Zap, Globe, ArrowRight, CheckCircle, BarChart3, Shield, Users } from "lucide-react"
import Link from "next/link"
import lca from "../public/lca design.jpg"
import logo from "../public/WhatsApp Image 2025-09-18 at 23.40.23_65c59c7b.jpg"
import Header from "@/components/header"

// Import Google Fonts
import { Cinzel, Oswald, Didact_Gothic, Roboto_Mono, Merriweather } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
})

const didactGothic = Didact_Gothic({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function HomePage() {
  const [hoveredMode, setHoveredMode] = useState<string | null>(null)

  const scrollToAssessmentMode = () => {
    const element = document.getElementById('assessment-mode-section')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        <section className="relative py-8 lg:py-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-slate-50 to-blue-50"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge 
                variant="secondary" 
                className={`mb-6 px-6 py-3 text-sm font-semibold bg-green-100 text-green-800 border-green-200 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${oswald.className}`}
              >
                Leading the Future of LCA Software
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
                <span className="text-slate-900">Professional</span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  LCA Assessment
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
                OpenMines is a professional Life Cycle Assessment (LCA) tool. Reliable, high-performance,
                modular tool for sustainability assessment & life cycle modelling. Open Source and customizable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg bg-green-600 hover:bg-green-700 text-white"
                  onClick={scrollToAssessmentMode}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

    <section className="py-10 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 text-slate-800 ${cinzel.className}`}>
                What is LCA?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Main Definition Card */}
              <div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 p-5 lg:p-6 mb-6 border border-slate-200/50">
                {/* Text Content First */}
                <div className="text-center mb-6">
                  <p className={`text-base lg:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto text-justify ${merriweather.className}`}>
                    <span className="font-bold text-green-700">Life Cycle Assessment (LCA)</span> evaluates a product's entire journey from raw material extraction and manufacturing to use, recycling, or disposal. It measures overall environmental impact, including energy use, emissions, water consumption, waste, and effects on ecosystems and human health.
                  </p>
                </div>
                
                {/* LCA Diagram Below */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 lg:p-5 border border-slate-200/50">
                    <div className="text-center mb-4">
                      <h3 className={`text-lg lg:text-xl font-bold text-slate-800 mb-2 ${oswald.className}`}>
                        LCA Process Flow
                      </h3>
                      <div className="w-10 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="relative max-w-2xl mx-auto">
                      <div className="bg-white rounded-lg shadow-md shadow-slate-300/50 border border-slate-200 p-3 lg:p-4">
                        <Image 
                          src={lca} 
                          alt="LCA Process Diagram showing the complete lifecycle assessment flow" 
                          className="w-full h-auto object-contain rounded-md"
                          width={500}
                          height={375}
                          priority
                        />
                      </div>
                      
                      {/* Professional Badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full p-1.5 shadow-md shadow-green-500/30">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      
                      {/* Source Attribution */}
                      <div className="mt-2 text-center">
                        <p className="text-xs text-slate-500 italic">
                          Professional LCA methodology framework
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LCA Stages Flow */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 mt-8">
                {[
                  {
                    icon: <img src="https://img.icons8.com/?size=70&id=t3YbDQQYUcLo&format=png&color=000000" alt="raw material" className="w-16 h-16 mx-auto" />,
                    title: "Raw Materials",
                    desc: "Extraction & Processing",
                    color: "from-amber-500 to-orange-500",
                    bgColor: "bg-amber-50",
                    borderColor: "border-amber-200"
                  },
                  {
                    icon: <img src="https://img.icons8.com/?size=70&id=69678&format=png&color=000000" alt="manufacturing" className="w-16 h-16 mx-auto" />,
                    title: "Manufacturing", 
                    desc: "Production & Assembly",
                    color: "from-blue-500 to-indigo-500",
                    bgColor: "bg-blue-50",
                    borderColor: "border-blue-200"
                  },
                  {
                    icon: <img src="https://img.icons8.com/?size=70&id=97LJjCPiqQBL&format=png&color=000000" alt="distribution" className="w-16 h-16 mx-auto" />,
                    title: "Distribution",
                    desc: "Transport & Logistics",
                    color: "from-purple-500 to-pink-500",
                    bgColor: "bg-purple-50",
                    borderColor: "border-purple-200"
                  },
                  {
                    icon: <img src="https://img.icons8.com/?size=70&id=47000&format=png&color=000000" alt="end of life" className="w-16 h-16 mx-auto" />,
                    title: "End of Life",
                    desc: "Recycling & Disposal",
                    color: "from-green-500 to-teal-500",
                    bgColor: "bg-green-50",
                    borderColor: "border-green-200"
                  }
                ].map((stage, index) => (
                  <div key={index} className={`relative ${stage.bgColor} ${stage.borderColor} border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}>
                    <div className="flex justify-center items-center mb-3">
                      {stage.icon}
                    </div>
                    <h4 className={`text-base font-bold text-slate-800 mb-2 ${oswald.className}`}>{stage.title}</h4>
                    <p className="text-sm text-slate-600">{stage.desc}</p>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 transform -translate-y-1/2">
                        <ArrowRight className="w-11 h-8 text-slate-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="assessment-mode-section" className="py-20 bg-gradient-to-b from-blue-50 via-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-6 text-slate-900 ${merriweather.className}`}>Choose Your Assessment Mode</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Whether you're new to LCA or an experienced practitioner, we have the right tools for your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card
                className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-lg border bg-white ${
                  hoveredMode === "non-expert"
                    ? "border-blue-300 shadow-lg"
                    : "border-slate-200 hover:border-blue-200"
                }`}
                onMouseEnter={() => setHoveredMode("non-expert")}
                onMouseLeave={() => setHoveredMode(null)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 text-slate-900 ${merriweather.className}`}>Guided Assessment</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Step-by-step guidance with AI recommendations. Perfect for teams new to sustainability assessment.
                  </p>
                  <Button size="lg" className={`w-full bg-blue-600 hover:bg-blue-700 text-white ${merriweather.className}`} asChild>
                    <Link href="/non-expert">Start Assessment</Link>
                  </Button>
                </div>
              </Card>

              <Card
                className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-lg border bg-white ${
                  hoveredMode === "expert" ? "border-green-300 shadow-lg" : "border-slate-200 hover:border-green-200"
                }`}
                onMouseEnter={() => setHoveredMode("expert")}
                onMouseLeave={() => setHoveredMode(null)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-600 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 text-slate-900 ${merriweather.className}`}>Expert Analysis</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Advanced interface with comprehensive data controls and detailed visualization capabilities.
                  </p>
                  <Button size="lg" variant="outline" className={`w-full bg-green-600 text-white border-slate-300 hover:bg-green-700 ${merriweather.className}`} asChild>
                    <Link href="/expert">Advanced Analysis</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 bg-white border-slate-200">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-green-600 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-slate-900">Powerful</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                   Powerful and intuitive. Unparalleled features. Open source and free to use. CircularLCA is the world's
                  most widely used LCA software.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-600">
                  {/* <CheckCircle className="w-4 h-4 text-green-600" /> */}
                  {/* <span>Open Source and free to use</span> */}
                </div>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 bg-white border-slate-200">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-600 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-slate-900">Open Source</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Full transparency, full flexibility. Freely share both the software and any models you create in
                  OpenMines. Modify and change the software to suit your needs.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-600">
                  {/* <CheckCircle className="w-4 h-4 text-blue-600" /> */}
                  {/* <span>Enterprise-ready solution</span> */}
                </div>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 bg-white border-slate-200">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-teal-600 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-slate-900">Connected</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Stay connected and work together on LCA models from anywhere in the world using the Open LCA
                  Collaboration Server and OpenMines.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-slate-600">
                  {/* <CheckCircle className="w-4 h-4 text-teal-600" /> */}
                  {/* <span>Available for free</span> */}
                </div>
              </Card>
            </div>

            {/* <div className="text-center mt-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">Browse Software</Button>
            </div> */}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">A Tool For Everyone</h2>
              <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
                From researchers to industry professionals, OpenMines provides the tools you need for comprehensive
                life cycle assessment and sustainable decision making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-lg bg-green-600 hover:bg-green-700 text-white">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-zinc-100 font-bold border-slate-300 text-slate-700 hover:bg-slate-50 border-2">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-100">
        <div className="container mx-auto px-10 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image 
                    src={logo} 
                    alt="OpenMines Logo" 
                    className="w-10 h-10 object-cover rounded"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="font-bold text-slate-900 text-2xl">OpenMines</span>
              </div>
              <p className="text-sm text-slate-600">
                Leading the future of LCA software with professional, open-source solutions.
              </p>
            </div>
            <div>
              <h5 className={`font-extrabold mb-3 text-slate-900 ml-3 ${cinzel.className}`}>Project</h5>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/features" className="hover:text-green-600 ml-3 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-green-600 ml-3 transition-colors">
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="hover:text-green-600 ml-3 transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className={`font-extrabold mb-3 text-slate-900 ${cinzel.className}`}>Organization</h5>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/about" className="hover:text-green-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-green-600 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-green-600 transition-colors">
                    Socials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className={`font-extrabold mb-3 text-slate-900 ${cinzel.className}`}>Support</h5>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link href="/help" className="hover:text-green-600 transition-colors">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-green-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-green-600 transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
