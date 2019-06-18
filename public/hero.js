
let heroNames =  ["Black Panther", "Black Widow", "Elsa BloodStone", "Captain America", "Captain Marvel", "Crystal", "Deadpool", "Drax", "Gamora", "Hawkeye", "Hulk", "Iron Fist", "Iron-Man", "Rocket & Groot", "Spiderman", "Star Lord", "Doctor Strange", "Thor"  ];

let fileNames = ["blackpanther.jpeg", "blackwidow.jpeg", "bloodstone.jpeg", "capamerica.jpeg", "capmarvel.jpeg", "crystal.jpeg", "deadpool.jpeg", "drax.jpeg", "gamora.jpeg", "hawkeye.jpeg", "hulk.jpeg", "ironfist.jpeg", "ironman.jpeg", "rocket.jpeg", "spiderman.jpeg", "starlord.jpeg", "strange.jpeg", "thor.jpeg",];
let newArray = [];
let newString = "";



  for (var i = 0; i < fileNames.length; i++) {
      newArray = "<img src='/img/" + fileNames[i] +"'>";
      newString += "<div class='users'>" + newArray + heroNames[i] + "</p> </div>"

   }

   document.getElementById('display').innerHTML = newString;