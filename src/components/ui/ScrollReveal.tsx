import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    width?: "fit-content" | "100%";
    yOffset?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
    children, 
    className = "", 
    delay = 0, 
    duration = 0.5, 
    width = "fit-content",
    yOffset = 30
}) => {
    return (
        <motion.div
            className={className}
            style={{ width }}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ 
                duration: duration, 
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1.0] // Smooth ease-out
            }}
        >
            {children}
        </motion.div>
    );
};

