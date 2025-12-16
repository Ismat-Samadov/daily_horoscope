# 🔮 Daily Horoscope App

A beautiful, responsive daily horoscope web application built with Next.js, TypeScript, and Tailwind CSS. Get your daily cosmic insights with stunning animations and an intuitive user interface.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🌟 **12 Zodiac Signs** - Complete coverage of all astrological signs
- 🎨 **Beautiful UI** - Glassmorphism effects with cosmic gradients
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🔄 **Real-time API** - Integrated with free horoscope API for daily predictions
- ⚡ **Fast & Optimized** - Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations** - Floating icons, gradient transitions, and hover effects
- 🎯 **Daily Insights** - Predictions, lucky numbers, colors, moods, and compatibility
- 💾 **Smart Caching** - 1-hour cache for API responses
- 🔄 **Fallback System** - Local horoscope generation if API is unavailable
- 📤 **Share Feature** - Share your horoscope with friends

## 🎯 What You Get

Each horoscope includes:
- ✅ Daily prediction and cosmic advice
- ✅ Lucky number
- ✅ Lucky color
- ✅ Today's mood indicator
- ✅ Compatibility signs
- ✅ Personalized cosmic guidance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd daily_horoscope
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

The app will automatically use port 3001 if 3000 is already in use.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **API**: [Horoscope API](https://horoscope-app-api.vercel.app/) - Free daily horoscope data

## 📁 Project Structure

```
daily_horoscope/
├── app/
│   ├── api/
│   │   └── horoscope/
│   │       └── route.ts        # API route handler with fallback
│   ├── globals.css             # Global styles and animations
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main page component
├── components/
│   ├── ZodiacGrid.tsx          # Zodiac sign selection grid
│   └── HoroscopeDisplay.tsx    # Horoscope display component
├── types/
│   └── horoscope.ts            # TypeScript interfaces and data
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 Design Features

### Glassmorphism
Modern glass-like effect with backdrop blur for a premium feel.

### Gradient Animations
- Smooth color transitions on hover
- Animated gradient text
- Dynamic border glows

### Responsive Grid
- 2 columns on mobile
- 3 columns on tablets
- 4 columns on desktop

### Custom Animations
- Float effect for icons
- Fade-in transitions
- Scale transformations on hover
- Glow effects for interactive elements

## 🔌 API Integration

### Primary API
- **Endpoint**: `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily`
- **Parameters**:
  - `sign`: Zodiac sign (e.g., Aries, Taurus, etc.)
  - `day`: TODAY, TOMORROW, or YESTERDAY
- **Cache**: 1 hour revalidation
- **Free**: No authentication required

### Fallback System
If the external API fails, the app automatically switches to a local horoscope generation system that provides:
- Deterministic daily predictions
- Consistent results for the same day
- All standard horoscope features

## 🎭 Available Zodiac Signs

| Sign | Icon | Element | Date Range |
|------|------|---------|------------|
| Aries | 🐏 | Fire | Mar 21 - Apr 19 |
| Taurus | 🐂 | Earth | Apr 20 - May 20 |
| Gemini | 👯 | Air | May 21 - Jun 20 |
| Cancer | 🦀 | Water | Jun 21 - Jul 22 |
| Leo | 🦁 | Fire | Jul 23 - Aug 22 |
| Virgo | 👧 | Earth | Aug 23 - Sep 22 |
| Libra | ⚖️ | Air | Sep 23 - Oct 22 |
| Scorpio | 🦂 | Water | Oct 23 - Nov 21 |
| Sagittarius | 🏹 | Fire | Nov 22 - Dec 21 |
| Capricorn | 🐐 | Earth | Dec 22 - Jan 19 |
| Aquarius | 🏺 | Air | Jan 20 - Feb 18 |
| Pisces | 🐟 | Water | Feb 19 - Mar 20 |

## 📦 Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 🧪 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌐 Deployment

This app can be easily deployed to:

- **Vercel** (Recommended): One-click deployment
- **Netlify**: Supports Next.js
- **Docker**: Containerized deployment
- **Any Node.js hosting**: VPS, cloud platforms, etc.

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

## 🎯 Future Enhancements

- [ ] Weekly and monthly horoscope views
- [ ] Zodiac compatibility checker
- [ ] Birth chart calculator
- [ ] User accounts to save favorite signs
- [ ] Push notifications for daily horoscopes
- [ ] Multiple language support
- [ ] Dark/light theme toggle
- [ ] Social media sharing with custom cards

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Free Horoscope API by [horoscope-app-api](https://horoscope-app-api.vercel.app/)
- Design inspiration from modern astrology apps
- Icons and emojis from Unicode standard

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with 💜 and ✨ by the cosmos

**May the stars guide your path!** 🌟
