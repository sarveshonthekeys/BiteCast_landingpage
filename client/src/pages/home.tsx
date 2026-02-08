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
        <div className="container mx-auto px-6 h-16 flex items-center justify-end">
          <Button onClick={scrollToDownload} size="sm" className="font-semibold">
            Get the App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
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
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-primary">
                    BiteCast
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
                  Self Improvement: <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    One Swipe at a Time.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                  BiteCast is a distraction free platform hosting short form self clips of your favourite podcasts.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-base font-semibold h-12 px-8 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-shadow"
                    onClick={scrollToDownload}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download APK
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 border-white/10 hover:bg-white/5">
                    View Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Phone Mockup */}
            <div className="flex-1 w-full max-w-[320px] md:max-w-md relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
                  <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background border border-white/5 flex flex-col relative">
                    
                    {/* Mock UI Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
                    
                    {/* Top Bar */}
                    <div className="p-6 pt-12 flex justify-between items-center z-20">
                       <span className="font-heading font-bold">For You</span>
                       <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary/30" />
                    </div>

                    {/* Main Content Area - The "Card" */}
                    <div className="flex-1 flex flex-col justify-end p-6 z-20 pb-20">
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 mb-4">
                         <div className="flex items-center gap-3 mb-3">
                           <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                             <Headphones className="w-5 h-5 text-indigo-400" />
                           </div>
                           <div>
                             <p className="text-xs text-muted-foreground">Lex Fridman Podcast</p>
                             <p className="font-medium text-sm">#342 - Biology of Aging</p>
                           </div>
                         </div>
                         <h3 className="font-heading font-bold text-xl leading-tight mb-3">
                           "Aging isn't inevitable. It's a solvable engineering problem."
                         </h3>
                         <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full w-1/3 bg-primary" />
                         </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-between px-2">
                        <Button size="icon" variant="ghost" className="rounded-full text-white/50 hover:text-white hover:bg-white/10">
                          <SkipForward className="w-6 h-6 rotate-180" />
                        </Button>
                        <Button size="icon" className="h-16 w-16 rounded-full bg-white text-black hover:bg-gray-200">
                           <Play className="w-8 h-8 fill-black" />
                        </Button>
                         <Button size="icon" variant="ghost" className="rounded-full text-white/50 hover:text-white hover:bg-white/10">
                          <SkipForward className="w-6 h-6" />
                        </Button>
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 w-full h-16 bg-black/40 backdrop-blur-xl border-t border-white/5 flex items-center justify-around z-30">
                       <div className="w-12 h-1 bg-white/20 rounded-full mb-2 mx-auto mt-auto" /> 
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[80%] bg-secondary/20 blur-[100px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="features" className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">The Antidote to Doomscrolling</h2>
            <p className="text-muted-foreground text-lg">
              Cultivate your mind in a sanctuary of focused wisdom—zero distractions, pure growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Clock className="w-8 h-8 text-primary" />}
              title="1-Minute Power Clips"
              description="AI extracts the core insights, stories, and jokes so you get the value without the fluff."
            />
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8 text-secondary" />}
              title="Smart Curation"
              description="Your feed learns what sparks your curiosity. Philosophy, Tech, Comedy - served fresh daily."
            />
            <FeatureCard 
              icon={<ArrowRight className="w-8 h-8 text-blue-400" />}
              title="Bridge to Full Episodes"
              description="Loved a clip? One tap takes you to the full episode at that exact timestamp. Seamless."
            />
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-12 md:p-20 text-center overflow-hidden relative">
            
            {/* Background Mesh */}
            <div className="absolute inset-0 opacity-30">
               <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for a better diet?</h2>
              <p className="text-xl text-muted-foreground mb-10">
                Join thousands of listeners who switched from endless scrolling to meaningful learning.
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <Button 
                  size="lg" 
                  className="h-16 px-8 text-lg w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20"
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
                  <Download className="mr-3 h-6 w-6" />
                  Download Android APK
                </Button>
                <p className="text-sm text-muted-foreground mt-2">Version 1.0.2 • Free Beta Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-lg text-primary">BiteCast</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 BiteCast Inc. Meaningful consumption.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-colors group">
      <div className="mb-6 bg-card w-16 h-16 rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-heading mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
