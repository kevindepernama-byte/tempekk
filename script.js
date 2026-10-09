// Create moving particles
function createParticles() {
    const container = document.getElementById('particlesContainer');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}vw`;
        
        // Random color
        const colors = [
            'rgba(59, 130, 246, 0.1)',
            'rgba(10, 36, 99, 0.1)',
            'rgba(30, 64, 175, 0.1)',
            'rgba(37, 99, 235, 0.1)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        // Random animation
        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 5;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
    }
}
const gallerySlider = document.getElementById("gallerySlider");
const galleryItems = gallerySlider.querySelectorAll(".gallery-item");
const galleryCurrent = document.getElementById("galleryCurrent");
const galleryTotal = document.getElementById("galleryTotal");

const galleryPrev = document.querySelector(".gallery-btn.prev");
const galleryNext = document.querySelector(".gallery-btn.next");

galleryTotal.textContent = galleryItems.length;

function getGalleryStep() {
    const item = galleryItems[0];
    const style = getComputedStyle(gallerySlider);
    const gap = parseFloat(style.columnGap) || 0;

    return item.getBoundingClientRect().width + gap;
}

galleryNext.addEventListener("click", () => {
    gallerySlider.scrollBy({
        left: getGalleryStep(),
        behavior: "smooth"
    });
});

galleryPrev.addEventListener("click", () => {
    gallerySlider.scrollBy({
        left: -getGalleryStep(),
        behavior: "smooth"
    });
});

function updateGalleryCounter() {
    const step = getGalleryStep();
    const index = Math.round(gallerySlider.scrollLeft / step);

    galleryCurrent.textContent = Math.min(
        index + 1,
        galleryItems.length
    );
}

gallerySlider.addEventListener("scroll", updateGalleryCounter);
window.addEventListener("resize", updateGalleryCounter);
// Navigation Toggle untuk ikon titik 3
const navToggle = document.getElementById('navToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
const navLinks = document.querySelectorAll('.nav-link');
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
});

// Close dropdown when clicking a link
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        dropdownMenu.classList.remove('active');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        dropdownMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active nav link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Form submission
const messageForm = document.getElementById('messageForm');
if (messageForm) {
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;
        const message = document.getElementById('message').value;
        
        if (name && email && interest && message) {
            const interestText = {
                'jaringan': 'Jaringan Komputer',
                'programming': 'Pemrograman',
                'hardware': 'Hardware & Maintenance',
                'cyber': 'Keamanan Siber',
                'web': 'Web Development'
            };
            
            alert(`Terima kasih ${name}! Pendaftaran minat ${interestText[interest]} telah berhasil dikirim. Kami akan menghubungi Anda melalui email ${email} dalam waktu 1-2 hari kerja.`);
            
            messageForm.reset();
        } else {
            alert('Harap lengkapi semua field sebelum mengirim formulir.');
        }
    });
}

// Album tabs functionality
const albumTabs = document.querySelectorAll('.album-tab');
const albumContainers = document.querySelectorAll('.album-container');

albumTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        albumTabs.forEach(t => t.classList.remove('active'));
        albumContainers.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        
        const albumId = tab.getAttribute('data-album');
        document.getElementById(albumId).classList.add('active');
    });
});

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

const checkScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Responsive structure handling
function handleStructureResponsive() {
    const orgChart = document.querySelector('.org-chart');
    const mobileStructure = document.querySelector('.mobile-structure');
    
    if (window.innerWidth <= 992) {
        if (orgChart) orgChart.style.display = 'none';
        if (mobileStructure) mobileStructure.style.display = 'grid';
    } else {
        if (orgChart) orgChart.style.display = 'block';
        if (mobileStructure) mobileStructure.style.display = 'none';
        
        // Adjust structure spacing for desktop
        const level2 = document.querySelector('.level-2');
        const level3 = document.querySelector('.level-3');
        const level4 = document.querySelector('.level-4');
        
        if (window.innerWidth <= 1200) {
            if (level2) level2.style.gap = '350px';
            if (level3) level3.style.gap = '250px';
            if (level4) level4.style.gap = '250px';
        } else {
            if (level2) level2.style.gap = '400px';
            if (level3) level3.style.gap = '300px';
            if (level4) level4.style.gap = '300px';
        }
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    createParticles();
    checkScroll();
    handleStructureResponsive();
    
    // Animate logo
    const logoIcon = document.querySelector('.logo-icon');
    if (logoIcon) {
        setInterval(() => {
            logoIcon.style.animation = 'none';
            setTimeout(() => {
                logoIcon.style.animation = 'logoPulse 3s infinite';
            }, 10);
        }, 10000);
    }
    
    // Set initial active nav link
    const currentSection = window.location.hash || '#beranda';
    const activeLink = document.querySelector(`a[href="${currentSection}"]`);
    if (activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
});

// Handle window resize
window.addEventListener('resize', handleStructureResponsive);
