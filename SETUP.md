# Nourish Website - Quick Setup Guide

## ✅ Project Created Successfully!

Your Nourish website is ready to use. The development server is running at:
- **Local:** http://localhost:3000

## 🎯 What's Included

### Pages (All Complete)
- ✅ **Home** - Hero, offers, featured dishes, reviews, location
- ✅ **Our Dishes** - Full menu with 14 dishes and filtering
- ✅ **Packages** - 6-box and 12-box meal packages
- ✅ **Order Online** - Order options and delivery info
- ✅ **Gallery** - Photo gallery with categories
- ✅ **Contact** - Contact form, info, and map

### Components
- ✅ Header with navigation
- ✅ Footer with business info
- ✅ Promo bar
- ✅ Dish cards with macros
- ✅ Reusable buttons

### Features
- ✅ Mobile-first responsive design
- ✅ Brand colors applied throughout
- ✅ Interactive filtering on dishes page
- ✅ Contact form
- ✅ Google Maps integration
- ✅ Social media links
- ✅ All 14 dishes from your menu

## 🚀 Next Steps

### 1. Add Real Images (Important!)
The site currently uses placeholder images. Add your photos:

```bash
# Navigate to images directory
cd public/images

# Add dish photos to dishes/ folder
# Add gallery photos to gallery/ folder
```

See `public/images/README.md` for image specifications.

### 2. Update Business Information
Edit `lib/data.ts` to update:
- Phone number (currently placeholder)
- Email address
- Social media URLs
- Opening hours (if different)

### 3. Customize Content
- Update dish descriptions in `lib/data.ts`
- Adjust prices if needed
- Modify package pricing
- Update nutritional macros

### 4. Test All Pages
Visit each page to ensure everything works:
- http://localhost:3000 (Home)
- http://localhost:3000/our-dishes
- http://localhost:3000/packages
- http://localhost:3000/order-online
- http://localhost:3000/gallery
- http://localhost:3000/contact

### 5. Deploy
When ready, deploy to:
- **Vercel** (recommended, easiest)
- **Netlify**
- Any Node.js hosting

## 📝 Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

## 🎨 Brand Colors Reference

- Primary Orange: `#D95E25`
- Warm Cream: `#FBF2E0`
- White: `#FFFFFF`
- Deep Green: `#025336`
- Charcoal: `#202020`

## 📞 Support

If you need help customizing the site, refer to:
- `README.md` - Full documentation
- `lib/data.ts` - All content and data
- `app/globals.css` - Styling

## ✨ Features to Note

1. **Mobile Menu** - Hamburger menu on mobile devices
2. **Dish Filters** - Filter by protein, dietary needs, or meal type
3. **Package Cards** - Highlighted savings on meal packages
4. **Contact Form** - Ready for backend integration
5. **Responsive Design** - Looks great on all devices

---

**Your Nourish website is ready to go! 🎉**

Open http://localhost:3000 in your browser to see it in action.
