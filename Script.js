// Fonction pour générer un mot de passe fort
function genererMotDePasse(longueur) {
    const majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minuscules = 'abcdefghijklmnopqrstuvwxyz';
    const chiffres = '0123456789';
    const symboles = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const tousCaracteres = majuscules + minuscules + chiffres + symboles;
            
    let motDePasse = '';
    motDePasse += getCharactereAleatoire(majuscules);
    motDePasse += getCharactereAleatoire(minuscules);
    motDePasse += getCharactereAleatoire(chiffres);
    motDePasse += getCharactereAleatoire(symboles);
            
    for (let i = motDePasse.length; i < longueur; i++) {
        motDePasse += getCharactereAleatoire(tousCaracteres);
    }
            
    return melangerChaine(motDePasse);
}

// Fonction pour obtenir un caractère aléatoire
function getCharactereAleatoire(chaine) {
    return chaine[Math.floor(Math.random() * chaine.length)];
}

// Fonction pour mélanger une chaîne
function melangerChaine(chaine) {
    return chaine.split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}

// Fonction pour gérer l'affichage
function generer() {
    const longueurInput = document.getElementById('longueur').value;
    const longueur = parseInt(longueurInput);
            
    if (isNaN(longueur) || longueur < 8 || longueur > 24) {
        alert('Veuillez entrer une longueur entre 8 et 24.');
        return;
    }
            
    const motDePasse = genererMotDePasse(longueur);
    document.getElementById('motDePasse').textContent = motDePasse;
}