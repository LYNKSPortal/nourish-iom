import { Dish, Package, BusinessInfo } from './types';

export const dishes: Dish[] = [
  {
    id: 'chicken-bacon-ranch',
    name: 'Chicken, Bacon & Ranch Burrito',
    price: 9.95,
    description: 'High Protein Chicken, Bacon, Tomato & Black bean Burritos with a low fat homemade Ranch sauce with seasoned cauliflower rice.',
    tags: ['High Protein'],
    protein: 48,
    carbs: 35,
    fat: 15,
    calories: 456,
    image: '/images/dishes/chicken-bacon-and-ranch-burrito.jpg',
    category: 'burrito'
  },
  {
    id: 'lasagna-wrap',
    name: 'High Protein Lasagna Wrap',
    price: 9.95,
    description: 'Lean Beef & low fat Pork mince mixed with a rich tomato, garlic & basil Ragu & layered with our special high protein Bechamel sauce.',
    tags: ['High Protein'],
    protein: 52,
    carbs: 33,
    fat: 24,
    calories: 478,
    image: '/images/dishes/high-protein-lasagna-wrap.jpg',
    category: 'wrap'
  },
  {
    id: 'peri-chicken-egg',
    name: 'High Protein Peri Chicken & 2 Egg Box',
    price: 9.95,
    description: 'Grilled chicken & 2 boiled eggs chopped through our Nourish rice with Nando\'s Peri sauce, peas, green beans, kale, broccoli, lemon, chickpeas & spinach.',
    tags: ['Gluten Free', 'High Protein'],
    protein: 67,
    carbs: 38,
    fat: 27,
    calories: 643,
    image: '/images/dishes/high-protein-perry-chicken-and-two-egg-box.jpg',
    category: 'box'
  },
  {
    id: 'chicken-caesar-wrap',
    name: 'High Protein Chicken Caesar Wrap',
    price: 9.95,
    description: 'High Protein Chicken Caesar wrap with fresh chicken breast, Crispy lean smoked bacon, Romaine lettuce, "Ross bakery" Focaccia croutons, homemade Caesar sauce, tomato, cucumber, onions & egg.',
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
    description: 'Tender BBQ chicken served with crispy roasted potatoes seasoned with garlic, sea salt, and rosemary, accompanied by wilted spinach, kale, and broccoli.',
    tags: ['Gluten Free', 'High Protein'],
    protein: 57,
    carbs: 37,
    fat: 14,
    calories: 539,
    image: '/images/dishes/bbq-chicken-and-roast-potato.jpg',
    category: 'box'
  },
  {
    id: 'chicken-tikka-wrap',
    name: 'High Protein Chicken Tikka Wrap',
    price: 9.95,
    description: 'High Protein Chicken Tikka Wrap with freshly marinated chicken breast, Homemade Tikka sauce, peppers, onion, tomato, cucumber, fresh herbs & spices.',
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
    description: 'Harissa seasoned lean beef drizzled with hot honey and served with roasted sweet potato, tahini cottage cheese, and pickled red onion.',
    tags: ['Gluten Free', 'High Protein'],
    protein: 41,
    carbs: 39,
    fat: 20,
    calories: 533,
    image: '/images/dishes/hot-honey-harissa-beef-and-sweet-potato-box.jpg',
    category: 'box'
  },
  {
    id: 'steak-rice',
    name: 'Steak & Nourish Rice Box',
    price: 9.95,
    description: 'Pure & Simple Beef Steak & Nourish rice box with peas, green beans, kale, broccoli, lemon, chickpeas, soya sauce & spinach.',
    tags: ['Gluten Free', 'High Protein'],
    protein: 45,
    carbs: 53,
    fat: 16,
    calories: 510,
    image: '/images/dishes/steak-and-nourish-rice-box.jpg',
    category: 'box'
  },
  {
    id: 'prego-steak',
    name: 'Prego Steak',
    price: 9.95,
    description: 'Portuguese Prego Steak high protein wrap. Seared lean beef steak, fresh garlic & rocket served with Chipotle low fat mayo, Piri Piri sauce & Low fat Cheddar.',
    tags: ['High Protein'],
    protein: 36,
    carbs: 34,
    fat: 16,
    calories: 410,
    image: '/images/dishes/prego-steak.jpg',
    category: 'wrap'
  },
  {
    id: 'bobotie-beef',
    name: 'South African "Bobotie" Beef Box',
    price: 9.95,
    description: 'Curried ground Beef with turmeric & chilli with a savoury egg topping, served with a spiced apricot chutney & turmeric rice with raisins.',
    tags: ['Gluten Free', 'High Protein'],
    protein: 44,
    carbs: 49,
    fat: 11,
    calories: 450,
    image: '/images/dishes/south-african-bobotie-beef-box.jpg',
    category: 'box'
  },
  {
    id: 'beef-steak-chilli',
    name: 'Beef Steak Chilli & Mash Box',
    price: 9.95,
    description: 'Tender chunks of slow cooked steak with beans, tomatoes & fresh herbs and spices, perfect with a rich creamy seasoned mashed potato.',
    tags: ['Gluten Free', 'High Protein'],
    protein: 46,
    carbs: 45,
    fat: 22,
    calories: 576,
    image: '/images/dishes/beef-steak-chilli-and-mash-box.jpg',
    category: 'box'
  },
  {
    id: 'teriyaki-salmon',
    name: 'Teriyaki Salmon & Nourish Rice Box',
    price: 9.95,
    description: 'Fresh Salmon with Basmati rice, green beans, kale, spinach, chickpeas, broccoli & peas with a Japanese pickled cucumber salad.',
    tags: ['Gluten Free', 'High Protein'],
    protein: 43,
    carbs: 42,
    fat: 12,
    calories: 497,
    image: '/images/dishes/teriyaki-salmon-and-nourish-rice-box.jpg',
    category: 'box'
  },
  {
    id: 'chicken-dhaba-curry',
    name: 'Low Fat Chicken "Dhaba" Curry & Rice',
    price: 9.95,
    description: 'A rich & creamy low fat "Dhaba" Chicken Curry with garlic, chilli, Masala spices, ginger & cumin served with vegetable "Pulao" Rice.',
    tags: ['Gluten Free', 'High Protein'],
    protein: 46,
    carbs: 34,
    fat: 17,
    calories: 485,
    image: '/images/dishes/low-fat-chicken-dhaba-curry-and-rice.jpg',
    category: 'box'
  },
  {
    id: 'veggie-flatbread',
    name: 'Veggie High Protein Flatbread',
    price: 9.95,
    description: 'Aubergine, Rocket, Low fat Mozzarella & cheddar, Balsamic reduction, Peppers, Onion, Carrot & Cherry Tomatoes.',
    tags: ['Vegetarian', 'High Protein'],
    protein: 26,
    carbs: 40,
    fat: 18,
    calories: 428,
    image: '/images/dishes/veggie-high-protein-flatbread.jpg',
    category: 'flatbread'
  },
  {
    id: 'veggie-bbq-chicken',
    name: 'Vegetarian BBQ "Chicken" & Roasted Potato',
    price: 9.95,
    description: 'Plant based chicken with BBQ sauce, served with crispy roasted potatoes seasoned with garlic, sea salt, and rosemary, accompanied by wilted spinach, kale, and broccoli.',
    tags: ['Vegetarian', 'High Protein'],
    protein: 25,
    carbs: 51,
    fat: 14,
    calories: 441,
    image: '/images/dishes/vegetarian-barbecue-chicken-and-roasted-potato.jpg',
    category: 'box'
  },
  {
    id: 'shakey-wakey-gains',
    name: 'Shakey Wakey Gains',
    price: 4.75,
    description: 'Thick and creamy protein shakes made with fresh fruits, no fat Greek yogurt and rich almond butter, fuel your body with delicious guilt free nutrition in every sip.',
    tags: ['Vegetarian', 'Gluten Free'],
    protein: 32,
    carbs: 16,
    fat: 7,
    calories: 240,
    image: '/images/dishes/Shakey-Wakey-Gains.jpg',
    category: 'drink'
  },
  {
    id: 'stacked-and-jacked',
    name: 'Stacked & Jacked',
    price: 8.00,
    description: 'Supercharged protein waffles infused with salted caramel and vanilla, drizzled with rich, low-calorie chocolate or fruit sauce.',
    tags: ['Vegetarian'],
    protein: 39,
    carbs: 24,
    fat: 2,
    calories: 271,
    image: '/images/dishes/Stacked-&-Jacked.jpg',
    category: 'dessert'
  },
  {
    id: 'makin-pancakes',
    name: 'Makin Pancakes',
    price: 7.00,
    description: 'Fluffy banana protein pancakes stacked with dark chocolate chips & drizzled in sugar free maple syrup.',
    tags: ['Vegetarian'],
    protein: 26,
    carbs: 53,
    fat: 15,
    calories: 450,
    image: '/images/dishes/Makin-Pancakes.jpg',
    category: 'dessert'
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
