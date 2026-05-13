import { Dish, Package, BusinessInfo } from './types';

export const dishes: Dish[] = [
  {
    id: 'chicken-bacon-ranch',
    name: 'Chicken, Bacon & Ranch Burrito',
    price: 9.95,
    description: 'Loaded burrito with chicken, crispy bacon, and ranch',
    tags: ['High Protein'],
    protein: 40,
    carbs: 45,
    fat: 18,
    calories: 510,
    image: '/images/dishes/chicken-bacon-and-ranch-burrito.jpg',
    category: 'burrito'
  },
  {
    id: 'lasagna-wrap',
    name: 'High Protein Lasagna Wrap',
    price: 9.95,
    description: 'All the flavors of lasagna in a convenient wrap',
    tags: ['High Protein'],
    protein: 38,
    carbs: 42,
    fat: 14,
    calories: 460,
    image: '/images/dishes/high-protein-lasagna-wrap.jpg',
    category: 'wrap'
  },
  {
    id: 'peri-chicken-egg',
    name: 'High Protein Peri Chicken & 2 Egg Box',
    price: 9.95,
    description: 'Spicy peri chicken with two protein-packed eggs',
    tags: ['Gluten Free', 'High Protein'],
    protein: 48,
    carbs: 25,
    fat: 14,
    calories: 440,
    image: '/images/dishes/high-protein-perry-chicken-and-two-egg-box.jpg',
    category: 'box'
  },
  {
    id: 'chicken-caesar-wrap',
    name: 'High Protein Chicken Caesar Wrap',
    price: 9.95,
    description: 'Fresh chicken breast, Romaine lettuce, Foccacia croutons, Homemade Caesar sauce, tomato, cucumber, onions & egg',
    tags: ['High Protein'],
    protein: 44,
    carbs: 34,
    fat: 20,
    calories: 503,
    image: '/images/dishes/High-Protein-Chicken-Caesar-Wrap.jpg',
    category: 'wrap'
  },
  {
    id: 'bbq-chicken-potato',
    name: 'BBQ Chicken & Roasted Potato',
    price: 9.95,
    description: 'Tender BBQ chicken with perfectly roasted potatoes',
    tags: ['Gluten Free', 'High Protein'],
    protein: 45,
    carbs: 38,
    fat: 12,
    calories: 450,
    image: '/images/dishes/bbq-chicken-and-roast-potato.jpg',
    category: 'box'
  },
  {
    id: 'chicken-tikka-wrap',
    name: 'High Protein Chicken Tikka Wrap',
    price: 9.95,
    description: 'Freshly marinated chicken breast, Homemade Tikka sauce, peppers, onion, tomato, cucumber, fresh herbs & spices',
    tags: ['High Protein'],
    protein: 47,
    carbs: 33,
    fat: 15,
    calories: 459,
    image: '/images/dishes/High-Protein-Chicken-Tikka-Wrap.jpg',
    category: 'wrap'
  },
  {
    id: 'harissa-beef',
    name: 'Hot Honey Harissa Beef & Sweet Potato Box',
    price: 9.95,
    description: 'Tender beef with sweet potato in hot honey harissa sauce',
    tags: ['Gluten Free', 'High Protein'],
    protein: 43,
    carbs: 36,
    fat: 13,
    calories: 455,
    image: '/images/dishes/hot-honey-harissa-beef-and-sweet-potato-box.jpg',
    category: 'box'
  },
  {
    id: 'steak-rice',
    name: 'Steak & Nourish Rice Box',
    price: 9.95,
    description: 'Premium steak with our signature Nourish rice',
    tags: ['Gluten Free', 'High Protein'],
    protein: 46,
    carbs: 40,
    fat: 15,
    calories: 490,
    image: '/images/dishes/steak-and-nourish-rice-box.jpg',
    category: 'box'
  },
  {
    id: 'prego-steak',
    name: 'Prego Steak',
    price: 9.95,
    description: 'Portuguese-style garlic steak sandwich',
    tags: ['High Protein'],
    protein: 44,
    carbs: 38,
    fat: 16,
    calories: 480,
    image: '/images/dishes/prego-steak.jpg',
    category: 'wrap'
  },
  {
    id: 'bobotie-beef',
    name: 'South African "Bobotie" Beef Box',
    price: 9.95,
    description: 'Traditional South African spiced beef dish',
    tags: ['High Protein'],
    protein: 41,
    carbs: 35,
    fat: 14,
    calories: 445,
    image: '/images/dishes/south-african-bobotie-beef-box.jpg',
    category: 'box'
  },
  {
    id: 'beef-steak-chilli',
    name: 'Beef Steak Chilli & Mash Box',
    price: 9.95,
    description: 'Hearty beef steak chilli served with creamy mash',
    tags: ['High Protein'],
    protein: 42,
    carbs: 40,
    fat: 15,
    calories: 475,
    image: '/images/dishes/beef-steak-chilli-and-mash-box.jpg',
    category: 'box'
  },
  {
    id: 'teriyaki-salmon',
    name: 'Teriyaki Salmon & Nourish Rice Box',
    price: 9.95,
    description: 'Fresh salmon glazed with teriyaki sauce',
    tags: ['Gluten Free', 'High Protein'],
    protein: 38,
    carbs: 42,
    fat: 16,
    calories: 470,
    image: '/images/dishes/teriyaki-salmon-and-nourish-rice-box.jpg',
    category: 'box'
  },
  {
    id: 'chicken-dhaba-curry',
    name: 'Low Fat Chicken "Dhaba" Curry & Rice',
    price: 9.95,
    description: 'Authentic Indian-style chicken curry with rice',
    tags: ['Gluten Free', 'High Protein'],
    protein: 40,
    carbs: 42,
    fat: 8,
    calories: 400,
    image: '/images/dishes/low-fat-chicken-dhaba-curry-and-rice.jpg',
    category: 'box'
  },
  {
    id: 'veggie-flatbread',
    name: 'Veggie High Protein Flatbread',
    price: 9.95,
    description: 'Loaded vegetarian flatbread packed with protein',
    tags: ['Vegetarian', 'High Protein'],
    protein: 30,
    carbs: 48,
    fat: 12,
    calories: 430,
    image: '/images/dishes/veggie-high-protein-flatbread.jpg',
    category: 'flatbread'
  },
  {
    id: 'veggie-bbq-chicken',
    name: 'Vegetarian BBQ "Chicken" & Roasted Potato',
    price: 9.95,
    description: 'Plant-based BBQ chicken with roasted potatoes',
    tags: ['Vegetarian', 'High Protein'],
    protein: 32,
    carbs: 45,
    fat: 10,
    calories: 410,
    image: '/images/dishes/vegetarian-barbecue-chicken-and-roasted-potato.jpg',
    category: 'box'
  }
];

export const packages: Package[] = [
  {
    numberOfMeals: 6,
    totalPrice: 52.50,
    pricePerMeal: 8.75,
    savings: 'Save 10%'
  },
  {
    numberOfMeals: 12,
    totalPrice: 105.00,
    pricePerMeal: 8.75,
    savings: 'Save up to 30%'
  }
];

export const businessInfo: BusinessInfo = {
  name: 'Nourish',
  tagline: 'High-protein, nutrient-dense meals made fresh in Douglas, Isle of Man.',
  location: 'Douglas, Isle of Man',
  address: '6 Prospect Hill, Douglas, IM1 1EJ, Isle of Man',
  phone: '+44 7624 462222',
  email: 'andy@nourish.im',
  whatsapp: 'https://wa.me/447624462222',
  hours: {
    monday: '10:00am – 4:00pm',
    tuesday: '10:00am – 4:00pm',
    wednesday: '10:00am – 4:00pm',
    thursday: '10:00am – 4:00pm',
    friday: '10:00am – 4:00pm',
    saturday: '12:00pm – 4:00pm',
    sunday: 'Closed'
  },
  social: {
    facebook: 'https://facebook.com/nourishiom',
    instagram: 'https://instagram.com/nourishiom'
  }
};
