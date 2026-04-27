# Getting Started with Your Nourish Website

Welcome! Your Nourish website is complete and running. This guide will help you get oriented.

## 🌐 View Your Website

**The site is currently running at:** http://localhost:3000

Open this URL in your browser to see your website live!

---

## 📱 Browse the Pages

Click through all the pages to see what's been built:

1. **Home** - http://localhost:3000
   - Hero section with "Welcome to Nourish"
   - 10% off promo banner
   - Featured dishes
   - Customer reviews
   - Location and hours

2. **Our Dishes** - http://localhost:3000/our-dishes
   - All 14 dishes with photos (placeholders)
   - Filter buttons to sort by type
   - Each dish shows price and nutritional info

3. **Packages** - http://localhost:3000/packages
   - 6-box package (£52.50)
   - 12-box package (£105)
   - How it works section

4. **Order Online** - http://localhost:3000/order-online
   - Three ordering options
   - Delivery information

5. **Gallery** - http://localhost:3000/gallery
   - Photo grid (placeholders ready for your images)
   - Filter by category

6. **Contact** - http://localhost:3000/contact
   - Contact form
   - Business information
   - Google Maps

---

## 🎨 What You're Seeing

### Brand Colors
Notice the consistent color scheme throughout:
- **Orange (#D95E25)** - Primary buttons and highlights
- **Cream (#FBF2E0)** - Page backgrounds
- **Green (#025336)** - Footer and secondary elements
- **Charcoal (#202020)** - Text

### Placeholder Images
You'll see emoji placeholders (🍽️, 🍱, etc.) where dish photos should be. This is intentional - you'll replace these with your actual food photos.

### Mobile Responsive
Try resizing your browser window or viewing on your phone. The site adapts to all screen sizes.

---

## ✏️ Making Changes

### Update Your Contact Information

1. Open the file: `lib/data.ts`
2. Find the `businessInfo` section at the bottom
3. Update:
   - Phone number
   - Email address
   - Social media URLs
   - Opening hours (if different)

Example:
```typescript
export const businessInfo: BusinessInfo = {
  name: 'Nourish',
  phone: '+44 1624 YOUR-NUMBER',  // ← Change this
  email: 'your-email@nourish.com', // ← Change this
  // ... etc
};
```

### Update Dish Information

In the same file (`lib/data.ts`), find the `dishes` array to:
- Update prices
- Change descriptions
- Modify nutritional information
- Add or remove dishes

### Change Package Pricing

Find the `packages` array in `lib/data.ts` to update meal package pricing.

---

## 📸 Adding Your Photos

### Step 1: Prepare Your Images
- Take high-quality photos of your dishes
- Recommended size: 800x600px
- Format: JPG or WebP
- Keep file size under 200KB each

### Step 2: Name Your Files
Name them exactly as listed:
- `bbq-chicken.jpg`
- `beef-chilli.jpg`
- `chicken-burrito.jpg`
- etc. (see full list in `public/images/README.md`)

### Step 3: Add to Project
1. Navigate to: `public/images/dishes/`
2. Copy your photos into this folder
3. Refresh your browser - images will appear automatically!

### Gallery Photos
Add gallery photos to: `public/images/gallery/`
- `meal-1.jpg` through `meal-6.jpg`
- `wrap-1.jpg`, `wrap-2.jpg`
- `shop-1.jpg`, `shop-2.jpg`
- `behind-1.jpg`, `behind-2.jpg`

---

## 🧪 Testing Your Changes

After making changes:

1. **Save the file** (Cmd+S or Ctrl+S)
2. **Check your browser** - Next.js auto-refreshes
3. **Test on mobile** - Resize browser or use phone
4. **Check all pages** - Make sure nothing broke

---

## 🚀 When You're Ready to Launch

### Pre-Launch Checklist
- [ ] Added all dish photos
- [ ] Updated contact information
- [ ] Tested on mobile and desktop
- [ ] Reviewed all pages
- [ ] Verified all links work

### Deploy to Vercel (Easiest)
1. Create account at https://vercel.com
2. Click "Import Project"
3. Connect to your code (or upload folder)
4. Click "Deploy"
5. Done! You'll get a live URL

### Deploy to Netlify
1. Create account at https://netlify.com
2. Drag and drop your project folder
3. Wait for build to complete
4. Done! You'll get a live URL

---

## 📚 Need More Help?

### Documentation Files
- **README.md** - Technical documentation
- **SETUP.md** - Quick setup guide
- **CHECKLIST.md** - Pre-launch checklist
- **PROJECT_SUMMARY.md** - Complete overview
- **GETTING_STARTED.md** - This file!

### Common Tasks

**Stop the development server:**
- Press `Ctrl+C` in the terminal

**Restart the server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Check for errors:**
```bash
npm run lint
```

---

## 🎯 Your Next 3 Steps

1. **Browse the site** - Click through all pages at http://localhost:3000
2. **Add your photos** - Replace placeholder images with real food photos
3. **Update contact info** - Edit `lib/data.ts` with your real details

---

## 💡 Tips

- **Save often** - Changes appear automatically in browser
- **Test mobile** - Most customers will view on phones
- **Use good photos** - Food photography makes a huge difference
- **Keep it simple** - Don't over-customize at first
- **Deploy early** - Get feedback from real users

---

## ✨ What Makes This Site Great

1. **Fast** - Built with Next.js for speed
2. **Mobile-First** - Looks perfect on phones
3. **Easy to Update** - All content in one file
4. **Modern Design** - Clean, professional look
5. **SEO Ready** - Google will find you
6. **Production Ready** - Deploy anytime

---

## 🎉 You're All Set!

Your Nourish website is ready to go. Start by browsing http://localhost:3000, then follow the steps above to customize it with your content.

**Questions?** Check the other documentation files or refer to the Next.js documentation at https://nextjs.org/docs

**Ready to launch?** See CHECKLIST.md for the complete pre-launch checklist.

---

**Welcome to your new website! 🚀**
