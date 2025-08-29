# bzTradewave.au Design System

## Brand Identity

### Logo
- **Primary Logo**: `/src/assets/images/logo.png`
- **Usage**: Header navigation, footer, business cards
- **Minimum Size**: 120px width
- **Clear Space**: 20px on all sides

### Tagline
"Global Trade, Powered by AI. Proudly from Australia."

## Color Palette

### Primary Colors
```css
--primary-blue: #1e3a8a;      /* Deep Blue - Primary brand color */
--primary-silver: #e5e7eb;    /* Silver - Secondary neutral */
--accent-green: #10b981;      /* Neon Green - Accent and highlights */
--pure-white: #ffffff;        /* White - Background and text */
```

### Glassmorphic Colors
```css
--glass-bg: rgba(255, 255, 255, 0.1);
--glass-border: rgba(255, 255, 255, 0.2);
--glass-shadow: rgba(31, 38, 135, 0.37);
```

### Semantic Colors
```css
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

## Typography

### Font Family
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

## Spacing System

### Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

## Glassmorphic Components

### Glass Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}
```

### Glass Button
```css
.glass-button {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(31, 38, 135, 0.4);
}
```

### Glass Header
```css
.glass-header {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
```

## Animation System

### Transitions
```css
--transition-fast: 0.15s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

### Hover Effects
```css
.hover-lift {
  transition: transform var(--transition-normal);
}

.hover-lift:hover {
  transform: translateY(-4px);
}

.hover-glow {
  transition: box-shadow var(--transition-normal);
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
}
```

### Loading Animations
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Component Library

### Navigation
- **Header Height**: 80px
- **Logo Size**: 40px height
- **Nav Links**: 16px, medium weight
- **Mobile Breakpoint**: 768px

### Buttons
- **Primary**: Glass effect with accent green
- **Secondary**: Glass effect with primary blue
- **Sizes**: sm (32px), md (40px), lg (48px), xl (56px)
- **Border Radius**: 12px

### Cards
- **Product Cards**: 320px width, 3D hover effect
- **Info Cards**: Full width, glassmorphic background
- **Border Radius**: 16px
- **Padding**: 24px

### Forms
- **Input Height**: 48px
- **Border Radius**: 8px
- **Focus State**: Accent green border
- **Error State**: Red border with message

## Layout System

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

### Grid System
- **Columns**: 12-column grid
- **Gutter**: 24px
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

### Section Spacing
- **Section Padding**: 80px top/bottom on desktop, 48px on mobile
- **Content Max Width**: 1200px
- **Side Margins**: 24px minimum

## Asset Inventory

### Images
- `logo.png` - Main brand logo
- `hero-background.jpg` - Hero section gradient background
- `hero-shipping.jpg` - Shipping containers image
- `hero-tech.jpg` - Technology/business image
- `agriculture.jpg` - Agriculture sector image
- `electronics.jpg` - Electronics sector image
- `clothing.jpg` - Clothing sector image

### Icons
- `icon-agriculture.png` - Agriculture sector icon
- `icon-electronics.png` - Electronics sector icon
- `icon-clothing.png` - Clothing sector icon

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Mobile Considerations
- **Touch Targets**: Minimum 44px
- **Font Sizes**: Increase by 2px on mobile
- **Spacing**: Reduce by 25% on mobile
- **Navigation**: Hamburger menu below 768px

## Accessibility

### Color Contrast
- **Text on White**: Minimum 4.5:1 ratio
- **Text on Glass**: Ensure sufficient contrast
- **Focus States**: Visible outline with accent color

### Interactive Elements
- **Focus Indicators**: 2px solid accent green
- **Keyboard Navigation**: Tab order logical
- **Screen Readers**: Proper ARIA labels

## Performance Guidelines

### Image Optimization
- **Format**: WebP with JPEG fallback
- **Sizes**: Multiple sizes for responsive images
- **Lazy Loading**: Implement for below-fold images
- **Compression**: 80% quality for photos

### CSS Optimization
- **Critical CSS**: Inline above-fold styles
- **Unused CSS**: Remove with PurgeCSS
- **Minification**: Compress for production

## Implementation Notes

### Tailwind CSS Classes
```css
/* Glassmorphic card */
.glass-card {
  @apply bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl;
}

/* Primary button */
.btn-primary {
  @apply bg-accent-green text-white px-6 py-3 rounded-xl font-medium hover:bg-accent-green/90 transition-all duration-300;
}

/* Section container */
.section-container {
  @apply max-w-7xl mx-auto px-6 py-20;
}
```

### Framer Motion Variants
```javascript
// Fade in animation
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Stagger children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

## Brand Voice & Tone

### Voice Characteristics
- **Professional**: Authoritative and knowledgeable
- **Innovative**: Forward-thinking and tech-savvy
- **Global**: International perspective with Australian roots
- **Trustworthy**: Reliable and transparent

### Tone Guidelines
- **Confident** but not arrogant
- **Approachable** but professional
- **Clear** and concise communication
- **Optimistic** about trade opportunities

## Content Guidelines

### Headlines
- **H1**: 48px, bold, primary blue
- **H2**: 36px, semibold, primary blue
- **H3**: 24px, medium, primary blue
- **H4**: 20px, medium, dark gray

### Body Text
- **Paragraph**: 16px, normal, dark gray
- **Line Height**: 1.6
- **Max Width**: 65 characters per line
- **Spacing**: 24px between paragraphs

### Call-to-Action
- **Button Text**: Action-oriented verbs
- **Urgency**: Subtle without being pushy
- **Value Proposition**: Clear benefit statement

