import { useState, useMemo } from 'react';
import Map from './components/Map';
import SpotDetail from './components/SpotDetail';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import { rabatSpots, defaultMapCenter } from './data/spots';
import { Spot } from './types';
import { MapPin } from 'lucide-react';

function App() {
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter spots based on category and search query
  const filteredSpots = useMemo(() => {
    let spots = rabatSpots;

    // Filter by category
    if (selectedCategory !== 'all') {
      spots = spots.filter(spot => spot.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      spots = spots.filter(spot =>
        spot.name.toLowerCase().includes(query) ||
        spot.description.toLowerCase().includes(query) ||
        spot.activities?.some(activity => activity.toLowerCase().includes(query))
      );
    }

    return spots;
  }, [selectedCategory, searchQuery]);

  // Count spots by category
  const spotCounts = useMemo(() => {
    return {
      all: rabatSpots.length,
      nature: rabatSpots.filter(s => s.category === 'nature').length,
      viewpoint: rabatSpots.filter(s => s.category === 'viewpoint').length,
      sports: rabatSpots.filter(s => s.category === 'sports').length,
      activities: rabatSpots.filter(s => s.category === 'activities').length,
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-50">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-white to-transparent">
        <div className="container mx-auto px-4 py-4">
          <div className="bg-white rounded-2xl shadow-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-600 p-2 rounded-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Rabat Discover</h1>
                <p className="text-sm text-gray-600">Find your perfect spot in Rabat</p>
              </div>
            </div>
            
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              spotCounts={spotCounts}
            />
            
            {/* Results count */}
            <div className="text-sm text-gray-600 px-2">
              Showing <span className="font-semibold text-primary-600">{filteredSpots.length}</span> spot{filteredSpots.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </header>

      {/* Map */}
      <div className="h-full w-full">
        <Map
          spots={filteredSpots}
          center={[defaultMapCenter.lat, defaultMapCenter.lng]}
          zoom={defaultMapCenter.zoom}
          onSpotClick={setSelectedSpot}
          selectedCategory={selectedCategory}
        />
      </div>

      {/* Spot Detail Modal */}
      <SpotDetail spot={selectedSpot} onClose={() => setSelectedSpot(null)} />

      {/* Legend */}
      <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-xl p-4 z-10 hidden sm:block">
        <h3 className="font-semibold text-sm mb-2 text-gray-700">Map Legend</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌳</span>
            <span className="text-gray-600">Nature & Parks</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏔️</span>
            <span className="text-gray-600">Viewpoints</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚽</span>
            <span className="text-gray-600">Sports</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="text-gray-600">Activities</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
            <span className="text-gray-600">Your Location</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
