var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");
var scoreDisplay = document.querySelector(".score");
var etat = true;
var score = 0;
var scoreCount = 0;
var scoreInterval = 10; // Augmentez cette valeur pour réduire la vitesse d'augmentation du score
var nom=prompt("Donne moi ton nom")
document.addEventListener("keydown", sauter);
var myAudio = document.createElement("audio");
myAudio.src = "naruto.mp3";

class Personne {
    constructor(nom, score) {
      this.nom = nom;
      this.score = score;
    }
    afficher(score)
    {
        alert(` Vous avez perdu ${this.nom} votre score est : ${score}`)
    }
  }
  var joueur = new Personne (nom , score)
function sauter(event){
    // function pour faire sauter le personnage
    if(perso.classList != "animation" || event.keyCode == 32 && perso.classList != "animation" ){
        perso.classList.add('animation'); 
        myAudio.play();
    }
    setTimeout(function(){
        perso.classList.remove('animation'); 
    },500)
}

// Vérifier si l'obstacle touche le personnage

var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));

    if(obstaclesLeft < 0 && etat) {
        scoreCount++;
        if (scoreCount == scoreInterval) {
            score += 1;
            scoreDisplay.textContent = score;
            scoreCount = 0;
            
        }
    }
    if(obstaclesLeft<20 && obstaclesLeft >0 && persoTop>= 130){
        obstacles.style.animation = "none";
        etat=false ;
        joueur.afficher(score)
        clearInterval(verification);
    }

  
}, 10);



