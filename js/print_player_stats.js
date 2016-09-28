var printPlayerStats = function(player) {
  console.log("Printing player stats")
  $("#player-stats").text(player.name.toUpperCase() + "'S STATS");
  $("#strength-stat").text("Strength: " + player.strengthStat);
  $("#stealth-stat").text("Stealth: " + player.stealthStat);
  $("#speed-stat").text("Speed: " + player.speedStat);
  $("#hitpoints").text("Hitpoints: " + player.hitPoints + "/50");
  $("#experience").text("Experience: " + player.experience);
  $("#level").text("Level: " + player.level);
};
