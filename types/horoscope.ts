export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  dateRange: string;
  element: string;
  icon: string;
  color: string;
  gradient: string;
}

export interface Horoscope {
  sign: string;
  date: string;
  prediction: string;
  luckyNumber: number;
  luckyColor: string;
  mood: string;
  compatibility: string;
  advice: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
    dateRange: 'Mar 21 - Apr 19',
    element: 'Fire',
    icon: '🐏',
    color: '#FF6B6B',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    id: 'taurus',
    name: 'Taurus',
    symbol: '♉',
    dateRange: 'Apr 20 - May 20',
    element: 'Earth',
    icon: '🐂',
    color: '#4ECDC4',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    symbol: '♊',
    dateRange: 'May 21 - Jun 20',
    element: 'Air',
    icon: '👯',
    color: '#FFE66D',
    gradient: 'from-yellow-400 to-amber-500'
  },
  {
    id: 'cancer',
    name: 'Cancer',
    symbol: '♋',
    dateRange: 'Jun 21 - Jul 22',
    element: 'Water',
    icon: '🦀',
    color: '#A8E6CF',
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'leo',
    name: 'Leo',
    symbol: '♌',
    dateRange: 'Jul 23 - Aug 22',
    element: 'Fire',
    icon: '🦁',
    color: '#FFD93D',
    gradient: 'from-amber-500 to-yellow-600'
  },
  {
    id: 'virgo',
    name: 'Virgo',
    symbol: '♍',
    dateRange: 'Aug 23 - Sep 22',
    element: 'Earth',
    icon: '👧',
    color: '#95E1D3',
    gradient: 'from-emerald-400 to-green-600'
  },
  {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    dateRange: 'Sep 23 - Oct 22',
    element: 'Air',
    icon: '⚖️',
    color: '#F38BA8',
    gradient: 'from-pink-400 to-rose-500'
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    symbol: '♏',
    dateRange: 'Oct 23 - Nov 21',
    element: 'Water',
    icon: '🦂',
    color: '#AA96DA',
    gradient: 'from-purple-600 to-indigo-700'
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    symbol: '♐',
    dateRange: 'Nov 22 - Dec 21',
    element: 'Fire',
    icon: '🏹',
    color: '#FCBAD3',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    symbol: '♑',
    dateRange: 'Dec 22 - Jan 19',
    element: 'Earth',
    icon: '🐐',
    color: '#A0C4FF',
    gradient: 'from-slate-500 to-gray-700'
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    symbol: '♒',
    dateRange: 'Jan 20 - Feb 18',
    element: 'Air',
    icon: '🏺',
    color: '#9BF6FF',
    gradient: 'from-sky-400 to-blue-600'
  },
  {
    id: 'pisces',
    name: 'Pisces',
    symbol: '♓',
    dateRange: 'Feb 19 - Mar 20',
    element: 'Water',
    icon: '🐟',
    color: '#CAFFBF',
    gradient: 'from-teal-400 to-cyan-600'
  }
];
