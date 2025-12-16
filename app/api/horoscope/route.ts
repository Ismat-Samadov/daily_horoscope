import { NextRequest, NextResponse } from 'next/server';
import { Horoscope } from '@/types/horoscope';

const predictions = [
  "Today brings exciting opportunities your way. Stay open to new experiences and trust your instincts.",
  "The stars align in your favor today. Your creativity and passion will shine through in everything you do.",
  "A moment of clarity awaits you. Pay attention to the subtle signs the universe sends your way.",
  "Your patience and determination will be rewarded. Trust the process and keep moving forward.",
  "Adventure calls to you today. Embrace the unknown and let your curiosity guide you.",
  "Deep connections are favored today. Reach out to loved ones and strengthen your bonds.",
  "Your hard work is about to pay off. Stay focused and maintain your positive momentum.",
  "Transformation is in the air. Embrace change and let go of what no longer serves you.",
  "Joy and laughter surround you today. Share your light with others and spread positivity.",
  "Wisdom comes from unexpected sources. Keep an open mind and be ready to learn.",
];

const moods = [
  "Energetic & Optimistic",
  "Calm & Reflective",
  "Creative & Inspired",
  "Confident & Bold",
  "Peaceful & Centered",
  "Adventurous & Curious",
  "Romantic & Passionate",
  "Focused & Determined"
];

const colors = [
  "Purple", "Gold", "Blue", "Green", "Red", "Silver",
  "Orange", "Pink", "Turquoise", "Emerald"
];

const advice = [
  "Take time for self-care and reflection today.",
  "Communication is key. Express yourself clearly and listen actively.",
  "Trust your intuition when making important decisions.",
  "Step out of your comfort zone and try something new.",
  "Practice gratitude and appreciate the small moments.",
  "Balance work and play for optimal harmony.",
  "Be patient with yourself and others.",
  "Follow your heart, but don't forget to use your head.",
  "Embrace challenges as opportunities for growth.",
  "Connect with nature to recharge your energy."
];

const compatibleSigns = [
  "Aries, Leo, Sagittarius",
  "Taurus, Virgo, Capricorn",
  "Gemini, Libra, Aquarius",
  "Cancer, Scorpio, Pisces",
  "Leo, Aries, Sagittarius",
  "Virgo, Taurus, Capricorn",
  "Libra, Gemini, Aquarius",
  "Scorpio, Cancer, Pisces"
];

function generateHoroscope(sign: string): Horoscope {
  const today = new Date();
  const seed = today.getDate() + today.getMonth() + sign.length;

  return {
    sign,
    date: today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    prediction: predictions[seed % predictions.length],
    luckyNumber: (seed % 99) + 1,
    luckyColor: colors[seed % colors.length],
    mood: moods[seed % moods.length],
    compatibility: compatibleSigns[seed % compatibleSigns.length],
    advice: advice[seed % advice.length]
  };
}

async function fetchFromExternalAPI(sign: string): Promise<Horoscope | null> {
  try {
    // Capitalize first letter for API
    const capitalizedSign = sign.charAt(0).toUpperCase() + sign.slice(1).toLowerCase();

    const response = await fetch(
      `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${capitalizedSign}&day=TODAY`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error('External API failed');
    }

    const data = await response.json();

    // Transform external API response to our format
    const today = new Date();
    const seed = today.getDate() + today.getMonth() + sign.length;

    return {
      sign,
      date: today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      prediction: data.data.horoscope_data || generateHoroscope(sign).prediction,
      luckyNumber: (seed % 99) + 1,
      luckyColor: colors[seed % colors.length],
      mood: moods[seed % moods.length],
      compatibility: compatibleSigns[seed % compatibleSigns.length],
      advice: advice[seed % advice.length]
    };
  } catch (error) {
    console.error('External API error:', error);
    return null;
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sign = searchParams.get('sign');

  if (!sign) {
    return NextResponse.json(
      { error: 'Zodiac sign is required' },
      { status: 400 }
    );
  }

  // Try external API first, fallback to local generation
  let horoscope = await fetchFromExternalAPI(sign);

  if (!horoscope) {
    console.log('Using fallback horoscope generation');
    horoscope = generateHoroscope(sign);
  }

  return NextResponse.json(horoscope);
}
