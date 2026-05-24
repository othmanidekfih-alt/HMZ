import { X, MapPin, Star, Calendar, Navigation } from 'lucide-react';
import { Spot } from '../types';

interface SpotDetailProps {
  spot: Spot | null;
  onClose: () => void;
}

export default function SpotDetail({ spot, onClose }: SpotDetailProps) {
  if (!spot) return null;

  const categoryLabels: { [key: string]: string } = {
    nature: 'Nature & Parks',
    viewpoint: 'Scenic Viewpoint',
    sports: 'Sports Facility',
    activities: 'Activities & Entertainment'
  };

  const categoryColors: { [key: string]: string } = {
    nature: 'bg-green-100 text-green-800',
    viewpoint: 'bg-blue-100 text-blue-800',
    sports: 'bg-orange-100 text-orange-800',
    activities: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black bg-opacity-50 p-0 sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header with image */}
        <div className="relative">
          <img
            src={spot.images[0]}
            alt={spot.name}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[spot.category]}`}>
              {categoryLabels[spot.category]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{spot.name}</h2>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <span className="font-semibold text-lg">{spot.rating}</span>
              <span className="text-gray-500 text-sm">({spot.reviews.length} reviews)</span>
            </div>
          </div>

          <div className="flex items-start gap-2 mb-4 text-gray-600">
            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm">Rabat, Morocco</p>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{spot.description}</p>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {spot.bestTimeToVisit && (
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-sm">Best Time to Visit</h3>
                </div>
                <p className="text-sm text-gray-700">{spot.bestTimeToVisit}</p>
              </div>
            )}
            {spot.accessibility && (
              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Navigation className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-sm">Accessibility</h3>
                </div>
                <p className="text-sm text-gray-700">{spot.accessibility}</p>
              </div>
            )}
          </div>

          {/* Activities */}
          {spot.activities && spot.activities.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Available Activities</h3>
              <div className="flex flex-wrap gap-2">
                {spot.activities.map((activity, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Image gallery */}
          {spot.images.length > 1 && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Photos</h3>
              <div className="grid grid-cols-2 gap-3">
                {spot.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${spot.name} ${index + 2}`}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Reviews</h3>
            <div className="space-y-4">
              {spot.reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{review.author}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{review.comment}</p>
                  <p className="text-gray-400 text-xs">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Get directions button */}
          <button
            onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}`, '_blank')}
            className="w-full mt-6 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
}
