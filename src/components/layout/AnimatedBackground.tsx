import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 w-full min-h-screen overflow-hidden pointer-events-none z-0">
            {/* Violet blob - top right */}
            <motion.div
                className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full"
                style={{ backgroundColor: 'rgba(168, 85, 247, 0.15)', filter: 'blur(80px)' }}
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Blue blob - center left */}
            <motion.div
                className="absolute top-[40%] left-[20%] w-[350px] h-[350px] rounded-full"
                style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', filter: 'blur(80px)' }}
                animate={{
                    scale: [1, 1.15, 1],
                    x: [0, 30, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Cyan blob - bottom left */}
            <motion.div
                className="absolute bottom-[10%] left-[5%] w-[380px] h-[380px] rounded-full"
                style={{ backgroundColor: 'rgba(6, 182, 212, 0.12)', filter: 'blur(80px)' }}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Pink blob - right side */}
            <motion.div
                className="absolute top-[50%] right-[15%] w-[280px] h-[280px] rounded-full"
                style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)', filter: 'blur(70px)' }}
                animate={{
                    scale: [1, 1.1, 1],
                    y: [0, -20, 0]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
            />
        </div>
    );
};
