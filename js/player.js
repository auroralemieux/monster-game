var Player = function() {
  this.stealthStat = Math.floor((Math.random() * 6)+1);
  this.speedStat = Math.floor((Math.random() * 6)+1);
  this.strengthStat = Math.floor((Math.random() * 6)+1);
  this.hitPoints = 50;
  this.experience = 0;
  this.level = 1;
  this.sawFirst = Math.floor((Math.random() * 10)+1);
};
