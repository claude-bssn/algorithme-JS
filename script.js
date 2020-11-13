
//ANCHOR exo1
let totalCDs = 67;
let totalVinyls = 34;

let totalMusic = totalCDs + totalVinyls;

console.log("totalMusic: " + totalMusic );

//  ANCHOR exo2
let cookiesInJar = 10;
cookiesInJar -= 2;
cookiesInJar += 12;
// ici on utilise -= et += pour réaliser un calcul et remplacer la valeur de la variable par le résultat de l'opération.

console.log("cookiesInJar: " + cookiesInJar)

// ANCHOR exo3
let numberOfLikes =10
numberOfLikes ++;
numberOfLikes --;

console.log("numberOfLikes: " + numberOfLikes)
//  sert a additioner ++ ou soustraire -- 1

// ANCHOR exo4
let cookiesInJar2 = 10;
cookiesInJar2 =- 2;

// si on ulilise les symboles =- on réafect une valeur négative à la variable.
console.log("cookiesInJar2: " + cookiesInJar2)


// ANCHOR  exo 5 "episode"
let numberOfSeasons = 6;
let numberOfEpisodes = 12;

// ANCHOR Calculate totalShowTime here

let episodeTime = 45;
let commercialTime = 5;
 
let totalShowTime = (numberOfSeasons * numberOfEpisodes*(episodeTime+commercialTime))

console.log("totalShowTime: " + totalShowTime)

// ANCHORexo Calendrier 
const hoursPerDay = 24;
// hoursPerDay = 12;  // si j'essaie de modifier une constente, le message d'érreur de la console est "script.js:49 Uncaught TypeError: Assignment to constant variable."


console.log("hoursPerDay: " + hoursPerDay)

//ANCHOR exo string
let firstName = "Claude";
let lastName = "Buisson";

let wholeName = firstName +" "+ lastName; // ne pas oublier le " " entre les deux string pour ajouter un espace.

console.log("wholeName: "+ wholeName)

//ANCHOR exo "types de données"
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

// ANCHOR exo object
let episode = { // Pour créer des objets on utilise des accolades 
    title: "Human Flesh", // clé/valeur
    duration: 26,
    hasBeenWatched: true
};

let episodeTitle1 = episode.title; // point/clé
let epidsodeDuration1 = episode.duration;
console.log("episodeTitle1 " + episodeTitle1);
console.log("episodeDuration1 " + epidsodeDuration1 + " minutes");

//ANCHOR exo class
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

  //ANCHOR exo class 2
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
 
//  ANCHOR mise en application de l'instruction switch
switch (firstPlante.evergreen)
{
  case true : 
      console.log("evergreen");
      break;
  case false :
      console.log("deciduous");
      break;
}

//  ANCHOR mise en application de la boucle for... in
// for(let i in catalog)
// {
//   console.log('plante ' + catalog[i]);
// }
// // for (let idx of episodes) 
// //   {
// //     idx.hasBeenWatched = false;
// //   }
// // for (let idx in episodes)
// //   {
// //     let elementCourant = episodes[idx];
// //     elementCourant.hasBeenWatched = false;
// //   }
// for ( let idx=0; idx < episodes.length; idx++)
// {
//   let elementCourant = episodes[idx];
// elementCourant.hasBeenWatched = false;
// }





// exo set 

const player = new Set(['Joe','Jhon','Jim','Jule']); // ici on a besion de la majuscule à Set pour que ça fonctionne.
player.add('Franck');
// player .add('Joe'); // on ne peut pas ajouter dex fois la même entrée 

console.log(player.has('Jule')); // true
console.log(player.has('Marc')); //false
console.log(player.size);
for (let item of player) console.log(item); // Pour lister tous les éléments du set player.
for (let item of player.keys()) console.log(item);

//Cf résultat du quizz LINK résultat du quizz.pdf

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

// ANCHOR mise en application de if/else
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
// ANCHOR mise en application de la boucle for 
let numberOfPassengers = 10;
for (let i = 0 ; i < numberOfPassengers ; i++)
{
  console.log('Passager embarqué !')
}
console.log('Tous les passagés ont embarqué.')
// ANCHOR mise en pratique de for...in 2
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


// ANCHOR Mise en application de for...of
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

// ANCHOR Mise en application de while 
let seatsLeft = 10;
let passengersStillBoard = 8;

let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillBoard > 0)
{
  passengersBoarded++;
  seatsLeft--;
  passengersStillBoard--;
}
console.log(passengersBoarded);

let riders = 0;
while (riders < 10)
{
  riders++;
  console.log("End of turn for rider " + (riders));
}


// LINK /Users/mims/Documents/cours IT/algorithme JS/switch et utilisation des break.png

//ANCHOR fonction de moyenne 

// function calculateAverageRating (tab)

// {
//   if (tab.length == 0)
//     {
//       return 0;
//     }
//   let somme = 0;
//   for (let indice=0; indice < tab.length; indice++)
//     {
//       let elementCourant = tab [indice];
//       somme = elementCourant + somme;
//     }
//   return somme/ tab.length;
// }

// ANCHOR Méthodes d'instance 

