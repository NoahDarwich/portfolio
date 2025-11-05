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

// CV Tab Switching Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cvNavLinks = document.querySelectorAll('.cv-nav-link[data-tab]');
    const cvContent = document.getElementById('cv-content');

    if (!cvNavLinks.length || !cvContent) return;

    // Function to show selected tab content
    function showTab(tabName) {
        // Find the section template
        const section = document.querySelector(`[data-section="${tabName}"]`);
        if (!section) return;

        // Clone the section content
        const sectionClone = section.cloneNode(true);
        sectionClone.style.display = 'block';
        sectionClone.classList.remove('cv-section-template');
        sectionClone.classList.add('cv-section-active');

        // Clear current content and add new content with fade-in animation
        cvContent.style.opacity = '0';

        setTimeout(() => {
            cvContent.innerHTML = '';
            cvContent.appendChild(sectionClone);
            cvContent.style.opacity = '1';

            // Scroll to content smoothly
            setTimeout(() => {
                cvContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }, 200);

        // Update active state on buttons
        cvNavLinks.forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Add click handlers to all tab buttons
    cvNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            showTab(tabName);
        });
    });

    // Optionally show first tab by default
    // showTab('experience');
});

// ============================================
// TIMELINE DURATION CALCULATOR
// ============================================

/**
 * Parse date string to Date object
 * Handles formats like "YYYY-MM"
 */
function parseDate(dateStr) {
    const [year, month] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, 1);
}

/**
 * Calculate duration in months between two dates
 */
function monthDiff(startDate, endDate) {
    return (endDate.getFullYear() - startDate.getFullYear()) * 12
           + (endDate.getMonth() - startDate.getMonth());
}

/**
 * Map duration in months to pixel height for duration bar
 * Scale: 40-200px range for 1-60 months
 */
function mapDurationToHeight(months) {
    const minHeight = 40;
    const maxHeight = 200;
    const minMonths = 1;
    const maxMonths = 60;

    const clampedMonths = Math.max(minMonths, Math.min(maxMonths, months));
    const ratio = (clampedMonths - minMonths) / (maxMonths - minMonths);

    return minHeight + (ratio * (maxHeight - minHeight));
}

/**
 * Format duration for display
 * Examples: "3 months", "1 year", "2 years 3 months"
 */
function formatDuration(months) {
    if (months < 1) return 'Less than a month';
    if (months === 1) return '1 month';
    if (months < 12) return `${months} months`;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let result = years === 1 ? '1 year' : `${years} years`;
    if (remainingMonths > 0) {
        result += ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }

    return result;
}

/**
 * Calculate duration from start and end date strings
 */
function calculateDuration(startStr, endStr) {
    const start = parseDate(startStr);
    const end = endStr.toLowerCase() === 'present' ? new Date() : parseDate(endStr);

    const months = monthDiff(start, end);

    return {
        months: months,
        height: mapDurationToHeight(months),
        text: formatDuration(months)
    };
}

/**
 * Initialize timeline durations for all timeline items
 */
function initTimelineDurations() {
    const timelineItems = document.querySelectorAll('.timeline-item[data-start]');

    timelineItems.forEach(item => {
        const start = item.getAttribute('data-start');
        const end = item.getAttribute('data-end') || 'present';

        if (!start) return;

        const duration = calculateDuration(start, end);

        // Set duration bar height
        const durationBar = item.querySelector('.timeline-duration-bar');
        if (durationBar) {
            durationBar.style.height = duration.height + 'px';
        }

        // Set duration text
        const durationText = item.querySelector('.timeline-duration-text');
        if (durationText) {
            durationText.textContent = duration.text;
        }
    });
}

// Initialize on DOM ready and set up tab switching
document.addEventListener('DOMContentLoaded', function() {
    // Initialize timeline durations on page load
    initTimelineDurations();

    // Re-initialize when CV tabs are switched
    const cvNavLinks = document.querySelectorAll('.cv-nav-link[data-tab]');
    cvNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(function() {
                initTimelineDurations();
            }, 250);
        });
    });
});
