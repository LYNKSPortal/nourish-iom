# Nourish Website - Quick Reference Card

## 🔗 Important URLs

- **Local Site:** http://localhost:3000
- **Browser Preview:** Available in your IDE

## 📁 Key Files to Edit

| What to Change | File to Edit | Line/Section |
|----------------|--------------|--------------|
| Phone number | `lib/data.ts` | Line 188 (businessInfo) |
| Email address | `lib/data.ts` | Line 189 (businessInfo) |
| Opening hours | `lib/data.ts` | Lines 190-197 |
| Social media | `lib/data.ts` | Lines 198-201 |
| Dish prices | `lib/data.ts` | Lines 5-180 (dishes array) |
| Package pricing | `lib/data.ts` | Lines 182-193 (packages array) |
| Page titles | `app/layout.tsx` | Lines 7-10 (metadata) |

## 🖼️ Image Locations

| Image Type | Location | Files Needed |
|------------|----------|--------------|
| Dish photos | `public/images/dishes/` | 14 JPG files |
| Gallery photos | `public/images/gallery/` | 12 JPG files |
| Favicon | `app/favicon.ico` | 1 ICO file |

## 🎨 Brand Colors (Copy-Paste Ready)

```css
Primary Orange: #D95E25
Warm Cream: #FBF2E0
White: #FFFFFF
Deep Green: #025336
Charcoal: #202020
```

## ⌨️ Common Commands

```bash
# Start development server
npm run dev

# Stop server
Ctrl+C

# Build for production
npm run build

# Check for errors
npm run lint

# Install dependencies (if needed)
npm install
```

## 📄 All Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hero, offers, featured dishes |
| Our Dishes | `/our-dishes` | Full menu with filters |
| Packages | `/packages` | 6-box and 12-box deals |
| Order Online | `/order-online` | Order options |
| Gallery | `/gallery` | Photo gallery |
| Contact | `/contact` | Contact form and info |

## 🔧 Quick Fixes

### Site won't start?
```bash
npm install
npm run dev
```

### Changes not showing?
1. Save the file (Cmd+S)
2. Refresh browser (Cmd+R)
3. Check terminal for errors

### Need to reset?
```bash
rm -rf node_modules .next
npm install
npm run dev
```

## 📊 Dish List (All 14)

1. BBQ Chicken & Roasted Potato - £9.95 (GF)
2. Beef Steak Chilli & Mash Box - £9.95
3. Chicken, Bacon & Ranch Burrito - £9.95
4. High Protein Lasagna Wrap - £9.95
5. High Protein Meat Feast Pizza Slice - £7.00
6. High Protein Peri Chicken & 2 Egg Box - £9.95 (GF)
7. Hot Honey Harissa Beef & Sweet Potato Box - £9.95 (GF)
8. Low Fat Chicken "Dhaba" Curry & Rice - £9.95 (GF)
9. South African "Bobotie" Beef Box - £9.95
10. Steak & Nourish Rice Box - £9.95 (GF)
11. Teriyaki Salmon & Nourish Rice Box - £9.95 (GF)
12. Vegetarian BBQ "Chicken" & Roasted Potato - £9.95 (V)
13. Veggie High Protein Flatbread - £9.95 (V)
14. Prego Steak - £9.95

## 📝 Image Filenames Needed

### Dishes (public/images/dishes/)
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

### Gallery (public/images/gallery/)
- meal-1.jpg to meal-6.jpg
- wrap-1.jpg, wrap-2.jpg
- shop-1.jpg, shop-2.jpg
- behind-1.jpg, behind-2.jpg

## 🚀 Deploy Checklist (3 Steps)

1. **Prepare**
   - [ ] Add all images
   - [ ] Update contact info
   - [ ] Test everything

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy**
   - Upload to Vercel or Netlify
   - Connect custom domain
   - Done!

## 📞 Business Info Template

```
Name: Nourish
Address: 6 Prospect Hill, Douglas, IM1 1EJ, Isle of Man
Phone: [UPDATE IN lib/data.ts]
Email: [UPDATE IN lib/data.ts]
Hours: Mon-Fri 8am-6pm, Sat 12pm-4pm, Sun Closed
```

## 🎯 Top 3 Priorities

1. **Add Photos** - Replace placeholders with real food images
2. **Update Contact** - Change phone/email in `lib/data.ts`
3. **Test Mobile** - View on actual phone or resize browser

## 📚 Documentation Files

- **GETTING_STARTED.md** ← Start here!
- **README.md** - Full technical docs
- **SETUP.md** - Quick setup guide
- **CHECKLIST.md** - Pre-launch checklist
- **PROJECT_SUMMARY.md** - Complete overview
- **QUICK_REFERENCE.md** - This file

## 💡 Pro Tips

- Save files often - changes appear instantly
- Test on real mobile devices
- Use high-quality food photos
- Keep descriptions concise
- Deploy early for feedback

---

**Print this page for quick reference while working on your site!**
