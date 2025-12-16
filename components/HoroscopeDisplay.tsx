'use client';

import { useState, useEffect } from 'react';
import { Horoscope, zodiacSigns } from '@/types/horoscope';

interface HoroscopeDisplayProps {
  sign: string;
  onBack: () => void;
}

export default function HoroscopeDisplay({ sign, onBack }: HoroscopeDisplayProps) {
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const zodiacSign = zodiacSigns.find(z => z.id === sign);

  useEffect(() => {
    async function fetchHoroscope() {
      try {
        setLoading(true);
        const response = await fetch(`/api/horoscope?sign=${sign}`);
        if (!response.ok) throw new Error('Failed to fetch horoscope');
        const data = await response.json();
        setHoroscope(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchHoroscope();
  }, [sign]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="text-6xl animate-spin">🌟</div>
          <p className="text-xl text-gray-300 animate-pulse">Reading the stars...</p>
        </div>
      </div>
    );
  }

  if (error || !horoscope || !zodiacSign) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 mb-4">Failed to load horoscope</p>
        <button
          onClick={onBack}
          className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors
          group mb-6"
      >
        <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
        <span>Back to Zodiac Signs</span>
      </button>

      {/* Header Card */}
      <div className={`glass-effect rounded-3xl p-8 md:p-12 text-center relative overflow-hidden
        border-2 border-purple-400/30`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${zodiacSign.gradient} opacity-5`}></div>

        <div className="relative z-10">
          <div className="text-7xl md:text-8xl mb-4 animate-float">
            {zodiacSign.icon}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
            {zodiacSign.name} {zodiacSign.symbol}
          </h2>
          <p className="text-gray-400 text-lg mb-2">{zodiacSign.dateRange}</p>
          <p className="text-gray-500">Element: {zodiacSign.element}</p>
          <div className="mt-4 text-sm text-gray-400">{horoscope.date}</div>
        </div>
      </div>

      {/* Main Prediction */}
      <div className="glass-effect rounded-3xl p-8 md:p-10 border-2 border-purple-400/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🔮</span>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Today's Prediction</h3>
        </div>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          {horoscope.prediction}
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Lucky Number */}
        <div className="glass-effect rounded-2xl p-6 border border-purple-400/20
          hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🎲</span>
            <h4 className="text-xl font-semibold text-white">Lucky Number</h4>
          </div>
          <p className={`text-4xl font-bold bg-gradient-to-r ${zodiacSign.gradient}
            bg-clip-text text-transparent`}>
            {horoscope.luckyNumber}
          </p>
        </div>

        {/* Lucky Color */}
        <div className="glass-effect rounded-2xl p-6 border border-purple-400/20
          hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🎨</span>
            <h4 className="text-xl font-semibold text-white">Lucky Color</h4>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${zodiacSign.gradient}
              animate-glow`}></div>
            <p className="text-2xl font-semibold text-gray-200">{horoscope.luckyColor}</p>
          </div>
        </div>

        {/* Mood */}
        <div className="glass-effect rounded-2xl p-6 border border-purple-400/20
          hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">😊</span>
            <h4 className="text-xl font-semibold text-white">Today's Mood</h4>
          </div>
          <p className="text-xl text-gray-200">{horoscope.mood}</p>
        </div>

        {/* Compatibility */}
        <div className="glass-effect rounded-2xl p-6 border border-purple-400/20
          hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">💕</span>
            <h4 className="text-xl font-semibold text-white">Compatibility</h4>
          </div>
          <p className="text-xl text-gray-200">{horoscope.compatibility}</p>
        </div>
      </div>

      {/* Advice */}
      <div className="glass-effect rounded-3xl p-8 md:p-10 border-2 border-purple-400/20
        bg-gradient-to-br from-purple-900/20 to-transparent">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💫</span>
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Cosmic Advice</h3>
        </div>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
          "{horoscope.advice}"
        </p>
      </div>

      {/* Share Button */}
      <div className="text-center pt-6">
        <button
          className={`px-8 py-4 bg-gradient-to-r ${zodiacSign.gradient} rounded-full
            text-white font-semibold text-lg shadow-lg hover:shadow-2xl
            transform hover:scale-105 transition-all duration-300
            hover:shadow-purple-500/50`}
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: `My ${zodiacSign.name} Horoscope`,
                text: horoscope.prediction,
              });
            }
          }}
        >
          ✨ Share Your Horoscope ✨
        </button>
      </div>
    </div>
  );
}
