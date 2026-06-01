document.addEventListener('DOMContentLoaded', () => {
    // Mouse Tracker Effect
    const tracker = document.getElementById('mouse-tracker');
    
    document.addEventListener('mousemove', (e) => {
        if(tracker) {
            tracker.style.left = e.clientX + 'px';
            tracker.style.top = e.clientY + 'px';
        }
    });

    // Make tracker glow brighter when clicking
    document.addEventListener('mousedown', () => {
        if(tracker) {
            tracker.style.background = 'radial-gradient(circle, rgba(230, 0, 0, 0.3) 0%, rgba(0,0,0,0) 70%)';
            tracker.style.transform = 'translate(-50%, -50%) scale(0.9)';
        }
    });

    document.addEventListener('mouseup', () => {
        if(tracker) {
            tracker.style.background = 'radial-gradient(circle, rgba(230, 0, 0, 0.15) 0%, rgba(0,0,0,0) 70%)';
            tracker.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-scroll').forEach(element => {
        observer.observe(element);
    });
});
