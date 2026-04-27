export interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
  tags: string[];
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
  image: string;
  category: 'box' | 'wrap' | 'burrito' | 'pizza' | 'flatbread';
}

export interface Package {
  numberOfMeals: number;
  totalPrice: number;
  pricePerMeal: number;
  savings: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  social: {
    facebook: string;
    instagram?: string;
  };
}
