document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;

        if (prevSlide) {
            moveToSlide(track, currentSlide, prevSlide);
            nextButton.removeAttribute('disabled'); // Enable the next button
        }

        if (!prevSlide.previousElementSibling) {
            prevButton.setAttribute('disabled', 'disabled'); // Disable the prev button
        }
    });

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;

        if (nextSlide && !nextSlide.classList.contains('carousel-slide-end-slide')) {
            moveToSlide(track, currentSlide, nextSlide);
            prevButton.removeAttribute('disabled'); // Enable the prev button
        }

        if (nextSlide && nextSlide.classList.contains('carousel-slide-end-slide')) {
            nextButton.setAttribute('disabled', 'disabled'); // Disable the next button
        }
    });

    // Initially disable the prev button if the first slide is current
    if (!track.querySelector('.current-slide').previousElementSibling) {
        prevButton.setAttribute('disabled', 'disabled');
    }

    // Initially disable the next button if the last slide is current
    if (track.querySelector('.current-slide').classList.contains('carousel-slide-end-slide')) {
        nextButton.setAttribute('disabled', 'disabled');
    }
});
