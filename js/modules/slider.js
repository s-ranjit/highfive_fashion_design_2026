export function slider() {
    const slides = document.querySelectorAll('.slider-card'); 
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function getCardsPerSlide() {
        if (window.innerWidth >= 1200) return 3; // desktop
        if (window.innerWidth >= 768) return 2;  // tablet
        return 1;                                 // mobile
    }

    function updateSlides() {
        const cardsPerSlide = getCardsPerSlide();

        // hide all slides first
        slides.forEach(slide => slide.style.display = 'none');

        // show only the current group of slides
        for (let i = 0; i < cardsPerSlide; i++) {
            let index = (currentIndex + i) % slides.length;
            slides[index].style.display = 'block';
        }

        // update dots
        const activeDot = Math.floor(currentIndex / cardsPerSlide);
        dots.forEach((dot, i) => dot.classList.toggle('active', i === activeDot));
    }

    function nextSlide() {
        const cardsPerSlide = getCardsPerSlide();
        currentIndex += cardsPerSlide;
        if (currentIndex >= slides.length) currentIndex = 0;
        updateSlides();
    }

    function prevSlide() {
        const cardsPerSlide = getCardsPerSlide();
        currentIndex -= cardsPerSlide;
        if (currentIndex < 0) currentIndex = slides.length - cardsPerSlide;
        if (currentIndex < 0) currentIndex = 0; // fallback
        updateSlides();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    window.addEventListener('resize', updateSlides);

    updateSlides();
}