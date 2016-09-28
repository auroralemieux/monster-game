var Monster = function() {
  this.strengthStat = Math.floor((Math.random() * 6)+1);
  this.stealthStat = Math.floor((Math.random() * 6)+1);
  this.speedStat = Math.floor((Math.random() * 6)+1);

  var z = this.strengthStat;
  function generateNameColor(z) {
    var colors = ["filler", "Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
    return colors[z];
  };
  var color = generateNameColor(z);

  var y = this.speedStat;
  function generateNameAdjective(y) {
    var adjectives = ["filler", "Snoring", "Sleepy", "Ponderous", "Perky", "Frantic", "Zippy"];
    return adjectives[y];
  };
  var adjective = generateNameAdjective(y);

  var x = this.stealthStat;
  function generateNameAnimal(x) {
    var animals = ["filler", "Chimaera", "Gryphon", "Aardwolf", "Cyclops", "Sasquatch", "Basilisk"];
    return animals[x];
  };
  var animal = generateNameAnimal(x);

  this.monsterName = adjective + " " + color + " " + animal;
  this.expPoints = Math.floor((Math.random() * 10)+1);
  this.sawFirst = Math.floor((Math.random() * 10)+1);
  this.damagePoints = Math.floor((Math.random() * 5) + 1);
};
