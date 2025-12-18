const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
    index = (i + images.length) % images.length; 
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => showSlide(index + 1));
prevBtn.addEventListener("click", () => showSlide(index - 1));

// Auto-slide cada 4 segundos
setInterval(() => showSlide(index + 1), 4000);