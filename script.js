// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Navbar Shadow on Scroll =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ===== Intersection Observer for Fade-In Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to cards
document.querySelectorAll('.education-card, .project-card, .skill-category, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== Active Navigation Link Highlighting =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '';
        link.style.textDecoration = '';
        
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#667eea';
            link.style.textDecoration = 'underline';
        }
    });
});

// ===== Form Validation Example (for future contact form) =====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== Lazy Load Images (if you add more images) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ===== Scroll to Top Button (optional) =====
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.id = 'scrollToTop';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border: none;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
            button.style.justifyContent = 'center';
            button.style.alignItems = 'center';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createScrollToTopButton);
} else {
    createScrollToTopButton();
}

console.log('Portfolio script loaded successfully!');

//gooey liquid footer
const container = document.getElementById("particle-container");
const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    const span = document.createElement("span");
    span.classListt.add("particle");

    span.style.setProperty("--dim", '${3 + Math.random() * 6}rem');
    span.style.setProperty("--uplift", '${-10 - Math.random() * 15}rem');
    span.style.setProperty("--pos-x", '${Math.random() * 100}%');
    span.style.setProperty("--dur", '${3 + Math.random() * 3}s');
    span.style.setProperty("--delay", '${-1 *Math.random() * 10}s');

    fragment.appendChild(span);
}
container.appendChild(fragment);