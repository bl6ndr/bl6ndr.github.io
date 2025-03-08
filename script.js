// Ensure DOM is loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    function startCountdown() {
        const launchDate = new Date('2025-06-01T00:00:00').getTime();

        function updateTimer() {
            const now = new Date().getTime();
            const distance = launchDate - now;

            if (distance < 0) {
                clearInterval(timerInterval);
                document.querySelector('.content').innerHTML = '<h1>MicAlgeria is Live!</h1>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }

        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
    }

    // Particles.js Background
    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: ['#ffffff', '#d20000', '#004d00'] },
            shape: { type: 'circle' },
            opacity: { value: 0.6, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 100,
                color: '#ffffff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out'
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' }
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.4 } },
                push: { particles_nb: 2 }
            }
        },
        retina_detect: true
    }, () => {
        console.log('Particles.js loaded successfully');
    });

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        gsap.to('.content', { duration: 1, opacity: 1, y: 0, ease: 'power3.out' });
        gsap.from('.logo', { duration: 1.5, y: -100, opacity: 0, ease: 'power3.out' });
        gsap.to('.feature-item', { 
            duration: 1, 
            opacity: 1, 
            scale: 1, 
            stagger: 0.2, 
            ease: 'power2.out', 
            delay: 0.5 
        });
        gsap.to('.countdown-item', { 
            duration: 1, 
            opacity: 1, 
            scale: 1, 
            stagger: 0.2, 
            ease: 'power2.out', 
            delay: 1 
        });
    } else {
        console.error('GSAP not loaded');
        // Fallback: Show content without animation
        document.querySelector('.content').style.opacity = '1';
        document.querySelectorAll('.feature-item').forEach(item => item.style.opacity = '1');
        document.querySelectorAll('.countdown-item').forEach(item => item.style.opacity = '1');
    }

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    if (window.innerWidth >= 1024) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX - 15}px`;
            cursor.style.top = `${e.clientY - 15}px`;
            cursor.style.display = 'block'; // Ensure visibility
        });

        document.addEventListener('mousedown', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(cursor, { scale: 1.5, duration: 0.2 });
            } else {
                cursor.style.transform = 'scale(1.5)';
            }
        });

        document.addEventListener('mouseup', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(cursor, { scale: 1, duration: 0.2 });
            } else {
                cursor.style.transform = 'scale(1)';
            }
        });
    }

    // Start Countdown
    startCountdown();
});
