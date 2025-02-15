document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne toutes les bulles dans une liste
let bulles = document.querySelectorAll(".bulle");

// Variable qui garde la position actuelle
let index = 0; 

// Fonction pour afficher la bulle correcte
function afficherBulle(nouvelIndex) {
    // On s'assure que l'index reste dans les limites
    if (nouvelIndex < 0) nouvelIndex = bulles.length - 1; // Revenir à la dernière bulle si on est au début
    if (nouvelIndex >= bulles.length) nouvelIndex = 0; // Revenir à la première si on est à la fin

    // Cacher toutes les bulles
    bulles.forEach(bulle => bulle.style.display = "none");

    // Afficher la nouvelle bulle
    bulles[nouvelIndex].style.display = "flex";
    bulles[nouvelIndex].style.flex = "space-around";

    // Mettre à jour l'index
    index = nouvelIndex;
}

// Détecter les clics
document.addEventListener("click", function(event) {
    let x = event.clientX; // Position du clic sur l'écran

    let largeur = window.innerWidth; // Largeur de l'écran

    if (x < largeur / 3) {
        // Clic à gauche → revenir en arrière
        afficherBulle(index - 1);
    } else if (x > (2 * largeur) / 3) {
        // Clic à droite → aller à la bulle suivante
        afficherBulle(index + 1);
    } else {
        // Clic au centre → retour à l’accueil
        afficherBulle(0);
    }
});
})
