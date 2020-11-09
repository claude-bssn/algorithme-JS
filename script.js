
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
console.log("episodeDuration1 " + epidsodeDuration1 + " minutes")

// exo class
class Episode {  // créer un class permet de créer un model afin de gagner du temps 
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
catalog.push("fosythia");
console.log(catalog)