class bankAccount 
{
constructor (owner, balance)
  {
    this.owner = owner;
    this.balance = balance;
  }
showBalance ()
  {
    console.log("Slode: " + this.balance + " EUR");
  }
deposite (amount)
  {
  console.log("Dépot de " + amount + "EUR");
  this.balance += amount;
  this.showBalance();
  }
withdraw ( amount)
  {
    if (amount> this.balance)
    {
      console.log("Retrait impossible !")
    }
    else ;
    {
    console.log ("Retrait " + amount + "EUR");
    this.balance -= amount;
    this.showBalance();
    }
  }
}
let newAccount = new bankAccount( "Will Alexander", 500);
newAccount.showBalance();
newAccount.deposite (50);
newAccount.withdraw(100);

// ANCHOR Exo Open Classroom! // Comme vous pouvez le constater, la classe  Show  contient un Array  ratings  , pour les notes, qui est initialisé vide, et une propriété  averageRating  (note moyenne) de zéro.
 
// Déclarez une méthode instance dans la classe  Show  appelée  addRating()  . Elle prendra une  rating  (la note) qui sera un number entre 1 et 5 comme paramètre.

// La méthode  addRating()  doit :

// ajoutez la note reçue au tableau ratings de l'instance

// recalculer la valeur  averageRating  de l'instance

// Cliquez le bouton "Check ratings" pour vérifier si les séries se mettent à jour correctement. Vous pouvez cliquer plusieurs fois le bouton pour voir l'évolution des notes moyennes 

// Modify the code here
// ======================

// class Show {
//   constructor(title, numberOfSeasons) {
//     this.title = title;
//     this.numberOfSeasons = numberOfSeasons;
//     this.ratings = [];
//     this.averageRating = 0;
//   }
//   addRating(rating)
//   {
//     this.ratings.push(rating); // pour ajouter une note au tableau
//     let sum =0;
//     for ( let rating of this.ratings) //toujours déclarer la variable dans les parenthèses du for  
//       {
//       sum += rating;
//       }
//    this.averageRating = sum /this.ratings.length;
//   }
// } // vérifier que les crochets soient bien fermés 
// // ======================

// const tau = new Show('The Story of Tau', 5);
// const colin = new Show('The Hero of Old Meldrum', 3);
// const clara = new Show('The Bugs of Isla Clara', 6);

// const shows = [tau, colin, clara];

// const body = document.querySelector('body');
// const refresh = document.querySelector('#refresh');

// refresh.addEventListener('click', () => {
//   removeShows();
//   addRandomRatings();
//   updateShows();
// })

// const updateShows = () => {
//   for (let show of shows) {
//     const showPane = document.createElement('div');
//     showPane.classList.add('series-frame');
//     const showHeading = document.createElement('h2');
//     showHeading.innerText = show.title;
//     const showDetails = document.createElement('p');
//     const seasons = document.createElement('p');
//     seasons.innerText = show.numberOfSeasons + ' seasons';
//     const ratings = document.createElement('p');
//     ratings.innerText = show.averageRating > 0 ? show.ratings.length + ' ratings\n' + show.averageRating.toFixed(1) + ' stars' : 'No ratings yet';
//     showDetails.append(seasons);
//     showDetails.append(ratings);
//     showPane.append(showHeading);
//     showPane.append(showDetails);
//     body.append(showPane);
//   }
// };

// const removeShows = () => {
//   const children = [];
//   for (let childNode of body.childNodes) {
//     children.push(childNode);
//   }
//   for (let child of children) {
//     if (child.tagName == 'DIV') {
//       body.removeChild(child);
//     }
//   }
// }

// const addRandomRatings = () => {
//   for (let show of shows) {
//     if (Math.random() >= 0.2) {
//       const numberOfRatings = Math.floor(Math.random() * 4 + 1);
//       for (let i = 0; i < numberOfRatings; i++) {
//         const rating = Math.floor(Math.random() * 5 + 1);
//         show.addRating(rating);
//       }
//     }
//   }
// }

// updateShows();
 // ANCHOR les Champs (Méthode Statique)
 // Elles sont rangées dans une classe mais ne font pas référence a une instance. Elles seront appeler dans le code au besoin   
class BePolite 
{
  static sayHello()
  {
    console.log ("Hello");
  }
  static sayHelloTo(name)
  {
    console.log("hello "+ name + "!");
  }
  static add(num1, num2)
  {
    return (num1+num2); // on utilise return afin de pouvoir retourner le résultat de la parenthèse lors de l'appel de la méthode dans une fonction 

  }

}
BePolite.sayHello();
BePolite.sayHelloTo("Marcel");
let sum = BePolite.add(2,4);
console.log(sum)

// exo fin de cour sur JS OpenClassroom 

export class Book 
  {
  constructor(title, author, description, pages)
  {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = 1;
    this.read = false;
  }
  readBook (page)
  {
    if ( page < 1 || page > this.pages)
    {
      return 0;
    }
    else if ( page >= 1 && page < this.pages)
    {
      this.currentPage = page;
      return 1;
    }
    else if (page == this.pages)
    {
      console.log(this.title);
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
}
const book1 = new Book("Connaissez vous le garde champêtre ?", "P'tit Biscuit", "Dans cette aventure, découvrez le monde formidable et haut en couleur du Garde Champêtre",50);
book1.readBook(0);

const book2 = new Book("Celui qui pue qui pète ?", "P'tit Biscuit", "Dans ce nouvel opus, le Garde Champêtre aura-t-il le fin mot de l'histoire avec Lord Farquaade ?",50);
book2.readBook(30);

const book3 = new Book("Qui prends son tutu pour une voilette !", "P'tit Biscuit", "Suite et fin de la Saga du Garde Champêtre ",50);
book3.readBook(0);
export const books = [book1, book2, book3];
