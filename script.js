// NAVIGATION
const quickNav = document.getElementById("quickNav");
const toggleBtn = quickNav.querySelector(".close-nav");
// Toggle ouverture/fermeture bouton
toggleBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  quickNav.classList.toggle("open");
});
// Ouverture clic hors bouton
quickNav.addEventListener("click", function (e) {
  if (!e.target.closest(".close-nav") && !quickNav.classList.contains("open")) {
    e.stopPropagation();
    quickNav.classList.add("open");
  }
});
// Fermeture clic sur un lien
quickNav.querySelectorAll("ul a").forEach(link => {
  link.addEventListener("click", function () {
    quickNav.classList.remove("open");
  });
});
// Fermeture clic en dehors
document.addEventListener("click", function (e) {
  if (!quickNav.contains(e.target)) {
    quickNav.classList.remove("open");
  }
});

// TYPEWRITER EFFECT
let textHero = '[Votre métier ou activité...]';
let indexHero = 0;
let speedHero = 60;
function typeWriterHero() {
  if (indexHero < textHero.length) {
    document.getElementById("demo").textContent += textHero.charAt(indexHero);
    indexHero++;
    setTimeout(typeWriterHero, speedHero);
  }
}
window.addEventListener("load", () => {
    setTimeout(() => {
        typeWriterHero();
    }, 400);
});

// GESTION CLOSE DETAILS
document.querySelectorAll('.faq details').forEach(detail => {
  detail.addEventListener('click', function () {
    document.querySelectorAll('.faq details').forEach(other => {
      if (other !== detail) {
        other.removeAttribute('open');
      }
    });
  });
});

// MENTIONS LEGALES SIDENAV
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("legal-toggle");
  const sidenav = document.getElementById("legal-sidenav");
  const closeBtn = document.getElementById("legal-close");
  const overlay = document.getElementById("overlay");

  toggleBtn.addEventListener("click", () => {
    const isOpen = sidenav.getAttribute("aria-hidden") === "false";
    sidenav.setAttribute("aria-hidden", String(isOpen));
    toggleBtn.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("overlay", !isOpen);
  });

  closeBtn.addEventListener("click", () => {
    sidenav.setAttribute("aria-hidden", "true");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("overlay");
  });
    // Fermeture clic en dehors
    overlay.addEventListener("click", function (e) {
        sidenav.setAttribute("aria-hidden", "true");
        toggleBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("overlay");
    });  
});
