# AI Interview - Unified Design System

This project integrates three different design templates (homepage, login, signup) into a cohesive and consistent application with unified styling, colors, and components.

## 🎨 Design System

The application implements a comprehensive design system that ensures consistency across all pages:

### Color Palette
- **Primary Purple**: `#6C39FB` - Used for primary actions and brand elements
- **Secondary Blue**: `#4776E6`, `#2B34B0` - Used for accents and secondary elements
- **Light Backgrounds**: Gradient backgrounds using white, slate, and sky blue tones
- **Text Colors**: Black (`#141414`, `#030712`) for primary text, gray tones for secondary text

### Typography
The project uses 7 carefully selected fonts for different purposes:
- **Inter**: Default sans-serif for body text
- **Manrope**: Display text and headings
- **Open Sans**: Navigation and general text
- **Orelega One**: Logo and brand text
- **Inknut Antiqua**: Testimonial names
- **Manjari**: Descriptive text
- **Markazi Text**: Form labels and inputs

### Components
- **Header**: Unified header with logo, navigation, and action buttons
- **Footer**: Consistent footer across all pages with copyright and links
- **Button**: 4 variants (default, outline, gradient, loginGradient)
- **Input**: Styled form inputs with consistent sizing and borders

## 📱 Pages

### 1. Home Page (`/` or `#home`)
The landing page featuring:
- Hero section with call-to-action
- Features showcase with role cards
- Company logos section
- Statistics display
- Testimonials section

### 2. Login Page (`#login`)
Authentication page with:
- Google Sign-In option
- Email/password form fields
- "Forgot password" link
- Link to signup page

### 3. Signup Page (`#signup`)
Registration page with:
- Google Sign-In option
- Multi-field registration form
- Terms and conditions checkbox
- Link to login page

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🧭 Navigation

The application uses hash-based routing for simple navigation:

- **Home**: `http://localhost:5173/` or `http://localhost:5173/#home`
- **Login**: `http://localhost:5173/#login`
- **Signup**: `http://localhost:5173/#signup`

To navigate programmatically in the browser console:
```javascript
window.location.hash = 'login'  // Go to login page
window.location.hash = 'signup' // Go to signup page
window.location.hash = 'home'   // Go to home page
```

## 📦 Dependencies

Key dependencies include:
- `react` & `react-dom`: UI framework
- `tailwindcss`: Utility-first CSS framework
- `lucide-react`: Icon library
- `class-variance-authority`: Component variants
- `clsx` & `tailwind-merge`: Utility functions for class management

## 🎯 Design Consistency

All three reference designs have been successfully integrated with:
- ✅ Consistent color scheme across all pages
- ✅ Unified typography and font usage
- ✅ Matching header and footer components
- ✅ Consistent button and form styling
- ✅ Responsive design with mobile support
- ✅ Gradient backgrounds matching the original designs

## 📸 Screenshots

- **Home Page**: Full landing page with all sections
- **Login Page**: Clean authentication interface
- **Signup Page**: Comprehensive registration form

## 🛠️ Technical Details

### Build Setup
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Latest version with native configuration
- **ESLint**: Code quality and consistency

### File Structure
```
src/
├── components/
│   ├── Header.tsx          # Main navigation header
│   ├── Footer.tsx          # Footer component
│   └── ui/
│       ├── button.tsx      # Reusable button component
│       └── input.tsx       # Form input component
├── pages/
│   ├── Home.tsx           # Landing page
│   ├── Login.tsx          # Login page
│   └── Signup.tsx         # Signup page
├── lib/
│   └── utils.ts           # Utility functions
├── App.tsx                # Main app with routing
├── index.css              # Global styles and design tokens
└── main.tsx               # Entry point
```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
