/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Base Whites
                'pure-white': '#FFFFFF',
                'soft-white': '#F9FAFB',
                'frost-white': '#F5F7FA',

                // Neutral Grays
                'gray-900': '#0F172A',
                'gray-700': '#334155',
                'gray-500': '#64748B',
                'gray-300': '#CBD5E1',
                'gray-100': '#F1F5F9',

                // Neon Accents
                'neon-violet': '#A855F7',
                'neon-purple': '#8B5CF6',
                'electric-blue': '#3B82F6',
                'deep-electric-blue': '#2563EB',
                'bright-cyan': '#06B6D4',
                'aqua-neon': '#22D3EE',
                'fuchsia-neon': '#EC4899',
                'pink-glow': '#F472B6',
                'lime-neon': '#A3E635',
            },
            backgroundImage: {
                'gradient-purple-blue': 'linear-gradient(90deg, #A855F7 0%, #3B82F6 100%)',
                'gradient-fuchsia-purple': 'linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)',
                'gradient-blue-cyan': 'linear-gradient(90deg, #2563EB 0%, #06B6D4 100%)',
            },
            boxShadow: {
                'cyan-glow': '0 0 30px rgba(56, 189, 248, 0.4)',
                'purple-glow': '0 0 30px rgba(168, 85, 247, 0.4)',
                'pink-glow': '0 0 30px rgba(236, 72, 153, 0.4)',
            },
            borderRadius: {
                'xl': '16px',
                '2xl': '24px',
                '3xl': '32px',
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
        },
    },
    plugins: [],
}
