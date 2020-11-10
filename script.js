
// exo1
let totalCDs = 67;
let totalVinyls = 34;

let totalMusic = totalCDs + totalVinyls;

console.log("totalMusic: " + totalMusic );

// exo2
let cookiesInJar = 10;
cookiesInJar -= 2;
cookiesInJar += 12;
// ici on utilise -= et += pour réaliser un calcule et remplacer la valeur de la variable par le résultat de l'opération.

console.log("cookiesInJar: " + cookiesInJar)

// exo3
let numberOfLikes =10
numberOfLikes ++;
numberOfLikes --;

console.log("numberOfLikes: " + numberOfLikes)
//  sert a additioner ++ ou soustraire -- 1

// exo4
let cookiesInJar2 = 10;
cookiesInJar2 =- 2;

// si on ulilise les symboles =- on réafect une valeur négative à la variable.
console.log("cookiesInJar2: " + cookiesInJar2)


//  exo 5 "episode"
let numberOfSeasons = 6;
let numberOfEpisodes = 12;

// Calculate totalShowTime here

let episodeTime = 45;
let commercialTime = 5;
 
let totalShowTime = (numberOfSeasons * numberOfEpisodes*(episodeTime+commercialTime))

console.log("totalShowTime: " + totalShowTime)

// exo Calendrier 
const hoursPerDay = 24;
// hoursPerDay = 12;  // si j'essaie de modifier une constente, le message d'érreur de la console est "script.js:49 Uncaught TypeError: Assignment to constant variable."


console.log("hoursPerDay: " + hoursPerDay)

// exo string
let firstName = "Claude";
let lastName = "Buisson";

let wholeName = firstName +" "+ lastName; // ne pas oublier le " " entre les deux string pour ajouter un espace.

console.log("wholeName: "+ wholeName)

// exo "types de données"
let episodeTitle = "Human Flesh";
let episodeDuration = 26;
let hasBeenWatched = false;
if(hasBeenWatched == true) // utilisation des if/else pour rendre effectif le bool dans la console
{
    hasBeenWatched= "Already Watched"
}
else
{
    hasBeenWatched = " Not Wached Yet "
}
console.log("Episode "+ episodeTitle +" Duration " + episodeDuration + hasBeenWatched);

// exo object
let episode = { // Pour créer des objets on utilise des accolades 
    title: "Human Flesh", // clé/valeur
    duration: 26,
    hasBeenWatched: true
};

let episodeTitle1 = episode.title; // point/clé
let epidsodeDuration1 = episode.duration;
console.log("episodeTitle1 " + episodeTitle1);
console.log("episodeDuration1 " + epidsodeDuration1 + " minutes");

// exo class
class Episode {  // créer une class permet de créer un model afin de gagner du temps sur la céation d'objets 
    constructor(title, duration, hasBeenWatched) 
    {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
    }
  }
  let firstEpisode = new Episode("human flesh", 26, true); // ensuite pour créer un nouvel object on crée une nouvelle instance de cette manière .
  let secondEpisode = new Episode("Crawl Space", 27, true);
  let thirdEpisode = new Episode("Sacred Cow", 23, false);

  console.log(firstEpisode)
  console.log(secondEpisode)
  console.log(thirdEpisode)

  //exo class 2
   class Plante {
       constructor(name, bloomingPeriod, evergreen)
       {
        this.name=name;
        this.bloomingPeriod = bloomingPeriod;
        this.evergreen = evergreen;
       }
   }
  let firstPlante = new Plante ("Wisteria", "May", false);
  let secondPlante = new Plante ("lilac", "March", false);
  let thirdPlante = new Plante ("Magnolia", "june", true);
  console.log(firstPlante)
  if(firstPlante.evergreen == true) // ici on va aller intérroger directement l'instance 
  {
    console.log("Evergreen");
  }
  else
  {
    console.log("Deciduous");
  }
let catalog = [
     firstPlante.name,
     secondPlante.name, 
     thirdPlante.name 
];
catalog.push("Fosythia");
catalog.push("Chaenomeles");

console.log(catalog); // pour que les résultats soient indiqués dans la console les variables doivent être placés avant ceux-ci. ordre d'interogation 

let howManyReference = catalog.length;
console.log(howManyReference);
 // mise en application de l'instruction switch
switch (firstPlante.evergreen)
{
  case true : 
      console.log("evergreen");
      break;
  case false :
      console.log("deciduous");
      break;
}

// mise en application de la boucle for... in
for(let i in catalog)
{
  console.log('plante ' + catalog[i]);
}







// exo set 

const player = new Set(['Joe','Jhon','Jim','Jule']); // ici on a besion de la majuscule à Set pour que ça fonctionne.
player.add('Franck');
// player .add('Joe'); // on ne peut pas ajouter dex fois la même entrée 

console.log(player.has('Jule')); // true
console.log(player.has('Marc')); //false
console.log(player.size);
for (let item of player) console.log(item); // Pour lister tous les éléments du set player.
for (let item of player.keys()) console.log(item);

//Cf résultat du quizz

// exo boolean
// let userLoggedIn = true;
// // userLoggedIn = false; 
// if(userLoggedIn) 
// {
//   console.log('Utilisateur connecté!');
// }
// else
// {
//   console.log("Alerte, intrus!");
// } 

// //exo 
// class Episode {
//   constructor(title, duration, minutesWatched) {
//     this.title = title;
//     this.duration = duration;
//     // Add logic here
//     // ======================
//     let watchedText = true;
//     this.continueWatching = true;
//     if( minutesWatched === 0)
//       {
//         this.watchedText = 'Pas encore regardé';
//         this.continueWatching = false;
//       }
//     else if (minutesWatched < duration )
//       {
//         this.watchedText = 'En train de regarder';
//         this.continueWatching = true;
//       }
//     else
//       {
//         this.watchedText = 'Déjà regardé';
//         this.continueWatching = false;
//       }
//     }
//   }

// mise en application de if/else
let userLoggedIn = true;
let welcomeMessage = '';
if (userLoggedIn) 
{
     welcomeMessage = 'Welcome back!';
} else 
{
     welcomeMessage = 'Welcome new user!';
}

console.log(welcomeMessage);
// mise en application de la boucle for 
let numberOfPassengers = 10;
for (let i = 0 ; i < numberOfPassengers ; i++)
{
  console.log('Passager embarqué !')
}
console.log('Tous les passagés ont embarqué.')
// mise en pratique de for...in 2
const passengers = [
  "will alexender",
  "Sarah Kate",
  "Audrey Simon",
  "Tao Perkington"
]
passengers.push="Micheline Pouette" 
for (let i in passengers)
{
  console.log(" Embarquement du passager "+ passengers[i]);
}


// Mise en application de for...of
const ingredients =[
  "farine",
  "lait",
  "beurre",
  "oeuf",
  "sel"
] 
for (let ingredient of ingredients)
{
  console.log( " L'ingrédient "+ ingredient+ " à été ajouté")
}
console.log("Tous les ingrédients sont dans le bol!")

// Mise en applkication de while 
let seatsLeft

