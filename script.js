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
            number: { value: 30, density: { enable: true, value_area: 700 } },
            color: { value: ['#eceff5', '#f4511e', '#64dd17'] },
            shape: { type: 'circle' },
            opacity: { value: 0.25, random: true },
            size: { value: 1.5, random: true },
            line_linked: {
                enable: true,
                distance: 80,
                color: '#eceff5',
                opacity: 0.08,
                width: 0.5
            },
            move: {
                enable: true,
                speed: 0.6,
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
                grab: { distance: 100, line_linked: { opacity: 0.1 } }
            }
        },
        retina_detect: true
    });

    if (typeof gsap !== 'undefined') {
        gsap.to('.content', { duration: 0.7, opacity: 1, y: 0, ease: 'power2.out' });
        gsap.from('.logo', { duration: 0.9, y: -60, opacity: 0, ease: 'power2.out' });
        gsap.to('.features', { duration: 0.5, opacity: 1, y: 0, ease: 'power2.out', delay: 0.2 });
        gsap.to('.feature-item', { 
            duration: 0.4, 
            opacity: 1, 
            y: 0, 
            stagger: 0.06, 
            ease: 'power2.out', 
            delay: 0.4 
        });
        gsap.to('.countdown', { duration: 0.5, opacity: 1, y: 0, ease: 'power2.out', delay: 0.5 });
        gsap.to('.countdown-item', { 
            duration: 0.4, 
            opacity: 1, 
            scale: 1, 
            stagger: 0.06, 
            ease: 'power2.out', 
            delay: 0.7 
        });
        gsap.to('.cta-button', { duration: 0.5, opacity: 1, y: 0, ease: 'power2.out', delay: 0.9 });
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
                { value: 2, duration: 300 },
                { value: -2, duration: 300 },
                { value: 0, duration: 300 }
            ],
            loop: true,
            easing: 'easeInOutSine',
            delay: anime.stagger(80)
        });
    }

    startCountdown();
});
