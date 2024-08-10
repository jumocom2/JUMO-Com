// script.js
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

document.addEventListener("click", () => {
  hamMenu.classList.remove("active");
  offScreenMenu.classList.remove("active");
});

offScreenMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Afficher le bouton lorsque l'utilisateur fait défiler la page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Retourner au-dessus de la page lorsque l'utilisateur clique sur le bouton
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.video-container video').forEach(video => {
  video.addEventListener('mouseover', function() {
      this.play();
  });
  video.addEventListener('mouseout', function() {
      this.pause();
  });
});

// Empêcher telechargement images

document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG') {
      e.preventDefault();
  }
});

// Empêcher glisser deposer

document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG') {
      e.preventDefault();
  }
});

//Defilement lent et fluide

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

