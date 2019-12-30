const carouselSlide = document.querySelector(".carousel_slide");
const carouselImages = document.querySelectorAll(".slide_wrapper");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener("transitionend", () => {
    console.log("counter", counter);
    if (carouselImages[counter].id === "last_clone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }
    if (carouselImages[counter].id === "first_clone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }
});