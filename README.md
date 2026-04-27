# Nourish - Healthy Meal Prep & Takeaway Website

A modern, mobile-first Next.js website for Nourish, a healthy meal prep and takeaway brand based in Douglas, Isle of Man.

## 🎨 Brand Identity

**Nourish** provides high-protein, nutrient-dense meals made fresh daily with 100% natural ingredients.

### Brand Colors
- **Primary Orange:** `#D95E25` - Primary buttons, promo bars, highlights
- **Warm Cream:** `#FBF2E0` - Main page background
- **White:** `#FFFFFF` - Cards and content sections
- **Deep Green:** `#025336` - Footer, secondary buttons, accents
- **Charcoal:** `#202020` - All text

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /Users/user/CascadeProjects/nourish
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
nourish/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── our-dishes/          # Dishes page
│   ├── packages/            # Packages page
│   ├── order-online/        # Order page
│   ├── gallery/             # Gallery page
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout with header/footer
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── PromoBar.tsx         # Top promotional bar
│   ├── DishCard.tsx         # Dish display card
│   └── Button.tsx           # Reusable button component
├── lib/                     # Data and utilities
│   ├── types.ts             # TypeScript type definitions
│   └── data.ts              # Business data (dishes, packages, info)
└── public/
    └── images/              # Image assets
        ├── dishes/          # Dish photos
        └── gallery/         # Gallery photos
```

## 📄 Pages

1. **Home** (`/`) - Hero section, offers, featured dishes, reviews, location
2. **Our Dishes** (`/our-dishes`) - Full menu with filters
3. **Packages** (`/packages`) - 6-box and 12-box meal packages
4. **Order Online** (`/order-online`) - Order options and information
5. **Gallery** (`/gallery`) - Photo gallery with categories
6. **Contact** (`/contact`) - Contact form, info, and map

## 🖼️ Adding Images

The site currently uses placeholder images. To add real images:

1. Navigate to `public/images/`
2. Read the `README.md` in that directory for specifications
3. Add your dish photos to `public/images/dishes/`
4. Add gallery photos to `public/images/gallery/`

**Required dish images:**
- bbq-chicken.jpg
- beef-chilli.jpg
- chicken-burrito.jpg
- lasagna-wrap.jpg
- pizza-slice.jpg
- peri-chicken.jpg
- harissa-beef.jpg
- dhaba-curry.jpg
- bobotie.jpg
- steak-rice.jpg
- teriyaki-salmon.jpg
- veggie-bbq.jpg
- veggie-flatbread.jpg
- prego-steak.jpg

## ⚙️ Customization

### Update Business Information

Edit `lib/data.ts` to update:
- Business address
- Phone number
- Email
- Opening hours
- Social media links

### Update Dishes

Edit the `dishes` array in `lib/data.ts` to:
- Add new dishes
- Update prices
- Modify descriptions
- Change nutritional information

### Update Packages

Edit the `packages` array in `lib/data.ts` to modify pricing and meal counts.

## 🎯 Features

- ✅ Mobile-first responsive design
- ✅ Modern card-based layout
- ✅ Interactive filtering (dishes page)
- ✅ Contact form
- ✅ Google Maps integration
- ✅ Social media links
- ✅ SEO-optimized
- ✅ Fast loading with Next.js
- ✅ TypeScript for type safety

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Ready for Vercel, Netlify, or any Node.js host

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📝 License

This project is proprietary and confidential.

## 🤝 Support

For questions or support, contact the Nourish team:
- **Phone:** +44 1624 123456
- **Email:** hello@nourishiom.com
- **Address:** 6 Prospect Hill, Douglas, IM1 1EJ, Isle of Man
