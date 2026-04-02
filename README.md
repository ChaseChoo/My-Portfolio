# My Portfolio Website

A clean, modern, and responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your education, projects, skills, and experience to potential employers.

## 📁 Project Structure

```
My-Portfolio/
├── index.html       # Main HTML file with all sections
├── style.css        # Styling and responsive design
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

## 🎯 Features

✨ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✨ **Mobile Menu** - Hamburger menu for mobile navigation
✨ **Smooth Scrolling** - Smooth transitions between sections
✨ **Modern Styling** - Gradient backgrounds and hover animations
✨ **Section Highlights** - Active navigation indicator while scrolling
✨ **Scroll to Top** - Floating button to quickly return to the top
✨ **Intersection Observer** - Fade-in animations for cards
✨ **SEO Friendly** - Semantic HTML structure

## 🚀 Quick Start

1. **Open in Browser**: Simply open `index.html` in your web browser
2. **No Dependencies**: Uses vanilla HTML, CSS, and JavaScript - no installation needed!
3. **Local Development**: Use Live Server extension in VS Code for auto-refresh during editing

### Using Live Server in VS Code:
- Right-click on `index.html` → Select "Open with Live Server"
- OR Install VS Code extension: Live Server, then click "Go Live" at bottom right

## 📝 Customization Guide

### Personal Information
Edit these sections in `index.html`:

1. **Header Logo** (line ~12)
   ```html
   <div class="logo">Chase</div>  <!-- Change "Chase" to your name -->
   ```

2. **Hero Section** (lines ~30-40)
   ```html
   <h1>Hi, I'm Chase</h1>  <!-- Change to your name -->
   <p class="subtitle">Full Stack Developer | Problem Solver | Tech Enthusiast</p>  <!-- Update -->
   ```

3. **About Me** - Update the bio text in the hero section

### Education Section
Modify the education cards (lines ~48-68):
```html
<h3>Degree/Certification</h3>        <!-- Your degree -->
<p class="school">Your School Name</p>  <!-- Your school -->
<p class="duration">2020 - 2024</p>     <!-- Your dates -->
<p class="description">Add details...</p>  <!-- Your description -->
```

### Projects Section
Update project cards (lines ~76-140):
- Replace "Project One", "Project Two", etc. with your actual projects
- Update descriptions with what each project does
- Change tech tags to match your actual technologies used
- Add real links to live demos and GitHub repositories

### Skills Section
Update your skills (lines ~148-172):
- Replace the skill categories and items with your actual skills
- Add or remove categories as needed

### Contact Information
Update contact links (lines ~180-202):
- Replace email address with your actual email
- Update LinkedIn profile URL
- Update GitHub profile URL

### Colors & Styling
To customize colors, edit the CSS variables at the top of `style.css`:
```css
:root {
    --primary-color: #667eea;      /* Main purple */
    --secondary-color: #764ba2;    /* Dark purple */
    --accent-color: #f5576c;       /* Pink/red accent */
    /* ... more variables */
}
```

## 📱 Responsive Breakpoints

The design includes responsive breakpoints for:
- **Desktop**: Full-width layout (1200px max)
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## 🌍 Deployment Options

### GitHub Pages (FREE & EASY)
1. Create a GitHub repository named `My-Portfolio` or `{username}.github.io`
2. Push your files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io`

### Netlify (FREE)
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy site"

### Vercel (FREE)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Click "Deploy"

## 📋 TODO - Before Publishing

- [ ] Replace all placeholder text with your actual information
- [ ] Add your real projects with screenshots/descriptions
- [ ] Update education information
- [ ] List your actual technical skills
- [ ] Replace contact information (email, LinkedIn, GitHub)
- [ ] Test on mobile devices
- [ ] Update favicon (optional)
- [ ] Test all navigation links
- [ ] Deploy to GitHub Pages or Netlify

## 🎨 Examples of What to Add

### For Projects:
- Name and brief description
- Technologies used
- Key features or challenges overcome
- Links to live demo and GitHub repo

### For Education:
- Degree/Certification name
- Institution name
- Graduation date
- GPA (optional) or notable achievements

### For Skills:
- Group by category (Frontend, Backend, Databases, Tools)
- Be specific with technologies/languages

## 💡 Tips for Better Results

1. **Add Project Images**: Replace the gradient placeholders with actual screenshots
2. **Keep Content Updated**: Regularly add new projects and update skills
3. **SEO Optimization**: Add meta descriptions and keywords
4. **Performance**: Optimize images before uploading
5. **Testing**: Test on multiple browsers and devices
6. **Mobile First**: Ensure mobile experience is great

## 🔧 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Next Steps

1. **Customize Content**: Update all placeholder text with your information
2. **Add Projects**: Replace the example projects with your portfolio pieces
3. **Test Locally**: Open in browser and check all sections
4. **Deploy**: Push to GitHub and deploy to GitHub Pages, Netlify, or Vercel
5. **Share**: Send your portfolio URL to potential employers!

## 📄 License

Feel free to use this template for your portfolio. Customize it as needed!

---

**Built with ❤️ using HTML, CSS & JavaScript**