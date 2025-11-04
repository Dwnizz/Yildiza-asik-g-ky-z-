const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const intro = document.getElementById("intro");
const film = document.getElementById("film");
const filmVideo = document.getElementById("filmVideo");
const overlayText = document.getElementById("overlayText");

yesBtn.addEventListener("click", () => {
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    film.style.display = "block";
    filmVideo.play();
  }, 800);
});

noBtn.addEventListener("click", () => {
  alert("Belki birazdan 💫");
});

filmVideo.addEventListener("ended", () => {
  overlayText.innerHTML = `
    <p class="final-text">
      Gökyüzün olarak sana yansıma yaptıkça<br>
      gökyüzüme ait küçük yıldızım olmaya devam eder misin?
    </p>
  `;
  overlayText.classList.add("show");
});
