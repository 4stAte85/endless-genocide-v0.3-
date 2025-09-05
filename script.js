// -----------------------------
// Recherche des combats
// -----------------------------
const searchBar = document.getElementById("searchBar");
const fights = document.querySelectorAll(".fight-card");

searchBar.addEventListener("keyup", () => {
  const filter = searchBar.value.toLowerCase();
  fights.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    card.style.display = title.includes(filter) ? "flex" : "none";
  });
});

// -----------------------------
// Page crédits
// -----------------------------
const creditsButton = document.getElementById("creditsButton");
const creditsPage = document.getElementById("creditsPage");
const mainContent = document.getElementById("mainContent");
const returnButton = document.getElementById("returnButton");
const footer = document.querySelector("footer");

creditsButton.addEventListener("click", () => {
  creditsPage.style.display = "block";
  mainContent.style.display = "none";
  footer.style.display = "none";
});

returnButton.addEventListener("click", () => {
  creditsPage.style.display = "none";
  mainContent.style.display = "block";
  footer.style.display = "block";
});

// -----------------------------
// Page difficulties
// -----------------------------
const difficultyButton = document.getElementById("difficultyButton");
const difficultyPage = document.getElementById("difficultyPage");
const returnDifficultyButton = document.getElementById("returnDifficultyButton");

difficultyButton.addEventListener("click", () => {
  difficultyPage.style.display = "block";
  mainContent.style.display = "none";
  footer.style.display = "none";
});

returnDifficultyButton.addEventListener("click", () => {
  difficultyPage.style.display = "none";
  mainContent.style.display = "block";
  footer.style.display = "block";
});

// -----------------------------
// Texte hover pour boutons
// -----------------------------
function setHoverText(buttonClass, text) {
  const buttons = document.querySelectorAll("." + buttonClass);
  buttons.forEach(button => {
    const original = button.textContent;
    button.addEventListener("mouseenter", () => button.textContent = text);
    button.addEventListener("mouseleave", () => button.textContent = original);
  });
}

setHoverText("fade-button", "Fading into doom…");
setHoverText("cataclysm-button", "Prepare for annihilation!");
setHoverText("oblivion-button", "Lost forever…");
setHoverText("torment-button", "Agony awaits!");
setHoverText("nightmare-button", "This is your nightmare!");
setHoverText("brokensoul-button", "Nothing can save you!");

// -----------------------------
// Affichage permanent de la difficulté
// -----------------------------
fights.forEach(card => {
  const button = card.querySelector("a"); // le bouton "Play"
  
  // Créer un span pour afficher la difficulté
  const difficultyText = document.createElement("span");
  difficultyText.classList.add("difficulty-text");
  
  // Déterminer la difficulté depuis la classe de la carte
  if (card.classList.contains("fade")) difficultyText.textContent = "Fade";
  if (card.classList.contains("brokensoul")) difficultyText.textContent = "Broken Soul";
  if (card.classList.contains("torment")) difficultyText.textContent = "Torment";
  if (card.classList.contains("nightmare")) difficultyText.textContent = "Nightmare";
  if (card.classList.contains("cataclysm")) difficultyText.textContent = "Cataclysm";
  if (card.classList.contains("oblivion")) difficultyText.textContent = "Oblivion";
  
  // Ajouter le span avant le bouton
  card.insertBefore(difficultyText, button);
});