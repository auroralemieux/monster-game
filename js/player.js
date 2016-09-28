console.log("player saw first");

var playerFight = prompt("You got the jump on the monster! What will you do?", "FIGHT/FREEZE/FLEE");

// depending on which method they chose, the player's and monster's same stats are matched
if (playerFight.toLowerCase() === "fight") {
  var monFight = monster.strengthStat;
  var playFight = player.strengthStat;
} else if (playerFight.toLowerCase() === "freeze") {
  var monFight = monster.stealthStat;
  var playFight = player.stealthStat;
} else if (playerFight.toLowerCase() === "flee") {
  var monFight = monster.speedStat;
  var playFight = player.speedStat;
} else {
  var playerFight = prompt("Please choose a valid option!", "FIGHT/FREEZE/FLEE");
};

// PLAYER'S CHOICE: PLAYER LOSES HITPOINTS IF MONSTER WINS
if (monFight > playFight) {
  console.log("monster wins");

  var prevHitPoints = player.hitPoints;
  var monsterDamage = monster.damagePoints * monFight;
  player.hitPoints -= monsterDamage;
  var lostHitPoints = prevHitPoints - player.hitPoints;
  $("#hitpoints").text("Hitpoints: " + player.hitPoints + "/50");
  alert("Oh no, the monster won! You have lost " + lostHitPoints + " hitpoints.");
};

// PLAYER'S CHOICE: PLAYER GAINS EXPERIENCE IF PLAYER WINS
if (playFight >= monFight) {
  console.log("player wins");

  var expGained = monster.expPoints * playFight;
  player.experience += expGained;
  $("#experience").text("Experience: " + player.experience);
  alert("Great job! You beat the monster and gained " + expGained + " experience points.");
};

};
