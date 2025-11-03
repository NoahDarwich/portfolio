// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let lastRun;
    return function() {
        const args = arguments;
        const context = this;
        const now = Date.now();
        if (!lastRun || (now - lastRun >= limit)) {
            func.apply(context, args);
            lastRun = now;
        }
    }
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll - handled by throttled event listener below

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.expertise-item, .service-card, .project-card, .stat-item, .contact-method');
    animateElements.forEach(el => observer.observe(el));
});

// Chart animation on hero section
function animateCharts() {
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.height = bar.style.height || '60%';
            bar.style.opacity = '1';
        }, index * 200);
    });
}

// Trigger chart animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCharts();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const organization = formData.get('organization');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        showNotification('Thank you! Your message has been sent. I\'ll get back to you soon.', 'success');
        
        // Reset form
        this.reset();
        
        // In a real implementation, you would send the data to your server
        // Example: sendFormData(formData);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Parallax effect for floating elements (throttled)
const parallaxEffect = throttle(() => {
    const scrolled = window.pageYOffset;
    const elements = document.querySelectorAll('.element');
    
    elements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}, 16); // ~60fps

if (document.querySelectorAll('.element').length > 0) {
    window.addEventListener('scroll', parallaxEffect);
}

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Uncomment the line below to enable typing effect
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    .notification-message {
        flex: 1;
        line-height: 1.4;
    }
`;

document.head.appendChild(notificationStyles);

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
}, 100));

// Animate stats numbers when they come into view (not on initial load to prevent CLS)
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stat = entry.target;
            const finalNumber = stat.getAttribute('data-final') || stat.textContent;
            const isPercentage = finalNumber.includes('%');
            const isPlus = finalNumber.includes('+');
            const isComma = finalNumber.includes(',');
            const numericValue = parseInt(finalNumber.replace(/[^\d]/g, ''));
            
            // Only animate if we haven't already
            if (numericValue && !stat.classList.contains('animated')) {
                stat.classList.add('animated');
                animateNumber(stat, numericValue, numericValue, 1500, isPercentage, isPlus, isComma);
            }
            statsObserver.unobserve(stat);
        }
    });
}, { threshold: 0.5 });

// Observe stat numbers on page load
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => statsObserver.observe(stat));
});

// Number animation function
function animateNumber(element, start, end, duration, isPercentage = false, isPlus = false, isComma = false) {
    const startTime = performance.now();
    let suffix = '';
    if (isPercentage) suffix = '%';
    if (isPlus) suffix += '+';
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        const formatted = isComma ? current.toLocaleString() : current;
        element.textContent = formatted + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            // Ensure final value matches exactly
            const finalFormatted = isComma ? end.toLocaleString() : end;
            element.textContent = finalFormatted + suffix;
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Fade animation styles are now in styles.css to prevent duplication and flashing
