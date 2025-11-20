import React from 'react';
import { motion } from 'framer-motion';

export const FloatingIcons: React.FC = () => {
    const icons = [
        // Top Left (near headline)
        { src: '/openai.svg', alt: 'OpenAI', bg: 'bg-white', delay: 0, style: { top: '20%', left: '8%' }, scale: 1.1 },
        // Top Right (above cards)
        { src: '/META.svg', alt: 'Meta', bg: 'bg-blue-50', delay: 1.5, style: { top: '12%', left: '88%' }, scale: 0.9 },
        // Bottom Right (far right)
        { src: '/gemini.svg', alt: 'Gemini', bg: 'bg-white', delay: 0.8, style: { top: '78%', left: '92%' }, scale: 1 },
        // Bottom Left (near CTA)
        { src: '/anthropic.svg', alt: 'Claude', bg: 'bg-orange-50', delay: 2.2, style: { top: '68%', left: '5%' }, scale: 0.95 },
        // Center Top (between columns)
        { src: '/openai.svg', alt: 'OpenAI', bg: 'bg-green-50', delay: 3, style: { top: '8%', left: '48%' }, scale: 0.85 },
        // Middle Left
        { src: '/gemini.svg', alt: 'Gemini', bg: 'bg-purple-50', delay: 2.5, style: { top: '45%', left: '12%' }, scale: 0.9 },
        // Middle Right
        { src: '/anthropic.svg', alt: 'Claude', bg: 'bg-cyan-50', delay: 1.8, style: { top: '40%', left: '85%' }, scale: 1.05 },
    ];

    return (
        <>
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    className={`hidden md:flex absolute w-14 h-14 ${item.bg} rounded-2xl shadow-lg items-center justify-center z-0 border border-gray-100/50 backdrop-blur-sm`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: item.scale,
                        y: [-10, 10, -10],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.5, delay: 0.5 + (index * 0.15) },
                        scale: { duration: 0.5, delay: 0.5 + (index * 0.15) },
                        y: {
                            repeat: Infinity,
                            duration: 4 + (index * 0.3),
                            ease: "easeInOut",
                            delay: item.delay
                        },
                        rotate: {
                            repeat: Infinity,
                            duration: 6 + (index * 0.5),
                            ease: "easeInOut",
                            delay: item.delay
                        }
                    }}
                    style={item.style}
                >
                    <div className="w-8 h-8 flex items-center justify-center">
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </motion.div>
            ))}
        </>
    );
};
