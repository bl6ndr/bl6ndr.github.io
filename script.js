document.addEventListener('DOMContentLoaded', () => {
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

    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 1200 } },
            color: { value: ['#e0f7fa', '#f44336', '#4caf50'] },
            shape: { type: 'circle' },
            opacity: { value: 0.6, random: true },
            size: { value: 3.5, random: true },
            line_linked: {
                enable: true,
                distance: 140,
                color: '#e0f7fa',
                opacity: 0.25,
                width: 1.2
            },
            move: {
                enable: true,
                speed: 1.8,
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
                grab: { distance: 180, line_linked: { opacity: 0.4 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    if (typeof gsap !== 'undefined') {
        gsap.to('.content', { duration: 1.2, opacity: 1, y: 0, ease: 'power3.out' });
        gsap.from('.logo', { duration: 1.5, y: -150, opacity: 0, ease: 'power3.out' });
        gsap.to('.features', { duration: 1, opacity: 1, y: 0, ease: 'power2.out', delay: 0.5 });
        gsap.to('.feature-item', { 
            duration: 0.8, 
            opacity: 1, 
            y: 0, 
            stagger: 0.2, 
            ease: 'power2.out', 
            delay: 0.8 
        });
        gsap.to('.countdown', { duration: 1, opacity: 1, y: 0, ease: 'power2.out', delay: 1.2 });
        gsap.to('.countdown-item', { 
            duration: 0.8, 
            opacity: 1, 
            scale: 1, 
            stagger: 0.2, 
            ease: 'power2.out', 
            delay: 1.5 
        });
        gsap.to('.cta-button', { duration: 1, opacity: 1, y: 0, ease: 'power3.out', delay: 2 });
    } else {
        document.querySelector('.content').style.opacity = '1';
        document.querySelector('.content').style.transform = 'translateY(0)';
        document.querySelector('.features').style.opacity = '1';
        document.querySelector('.features').style.transform = 'translateY(0)';
        document.querySelectorAll('.feature-item').forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
        document.querySelector('.countdown').style.opacity = '1';
        document.querySelector('.countdown').style.transform = 'translateY(0)';
        document.querySelectorAll('.countdown-item').forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        });
        document.querySelector('.cta-button').style.opacity = '1';
        document.querySelector('.cta-button').style.transform = 'translateY(0)';
    }

    const cursor = document.querySelector('.custom-cursor');
    if (window.innerWidth >= 1024) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX - 20}px`;
            cursor.style.top = `${e.clientY - 20}px`;
            cursor.style.display = 'block';
        });

        document.addEventListener('mousedown', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(cursor, { scale: 1.7, duration: 0.2 });
            } else {
                cursor.style.transform = 'scale(1.7)';
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

    startCountdown();
});
