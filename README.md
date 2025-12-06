# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features 3D animations, interactive UI components, and a sleek dark theme design.

## 🌐 Live Demo

- **GitHub Pages**: [https://phaneendrakumarbabu.github.io](https://phaneendrakumarbabu.github.io)
- **Custom Domain**: [https://kumarbabu.me](https://kumarbabu.me)

## ✨ Features

- **Modern UI/UX**: Dark theme with cyan/blue gradient accents
- **3D Animations**: Interactive 3D elements using Spline and Three.js
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Interactive Components**: 
  - Neon-styled buttons
  - Animated backgrounds (dotted surface, background paths)
  - Scroll-triggered animations
  - Mobile hamburger menu
- **Sections**:
  - Hero section with 3D scene
  - Portfolio showcase with scroll animation
  - About Me section
  - Featured Projects
  - Contact section with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.7
- **React**: 19.2.0
- **TypeScript**: ^5
- **Styling**: Tailwind CSS 4.1.9
- **Animations**: Framer Motion
- **3D Graphics**: 
  - Spline (@splinetool/react-spline)
  - Three.js
- **UI Components**: Radix UI, shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/phaneendrakumarbabu/phaneendrakumarbabu.github.io.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

This generates a static export in the `out` directory, ready for deployment to GitHub Pages.

### Deploy to GitHub Pages

The project is configured for automatic deployment via GitHub Actions. Simply push to the `main` branch and the workflow will:
1. Build the Next.js application
2. Generate static files
3. Deploy to GitHub Pages

### Manual Deployment

1. Build the project: `npm run build`
2. The static files will be in the `out` directory
3. Push the `out` directory contents to your GitHub Pages repository

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css         # Global styles
├── components/            # React components
│   ├── hero/             # Hero section components
│   ├── sections/         # Page sections
│   ├── ui/               # UI components (shadcn/ui)
│   ├── navbar.tsx        # Navigation bar
│   └── ...
├── public/               # Static assets
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
└── next.config.mjs      # Next.js configuration
```

## 🎨 Customization

### Update Personal Information

1. **Name & Bio**: Edit `components/hero/hero-with-3d.tsx`
2. **About Section**: Edit `components/sections/about.tsx`
3. **Projects**: Edit `components/sections/projects.tsx`
4. **Contact Info**: Edit `components/sections/contact.tsx`

### Change Colors

The color scheme uses Tailwind CSS with cyan/blue gradients. Update colors in:
- `app/globals.css` - CSS variables
- Component files - Tailwind classes

### Add Your Resume

1. Place your resume PDF in the `public` folder as `resume.pdf`
2. The download button in the hero section will automatically link to it

## 🔧 Configuration

### Next.js Config

The project is configured for static export in `next.config.mjs`:
- Static export enabled for GitHub Pages
- Image optimization disabled (for static export)
- TypeScript build errors ignored (can be enabled for stricter checking)

### Custom Domain

To use a custom domain:
1. Create a `CNAME` file in the root with your domain (e.g., `kumarbabu.me`)
2. Configure DNS records to point to GitHub Pages IPs
3. Enable custom domain in GitHub repository settings

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio website. Feel free to fork and customize for your own use!

## 📄 License

© 2025 Goru Naga Phaneendra Kumar Babu. All rights reserved.

## 👤 Author

**Goru Naga Phaneendra Kumar Babu**

- Cybersecurity Student & Developer
- Email: goruphaneendra@gmail.com
- GitHub: [@phaneendrakumarbabu](https://github.com/phaneendrakumarbabu)
- Website: [kumarbabu.me](https://kumarbabu.me)

---

Built with ❤️ using React, Next.js & Tailwind CSS

