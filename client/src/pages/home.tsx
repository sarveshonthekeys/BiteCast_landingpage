import { motion } from "framer-motion";
import { ArrowRight, Download, Headphones, Sparkles, Clock, Smartphone, Play, Pause, SkipForward } from "lucide-react";
import heroBg from "@/assets/hero-bg.png"; // Importing the generated asset
import { Button } from "@/components/ui/button";

export default function Home() {
  const scrollToDownload = () => {
    const element = document.getElementById("download");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl text-primary tracking-tighter">BiteCast</span>
          </div>
          <Button onClick={scrollToDownload} size="sm" className="font-semibold">
            Get the App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-4 md:pt-16 md:pb-8 overflow-hidden">
        {/* Background Gradient/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10" />
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-20" />
        </div>

        <div className="container mx-auto px-6 relative z-30">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-2">
                  Self Improvement: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    One Swipe at a Time.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto md:mx-0 leading-relaxed">
                  BiteCast is a distraction-free platform hosting short-form self-improvement clips of your favorite podcasts.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-base font-semibold h-11 px-8 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-shadow"
                    onClick={scrollToDownload}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download APK
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-11 px-8 border-white/10 hover:bg-white/5">
                    View Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Phone Mockup */}
            <div className="flex-1 w-full max-w-[280px] md:max-w-[340px] relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2rem] h-[520px] w-[260px] shadow-2xl">
                  <div className="h-[24px] w-[2px] bg-gray-800 absolute -start-[12px] top-[60px] rounded-s-lg"></div>
                  <div className="h-[36px] w-[2px] bg-gray-800 absolute -start-[12px] top-[100px] rounded-s-lg"></div>
                  <div className="h-[36px] w-[2px] bg-gray-800 absolute -start-[12px] top-[145px] rounded-s-lg"></div>
                  <div className="h-[50px] w-[2px] bg-gray-800 absolute -end-[12px] top-[115px] rounded-e-lg"></div>
                  <div className="rounded-[1.6rem] overflow-hidden w-full h-full bg-background border border-white/5 flex flex-col relative">
                    
                    {/* Mock UI Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
                    
                    {/* Top Bar */}
                    <div className="p-4 pt-8 flex justify-between items-center z-20">
                       <span className="font-heading font-bold text-sm">For You</span>
                       <div className="w-6 h-6 rounded-full bg-secondary/20 border border-secondary/30" />
                    </div>

                    {/* Main Content Area - The "Card" */}
                    <div className="flex-1 flex flex-col justify-end p-4 z-20 pb-12">
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 mb-3">
                         <div className="flex items-center gap-2 mb-2">
                           <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                             <Headphones className="w-4 h-4 text-indigo-400" />
                           </div>
                           <div>
                             <p className="text-[10px] text-muted-foreground">Lex Fridman Podcast</p>
                             <p className="font-medium text-[11px]">#342 - Biology of Aging</p>
                           </div>
                         </div>
                         <h3 className="font-heading font-bold text-sm leading-tight mb-2">
                           "Aging isn't inevitable. It's a solvable engineering problem."
                         </h3>
                         <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full w-1/3 bg-primary" />
                         </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-between px-1">
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-white/50 hover:text-white hover:bg-white/10">
                          <SkipForward className="w-4 h-4 rotate-180" />
                        </Button>
                        <Button size="icon" className="h-12 w-12 rounded-full bg-white text-black hover:bg-gray-200">
                           <Play className="w-6 h-6 fill-black" />
                        </Button>
                         <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-white/50 hover:text-white hover:bg-white/10">
                          <SkipForward className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 w-full h-12 bg-black/40 backdrop-blur-xl border-t border-white/5 flex items-center justify-around z-30">
                       <div className="w-10 h-1 bg-white/20 rounded-full mb-1 mx-auto mt-auto" /> 
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[70%] bg-secondary/20 blur-[80px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="features" className="py-8 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-heading mb-2">The Antidote to Doomscrolling</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We're building a focused sanctuary for growth—a distraction-free home for high-impact, short-form wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section id="download" className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 md:p-10 text-center overflow-hidden relative">
            
            {/* Background Mesh */}
            <div className="absolute inset-0 opacity-20">
               <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 blur-[80px] rounded-full" />
               <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 blur-[80px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold font-heading mb-6">Improve your content consumption</h2>
              
              <div className="flex flex-col items-center gap-3">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-base w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20"
                  onClick={() => {
                     // Simulate download
                     const link = document.createElement('a');
                     link.href = '/bitecast-beta.apk'; // Points to the dummy file
                     link.download = 'bitecast-beta.apk';
                     document.body.appendChild(link);
                     link.click();
                     document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-3 h-5 w-5" />
                  Download Android APK
                </Button>
                <p className="text-xs text-muted-foreground">Version 1.0.2 • Free Beta Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-white/5 bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-base text-primary">BiteCast</span>
          </div>
          <div className="text-xs text-muted-foreground">
            © 2024 BiteCast Inc. Meaningful consumption.
          </div>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

