# Rabat Discover 🗺️

A modern, interactive web application to discover amazing spots in Rabat, Morocco. Find nature spots, scenic viewpoints, sports facilities, and exciting activities all in one place!

## Features ✨

- **Interactive Map**: OpenStreetMap integration with zoom, pan, and user location tracking
- **Categorized Spots**: 
  - 🌳 Nature & Parks - Peaceful gardens and green spaces
  - 🏔️ Viewpoints - Scenic spots with beautiful views
  - ⚽ Sports - Football, basketball, tennis, and beach sports
  - 🎯 Activities - Karting, bowling, adventure parks, and more
- **Smart Filtering**: Filter spots by category or search by name
- **Detailed Information**: Each spot includes:
  - High-quality images
  - User reviews and ratings
  - Best time to visit
  - Accessibility information
  - Available activities
- **Geolocation**: Automatically detects your location on the map
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop
- **Get Directions**: Direct integration with Google Maps for navigation

## Tech Stack 🛠️

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Leaflet** & **React-Leaflet** for interactive maps
- **Tailwind CSS** for modern, responsive styling
- **Lucide React** for beautiful icons

## Getting Started 🚀

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure 📁

```
rabat-discover/
├── src/
│   ├── components/
│   │   ├── Map.tsx              # Main map component with markers
│   │   ├── SpotDetail.tsx       # Modal for spot details
│   │   ├── CategoryFilter.tsx   # Category filter buttons
│   │   └── SearchBar.tsx        # Search functionality
│   ├── data/
│   │   └── spots.ts             # Spot data for Rabat
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── index.html                   # HTML template
└── package.json                 # Project dependencies
```

## Spots Database 📍

The app currently features **13 curated spots** in Rabat:

### Nature & Parks (3)
- Andalusian Gardens
- Exotic Gardens (Jardins d'Essais)
- Bouregreg Marina

### Viewpoints (3)
- Kasbah of the Udayas Viewpoint
- Hassan Tower Esplanade
- Rabat Beach Corniche

### Sports (3)
- Prince Moulay Abdellah Sports Complex
- Plage de Rabat Beach Sports Area
- Hilton Rabat Tennis Club

### Activities (4)
- Rabat Karting Track
- Megamall Bowling & Entertainment
- Témara Adventure Park
- Rabat Zoo

## Customization 🎨

### Adding New Spots

Edit `src/data/spots.ts` to add more locations. Each spot follows this structure:

```typescript
{
  id: 'unique-id',
  name: 'Spot Name',
  category: 'nature' | 'viewpoint' | 'sports' | 'activities',
  lat: 34.0209,  // Latitude
  lng: -6.8416,  // Longitude
  description: 'Description of the spot',
  images: ['https://...', 'https://...'],
  rating: 4.5,
  activities: ['Activity 1', 'Activity 2'],
  bestTimeToVisit: 'Best time description',
  accessibility: 'Accessibility info',
  reviews: [
    {
      id: 'review-id',
      author: 'Name',
      rating: 5,
      comment: 'Review text',
      date: '2024-04-15'
    }
  ]
}
```

### Changing Map Center

Modify the `defaultMapCenter` object in `src/data/spots.ts`:

```typescript
export const defaultMapCenter = {
  lat: 34.0209,
  lng: -6.8416,
  zoom: 13
};
```

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing 🤝

Contributions are welcome! Feel free to:
- Add new spots
- Improve existing spot information
- Enhance UI/UX
- Fix bugs
- Add new features

## License 📄

MIT License - feel free to use this project for personal or commercial purposes.

## Acknowledgments 🙏

- Map data from OpenStreetMap contributors
- Images from Unsplash
- Built with ❤️ for Rabat, Morocco

---

**Enjoy exploring Rabat! 🇲🇦**
