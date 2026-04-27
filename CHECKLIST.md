# Nourish Website - Launch Checklist

Use this checklist to prepare your website for launch.

## 📋 Pre-Launch Tasks

### Content & Data
- [ ] Update phone number in `lib/data.ts`
- [ ] Update email address in `lib/data.ts`
- [ ] Verify opening hours are correct
- [ ] Update social media URLs (Facebook, Instagram)
- [ ] Review all dish names and descriptions
- [ ] Verify all prices are current
- [ ] Check nutritional information (protein, carbs, fat, calories)
- [ ] Update package pricing if needed

### Images (Critical!)
- [ ] Add all 14 dish photos to `public/images/dishes/`
- [ ] Add gallery photos to `public/images/gallery/`
- [ ] Optimize images for web (< 200KB each)
- [ ] Ensure consistent photo styling
- [ ] Test that all images load correctly

### Pages Review
- [ ] Home page - Check hero text and offers
- [ ] Our Dishes - Verify all 14 dishes display correctly
- [ ] Packages - Confirm pricing and savings
- [ ] Order Online - Update order process if needed
- [ ] Gallery - Add real photos
- [ ] Contact - Test contact form submission

### Technical
- [ ] Test on mobile devices (iPhone, Android)
- [ ] Test on tablets (iPad, etc.)
- [ ] Test on desktop browsers (Chrome, Safari, Firefox)
- [ ] Verify all links work
- [ ] Test navigation menu on mobile
- [ ] Check page load speed
- [ ] Test contact form (set up backend if needed)

### SEO & Marketing
- [ ] Update meta description in `app/layout.tsx`
- [ ] Add Google Analytics (if desired)
- [ ] Set up Google Maps embed with correct coordinates
- [ ] Verify social media links work
- [ ] Add favicon (replace `app/favicon.ico`)

### Legal & Compliance
- [ ] Add privacy policy (if collecting data)
- [ ] Add terms of service
- [ ] Ensure contact form complies with data protection
- [ ] Add cookie consent if needed

## 🚀 Deployment

### Before Deploying
- [ ] Run `npm run build` to check for errors
- [ ] Test the production build locally
- [ ] Review all pages one final time
- [ ] Back up any custom changes

### Deploy Options

#### Option 1: Vercel (Recommended)
1. [ ] Create Vercel account
2. [ ] Connect GitHub repository
3. [ ] Import project
4. [ ] Deploy with one click
5. [ ] Set up custom domain

#### Option 2: Netlify
1. [ ] Create Netlify account
2. [ ] Connect GitHub repository
3. [ ] Set build command: `npm run build`
4. [ ] Set publish directory: `.next`
5. [ ] Deploy

### Post-Deployment
- [ ] Test live site on all devices
- [ ] Verify all images load
- [ ] Test contact form on live site
- [ ] Check Google Maps works
- [ ] Test all navigation links
- [ ] Share with team for feedback

## 📱 Marketing Launch

- [ ] Update Google Business Profile with website URL
- [ ] Post on Facebook about new website
- [ ] Post on Instagram about new website
- [ ] Update printed materials with website URL
- [ ] Add website to email signature
- [ ] Update any online directories

## 🔧 Optional Enhancements

### Future Improvements
- [ ] Add online ordering integration (e.g., Square, Toast)
- [ ] Set up email notifications for contact form
- [ ] Add customer testimonials section
- [ ] Create blog for recipes/nutrition tips
- [ ] Add newsletter signup
- [ ] Integrate with delivery services
- [ ] Add allergen information to dishes
- [ ] Create printable menu PDF

### Analytics & Tracking
- [ ] Set up Google Analytics
- [ ] Track conversion goals
- [ ] Monitor page performance
- [ ] Set up Google Search Console
- [ ] Track social media referrals

## ✅ Launch Day

- [ ] Final check of all pages
- [ ] Announce on social media
- [ ] Send email to customer list
- [ ] Monitor for any issues
- [ ] Celebrate! 🎉

---

## 📞 Need Help?

If you need assistance with any of these tasks:
- Review the `README.md` for technical documentation
- Check `SETUP.md` for quick start guide
- Edit `lib/data.ts` for content changes
- Refer to Next.js documentation for advanced features

**Your website is ready - just complete this checklist and launch!**
