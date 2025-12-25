# Singapore Artisan Coffee Shop Website - Product Requirements Document (PRD)

## Executive Summary

This PRD provides comprehensive specifications for creating a premium artisan coffee shop website for a **Singapore-based local business**. The design is meticulously modeled after the reference website ([Coffee Shop Demo](https://websitedemos.net/coffee-shop-04/)) and customized for the Singapore market while maintaining the elegant rustic-artisan aesthetic.

**Target Business**: **Merlion Brews Artisan Roastery** - A premium specialty coffee roastery in Singapore's Orchard Road district.

---

## 1. Reference Design Analysis

### 1.1 Website Screenshots (Reference)

![About Page Hero Section](/home/pete/.gemini/antigravity/brain/343a099a-bf7b-406a-be69-5885202f2500/screenshot_about.png)

![Site Exploration Recording](/home/pete/.gemini/antigravity/brain/343a099a-bf7b-406a-be69-5885202f2500/full_site_exploration_1766622972387.webp)

### 1.2 Design Philosophy

The reference website employs a **Rustic-Artisan** aesthetic that conveys:
- **Warmth & Authenticity** - Deep espresso browns evoke the coffee experience
- **Premium Quality** - Serif typography suggests tradition and craftsmanship
- **Tactile Depth** - Overlapping decorative elements create a 3D, handcrafted feel
- **Inviting Atmosphere** - Warm color palette welcomes visitors

---

## 2. Complete Design Specifications

### 2.1 Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Espresso Brown** (Primary) | `#4B3621` | Backgrounds, primary headings, footer |
| **Latte Tan** (Secondary) | `#D7A07C` | Section backgrounds, accent containers, decorative elements |
| **Cream White** | `#FDFBF7` | Text on dark backgrounds, page backgrounds |
| **Pure White** | `#FFFFFF` | Card backgrounds, overlays |
| **CTA Blue** | `#1A73E8` | Call-to-action buttons (Buy Now, Submit) |
| **Soft Gray** | `#666666` | Body text, secondary information |
| **Dark Text** | `#333333` | Primary body text on light backgrounds |

### 2.2 Typography System

| Element | Font Family | Weight | Size (Desktop) | Size (Mobile) | Style |
|---------|-------------|--------|----------------|---------------|-------|
| **H1 (Hero)** | Playfair Display | 700 | 72-96px | 40-48px | Serif, elegant |
| **H2 (Section)** | Playfair Display | 600 | 48-60px | 32-40px | Serif |
| **H3 (Subsection)** | Playfair Display | 500 | 32-40px | 24-28px | Serif |
| **H4 (Card Title)** | Playfair Display | 500 | 24-28px | 20-24px | Serif |
| **H5 (Label)** | Jost | 500 | 14-16px | 12-14px | Sans-serif, uppercase |
| **H6 (Tagline)** | Jost | 400 | 12-14px | 11-12px | Sans-serif, uppercase, letter-spacing |
| **Body** | Jost | 400 | 16-18px | 14-16px | Sans-serif, 1.6 line-height |
| **Navigation** | Jost | 500 | 14-16px | 14px | Sans-serif, uppercase |
| **Price** | Playfair Display | 600 | 20-24px | 18-20px | Serif |

**Font Loading**:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### 2.3 Layout System

| Breakpoint | Width | Columns | Gutter |
|------------|-------|---------|--------|
| **Desktop (XL)** | 1200px+ | 12 | 30px |
| **Desktop (L)** | 992px-1199px | 12 | 24px |
| **Tablet** | 768px-991px | 8 | 20px |
| **Mobile** | <768px | 4 | 16px |

**Container Max-Width**: 1200px (centered)

### 2.4 Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 8px | Inline elements |
| `--space-sm` | 16px | Card padding, small gaps |
| `--space-md` | 24px | Component gaps |
| `--space-lg` | 48px | Section padding |
| `--space-xl` | 80px | Hero padding, major sections |
| `--space-xxl` | 120px | Full-width section margins |

### 2.5 Border & Shadow System

```css
/* Border Radius */
--radius-sm: 8px;      /* Buttons, inputs */
--radius-md: 15px;     /* Cards, images */
--radius-lg: 25px;     /* Feature cards */
--radius-full: 50%;    /* Circular elements, logos */

/* Shadows */
--shadow-subtle: 0 2px 10px rgba(75, 54, 33, 0.08);
--shadow-card: 0 4px 20px rgba(75, 54, 33, 0.12);
--shadow-elevated: 0 8px 40px rgba(75, 54, 33, 0.18);
```

---

## 3. Site Structure & Navigation

### 3.1 Information Architecture

```
├── Home (/)
│   ├── Hero Section
│   ├── Drinks Highlight
│   ├── Featured Products (Croissants, Coffee for Home)
│   ├── About Teaser
│   ├── Barista Party (Events)
│   └── Location Map
├── Our Menu (/our-menu/)
│   ├── Drinks Section (8 items)
│   └── Coffee for Home Section (4 items)
├── About (/about/)
│   ├── Hero/Banner
│   ├── Brand Story
│   └── Gallery Teaser
├── Gallery (/gallery/)
│   └── Image Grid (Masonry/Regular)
└── Contact (/contact/)
    ├── Contact Details (with icons)
    ├── Contact Form
    └── Social Links
```

### 3.2 Navigation Design

**Header Layout**:
- **Logo**: Centered at top (circular stamp-style logo)
- **Navigation**: Horizontal menu below logo, centered alignment
- **Style**: Uppercase, letter-spacing: 2px, hover underline effect

**Navigation Items**:
1. Home
2. Our Menu
3. About
4. Gallery
5. Contact

**Mobile Navigation**: Hamburger menu with slide-in panel

---

## 4. Page-by-Page Specifications

### 4.1 Homepage

#### Hero Section
- **Layout**: Full-width, centered content
- **Background**: Dark espresso brown (`#4B3621`) with decorative coffee bean/splash overlays
- **Content**:
  - Tagline: "Welcome!" (small, uppercase)
  - Headline: "We serve the richest coffee in the city!" (large serif)
  - Subtext: "High quality in every cup of coffee we serve..." (smaller)
- **Height**: 80-90vh

#### Drinks Section
- **Layout**: 2-column (text left, 3 product cards right)
- **Left Column**: Section title "Drinks" with description, "All drinks" CTA button
- **Right Column**: 3 product cards in horizontal row
  - Each card: Image, Price badge, Title, Description, "Get delivery" link

#### Featured Products Section
- **Layout**: 2-column grid
- **Column 1**: Croissants card (image background, text overlay)
- **Column 2**: Buy for Home card (similar style)
- **Style**: Rounded corners, subtle gradient overlay for text legibility

#### About Teaser Section
- **Layout**: 2-column (image left, text right)
- **Left**: Large image with decorative coffee elements
- **Right**: 
  - Tagline: "Tailored-Made Coffee"
  - Headline: "We offer a unique coffee house environment..."
  - Subtext paragraphs
  - "Read More" CTA button

#### Barista Party Section
- **Layout**: Full-width banner with centered content
- **Background**: Latte tan (`#D7A07C`) with decorative elements
- **Content**: Event headline, description, "Make Reservation" CTA

#### Location Section
- **Layout**: 2-column (map/image left, address right)
- **Content**: Address, "See on Google Maps" link

### 4.2 Our Menu Page

#### Page Header
- **Layout**: Full-width banner with page title
- **Background**: Espresso brown with decorative elements

#### Drinks Section
- **Layout**: Grid (4 columns on desktop, 2 on tablet, 1 on mobile)
- **Card Design**:
  - Circular product image
  - Price badge (positioned top-right)
  - Product name (serif heading)
  - Short description
- **Items**: 8 drink products

#### Coffee for Home Section
- **Layout**: Same grid as Drinks
- **Items**: 4 coffee bag products

### 4.3 About Page

#### Hero Banner
- **Layout**: Full-width with centered text
- **Content**: Page title "About"

#### Brand Story Section
- **Layout**: 2-column with text and images
- **Content**:
  - "Tailored-Made Coffee" tagline
  - Main headline
  - Introduction paragraph
  - Feature list with descriptions

#### Gallery Teaser
- **Layout**: Image + CTA to gallery

### 4.4 Gallery Page

- **Layout**: Masonry or uniform grid (3-4 columns)
- **Images**: 9-12 high-quality images showing:
  - Coffee preparation
  - Interior ambiance
  - Product shots
  - Staff/baristas
- **Interaction**: Lightbox on click

### 4.5 Contact Page

#### Contact Information
- **Layout**: 2-column on desktop
- **Left Column**: Contact details with icons
  - Phone number
  - Email address
  - Physical address
- **Social Links**: Facebook, Twitter/X, YouTube, Instagram

#### Contact Form
- **Fields**: Name, Email, Subject, Message
- **Style**: Minimal, white background, subtle borders
- **Submit Button**: Blue CTA style

### 4.6 Footer (All Pages)

- **Layout**: 3-column
- **Columns**:
  1. About Us (brief description)
  2. Contact (address, phone, email)
  3. Opening Hours (formatted list)
- **Bottom Bar**: Copyright notice
- **Background**: Espresso brown (`#4B3621`)
- **Text Color**: Cream white (`#FDFBF7`)

---

## 5. Singapore Localization

### 5.1 Business Identity

| Element | Value |
|---------|-------|
| **Business Name** | Merlion Brews Artisan Roastery |
| **Tagline** | "Brewing the Spirit of Singapore, One Cup at a Time" |
| **Address** | 123 Orchard Road, #01-45 ION Orchard, Singapore 238879 |
| **Phone** | +65 6123 4567 |
| **Email** | hello@merlionbrews.sg |
| **Website** | www.merlionbrews.sg |

### 5.2 Localized Menu Items

#### Signature Drinks (Singapore-Inspired)
| Item | Price (SGD) | Description |
|------|-------------|-------------|
| **Gula Melaka Latte** | $7.50 | Creamy latte sweetened with premium palm sugar |
| **Sea Salt Kopi-O** | $5.80 | Traditional kopi with a modern sea salt foam finish |
| **Pandan Cappuccino** | $7.00 | Aromatic pandan-infused espresso with velvety foam |
| **Nanyang Cold Brew** | $6.50 | 18-hour cold brew, smooth and robust |
| **Laksa Leaf Matcha** | $8.00 | (Seasonal) Unique matcha with laksa leaf notes |
| **Ondeh Ondeh Mocha** | $7.80 | Coconut and pandan flavors in a chocolate base |
| **Classic Espresso** | $4.50 | Double-shot of our signature blend |
| **Vietnamese Drip** | $5.50 | Slow-drip with condensed milk |

#### Signature Pastries
| Item | Price (SGD) | Description |
|------|-------------|-------------|
| **Salted Egg Croissant** | $5.50 | Flaky croissant with rich salted egg custard |
| **Kaya Toast Twist** | $4.80 | Modern take on the classic kopitiam staple |
| **Durian Puff** | $6.00 | (Seasonal) Premium D24 durian-filled pastry |
| **Kueh Lapis Cake** | $5.80 | Spiced Indonesian layer cake slice |

#### Coffee Beans for Home
| Item | Price (SGD) | Description |
|------|-------------|-------------|
| **Nanyang Blend** | $24.00/250g | Our signature house blend |
| **Sumatran Reserve** | $28.00/250g | Single-origin, earthy notes |
| **Ethiopian Sidama** | $32.00/250g | Bright, fruity, floral |
| **Decaf Dreams** | $26.00/250g | Swiss water process decaf |

### 5.3 Operating Hours (Singapore Context)

| Day | Hours |
|-----|-------|
| Monday – Friday | 07:30 – 21:00 |
| Saturday | 08:00 – 22:00 |
| Sunday & Public Holidays | 09:00 – 20:00 |

### 5.4 Social Media Handles
- **Instagram**: @merlionbrews
- **Facebook**: facebook.com/merlionbrews
- **TikTok**: @merlionbrews
- **YouTube**: Merlion Brews

---

## 6. UI Components Specification

### 6.1 Buttons

#### Primary Button (CTA)
```css
.btn-primary {
  background: #1A73E8;
  color: #FFFFFF;
  padding: 14px 32px;
  border-radius: 8px;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: background 0.3s ease, transform 0.2s ease;
}
.btn-primary:hover {
  background: #1557B0;
  transform: translateY(-2px);
}
```

#### Secondary Button (Text Link Style)
```css
.btn-secondary {
  background: transparent;
  color: #4B3621;
  padding: 12px 0;
  border-bottom: 2px solid #4B3621;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
```

### 6.2 Product Cards

```css
.product-card {
  background: #FFFFFF;
  border-radius: 15px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(75, 54, 33, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 40px rgba(75, 54, 33, 0.18);
}
.product-card__image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 16px;
}
.product-card__price {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 600;
  color: #4B3621;
}
.product-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 500;
  margin: 8px 0;
}
.product-card__description {
  font-family: 'Jost', sans-serif;
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
}
```

### 6.3 Navigation

```css
.nav {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px 0;
}
.nav__link {
  font-family: 'Jost', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #4B3621;
  text-decoration: none;
  position: relative;
}
.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4B3621;
  transition: width 0.3s ease;
}
.nav__link:hover::after,
.nav__link--active::after {
  width: 100%;
}
```

### 6.4 Form Elements

```css
.form-input {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #E0D8D0;
  border-radius: 8px;
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  background: #FFFFFF;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.form-input:focus {
  outline: none;
  border-color: #4B3621;
  box-shadow: 0 0 0 3px rgba(75, 54, 33, 0.1);
}
.form-textarea {
  min-height: 150px;
  resize: vertical;
}
```

### 6.5 Decorative Elements

The design uses floating/overlapping decorative elements:
- Coffee bean PNG images (absolute positioned)
- Coffee splash/stain graphics
- Coffee cup images (cutout style)

**Implementation Approach**:
```css
.decorative-element {
  position: absolute;
  pointer-events: none;
  z-index: 1;
}
.decorative-beans-left {
  left: -100px;
  top: 20%;
  width: 200px;
  opacity: 0.8;
}
.decorative-splash-right {
  right: -80px;
  bottom: 10%;
  width: 300px;
  opacity: 0.6;
}
```

---

## 7. Responsive Design Breakpoints

### 7.1 Breakpoint Strategy

```css
/* Mobile First Approach */
/* Base: Mobile (<768px) */

/* Tablet */
@media (min-width: 768px) {
  /* 2-column layouts */
}

/* Desktop */
@media (min-width: 992px) {
  /* 3-4 column grids */
}

/* Large Desktop */
@media (min-width: 1200px) {
  /* Max container width */
}
```

### 7.2 Key Responsive Behaviors

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| **Navigation** | Hamburger menu | Horizontal | Horizontal |
| **Hero** | Stacked, smaller text | Larger text | Full impact |
| **Product Grid** | 1 column | 2 columns | 3-4 columns |
| **Footer** | Stacked | 2 columns | 3 columns |
| **Font Sizes** | Reduced 20-30% | Reduced 10% | Base size |

---

## 8. Animations & Interactions

### 8.1 Micro-Animations

```css
/* Fade In on Scroll */
.animate-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover Scale */
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.03);
}

/* Button Shine Effect */
.btn-shine {
  position: relative;
  overflow: hidden;
}
.btn-shine::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}
.btn-shine:hover::before {
  left: 100%;
}
```

### 8.2 Scroll-Based Animations

- **Hero Elements**: Fade in from bottom on page load
- **Section Headings**: Fade in when entering viewport
- **Product Cards**: Stagger animation when grid comes into view
- **Decorative Elements**: Subtle parallax movement on scroll

---

## 9. SEO & Meta Information

### 9.1 Page Titles & Descriptions

| Page | Title | Meta Description |
|------|-------|------------------|
| **Home** | Merlion Brews \| Premium Artisan Coffee in Orchard Road, Singapore | Discover Singapore's finest artisan coffee experience. Locally roasted specialty coffee, signature Singapore-inspired beverages, and premium pastries in the heart of Orchard Road. |
| **Our Menu** | Our Menu \| Merlion Brews Coffee Shop | Explore our curated menu of signature drinks, specialty coffees, and artisan pastries. From Gula Melaka Latte to Salted Egg Croissants – taste Singapore in every bite. |
| **About** | About Us \| Merlion Brews Story | Learn about Merlion Brews' passion for bringing Southeast Asian coffee culture to Singapore. From bean sourcing to your perfect cup. |
| **Gallery** | Gallery \| Merlion Brews Coffee Shop | Take a visual journey through our cozy Orchard Road cafe, expert baristas at work, and beautifully crafted beverages. |
| **Contact** | Contact Us \| Merlion Brews Singapore | Get in touch with Merlion Brews. Visit us at ION Orchard, call us, or send an inquiry. We'd love to hear from you! |

### 9.2 Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Merlion Brews Artisan Roastery",
  "image": "https://www.merlionbrews.sg/images/storefront.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Orchard Road, #01-45 ION Orchard",
    "addressLocality": "Singapore",
    "postalCode": "238879",
    "addressCountry": "SG"
  },
  "telephone": "+65 6123 4567",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:30",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "$5-$35",
  "servesCuisine": ["Coffee", "Cafe", "Pastries"]
}
```

---

## 10. Technical Implementation Recommendations

### 10.1 Technology Stack Options

| Option | Recommendation | Rationale |
|--------|----------------|-----------|
| **Simple Static** | HTML/CSS/JavaScript | Fastest, easiest to host (e.g., on Netlify, Vercel) |
| **CMS-Powered** | WordPress + Elementor | Matches reference site, easy content updates |
| **Modern Framework** | Next.js / Vite | Better performance, developer experience |

### 10.2 Image Optimization

- **Format**: WebP with JPEG fallback
- **Sizes**: Multiple srcset sizes for responsive images
- **Lazy Loading**: Native `loading="lazy"` for below-fold images
- **Decorative PNGs**: Optimized with transparency, consider SVG alternatives

### 10.3 Performance Targets

| Metric | Target |
|--------|--------|
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Cumulative Layout Shift** | < 0.1 |
| **Total Page Size** | < 2MB |

---

## 11. Verification Plan

Since this is a PRD (no code implementation yet), verification will occur during the implementation phase:

### 11.1 Design Fidelity Checks
- [ ] Visual comparison with reference site using browser side-by-side
- [ ] Color palette accuracy check with color picker tools
- [ ] Typography hierarchy matches specifications
- [ ] Spacing and layout follows design tokens

### 11.2 Responsive Testing
- [ ] Mobile view (375px - iPhone SE/Mini)
- [ ] Tablet view (768px - iPad)
- [ ] Desktop view (1200px+)
- [ ] Browser testing: Chrome, Safari, Firefox, Edge

### 11.3 Content Verification
- [ ] All Singapore-localized content is accurate
- [ ] Menu items and prices are correctly displayed
- [ ] Contact information is correct
- [ ] Operating hours are culturally appropriate

### 11.4 User Manual Verification
The user should manually verify:
1. Brand name and tagline resonate with Singapore audience
2. Menu items are culturally appropriate and appealing
3. Pricing is competitive for Singapore market
4. Location details are accurate

---

## 12. Appendix

### A. File Structure (Recommended)

```
merlion-brews-website/
├── index.html
├── our-menu.html
├── about.html
├── gallery.html
├── contact.html
├── css/
│   ├── variables.css      # Design tokens
│   ├── base.css           # Reset, typography
│   ├── components.css     # Buttons, cards, forms
│   ├── layout.css         # Grid, containers
│   └── pages.css          # Page-specific styles
├── js/
│   ├── main.js            # Core functionality
│   ├── animations.js      # Scroll animations
│   └── navigation.js      # Mobile menu
├── images/
│   ├── logo/
│   ├── hero/
│   ├── products/
│   ├── gallery/
│   └── decorative/
└── fonts/                  # Local font files (optional)
```

### B. CSS Custom Properties (Variables)

```css
:root {
  /* Colors */
  --color-primary: #4B3621;
  --color-secondary: #D7A07C;
  --color-cream: #FDFBF7;
  --color-white: #FFFFFF;
  --color-cta: #1A73E8;
  --color-text: #333333;
  --color-text-light: #666666;
  
  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Jost', sans-serif;
  
  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 80px;
  --space-xxl: 120px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 15px;
  --radius-lg: 25px;
  --radius-full: 50%;
  
  /* Shadows */
  --shadow-subtle: 0 2px 10px rgba(75, 54, 33, 0.08);
  --shadow-card: 0 4px 20px rgba(75, 54, 33, 0.12);
  --shadow-elevated: 0 8px 40px rgba(75, 54, 33, 0.18);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.6s ease;
}
```

---

> [!IMPORTANT]
> **User Review Required**: Please review this PRD to confirm:
> 1. The business name "Merlion Brews Artisan Roastery" is acceptable or provide an alternative
> 2. The Orchard Road location is appropriate for your use case
> 3. The menu items and pricing are suitable for your target market
> 4. Any additional pages or features you'd like to include

---

*Document Version: 1.0*  
*Created: December 25, 2025*  
*Reference Site: https://websitedemos.net/coffee-shop-04/*
