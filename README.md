# Noah Darwich - Data Scientist Portfolio Website

A modern, responsive portfolio website showcasing data science expertise, research automation tools, and academic research projects. Built with HTML5, CSS3, and vanilla JavaScript.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient accents and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and scroll-triggered animations
- **Contact Form**: Functional contact form with validation and notifications
- **Performance Optimized**: Efficient animations and smooth scrolling
- **SEO Friendly**: Semantic HTML structure and meta tags

## 🎯 Sections

1. **Hero Section**: Eye-catching introduction with animated data visualization
2. **About**: Personal background, expertise areas, and key statistics
3. **Services**: Three main service offerings with detailed features
4. **Projects**: Showcase of key research projects and achievements
5. **Contact**: Contact information and inquiry form

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern layouts, animations, and responsive design
- **JavaScript**: Interactive features and smooth animations
- **Font Awesome**: Professional icons
- **Google Fonts**: Inter font family for modern typography

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── cv.txt             # Your CV reference
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation
1. Download or clone the repository
2. Open `index.html` in your web browser
3. The website should work immediately without any build process

### Local Development
For local development, you can use any of these methods:

**Option 1: Python HTTP Server**
```bash
python -m http.server 8000
# Then open http://localhost:8000
```

**Option 2: Node.js HTTP Server**
```bash
npx http-server
# Then open the URL shown in terminal
```

**Option 3: Live Server (VS Code Extension)**
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

## 🎨 Customization

### Colors and Branding
The website uses a modern color scheme that can be easily customized in `styles.css`:

```css
/* Primary gradient colors */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Text colors */
--text-primary: #2d3748;
--text-secondary: #4a5568;
--text-muted: #a0aec0;
```

### Content Updates
To update the content, edit the following sections in `index.html`:

- **Personal Information**: Update name, contact details, location
- **About Section**: Modify description and expertise areas
- **Services**: Customize service offerings and features
- **Projects**: Add or modify project showcases
- **Contact**: Update contact methods and form fields

### Adding New Sections
To add new sections:

1. Add the HTML structure in `index.html`
2. Add corresponding CSS styles in `styles.css`
3. Add navigation link in the navbar
4. Update JavaScript if needed for interactivity

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be deployed automatically
3. Custom domain can be added in the site settings

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Test all functionality after upload

## 🔧 Advanced Customization

### Adding New Animations
Custom animations can be added in `styles.css`:

```css
@keyframes customAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.animated-element {
    animation: customAnimation 2s ease-in-out infinite;
}
```

### JavaScript Enhancements
Add new interactive features in `script.js`:

```javascript
// Example: Add smooth reveal animation
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
            element.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
```

### SEO Optimization
To improve SEO, add these meta tags in the `<head>` section:

```html
<meta name="description" content="Noah Darwich - Data Scientist specializing in research automation and social impact analysis">
<meta name="keywords" content="data science, research automation, machine learning, social research">
<meta name="author" content="Noah Darwich">
<meta property="og:title" content="Noah Darwich - Data Scientist Portfolio">
<meta property="og:description" content="Professional portfolio showcasing data science expertise and automation tools">
<meta property="og:image" content="path-to-your-image.jpg">
```

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minimize CSS/JS**: Use minified versions for production
3. **Lazy Loading**: Implement lazy loading for images
4. **CDN**: Use CDN for external libraries
5. **Caching**: Implement proper caching headers

## 🐛 Troubleshooting

### Common Issues

**Navigation not working**
- Check if all section IDs match the navigation links
- Ensure JavaScript is loading properly

**Styles not applying**
- Verify CSS file path is correct
- Check browser console for errors

**Mobile menu not working**
- Ensure JavaScript is enabled
- Check for CSS conflicts

**Animations not working**
- Verify Intersection Observer is supported
- Check if elements have proper classes

### Browser Support
- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+

## 📞 Support

For questions or customization help:
- **Email**: darwich.noah.95@gmail.com
- **LinkedIn**: noah-darwich

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔄 Updates and Maintenance

### Regular Updates
- Keep contact information current
- Add new projects and achievements
- Update service offerings
- Refresh statistics and metrics

### Security Updates
- Regularly update external dependencies
- Monitor for security vulnerabilities
- Keep hosting platform updated

---

**Built with ❤️ for showcasing data science expertise and attracting new clients for automation tools.**
