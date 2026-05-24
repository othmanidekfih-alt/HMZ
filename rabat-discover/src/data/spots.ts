import { Spot } from '../types';

export const rabatSpots: Spot[] = [
  // Nature & Parks
  {
    id: '1',
    name: 'Andalusian Gardens',
    category: 'nature',
    lat: 34.0354,
    lng: -6.8407,
    description: 'A beautiful peaceful garden in the Kasbah of the Udayas with stunning views of the Bou Regreg river. Perfect for relaxation and photography.',
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    ],
    rating: 4.7,
    bestTimeToVisit: 'Morning or late afternoon',
    accessibility: 'Easy access, walking required',
    reviews: [
      {
        id: 'r1',
        author: 'Amina',
        rating: 5,
        comment: 'Absolutely stunning! The gardens are so peaceful and well-maintained. A must-visit in Rabat.',
        date: '2024-03-15'
      },
      {
        id: 'r2',
        author: 'Mohammed',
        rating: 4,
        comment: 'Beautiful spot for photos. Gets crowded on weekends but worth the visit.',
        date: '2024-02-28'
      }
    ]
  },
  {
    id: '2',
    name: 'Exotic Gardens (Jardins d\'Essais)',
    category: 'nature',
    lat: 33.9926,
    lng: -6.8534,
    description: 'Lush botanical gardens featuring exotic plants from around the world. A perfect escape from the city buzz.',
    images: [
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800',
      'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?w=800'
    ],
    rating: 4.5,
    bestTimeToVisit: 'Spring and Fall',
    accessibility: 'Wheelchair accessible',
    reviews: [
      {
        id: 'r3',
        author: 'Sarah',
        rating: 5,
        comment: 'So many beautiful plants and trees! Great for a relaxing afternoon walk.',
        date: '2024-04-10'
      }
    ]
  },
  {
    id: '3',
    name: 'Bouregreg Marina',
    category: 'nature',
    lat: 34.0242,
    lng: -6.8350,
    description: 'Modern waterfront promenade along the Bouregreg River. Perfect for evening walks and enjoying the sunset.',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'
    ],
    rating: 4.8,
    bestTimeToVisit: 'Evening for sunset',
    accessibility: 'Fully accessible',
    reviews: [
      {
        id: 'r4',
        author: 'Karim',
        rating: 5,
        comment: 'Beautiful marina! Great cafes and restaurants nearby. The sunset views are incredible.',
        date: '2024-03-20'
      },
      {
        id: 'r5',
        author: 'Layla',
        rating: 5,
        comment: 'My favorite spot in Rabat for evening strolls. Very well maintained and safe.',
        date: '2024-04-05'
      }
    ]
  },
  
  // Viewpoints
  {
    id: '4',
    name: 'Kasbah of the Udayas Viewpoint',
    category: 'viewpoint',
    lat: 34.0352,
    lng: -6.8418,
    description: 'Historic fortress with breathtaking views of the Atlantic Ocean and Bou Regreg River. The blue and white streets create a stunning backdrop.',
    images: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800'
    ],
    rating: 4.9,
    bestTimeToVisit: 'Sunset',
    accessibility: 'Some stairs, moderate difficulty',
    reviews: [
      {
        id: 'r6',
        author: 'Yasmine',
        rating: 5,
        comment: 'The most beautiful view in Rabat! Don\'t miss the sunset here.',
        date: '2024-04-01'
      },
      {
        id: 'r7',
        author: 'Omar',
        rating: 5,
        comment: 'Stunning architecture and views. Perfect for photography.',
        date: '2024-03-18'
      }
    ]
  },
  {
    id: '5',
    name: 'Hassan Tower Esplanade',
    category: 'viewpoint',
    lat: 34.0234,
    lng: -6.8217,
    description: 'Historic minaret with a large esplanade offering panoramic views of the city. A UNESCO World Heritage site.',
    images: [
      'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
      'https://images.unsplash.com/photo-1591604129853-b62d32d5c7a4?w=800'
    ],
    rating: 4.8,
    bestTimeToVisit: 'Early morning or late afternoon',
    accessibility: 'Easy access',
    reviews: [
      {
        id: 'r8',
        author: 'Fatima',
        rating: 5,
        comment: 'Impressive historical monument with great views. The architecture is stunning!',
        date: '2024-04-12'
      }
    ]
  },
  {
    id: '6',
    name: 'Rabat Beach Corniche',
    category: 'viewpoint',
    lat: 34.0156,
    lng: -6.8498,
    description: 'Coastal road with spectacular Atlantic Ocean views. Great for sunset watching and beach walks.',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800'
    ],
    rating: 4.6,
    bestTimeToVisit: 'Late afternoon',
    accessibility: 'Easy access, paved walkways',
    reviews: [
      {
        id: 'r9',
        author: 'Hassan',
        rating: 4,
        comment: 'Great spot for walking and enjoying the ocean breeze. Can get windy!',
        date: '2024-03-25'
      }
    ]
  },

  // Sports
  {
    id: '7',
    name: 'Prince Moulay Abdellah Sports Complex',
    category: 'sports',
    lat: 33.9856,
    lng: -6.8603,
    description: 'Large sports complex with football pitches, basketball courts, and running tracks. Open to the public.',
    images: [
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800',
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800'
    ],
    rating: 4.3,
    activities: ['Football', 'Basketball', 'Running', 'Tennis'],
    accessibility: 'Easy access',
    reviews: [
      {
        id: 'r10',
        author: 'Youssef',
        rating: 4,
        comment: 'Great facilities for playing football with friends. Courts are well maintained.',
        date: '2024-04-08'
      }
    ]
  },
  {
    id: '8',
    name: 'Plage de Rabat Beach Sports Area',
    category: 'sports',
    lat: 34.0089,
    lng: -6.8521,
    description: 'Beach area with volleyball courts and space for beach football. Popular spot for water sports.',
    images: [
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800',
      'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800'
    ],
    rating: 4.4,
    activities: ['Beach Volleyball', 'Beach Football', 'Surfing', 'Swimming'],
    bestTimeToVisit: 'Summer months',
    accessibility: 'Beach access, sandy terrain',
    reviews: [
      {
        id: 'r11',
        author: 'Samira',
        rating: 5,
        comment: 'Love playing beach volleyball here! The atmosphere is amazing.',
        date: '2024-04-15'
      }
    ]
  },
  {
    id: '9',
    name: 'Hilton Rabat Tennis Club',
    category: 'sports',
    lat: 33.9912,
    lng: -6.8498,
    description: 'Professional tennis courts available for public booking. Modern facilities and equipment rental.',
    images: [
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800',
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800'
    ],
    rating: 4.6,
    activities: ['Tennis', 'Fitness'],
    accessibility: 'Easy access, parking available',
    reviews: [
      {
        id: 'r12',
        author: 'Mehdi',
        rating: 5,
        comment: 'Excellent tennis courts and very professional staff. Highly recommend!',
        date: '2024-03-30'
      }
    ]
  },

  // Activities
  {
    id: '10',
    name: 'Rabat Karting Track',
    category: 'activities',
    lat: 34.0045,
    lng: -6.8234,
    description: 'Exciting go-kart racing track suitable for all skill levels. Fun activity for groups and families.',
    images: [
      'https://images.unsplash.com/photo-1611078484883-57032f1fa01a?w=800',
      'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=800'
    ],
    rating: 4.7,
    activities: ['Go-Kart Racing'],
    bestTimeToVisit: 'Weekday afternoons for less crowds',
    accessibility: 'Easy access, safety gear provided',
    reviews: [
      {
        id: 'r13',
        author: 'Amine',
        rating: 5,
        comment: 'So much fun! The track is challenging and the karts are fast. Great for groups!',
        date: '2024-04-07'
      },
      {
        id: 'r14',
        author: 'Nadia',
        rating: 4,
        comment: 'Had an amazing time! Staff is friendly and professional.',
        date: '2024-03-22'
      }
    ]
  },
  {
    id: '11',
    name: 'Megamall Bowling & Entertainment',
    category: 'activities',
    lat: 33.9898,
    lng: -6.8612,
    description: 'Modern entertainment center with bowling, arcade games, and family activities. Great for rainy days!',
    images: [
      'https://images.unsplash.com/photo-1560184035-e6a5becda4a7?w=800',
      'https://images.unsplash.com/photo-1626647807822-816d5375191c?w=800'
    ],
    rating: 4.5,
    activities: ['Bowling', 'Arcade Games', 'Laser Tag', 'Cinema'],
    accessibility: 'Fully accessible',
    reviews: [
      {
        id: 'r15',
        author: 'Imane',
        rating: 5,
        comment: 'Perfect place for a fun day out with friends or family. So many activities!',
        date: '2024-04-14'
      }
    ]
  },
  {
    id: '12',
    name: 'Témara Adventure Park',
    category: 'activities',
    lat: 33.9234,
    lng: -6.9067,
    description: 'Outdoor adventure park with zip-lines, climbing walls, and obstacle courses through the trees. Perfect for thrill-seekers!',
    images: [
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800'
    ],
    rating: 4.8,
    activities: ['Zip-lining', 'Tree Climbing', 'Obstacle Courses', 'Rock Climbing'],
    bestTimeToVisit: 'Spring and Fall',
    accessibility: 'Moderate difficulty, age restrictions apply',
    reviews: [
      {
        id: 'r16',
        author: 'Rachid',
        rating: 5,
        comment: 'Amazing adventure park! The zip-line through the forest is incredible. Great for team building.',
        date: '2024-04-03'
      },
      {
        id: 'r17',
        author: 'Salma',
        rating: 5,
        comment: 'So much fun! The staff makes sure everyone is safe. Highly recommend for adventure lovers.',
        date: '2024-03-16'
      }
    ]
  },
  {
    id: '13',
    name: 'Rabat Zoo',
    category: 'activities',
    lat: 33.9776,
    lng: -6.8423,
    description: 'Modern zoo showcasing African wildlife in natural habitats. Educational and entertaining for all ages.',
    images: [
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800',
      'https://images.unsplash.com/photo-1474096888633-54df86e8854d?w=800'
    ],
    rating: 4.6,
    activities: ['Wildlife Viewing', 'Educational Tours', 'Photography'],
    bestTimeToVisit: 'Morning feeding times',
    accessibility: 'Wheelchair accessible',
    reviews: [
      {
        id: 'r18',
        author: 'Zahra',
        rating: 5,
        comment: 'Beautiful zoo with happy animals. The kids loved it! Very clean and well organized.',
        date: '2024-04-11'
      }
    ]
  }
];

export const defaultMapCenter = {
  lat: 34.0209,
  lng: -6.8416,
  zoom: 13
};
