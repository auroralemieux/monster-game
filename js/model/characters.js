// BUILD A MONSTER WITH RANDOMLY GENERATED STATS
// MONSTER NAMES ARE ADJECTIVE + COLOR + ANIMAL

var monster = function() {
  this.strengthStat = Math.floor(Math.random() * 7);
  if (this.strengthStat === 1) {
    this.nameColor = "red";
  } else if (this.strengthStat === 2) {
    this.nameColor = "orange";
  } else if (this.strengthStat === 3) {
    this.nameColor = "yellow";
  } else if (this.strengthStat === 4) {
    this.nameColor = "green";
  } else if (this.strengthStat === 5) {
    this.nameColor = "blue";
  } else {
    this.nameColor = "purple";
  };
  this.speedStat = Math.floor(Math.random() * 7);
  if (this.speedStat === 1) {
    this.nameAdjective = "Snoring";
  } else if (this.speedStat === 2) {
    this.nameAdjective = "Sleepy";
  } else if (this.speedStat === 3) {
    this.nameAdjective = "Ponderous";
  } else if (this.speedStat === 4) {
    this.nameAdjective = "Perky";
  } else if (this.speedStat === 5) {
    this.nameAdjective = "Agitated";
  } else {
    this.nameAdjective = "Zippy";
  };
  this.stealthStat = Math.floor(Math.random() * 7);
  if (this.stealthStat === 1) {
    this.nameAnimal = "Chimaera";
  } else if (this.stealthStat === 2) {
    this.nameAnimal = "Gryphon";
  } else if (this.stealthStat === 3) {
    this.nameAnimal = "Aardwolf";
  } else if (this.stealthStat === 4) {
    this.nameAnimal = "Cyclops";
  } else if (this.stealthStat === 5) {
    this.nameAnimal = "Sasquatch";
  } else {
    this.nameAnimal = "Basilisk";
  };
  this.name = nameAdjective + " " + nameColor + " " + nameAnimal;
  this.hitPoints = Math.floor(Math.random() * 11);
};


// BUILD A PLAYER-GENERATOR WITH RANDOM STATS
// ALLOW PLAYER TO PICK THEIR NAME

var Player = function(name) {
  this.name = name;
  this.stealthStat = Math.floor(Math.random() * 7);
  this.speedStat = Math.floor(Math.random() * 7);
  this.strengthStat = Math.floor(Math.random() * 7);
  this.hitPoints = 50;
}
