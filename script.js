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
            number: { value: 90, density: { enable: true, value_area: 1300 } },
            color: { value: ['#e8f5e9', '#ef5350', '#4caf50'] },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#e8f5e9',
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
                grab: { distance: 200, line_linked: { opacity: 0.3 } },
                push: { particles_nb: 5 }
            }
        },
        retina_detect: true
    });

    if (typeof gsap !== 'undefined') {
        gsap.to('.content', { duration: 1.2, opacity: 1, y: 0, ease: 'power3.out' });
        gsap.from('.logo', { duration: 1.5, y: -120, opacity: 0, ease: 'power3.out' });
        gsap.to('.features', { duration: 1, opacity: 1, y: 0, ease: 'power2.out', delay: 0.5 });
        gsap.to('.feature-item', { 
            duration: 0.8, 
            opacity: 1, 
            y: 0, 
            stagger: 0.15, 
            ease: 'power2.out', 
            delay: 0.8 
        });
        gsap.to('.countdown', { duration: 1, opacity: 1, y: 0, ease: 'power2.out', delay: 1.2 });
        gsap.to('.countdown-item', { 
            duration: 0.8, 
            opacity: 1, 
            scale: 1, 
            stagger: 0.15, 
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

    if (typeof anime !== 'undefined') {
        anime({
            targets: '.feature-item i',
            rotate: [
                { value: 5, duration: 600 },
                { value: -5, duration: 600 },
                { value: 0, duration: 600 }
            ],
            loop: true,
            easing: 'easeInOutSine',
            delay: anime.stagger(200)
        });
    }

    if (typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('particles-js').appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        for (let i = 0; i < 1000; i++) {
            vertices.push(
                (Math.random() - 0.5) * 200,
                (Math.random() - 0.5) * 200,
                (Math.random() - 0.5) * 200
            );
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const material = new THREE.PointsMaterial({ color: 0x4caf50, size: 0.5, transparent: true, opacity: 0.6 });
        const points = new THREE.Points(geometry, material);
        scene.add(points);
        camera.position.z = 100;

        function animate() {
            requestAnimationFrame(animate);
            points.rotation.y += 0.002;
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    startCountdown();
});
