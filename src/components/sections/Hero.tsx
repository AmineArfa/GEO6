import { motion } from 'framer-motion';
import { MetricsCard } from '../hero/MetricsCard';
import { ChatbotCard } from '../hero/ChatbotCard';
import { FloatingIcons } from '../hero/FloatingIcons';
import { AnimatedAIText } from '../hero/AnimatedAIText';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-28 md:pt-32 lg:pt-20">
            {/* Floating AI Brand Icons */}
            <FloatingIcons />

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Column: Content */}
                <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                        {/* Trusted by badge - at the top */}
                        <ScrollReveal delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-gray-200 w-fit shadow-sm">
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-neon-violet to-neon-purple border-2 border-white" />
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-electric-blue to-bright-cyan border-2 border-white" />
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-bright-cyan to-aqua-neon border-2 border-white" />
                                </div>
                                <span className="text-sm font-semibold text-gray-700">Trusted by 500+ Companies</span>
                            </div>
                        </ScrollReveal>

                        {/* New feature badge - bold and neon */}
                        <ScrollReveal delay={0.2}>
                            <span className="text-xl md:text-2xl font-bold text-neon-violet">
                                ✨ New - AI Visibility Tracking
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.5] tracking-tight text-gray-900">
                                Be the business <br />
                                <AnimatedAIText /> <br />
                                recommends first
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="flex items-center gap-2 max-w-2xl">
                                <div className="glass-card px-3 py-1.5 rounded-xl border-2 border-neon-violet/30 hover:border-neon-violet/60 transition-all hover:shadow-purple-glow flex items-center gap-1.5">
                                    <span className="text-lg">📊</span>
                                    <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-neon-violet to-neon-purple bg-clip-text text-transparent whitespace-nowrap">Track ranking</p>
                                </div>
                                <div className="glass-card px-3 py-1.5 rounded-xl border-2 border-electric-blue/30 hover:border-electric-blue/60 transition-all hover:shadow-cyan-glow flex items-center gap-1.5">
                                    <span className="text-lg">🤝</span>
                                    <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-electric-blue to-bright-cyan bg-clip-text text-transparent whitespace-nowrap">More Deals</p>
                                </div>
                                <div className="glass-card px-3 py-1.5 rounded-xl border-2 border-bright-cyan/30 hover:border-bright-cyan/60 transition-all hover:shadow-cyan-glow flex items-center gap-1.5">
                                    <span className="text-lg">💰</span>
                                    <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-bright-cyan to-aqua-neon bg-clip-text text-transparent whitespace-nowrap">More profit</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Input & CTA */}
                    <ScrollReveal delay={0.5}>
                        <div className="flex flex-col gap-4 max-w-lg">
                            <div className="relative group">
                                {/* Animated gradient border */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-violet via-electric-blue via-bright-cyan to-fuchsia-neon opacity-60 blur-sm animate-pulse" />
                                <div className="absolute inset-0 rounded-full overflow-hidden">
                                    <div className="absolute inset-[-2px] bg-gradient-to-r from-neon-violet via-electric-blue via-bright-cyan to-fuchsia-neon animate-spin-slow opacity-75" style={{ animationDuration: '3s' }} />
                                </div>

                                {/* Input container */}
                                <div className="relative bg-white rounded-full p-2 pl-6 flex items-center shadow-xl border-2 border-transparent">
                                    <input
                                        type="text"
                                        placeholder="Enter website or URL"
                                        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 min-w-0"
                                    />
                                    <button className="rounded-full px-5 py-2.5 bg-neon-violet text-white font-semibold text-sm whitespace-nowrap shadow-lg hover:shadow-purple-glow transition-all hover:scale-105 hover:bg-neon-purple">
                                        Analyze your website →
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-4 text-xs w-full">
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <span className="text-green-500">✓</span>
                                    <span className="font-medium">Free Analysis</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-gray-300" />
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <span className="text-green-500">✓</span>
                                    <span className="font-medium">No credit card</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-gray-300" />
                                <div className="flex items-center gap-1.5 text-gray-500">
                                    <span className="text-green-500">✓</span>
                                    <span className="font-medium">Instant results</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Column: Visuals */}
                <div className="relative h-[600px] flex items-center justify-center lg:justify-end">
                    {/* Main Visual Stack */}
                    <ScrollReveal delay={0.6}>
                        <div className="relative w-full max-w-md">
                            <MetricsCard />
                            <ChatbotCard />
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};
