import { Card } from "@repo/ui/components/ui/card";
import { Progress } from "@repo/ui/components/ui/progress";

const about = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-secondary py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 pb-[10rem]">
          <div>
            <h1 className="text3-xl lg:text-6xl font-light leading-tight text-balance">
              Where Technology
              <br />
              Meets Trust
            </h1>
          </div>
          <div className="flex items-end pl-40">
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              we believe true innovation is built on trust. By combining cutting-edge blockchain technology with uncompromising security.
            </p>
          </div>
        </div>

        

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3">
          {/* Left Column - Transaction Info */}
          <div className="space-y-8 -mt-20">
            <div className="flex gap-4">
              <span className="text-muted-foreground font-mono">01</span>
              <p className="text-muted-foreground leading-relaxed text-sm text-white/70">
                Every transaction, every contract, and every interaction on our network is verified and transparent.
              </p>
            </div>

            {/* Market Analysis Card */}
            <div className="group relative flex flex-col items-center p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 overflow-hidden border border-white/20 border-b-transparent">
              {/* Glassmorphism background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-2xl" />

              {/* Unified glowing border overlay */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-50" style={{ mask: 'linear-gradient(to bottom, white 0%, white 40%, transparent 100%)' }} />
              </div>

              {/* Card content */}
              <div className="relative z-10 w-full">
                <h3 className="text-white text-lg mb-6 font-medium">Market Analysis</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-300">Analysis 1</span>
                      <span className="text-sm font-medium text-white">77%</span>
                    </div>
                    <Progress value={77} className="h-2 bg-white/20 [&>div]:bg-white rounded-full shadow-lg shadow-white/80" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-300">Analysis 2</span>
                      <span className="text-sm font-medium text-white">45%</span>
                    </div>
                    <Progress value={45} className="h-2 bg-white/20 [&>div]:bg-white rounded-full shadow-lg shadow-white/80" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-300">Analysis 3</span>
                      <span className="text-sm font-medium text-white">69%</span>
                    </div>
                    <Progress value={69} className="h-2 bg-white/20 [&>div]:bg-white rounded-full shadow-lg shadow-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Enterprise Solutions */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-light mb-12 pl-10">
                Enterprise Blockchain
                <br />
                Solutions
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2 pl-10">
                    <div className="w-2 h-2 rounded-full bg-foreground"></div>
                    <span className="text-sm text-muted-foreground font-light">Smart Contracts</span>
                  </div>
                  <p className="text-5xl font-light pl-20">•  2M+</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 pl-10">
                    <div className="w-2 h-2 rounded-full bg-foreground"></div>
                    <span className="text-sm text-muted-foreground font-light">Neutral Operations</span>
                  </div>
                  <p className="text-5xl font-light pl-20">•  99%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="lg:row-span-2">
            <div className="relative h-full min-h-[400px] bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-foreground/20"></div>
                  ))}
                </div>
              </div>
              {/* Background Video */}
                <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                filter: 'brightness(1.0) contrast(2.2)'
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[700px] min-h-[700px] object-contain mix-blend-screen z-20 "
                >
                <source src="/3d-abstract-holographic-object-on-black-bg-rotate-2025-08-29-11-52-44-utc.mov" type="video/mp4" />
                </video>
                
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl z-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
