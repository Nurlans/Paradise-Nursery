export interface Plant {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  benefits?: string[];
}

export const plants: Plant[] = [
  // Aromatic Plants
  {
    id: 1,
    name: "Lavender",
    category: "Aromatic Plants",
    price: 24.99,
    image: "https://images.pexels.com/photos/1533727/pexels-photo-1533727.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A fragrant herb known for its calming properties and beautiful purple flowers.",
    benefits: ["Aromatherapy", "Relaxation", "Natural fragrance"]
  },
  {
    id: 2,
    name: "Rosemary",
    category: "Aromatic Plants",
    price: 18.99,
    image: "https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "An evergreen herb with needle-like leaves and a woody, pungent fragrance.",
    benefits: ["Culinary use", "Memory enhancement", "Antioxidant properties"]
  },
  {
    id: 3,
    name: "Mint",
    category: "Aromatic Plants",
    price: 16.99,
    image: "https://images.pexels.com/photos/4871316/pexels-photo-4871316.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Fresh, cooling herb perfect for teas, cooking, and natural pest control.",
    benefits: ["Digestive aid", "Fresh breath", "Natural cooling"]
  },
  {
    id: 4,
    name: "Basil",
    category: "Aromatic Plants",
    price: 15.99,
    image: "https://images.pexels.com/photos/4750268/pexels-photo-4750268.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Sweet and aromatic herb essential for cooking and natural remedies.",
    benefits: ["Anti-inflammatory", "Culinary excellence", "Natural repellent"]
  },

  // Medicinal Plants
  {
    id: 5,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 22.99,
    image: "https://images.pexels.com/photos/6297118/pexels-photo-6297118.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Succulent plant renowned for its healing gel and air-purifying qualities.",
    benefits: ["Skin healing", "Air purification", "Natural moisturizer"]
  },
  {
    id: 6,
    name: "Echinacea",
    category: "Medicinal Plants",
    price: 19.99,
    image: "https://images.pexels.com/photos/6120379/pexels-photo-6120379.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Purple coneflower known for boosting immune system and beautiful blooms.",
    benefits: ["Immune support", "Cold prevention", "Beautiful flowers"]
  },
  {
    id: 7,
    name: "Chamomile",
    category: "Medicinal Plants",
    price: 17.99,
    image: "https://images.pexels.com/photos/7195797/pexels-photo-7195797.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Gentle herb with daisy-like flowers, perfect for relaxing teas.",
    benefits: ["Sleep aid", "Stress relief", "Gentle on skin"]
  },
  {
    id: 8,
    name: "Calendula",
    category: "Medicinal Plants",
    price: 20.99,
    image: "https://images.pexels.com/photos/1082304/pexels-photo-1082304.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Bright orange flowers with powerful healing and anti-inflammatory properties.",
    benefits: ["Wound healing", "Skin care", "Anti-inflammatory"]
  },

  // Indoor Plants
  {
    id: 9,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 32.99,
    image: "https://images.pexels.com/photos/7913147/pexels-photo-7913147.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Low-maintenance plant that purifies air and tolerates low light conditions.",
    benefits: ["Air purification", "Low maintenance", "Oxygen production"]
  },
  {
    id: 10,
    name: "Pothos",
    category: "Indoor Plants",
    price: 26.99,
    image: "https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Trailing vine with heart-shaped leaves, perfect for hanging baskets.",
    benefits: ["Easy care", "Air cleaning", "Beautiful trailing"]
  },
  {
    id: 11,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 29.99,
    image: "https://images.pexels.com/photos/6663994/pexels-photo-6663994.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Elegant plant with white flowers and glossy green leaves.",
    benefits: ["Air purification", "Low light tolerant", "Beautiful blooms"]
  },
  {
    id: 12,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 34.99,
    image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Glossy-leaved plant that adds a touch of elegance to any indoor space.",
    benefits: ["Air purification", "Statement plant", "Easy care"]
  },

  // Outdoor Plants
  {
    id: 13,
    name: "Marigold",
    category: "Outdoor Plants",
    price: 14.99,
    image: "https://images.pexels.com/photos/1327373/pexels-photo-1327373.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Vibrant orange and yellow flowers that repel garden pests naturally.",
    benefits: ["Pest control", "Colorful blooms", "Easy to grow"]
  },
  {
    id: 14,
    name: "Sunflower",
    category: "Outdoor Plants",
    price: 21.99,
    image: "https://images.pexels.com/photos/33045/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=400",
    description: "Tall, cheerful flowers that follow the sun and attract beneficial insects.",
    benefits: ["Attracts pollinators", "Edible seeds", "Cheerful appearance"]
  },
  {
    id: 15,
    name: "Rose Bush",
    category: "Outdoor Plants",
    price: 39.99,
    image: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Classic flowering bush with fragrant blooms in various colors.",
    benefits: ["Beautiful fragrance", "Cut flowers", "Garden centerpiece"]
  },
  {
    id: 16,
    name: "Tomato Plant",
    category: "Outdoor Plants",
    price: 12.99,
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Productive vegetable plant that provides fresh, homegrown tomatoes.",
    benefits: ["Fresh vegetables", "High yield", "Nutritious fruit"]
  }
];