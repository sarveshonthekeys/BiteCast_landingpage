import { motion } from "framer-motion";
import { ArrowRight, Download, Headphones, Sparkles, Clock, Smartphone, Play, Pause, SkipForward } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import logoPng from "@assets/Gemini_Generated_Image_ngi7gdngi7gdngi7-removebg-preview_1771536040539.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  const scrollToDownload = () => {
    const element = document.getElementById("download");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoPng} alt="BiteCast Logo" className="h-8 w-8 object-contain" />
            <span className="font-heading font-bold text-xl text-white tracking-tighter">BiteCast</span>
          </div>
          <Button onClick={scrollToDownload} size="sm" variant="outline" className="font-semibold border-white/10 hover:bg-white/5">
            Get the App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
        </div>

        <div className="container mx-auto px-6 relative z-30">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">
                  <Sparkles className="w-3 h-3" />
                  <span>The Future of Content Consumption</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[0.9] mb-6 tracking-tighter">
                  SELF <br />
                  IMPROVEMENT <br />
                  <span className="text-white/40">IN SECONDS.</span>
                </h1>
                <p className="text-lg md:text-xl text-white/50 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
                  Distraction-free short-form wisdom from your favorite podcasts. Focused, high-impact, and designed for growth.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-base font-bold h-14 px-10 bg-white text-black hover:bg-white/90"
                    onClick={scrollToDownload}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download APK
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 border-white/10 hover:bg-white/5 text-white/80">
                    View Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Phone Mockup */}
            <div className="flex-1 w-full max-w-[300px] md:max-w-[380px] relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="relative mx-auto border-[#1a1a1a] bg-[#0a0a0a] border-[12px] rounded-[3rem] h-[600px] w-[280px] shadow-[0_0_80px_rgba(255,255,255,0.05)]">
                  <div className="h-[30px] w-[3px] bg-[#1a1a1a] absolute -start-[15px] top-[80px] rounded-s-lg"></div>
                  <div className="h-[40px] w-[3px] bg-[#1a1a1a] absolute -start-[15px] top-[130px] rounded-s-lg"></div>
                  <div className="h-[60px] w-[3px] bg-[#1a1a1a] absolute -end-[15px] top-[140px] rounded-e-lg"></div>
                  
                  <div className="rounded-[2.4rem] overflow-hidden w-full h-full bg-black border border-white/5 flex flex-col relative">
                    {/* Mock UI Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent z-10 pointer-events-none" />
                    
                    {/* Top Bar */}
                    <div className="p-6 pt-10 flex justify-between items-center z-20">
                       <img src={logoPng} alt="Logo" className="w-6 h-6 object-contain opacity-80" />
                       <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col justify-end p-5 z-20 pb-16">
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 mb-4">
                         <div className="flex items-center gap-3 mb-3">
                           <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                             <Headphones className="w-5 h-5 text-white" />
                           </div>
                           <div>
                             <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Lex Fridman</p>
                             <p className="font-bold text-xs text-white">#342 - Biology of Aging</p>
                           </div>
                         </div>
                         <h3 className="font-heading font-bold text-base leading-snug mb-4 text-white">
                           "Aging isn't inevitable. It's a solvable engineering problem."
                         </h3>
                         <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full w-1/3 bg-white" />
                         </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-between px-2">
                        <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full text-white/30 hover:text-white hover:bg-white/5">
                          <SkipForward className="w-5 h-5 rotate-180" />
                        </Button>
                        <Button size="icon" className="h-14 w-14 rounded-full bg-white text-black hover:scale-105 transition-transform">
                           <Play className="w-7 h-7 fill-black ml-1" />
                        </Button>
                         <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full text-white/30 hover:text-white hover:bg-white/5">
                          <SkipForward className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 w-full h-14 bg-black/60 backdrop-blur-2xl border-t border-white/5 flex items-center justify-center z-30">
                       <div className="w-12 h-1 bg-white/20 rounded-full" /> 
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Subtle glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[80%] bg-white/5 blur-[120px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section id="features" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Sparkles, title: "Curated Growth", desc: "Hand-picked insights from world-class thinkers." },
              { icon: Clock, title: "Time Efficient", desc: "Get the value of a 3-hour podcast in 60 seconds." },
              { icon: Smartphone, title: "Native Mobile", desc: "Designed specifically for the mobile-first swipe experience." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-white mb-6" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden relative">
            <div className="relative z-10 max-w-2xl mx-auto">
              <img src={logoPng} alt="Logo" className="w-16 h-16 mx-auto mb-8 grayscale invert opacity-80" />
              <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 tracking-tighter">JOIN THE BETA.</h2>
              <p className="text-white/40 mb-12 text-lg font-light leading-relaxed">
                Be among the first to experience a cleaner, faster, and more productive way to consume content.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <Button 
                  size="lg" 
                  className="h-16 px-12 text-lg w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                  onClick={() => {
                     const link = document.createElement('a');
                     link.href = '/bitecast-beta.apk';
                     link.download = 'bitecast-beta.apk';
                     document.body.appendChild(link);
                     link.click();
                     document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-3 h-6 w-6" />
                  Download for Android
                </Button>
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-white/30 tracking-widest uppercase font-bold">Version 1.0.0 (BETA)</p>
                  <p className="text-[10px] text-white/20">© 2026 BiteCast Social Pvt Ltd.</p>
                </div>
              </div>
            </div>
            
            {/* Subtle glow elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/[0.01] blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={logoPng} alt="BiteCast" className="h-6 w-6 object-contain opacity-50" />
            <span className="font-heading font-bold text-lg text-white/50 tracking-tighter">BiteCast</span>
          </div>
          <div className="flex gap-10 text-xs font-bold tracking-widest text-white/30 uppercase">
             <a href="mailto:bitecastpvtltd@gmail.com" className="hover:text-white transition-colors">Contact</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

