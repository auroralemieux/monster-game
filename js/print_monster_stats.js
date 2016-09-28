var printMonsterStats = function(monster) {
  console.log("printing monster stats");
  $("#monster-name").text("Monster: " + monster.monsterName);
  $("#monster-strength").text("Strength: " + monster.strengthStat);
  $("#monster-stealth").text("Stealth: " + monster.stealthStat);
  $("#monster-speed").text("Speed: " + monster.speedStat);
};
