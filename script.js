

// Carousel functionality
const slides = document.querySelectorAll('.my-slides ul li');
const nextBtn = document.querySelector('.my-slides .next-slide');
const dots = document.querySelectorAll('.my-slides .pagination span');
let currentIndex = 0;

// Function to update the carousel
function updateCarousel(index) {
    // Hide all slides and remove active class from dots
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.remove('next');
    });

    dots.forEach(dot => dot.classList.remove('active'));

    // Show the selected slide and highlight the corresponding dot
    slides[index].classList.add('active');

    // Add 'next' class to the next slide for potential animations
    const nextIndex = (index + 1) % slides.length;
    slides[nextIndex].classList.add('next');

    // Update the active dot
    dots[index].classList.add('active');
}

// Next button logic
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

// Initialize carousel
updateCarousel(0);

