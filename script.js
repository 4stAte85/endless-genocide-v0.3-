// Barre de recherche
const searchBar = document.getElementById("searchBar");
const fights = document.querySelectorAll(".fight-card");

searchBar.addEventListener("keyup", () => {
  let filter = searchBar.value.toLowerCase();
  fights.forEach(card => {
    let title = card.querySelector("h2").textContent.toLowerCase();
    card.style.display = title.includes(filter) ? "flex" : "none";
  });
});

// Crédits
const creditsButton = document.getElementById("creditsButton");
const creditsPage = document.getElementById("creditsPage");
const mainContent = document.getElementById("mainContent");
const returnButton = document.getElementById("returnButton");

creditsButton.addEventListener("click", () => {
  creditsPage.style.display = "block";
  mainContent.style.display = "none";
});

returnButton.addEventListener("click", () => {
  creditsPage.style.display = "none";
  mainContent.style.display = "block";
});

// Texte "Play" -> "Its Over!" sur les boutons die-button
const dieButtons = document.querySelectorAll(".die-button");

dieButtons.forEach(button => {
  const originalText = button.textContent;
  
  button.addEventListener("mouseenter", () => {
    button.textContent = "Its Over!";
  });
  
  button.addEventListener("mouseleave", () => {
    button.textContent = originalText;
  });
});