import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export const MetricsCard: React.FC = () => {
    return (
        <motion.div
            className="glass-card rounded-3xl p-8 w-full max-w-2xl relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
        >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
                <h3 className="text-base font-bold text-gray-700">AI Visibility Metrics</h3>
                <div className="px-2 py-1 bg-green-50 rounded-full">
                    <span className="text-xs font-semibold text-green-600">Live</span>
                </div>
            </div>

            {/* Metric 1: AI Mentions with Line Chart */}
            <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-4xl font-bold text-gray-900">+80%</h3>
                            <TrendingUp size={24} className="text-green-500" />
                        </div>
                        <p className="text-sm text-gray-500 font-medium mt-1">AI Mentions Growth</p>
                    </div>
                </div>
                {/* Simple Line Chart */}
                <div className="h-20 w-full flex items-end gap-1">
                    {[30, 45, 35, 55, 45, 60, 50, 70, 65, 80, 75, 85].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 0.3 + (i * 0.08) }}
                            className="flex-1 bg-gradient-to-t from-green-400 to-green-300 rounded-t-sm relative group hover:from-green-500 hover:to-green-400 transition-colors"
                        />
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Metric 2: Brand Recall */}
                <div className="bg-purple-50/50 rounded-2xl p-4 border border-purple-100">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-12 h-12 rounded-full border-4 border-purple-100 border-t-neon-purple flex items-center justify-center bg-white">
                            <span className="text-sm font-bold text-neon-purple">4x</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">Brand Recall</p>
                    <p className="text-xs text-gray-500 mt-0.5">vs. competitors</p>
                </div>

                {/* Metric 3: Revenue Impact */}
                <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-bright-cyan flex items-center justify-center text-white">
                            <span className="text-base font-bold">+28%</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">Revenue Lift</p>
                    <p className="text-xs text-gray-500 mt-0.5">from AI traffic</p>
                </div>
            </div>
        </motion.div>
    );
};
