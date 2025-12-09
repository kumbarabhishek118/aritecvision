let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(n) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active-dot"));
        slides[n].classList.add("active");
        dots[n].classList.add("active-dot");
    }

    function changeSlide(n) {
        slideIndex = (slideIndex + n + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    function currentSlide(n) {
        slideIndex = n;
        showSlide(slideIndex);
    }

    function currentSlide(n) {
        slideIndex = n;
        showSlide(slideIndex);
    }
    // Auto Slide
    setInterval(() => {
        changeSlide(1);
    }, 3000);
});
