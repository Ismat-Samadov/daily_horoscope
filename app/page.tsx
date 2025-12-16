'use client';

import { useState } from 'react';
import { zodiacSigns } from '@/types/horoscope';
import ZodiacGrid from '@/components/ZodiacGrid';
import HoroscopeDisplay from '@/components/HoroscopeDisplay';

export default function Home() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  return (
    <main className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text animate-float">
            ✨ Daily Horoscope ✨
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Discover what the stars have in store for you today
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500"></div>
            <span className="text-2xl">🌙</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
        </div>

        {/* Zodiac Selection */}
        {!selectedSign ? (
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-8">
              Choose Your Zodiac Sign
            </h2>
            <ZodiacGrid
              signs={zodiacSigns}
              onSelectSign={setSelectedSign}
            />
          </div>
        ) : (
          <HoroscopeDisplay
            sign={selectedSign}
            onBack={() => setSelectedSign(null)}
          />
        )}

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>🌟 Your cosmic journey begins here 🌟</p>
        </footer>
      </div>
    </main>
  );
}
