# Building Bharat React App

This is a modern React application for Building Bharat, featuring:

- Animated hero section with orbiting icons
- Responsive navigation bar
- Modular component structure
- Tailwind CSS for styling
- React Router for navigation

## Features

- **Hero Section:** Animated orbit of icons around a central "Building Bharat" logo.
- **Stories:** Inspiring testimonials.
- **Initiative For:** Cards for different user groups.
- **Live Sessions:** Details about live interactive sessions.
- **Responsive Navbar:** Simple navigation matching available routes.
- **Routing:** All main sections are accessible via routes.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
src/
  components/
    HeroSection.jsx
    Navbar.jsx
    Footer.jsx
    Stories.jsx
    InitiativeFor.jsx
    LiveSessions.jsx
    OrbitIconsWithCaptions.jsx
    OrbitShowcase.jsx
    Layout.jsx
  pages/
    Home.jsx
  App.jsx
  main.jsx
  index.css
```

## Customization

- **Add/Edit Sections:** Modify or add components in `src/components/`.
- **Change Routes:** Edit `src/App.jsx` to add or remove routes.
- **Styling:** Uses Tailwind CSS. Edit `index.css` or use Tailwind utility classes.

## Dependencies

- React
- React Router DOM
- Framer Motion
- Tailwind CSS
- Lucide React (icons)

## License

MIT

---

Made with ❤️ for Building Bharat.
