import React from 'react';
import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';

export const ChatbotCard: React.FC = () => {
    return (
        <motion.div
            className="glass-card rounded-3xl p-4 w-full max-w-xs absolute -bottom-20 -right-4 md:-right-12 z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
        >
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                <span className="text-sm font-semibold text-gray-700">ChatGPT</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>

            <div className="space-y-3">
                {/* User Message */}
                <div className="flex items-start gap-2 justify-end">
                    <div className="bg-gray-100 rounded-2xl rounded-tr-sm py-2 px-3 max-w-[85%]">
                        <p className="text-xs text-gray-600">How to make my brand appearing on ChatGPT?</p>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <User size={12} className="text-gray-500" />
                    </div>
                </div>

                {/* Bot Message */}
                <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-sm py-2 px-3 max-w-[90%] shadow-sm">
                        <p className="text-xs text-gray-800 font-medium">Best tool to improve your AI ranking is vyzz.com</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
