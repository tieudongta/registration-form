<script>
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dotsContainer = document.getElementById("dots");

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dotsContainer.children.length; i++)
    dotsContainer.children[i].classList.remove("active");

  slides[n].style.display = "block";
  dotsContainer.children[n].classList.add("active");
}

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

// Generate dots dynamically based on slide count
function initDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.onclick = () => currentSlide(i);
    dotsContainer.appendChild(dot);
  }
}

// Initialize slideshow
window.onload = () => {
  initDots();
  showSlide(slideIndex);
};
</script>
