"use client"

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }






import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card-homepage";
import { Navbar } from "@/components/navbar";
import { ArrowRight, Target, Users, BarChart3, Sparkles, Mail} from "lucide-react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        {/* Floating Metal Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-6xl opacity-20 float">🔩</div>
          <div className="absolute top-40 right-20 text-5xl opacity-15 float-delayed">🟠</div>
          <div className="absolute bottom-20 left-20 text-7xl opacity-10 float">⚙️</div>
          <div className="absolute bottom-40 right-10 text-4xl opacity-25 float-delayed">⚫</div>
        </div>

        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-green-600 to-emerald-500 mb-6 animate-fade-in-up">
              Professional LCA{" "}
              <div style={{ color: 'oklch(.15 .02 240)' }}>
                for Circular Metals
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div style={{ color: 'oklch(.45 .02 240)' }}>
              Enterprise-grade life cycle assessment platform powered by artificial intelligence. Drive sustainable metallurgy decisions with precision analytics and comprehensive impact modeling.
              </div>
            </p>

            {/* Mode Selection Buttons */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch mb-16 max-w-5xl mx-auto">
              <Link href="/non-expert" className="flex-1 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Card className="h-full p-8 glass-card interactive-scale hover:scale-105 transition-all duration-300 border-2 border-primary-300/30 hover:border-primary-300/60 bg-gradient-to-br from-primary-500/10 to-primary-600/5 hover:from-primary-400/15 hover:to-primary-500/10 group">
                  <div className="text-center">
                    <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <div className="flex justify-center items-center bg-gradient-to-br from-teal-600 via-emerald-500 to-lime-400 shadow-lg w-24 h-24 rounded-2xl">
                        <img src="https://img.icons8.com/?size=60&id=112358&format=png&color=FFFFFF" alt="" className="w-12 h-12" />
                      </div>
                    </div>
                    <div className="inline-block px-4 py-1 bg-primary-200/20 rounded-full text-primary-100 text-sm font-medium mb-4">
                      Beginner Friendly
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      <div style={{ color: 'oklch(.15 .02 240)' }}>Non-Expert Mode</div>
                      </h3>
                    <p className="text-white/85 mb-6 text-lg leading-relaxed">
                      <div style={{ color: 'oklch(.45 .02 240)' }}>
                        Guided Q&A flow with AI assistance. Perfect for newcomers to LCA analysis with intelligent recommendations.
                      </div>
                    </p>
                    <div className="space-y-3 text-white/70 text-sm mb-6">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                        <span style={{ color: 'oklch(.45 .02 240)' }}>20 guided questions</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                        <span style={{ color: 'oklch(.45 .02 240)' }}>AI recommendations</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                        <span style={{ color: 'oklch(.45 .02 240)' }}>5-10 minutes</span>
                      </div>
                    </div>
                    <Button size="lg" className="bg-gradient-to-r from-teal-700 via-green-600 to-emerald-500 
             text-white font-semibold shadow-lg 
             hover:opacity-90 
             w-full transition-all duration-300 rounded-lg">
                      Start Assessment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </Card>
              </Link>

              <Link href="/expert" className="flex-1 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Card className="h-full p-8 glass-card interactive-scale hover:scale-105 transition-all duration-300 border-2 border-secondary-300/30 hover:border-secondary-300/60 bg-gradient-to-br from-secondary-500/10 to-secondary-600/5 hover:from-secondary-400/15 hover:to-secondary-500/10 group">
                  <div className="text-center">
                      <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="flex justify-center items-center">
                          <img src="https://img.icons8.com/?size=100&id=dJmZPAqp4mxA&format=png&color=FFFFFF" alt="" />
                        </div>
                      </div>
                    <div className="inline-block px-4 py-1 bg-secondary-200/20 rounded-full text-secondary-100 text-sm font-medium mb-4">
                      Advanced Control
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      <div style={{ color: 'oklch(.15 .02 240)' }}>Expert Mode</div>
                    </h3>
                    <p className="text-white/85 mb-6 text-lg leading-relaxed">
                      <div style={{ color: 'oklch(.45 .02 240)' }}>
                        Advanced technical interface with comprehensive data controls and detailed visualization capabilities.
                      </div>
                    </p>
                    <div className="space-y-3 text-white/70 text-sm mb-6">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                        <span style={{ color: 'oklch(.45 .02 240)' }}>Advanced parameters</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                        <span style={{ color: 'oklch(.45 .02 240)' }}>Custom scenarios</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                        <span style={{ color: 'oklch(.45 .02 240)' }}>Detailed outputs</span>
                      </div>
                    </div>
                    <Button size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-white w-full font-semibold backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300">
                      Advanced Analysis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </Card>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center animate-bounce">
                <div className="text-3xl font-bold text-white" style={{ color: 'oklch(.15 .02 240)' }}>99.7%</div>
                <div className="text-white/70" style={{ color: 'oklch(.45 .02 240)' }}>Accuracy Rate</div>
              </div>
              <div className="text-center animate-bounce" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-white" style={{ color: 'oklch(.15 .02 240)' }}>&lt; 2s</div>
                <div className="text-white/70" style={{ color: 'oklch(.45 .02 240)' }}>Analysis Time</div>
              </div>
              <div className="text-center animate-bounce" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-white" style={{ color: 'oklch(.15 .02 240)' }}>50+</div>
                <div className="text-white/70" style={{ color: 'oklch(.45 .02 240)' }}>Metal Types</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'oklch(.15 .02 240)' }}>Why Choose Our LCA Tool?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ color: 'oklch(.45 .02 240)' }}>
              Built specifically for the metallurgy industry with AI-powered insights and circular economy focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 interactive-scale">
              <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4">
                <div className="flex justify-center items-center">
                  <img src="https://img.icons8.com/?size=50&id=ym8y5bBPBfO0&format=png&color=FFFFFF" alt="" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'oklch(.15 .02 240)' }}>AI-Powered Analysis</h3>
              <p className="text-muted-foreground leading-relaxed" style={{ color: 'oklch(.45 .02 240)' }}>
                Advanced machine learning algorithms provide intelligent insights and recommendations 
                for optimizing your metallurgical processes.
              </p>
            </Card>

            <Card className="p-8 interactive-scale">
              <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4">
                <div className="flex justify-center items-center">
                  <img src="https://img.icons8.com/?size=50&id=MDTDX4RNrPQ0&format=png&color=FFFFFF" alt="" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'oklch(.15 .02 240)' }}>Circular Economy</h3>
              <p className="text-muted-foreground leading-relaxed" style={{ color: 'oklch(.45 .02 240)' }}>
                Compare linear vs circular models to understand environmental impact 
                and identify opportunities for sustainable practices.
              </p>
            </Card>

            <Card className="p-8 interactive-scale">
              <div className="p-4 bg-accent/10 rounded-lg w-fit mb-4">
                <div className="flex justify-center items-center">
                  <img src="https://img.icons8.com/?size=50&id=DoB2hWAWiTer&format=png&color=FFFFFF" alt="" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'oklch(.15 .02 240)' }}>Interactive Visualizations</h3>
              <p className="text-muted-foreground leading-relaxed" style={{ color: 'oklch(.45 .02 240)' }}>
                Beautiful, interactive charts and 3D visualizations make complex 
                sustainability data easy to understand and present.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button size="lg" variant="outline" className="px-8" style={{ color: 'oklch(.15 .02 240)' }}>
                Explore All Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'oklch(.15 .02 240)' }}>
              A Tool For Everyone
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto" style={{ color: 'oklch(.45 .02 240)' }}>
              All products, all standards, widest choice of data and methods.
            </p>
            <div className="border-t border-b border-gray-300 py-6 flex items-start gap-7 max-w-4xl mx-auto">
              {/* Left Label */}
              <span className="text-2xl text-white font-bold  py-1" style={{ color: 'oklch(.15 .02 240)' }}>
                Industry
              </span>

              {/* Right Text */}
              <p className="text-base text-muted-foreground leading-relaxed" style={{ color: 'oklch(.45 .02 240)' }}>
                With low total cost of ownership, easy installation and use, features for professional
                modeling and for collaboration in team, the largest set of data available for LCA, and not
                the least full transparency, OpenMinds is a good choice for use in industry. OpenMinds is also
                suited as basis for customised software solution, for powerful and intuitive web- or
                desktop applications.
              </p>
            </div>

            <div className="border-t border-b border-gray-300 py-6 flex items-start gap-7 max-w-4xl mx-auto">
              {/* Left Label */}
              <span className="text-2xl text-white font-bold  py-1" style={{ color: 'oklch(.15 .02 240)' }}>
                Consultancy
              </span>

              {/* Right Text */}
              <p className="text-base text-muted-foreground leading-relaxed" style={{ color: 'oklch(.45 .02 240)' }}>
                As for industry, low total cost of ownership, easy installation and use, features for professional modeling and for collaboration in team, and the largest set of data available for LCA make OpenMinds a good choice for LCA and footprint in consultancy. Since the software is free, it is very easy to share your life cycle model with clients, or for review and quality assurance
              </p>
            </div>



            <div className="border-t border-b border-gray-300 py-6 flex items-start gap-7 max-w-4xl mx-auto">
              {/* Left Label */}
              <span className="text-2xl text-white font-bold  py-1" style={{ color: 'oklch(.15 .02 240)' }}>
                Research
              </span>

              {/* Right Text */}
              <p className="text-base text-muted-foreground leading-relaxed" style={{ color: 'oklch(.45 .02 240)' }}>
                OpenMinds provides features and possibilities not available in other LCA software and can be extended to meet and include specific new approaches. At the same time, OpenMinds is a user-friendly software, with an intuitive interface that is well suited for research.
              </p>
            </div>


            <div className="border-t border-b border-gray-300 py-6 flex items-start gap-7 max-w-4xl mx-auto">
              {/* Left Label */}
              <span className="text-2xl text-white font-bold  py-1" style={{ color: 'oklch(.15 .02 240)' }}>
                Education
              </span>

              {/* Right Text */}
              <p className="text-base text-muted-foreground leading-relaxed" style={{ color: 'oklch(.45 .02 240)' }}>
                OpenMinds is used in many university classes worldwide, also linked to research. Easy installation, affordable or free faculty licences offered by many databases, and rich modeling options are reasons to select OpenMinds for student work and teaching classes.
              </p>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'oklch(.15 .02 240)' }}>
              Ready to Transform Your Sustainability Analysis?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" style={{ color: 'oklch(.45 .02 240)' }}>
              Join the revolution in metallurgical sustainability assessment. 
              Start your first LCA analysis in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/non-expert">
                <Button size="lg" className="bg-gradient-sustainability text-white px-8">
                  <img src="https://img.icons8.com/?size=25&id=112358&format=png&color=FFFFFF" alt="" />  <span style={{ color: 'oklch(.15 .02 240)' }}>Start Free Assessment</span>
                </Button>
              </Link>
              <Link href="/expert"> 
                <Button size="lg" variant="outline" className="px-8">
                  <img src="https://img.icons8.com/?size=20&id=dJmZPAqp4mxA&format=png&color=FFFFFF" alt="" /> <span style={{ color: 'oklch(.15 .02 240)' }}>Try Expert Mode</span>
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-sustainability rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <span className="text-xl font-bold text-gradient-primary" style={{ color: 'oklch(.15 .02 240)' }}>LCA Tool</span>
              </div>
              <p className="text-muted-foreground text-sm" style={{ color: 'oklch(.45 .02 240)' }}>
                AI-powered Life Cycle Assessment for sustainable metallurgy and circular economy.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3" style={{ color: 'oklch(.15 .02 240)' }}>Product</h4>
              <div className="space-y-2 text-sm">
                <Link href="/features" className="text-muted-foreground hover:text-foreground block" style={{ color: 'oklch(.45 .02 240)' }}>Features</Link>
                <Link href="/non-expert" className="text-muted-foreground hover:text-foreground block" style={{ color: 'oklch(.45 .02 240)' }}>Non-Expert Mode</Link>
                <Link href="/expert" className="text-muted-foreground hover:text-foreground block" style={{ color: 'oklch(.45 .02 240)' }}>Expert Mode</Link>
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground block" style={{ color: 'oklch(.45 .02 240)' }}>Dashboard</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3" style={{ color: 'oklch(.15 .02 240)' }}>Company</h4>
              <div className="space-y-2 text-sm">
                <Link href="/about" className="text-muted-foreground hover:text-foreground block" style={{ color: 'oklch(.45 .02 240)' }}>About Us</Link>
                <Link href="/history" className="text-muted-foreground hover:text-foreground block" style={{ color: 'oklch(.45 .02 240)' }}>History</Link>
                <a href="#" className="text-muted-foreground hover:text-foreground block" style={{ color: 'oklch(.45 .02 240)' }}>Contact</a>
                <a href="#" className="text-muted-foreground hover:text-foreground block" style={{ color: 'oklch(.45 .02 240)' }}>Privacy</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3" style={{ color: 'oklch(.15 .02 240)' }}>Connect</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="p-2">
                  <Mail className="w-4 h-4" /> <span style={{ color: 'oklch(.45 .02 240)' }}>Email</span>
                </Button>

              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p style={{ color: 'oklch(.45 .02 240)' }}>&copy; 2024 AI LCA Tool. All rights reserved. Built for sustainable metallurgy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

