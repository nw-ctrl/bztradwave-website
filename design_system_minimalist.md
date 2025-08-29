# bzTradewave.au - Minimalist Design System

## Design Philosophy
Clean, professional, and trustworthy. The minimalist approach emphasizes content over decoration, using plenty of white space, subtle colors, and geometric precision to create a sophisticated business presence.

## Color Palette

### Primary Colors
- **Pure White**: #FFFFFF (main background)
- **Deep Navy**: #1a365d (primary text, headings)
- **Soft Blue**: #4299e1 (accent color, links, buttons)
- **Light Blue**: #bee3f8 (subtle accents, hover states)

### Neutral Colors
- **Charcoal**: #2d3748 (body text)
- **Medium Gray**: #718096 (secondary text)
- **Light Gray**: #f7fafc (section backgrounds)
- **Border Gray**: #e2e8f0 (borders, dividers)

### Accent Colors
- **Success Green**: #38a169 (positive indicators)
- **Warning Orange**: #ed8936 (alerts, highlights)

## Typography

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Font Sizes & Weights
- **Hero Title**: 48px, font-weight: 700
- **Section Title**: 32px, font-weight: 600
- **Card Title**: 24px, font-weight: 600
- **Body Large**: 18px, font-weight: 400
- **Body Regular**: 16px, font-weight: 400
- **Body Small**: 14px, font-weight: 400
- **Caption**: 12px, font-weight: 500

## Layout Principles

### Spacing System
- **Base unit**: 8px
- **Small**: 16px (2 units)
- **Medium**: 24px (3 units)
- **Large**: 32px (4 units)
- **XL**: 48px (6 units)
- **XXL**: 64px (8 units)

### Grid System
- **Container max-width**: 1200px
- **Columns**: 12-column grid
- **Gutters**: 24px
- **Margins**: 24px (mobile), 48px (desktop)

## Components

### Buttons
- **Primary**: Soft blue background, white text, 8px border-radius
- **Secondary**: White background, soft blue border and text
- **Ghost**: Transparent background, soft blue text
- **Padding**: 12px 24px
- **Font**: 16px, font-weight: 500

### Cards
- **Background**: Pure white
- **Border**: 1px solid border gray
- **Border-radius**: 12px
- **Shadow**: subtle (0 1px 3px rgba(0,0,0,0.1))
- **Padding**: 24px

### Navigation
- **Background**: Pure white with subtle shadow
- **Height**: 72px
- **Logo**: Deep navy text
- **Links**: Medium gray, hover to soft blue

### Forms
- **Input background**: Pure white
- **Border**: 1px solid border gray
- **Focus border**: Soft blue
- **Border-radius**: 8px
- **Padding**: 12px 16px

## Visual Elements

### Icons
- **Style**: Outline/stroke icons
- **Weight**: 1.5px stroke
- **Size**: 24px standard, 20px small, 32px large
- **Color**: Inherits text color

### Images
- **Border-radius**: 8px for small images, 12px for cards
- **Aspect ratios**: 16:9 for hero, 4:3 for cards, 1:1 for avatars

### Shadows
- **Subtle**: 0 1px 3px rgba(0,0,0,0.1)
- **Medium**: 0 4px 6px rgba(0,0,0,0.1)
- **Strong**: 0 10px 15px rgba(0,0,0,0.1)

## Animation & Interactions

### Transitions
- **Duration**: 200ms for micro-interactions, 300ms for larger changes
- **Easing**: ease-out for entrances, ease-in for exits
- **Properties**: opacity, transform, color, border-color

### Hover States
- **Buttons**: Slight darkening of background color
- **Cards**: Subtle shadow increase
- **Links**: Color change to soft blue

## Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## Accessibility
- **Contrast ratio**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus indicators**: 2px soft blue outline
- **Touch targets**: Minimum 44px for interactive elements

