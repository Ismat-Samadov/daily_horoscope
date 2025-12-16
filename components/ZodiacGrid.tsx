'use client';

import { ZodiacSign } from '@/types/horoscope';

interface ZodiacGridProps {
  signs: ZodiacSign[];
  onSelectSign: (signId: string) => void;
}

export default function ZodiacGrid({ signs, onSelectSign }: ZodiacGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {signs.map((sign, index) => (
        <button
          key={sign.id}
          onClick={() => onSelectSign(sign.id)}
          className={`group relative glass-effect rounded-2xl p-6 md:p-8 transition-all duration-300
            hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20
            transform hover:-translate-y-2 cursor-pointer
            border-2 border-transparent hover:border-purple-400/50`}
          style={{
            animationDelay: `${index * 50}ms`,
            animation: 'fadeInUp 0.6s ease-out forwards',
            opacity: 0
          }}
        >
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${sign.gradient} opacity-0
            group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-3">
            {/* Icon */}
            <div className="text-5xl md:text-6xl transform group-hover:scale-110
              transition-transform duration-300 group-hover:animate-float">
              {sign.icon}
            </div>

            {/* Name */}
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent
              group-hover:bg-gradient-to-r group-hover:bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(135deg, ${sign.color}, ${sign.color}dd)`
              }}>
              {sign.name}
            </h3>

            {/* Symbol */}
            <div className="text-3xl md:text-4xl opacity-70 group-hover:opacity-100
              transition-opacity duration-300">
              {sign.symbol}
            </div>

            {/* Date Range */}
            <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300
              transition-colors duration-300">
              {sign.dateRange}
            </p>

            {/* Element */}
            <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${sign.gradient}`}></span>
              <span>{sign.element}</span>
            </div>
          </div>

          {/* Animated border glow */}
          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
            transition-opacity duration-300 bg-gradient-to-r ${sign.gradient} blur-xl -z-10`}></div>
        </button>
      ))}
    </div>
  );
}
