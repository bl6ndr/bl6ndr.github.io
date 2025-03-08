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
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: ['#e1f5fe', '#ef5350', '#81c784'] },
            shape: { type: 'circle' },
            opacity: { value: 0.3, random: true },
            size: { value: 2, random: true },
            line_linked: {
                enable: true,
                distance: 100,
                color: '#e1f5fe',
                opacity: 0.1,
                width: 0.6
            },
            move: {
                enable: true,
                speed: 0.8,
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
                onclick: { enable: false }
            },
            modes: {
                grab: { distance: 120, line_linked: { opacity: 0.15 } }
            }
        },
        retina_detect: true
    });

    if (typeof gsap !== 'undefined') {
        gsap.to('.content', { duration: 0.8, opacity: 1, y: 0, ease: 'power2.out' });
        gsap.from('.logo', { duration: 1, y: -80, opacity: 0, ease: 'power2.out' });
        gsap.to('.features', { duration: 0.6, opacity: 1, y: 0, ease: 'power2.out', delay: 0.3 });
        gsap.to('.feature-item', { 
            duration: 0.5, 
            opacity: 1, 
            y: 0, 
            stagger: 0.08, 
            ease: 'power2.out', 
            delay: 0.5 
        });
        gsap.to('.countdown', { duration: 0.6, opacity: 1, y: 0, ease: 'power2.out', delay: 0.6 });
        gsap.to('.countdown-item', { 
            duration: 0.5, 
            opacity: 1, 
            scale: 1, 
            stagger: 0.08, 
            ease: 'power2.out', 
            delay: 0.8 
        });
        gsap.to('.cta-button', { duration: 0.6, opacity: 1, y: 0, ease: 'power2.out', delay: 1 });
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

    if (typeof anime !== 'undefined') {
        anime({
            targets: '.feature-item i',
            rotate: [
                { value: 3, duration: 400 },
                { value: -3, duration: 400 },
                { value: 0, duration: 400 }
            ],
            loop: true,
            easing: 'easeInOutSine',
            delay: anime.stagger(100)
        });
    }

    startCountdown();
});
