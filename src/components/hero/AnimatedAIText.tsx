import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AI_PLATFORMS = ['ChatGPT', 'Gemini', 'Anthropic', 'Meta', 'Copilot'];

export const AnimatedAIText: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % AI_PLATFORMS.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-block relative min-w-[320px] md:min-w-[450px] lg:min-w-[550px] overflow-visible align-bottom mb-2" style={{ height: '1.6em', minHeight: '1.6em' }}>
            <AnimatePresence initial={false}>
                <motion.span
                    key={currentIndex}
                    initial={{ rotateX: 90, y: '50%', opacity: 0 }}
                    animate={{ rotateX: 0, y: 0, opacity: 1 }}
                    exit={{ rotateX: -90, y: '-50%', opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    style={{
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center center'
                    }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-aqua-neon font-bold text-6xl md:text-7xl lg:text-8xl absolute left-0 top-0 whitespace-nowrap"
                >
                    {AI_PLATFORMS[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};
