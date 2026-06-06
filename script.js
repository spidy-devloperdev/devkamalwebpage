// --- APPLICATION BOOTLOADER & PRELOADER KILLER ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if(preloader) {
                preloader.style.opacity = '0';
                setTimeout(() => preloader.style.display = 'none', 600);
            }
            initScrollReveal();
            initSkillBars();
        }, 1000);
    });

    // --- PREMIUM ACCELERATED PLATFORM CURSOR ---
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    if (window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });

        document.querySelectorAll('a, button, .glass-card').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.width = '55px';
                cursor.style.height = '55px';
                cursor.style.background = 'rgba(0, 243, 255, 0.04)';
            });
            element.addEventListener('mouseleave', () => {
                cursor.style.width = '35px';
                cursor.style.height = '35px';
                cursor.style.background = 'transparent';
            });
        });
    } else {
        if(cursor) cursor.style.display = 'none';
        if(cursorDot) cursorDot.style.display = 'none';
    }

    // --- HIGH-PERFORMANCE INTERACTIVE 3D TILT MATRIX ---
    const tiltCard = document.getElementById('tilt-card');
    if (tiltCard && window.innerWidth > 1024) {
        tiltCard.addEventListener('mousemove', (e) => {
            const rect = tiltCard.getBoundingClientRect();
            const x = e.clientX - rect.left; // Mouse position inside card
            const y = e.clientY - rect.top;
            
            const cardWidth = rect.width;
            const cardHeight = rect.height;
            
            // Calculate rotational vectors (-15 to 15 degrees max)
            const rotateX = ((y / cardHeight) - 0.5) * -25;
            const rotateY = ((x / cardWidth) - 0.5) * 25;
            
            tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            
            // Dynamic variable transmission for glass shimmer
            tiltCard.style.setProperty('--mouse-x', `${(x / cardWidth) * 100}%`);
            tiltCard.style.setProperty('--mouse-y', `${(y / cardHeight) * 100}%`);
        });
        
        tiltCard.addEventListener('mouseleave', () => {
            tiltCard.style.transform = 'rotateX(10deg) rotateY(-15deg) scale(1)';
        });
    }

    // --- PERFORMANCE-SAFE BACKGROUND QUANTUM FLOATING PARTICLES ---
    const particleBox = document.getElementById('particles-container');
    if (particleBox) {
        const count = window.innerWidth < 768 ? 15 : 35;
        for (let i = 0; i < count; i++) {
            const node = document.createElement('div');
            node.style.position = 'absolute';
            node.style.width = `${Math.random() * 3 + 1}px`;
            node.style.height = node.style.width;
            node.style.background = Math.random() > 0.5 ? '#00f3ff' : '#b000ff';
            node.style.borderRadius = '50%';
            node.style.top = `${Math.random() * 100}%`;
            node.style.left = `${Math.random() * 100}%`;
            node.style.opacity = Math.random() * 0.4;
            node.style.pointerEvents = 'none';
            
            node.animate([
                { transform: 'translateY(0px) rotate(0deg)' },
                { transform: `translateY(${Math.random() * -120 - 40}px) translateX(${Math.random() * 40 - 20}px) rotate(360deg)` }
            ], {
                duration: Math.random() * 8000 + 7000,
                iterations: Infinity,
                direction: 'alternate',
                easing: 'ease-in-out'
            });
            particleBox.appendChild(node);
        }
    }

    // --- NAVIGATION LOGIC MATRIX ---
    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 60) header.classList.add('sticky');
        else header.classList.remove('sticky');

        if (currentScroll > 700) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');

        // Link highlighting manager
        sections.forEach(sec => {
            const top = sec.offsetTop - 140;
            const bottom = top + sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (currentScroll >= top && currentScroll < bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('href') === `#${id}`) link.classList.add('active');
                });
            }
        });
    });

    if(backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- MOBILE BURGER CONTROLLER ---
    const burger = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.nav-menu');

    if(burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(l => {
            l.addEventListener('click', () => {
                burger.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }

    // --- STREAMLINED TYPING HARDWARE ---
    const phrases = ['Full Stack Architecture.', '3D User Interfaces.', 'High Performance Apps.', 'Clean Logic Solutions.'];
    let pIdx = 0, cIdx = 0, isDeleting = false;
    const typingText = document.getElementById('typing-element');

    function runTypingEngine() {
        if (!typingText) return;
        const current = phrases[pIdx];

        if (isDeleting) {
            typingText.textContent = current.substring(0, cIdx - 1);
            cIdx--;
        } else {
            typingText.textContent = current.substring(0, cIdx + 1);
            cIdx++;
        }

        let dynamicSpeed = isDeleting ? 35 : 75;

        if (!isDeleting && cIdx === current.length) {
            dynamicSpeed = 2200; // Freeze text completely at peak text visibility
            isDeleting = true;
        } else if (isDeleting && cIdx === 0) {
            isDeleting = false;
            pIdx = (pIdx + 1) % phrases.length;
            dynamicSpeed = 400;
        }

        setTimeout(runTypingEngine, dynamicSpeed);
    }
    if (typingText) setTimeout(runTypingEngine, 1000);

    // --- OBSERVER ENGINE: SCROLL REVEAL ---
    function initScrollReveal() {
        const elements = document.querySelectorAll('.scroll-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    if (entry.target.contains(document.querySelector('.stat-number'))) {
                        runCounters();
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

        elements.forEach(el => observer.observe(el));
    }

    // --- HARDWARE STATS COUNTER ---
    let executedCounters = false;
    function runCounters() {
        if (executedCounters) return;
        executedCounters = true;

        document.querySelectorAll('.stat-number').forEach(node => {
            const limit = parseInt(node.getAttribute('data-target'), 10);
            let current = 0;
            const factor = limit / 45;

            const increment = () => {
                current += factor;
                if (current < limit) {
                    node.textContent = Math.floor(current) + (limit === 100 ? '' : '+');
                    setTimeout(increment, 25);
                } else {
                    node.textContent = limit + (limit === 100 ? '%' : '+');
                }
            };
            increment();
        });
    }

    // --- OBSERVER ENGINE: PROGRESS REVEAL ---
    function initSkillBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.progress').forEach(bar => {
                        bar.style.width = bar.getAttribute('data-width');
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.skills-category').forEach(cat => observer.observe(cat));
    }
});
