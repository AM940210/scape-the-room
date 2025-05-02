const timerEl = document.getElementById("timer");
const slideEl = document.getElementById("slide");

let timeLeft = 60;
let currentIndex = 0;

let slides = [
    { src: "images/room2_1.jpg", correct: false },
    { src: "images/room2_2.jpg", correct: false },
    { src: "images/room2_3.jpg", correct: true },
    { src: "images/room2_4.jpg", correct: false },
    { src: "images/room2_5.jpg", correct: false }
];

// Shuffle slides array
slides = slides.sort(() => Math.random() - 0.5);

// Set the first image
slideEl.src = slides[currentIndex].src;

// Start timer
const timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Tid kvar: ${timeLeft}`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        clearInterval(slideshow);
        alert("Tiden är slut! Du hann inte välja rätt bild.");
        slideEl.style.pointerEvents = "none"; // disable clicking
    }
}, 1000);

// Start slideshow
const slideshow = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    slideEl.src = slides[currentIndex].src;
}, 5000);

// Handle click on image
slideEl.addEventListener("click", () => {
    if (slides[currentIndex].correct) {
        clearInterval(timer);
        clearInterval(slideshow);
        alert("Rätt bild! Du går vidare till nästa rum.")
        window.location.href = "room3.html";
    } else {
        alert("Fel bild! Försök med en annan.");
    }
});