# Setup Instructions

## Quick Start

Since this project was created in a restricted network environment, you'll need to install dependencies on your local machine:

### 1. Install Dependencies

```bash
npm install
```

This will install:
- React 18 with TypeScript
- Vite (fast build tool)
- Leaflet & React-Leaflet (interactive maps)
- Tailwind CSS (styling)
- Lucide React (icons)

### 2. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

## What the App Does

**Rabat Discover** is a location-based discovery app that helps people find amazing spots in Rabat, Morocco:

- **Interactive Map** with zoom, pan, and user location tracking
- **13 Curated Spots** across 4 categories:
  - 🌳 Nature & Parks (3 spots)
  - 🏔️ Scenic Viewpoints (3 spots)
  - ⚽ Sports Facilities (3 spots)
  - 🎯 Activities & Entertainment (4 spots)
- **Search & Filter** functionality
- **Detailed Spot Info** with images, reviews, ratings, and directions
- **Responsive Design** for mobile, tablet, and desktop

## Features Implemented

✅ User geolocation tracking  
✅ Custom map markers for each category  
✅ Click markers to view detailed information  
✅ Image galleries for each spot  
✅ User reviews and ratings  
✅ Filter by category  
✅ Search by name or activity  
✅ Direct Google Maps integration for directions  
✅ Beautiful, modern UI with Tailwind CSS  
✅ Fully responsive design  

## Technologies Used

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Mapping**: Leaflet.js + React-Leaflet
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Map Data**: OpenStreetMap

## File Structure

```
rabat-discover/
├── src/
│   ├── components/
│   │   ├── Map.tsx              # Interactive map with custom markers
│   │   ├── SpotDetail.tsx       # Detailed spot information modal
│   │   ├── CategoryFilter.tsx   # Category filter buttons
│   │   └── SearchBar.tsx        # Search input component
│   ├── data/
│   │   └── spots.ts             # 13 curated Rabat locations
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles + Tailwind
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.js           # Tailwind config
└── vite.config.ts               # Vite config
```

## Next Steps (Optional Enhancements)

Want to take the app further? Here are some ideas:

1. **Add More Spots**: Edit `src/data/spots.ts` to add more locations
2. **User Authentication**: Let users create accounts and save favorite spots
3. **Add Reviews**: Allow users to submit their own reviews
4. **Photo Upload**: Let users upload their own photos
5. **Offline Support**: Add PWA capabilities for offline access
6. **Share Spots**: Social media integration
7. **Route Planning**: Visit multiple spots in one trip
8. **Weather Integration**: Show current weather for outdoor spots
9. **Backend API**: Replace static data with a dynamic backend
10. **Multi-city Support**: Expand to other Moroccan cities

Enjoy exploring Rabat! 🇲🇦
