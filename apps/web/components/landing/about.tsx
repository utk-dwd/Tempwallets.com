import { Card } from "@repo/ui/components/ui/card";
import { Progress } from "@repo/ui/components/ui/progress";
import { AssetProtection } from "../AssetProtection";
import { NetworkEthereum, NetworkBinanceSmartChain, TokenBTC } from '@web3icons/react';

const about = () => {
  return (
    <AssetProtection>
      <section className="min-h-screen bg-gradient-to-br from-background via-background to-secondary py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 pb-12 md:pb-16 lg:pb-[10rem]">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-balance">
              DApp Connections
              <br />
              Are Risky
            </h1>
          </div>
          <div className="flex items-end pl-20 lg:pl-40">
            <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-md">
              <b>TempWallets: </b>  Privacy-First, Disposable Smart Wallets for Crypto Transactions.
            </p>
          </div>
        </div>

        

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-0">
          {/* Left Column - Transaction Info */}
          <div className="space-y-8 lg:-mt-20">
            <div className="flex gap-4">
              <span className="text-muted-foreground font-mono text-sm">01</span>
              <p className="text-muted-foreground leading-relaxed text-xs md:text-sm text-white/70">
                Connecting to unverified DApps exposes your crypto assets to theft and loss, always verify before linking.
              </p>
            </div>

            {/* Market Analysis Card */}
            <div className="group relative flex flex-col items-center p-8 md:p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 overflow-hidden border border-white/20 border-b-transparent">
              {/* Glassmorphism background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-2xl" />

              {/* Unified glowing border overlay */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none">
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-50"
                  style={{
                    mask: 'linear-gradient(to bottom, white 0%, white 40%, transparent 100%)',
                  }}
                />
              </div>

              {/* Card content */}
              <div className="relative z-10 w-full">
                <h3 className="text-white text-base md:text-lg mb-4 md:mb-6 font-medium">Total wallets breached</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <NetworkEthereum size={16} variant="branded" className="text-blue-400" />
                        <span className="text-sm text-slate-300">Ethereum (2025)</span>
                      </div>
                      <span className="text-sm font-medium text-white">24%</span>
                    </div>
                    <Progress value={24} className="h-2 bg-white/20 [&>div]:bg-white rounded-full shadow-lg shadow-white/80" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <NetworkBinanceSmartChain size={16} variant="branded" className="text-yellow-400" />
                        <span className="text-sm text-slate-300">BNB Chain (2025)</span>
                      </div>
                      <span className="text-sm font-medium text-white">23%</span>
                    </div>
                    <Progress value={23} className="h-2 bg-white/20 [&>div]:bg-white rounded-full shadow-lg shadow-white/80" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <TokenBTC size={16} variant="branded" className="text-orange-400" />
                        <span className="text-sm text-slate-300">Bitcoin (2025)</span>
                      </div>
                      <span className="text-sm font-medium text-white">21%</span>
                    </div>
                    <Progress value={21} className="h-2 bg-white/20 [&>div]:bg-white rounded-full shadow-lg shadow-white/80" />
                  </div>
                </div>
              </div>
            </div>
            </div>

          {/* Middle Column - Enterprise Solutions */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-12 lg:pl-10">
                Enterprise Blockchain
                <br />
                Solutions
              </h2>

              <div className="flex flex-row gap-6 md:flex-col md:space-y-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 lg:pl-10">
                    <div className="w-2 h-2 rounded-full bg-foreground"></div>
                    <span className="text-xs md:text-sm text-muted-foreground font-light">Wallet Recovery</span>
                  </div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-light lg:pl-20">•  99%</p>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 lg:pl-10">
                    <div className="w-2 h-2 rounded-full bg-foreground"></div>
                    <span className="text-xs md:text-sm text-muted-foreground font-light">Proactive Checks</span>
                  </div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-light lg:pl-20">•  14</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="lg:row-span-2 mt-8 lg:mt-0">
            <div className="relative h-full min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl overflow-hidden">
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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[600px] min-h-[600px] md:min-w-[600px] md:min-h-[600px] lg:min-w-[700px] lg:min-h-[700px] object-contain mix-blend-screen z-20 protected-video"
                >
                <source src="/3d-abstract-holographic-object-on-black-bg-rotate-2025-08-29-11-52-44-utc.mov" type="video/mp4" />
                </video>
                
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] bg-white/5 rounded-full blur-3xl z-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </AssetProtection>
  );
};

export default about;
