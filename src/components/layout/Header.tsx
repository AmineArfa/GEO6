import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X, Zap, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    const navLinks = [
        { name: 'How it works', href: '#how-it-works' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <>
            {/* Floating Pill-Shaped Navigation Bar */}
            <motion.header
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Pill Container with Capsule Shape */}
                <motion.div
                    className={cn(
                        'relative rounded-[999px] transition-all duration-500 ease-out',
                        'bg-white/90 backdrop-blur-xl border border-gray-200/50',
                        isScrolled
                            ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
                            : 'shadow-[0_4px_20px_rgb(0,0,0,0.08)]'
                    )}
                    whileHover={{
                        boxShadow: '0 12px 40px rgb(0,0,0,0.15)',
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-6 py-3.5 flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-2.5 cursor-pointer group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-8 h-8 bg-gradient-to-r from-neon-violet to-electric-blue rounded-full flex items-center justify-center text-white shadow-sm group-hover:shadow-md group-hover:shadow-purple-glow transition-shadow duration-300">
                                <Zap size={16} fill="currentColor" strokeWidth={0} />
                            </div>
                            <span className="text-xl font-black tracking-tight text-gray-900" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>VYZZ</span>
                        </motion.div>

                        {/* Desktop Nav - Centered */}
                        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[15px] font-bold text-gray-700 hover:text-gray-900 transition-colors duration-200 relative group"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300 ease-out" />
                                </motion.a>
                            ))}
                        </nav>

                        {/* CTA Button - Nested Pill Shape */}
                        <div className="hidden md:flex items-center">
                            <motion.button
                                className={cn(
                                    'rounded-[999px] px-5 py-2 bg-gray-900 hover:bg-gray-800',
                                    'text-white text-sm font-medium',
                                    'shadow-md hover:shadow-lg',
                                    'transition-all duration-300',
                                    'flex items-center gap-2 group'
                                )}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Contact us
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </motion.button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </motion.div>
            </motion.header>

            {/* Mobile Menu - Floating Below Header */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md md:hidden"
                >
                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50 overflow-hidden">
                        <div className="px-6 py-6 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 py-3 px-4 rounded-2xl transition-all duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                className="w-full mt-4 rounded-[999px] px-5 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium flex items-center justify-center gap-2 group shadow-md transition-all duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact us
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};
