if (monster.sawFirst > player.sawFirst) {

  console.log("monster saw first");

  alert("The monster saw you first! Let's see what it decides to do (FIGHT, FREEZE, or FLEE).");

  // THIS IS HOW THE MONSTER CHOOSES FIGHT, FREEZE, OR FLEE
  var monsterChoice = Math.floor((Math.random() *3)+1);
  var c = monsterChoice;
  function monsterChooses(c) {
    var fightMethods = ["dummy", "fight", "freeze", "flee"];
    return fightMethods[c];
  };
  var monsterFight = monsterChooses(c);

  // THIS MATCHES WHAT THE MONSTER CHOSE TO THE APPROPRIATE STATS
  if (monsterFight === "fight") {
    var monFight = monster.strengthStat;
    var playFight = player.strengthStat;
  } else if (monsterFight === "freeze") {
    var monFight = monster.stealthStat;
    var playFight = player.stealthStat;
  } else if (monsterFight === "flee") {
    var monFight = monster.speedStat;
    var playFight = player.speedStat;
  };

  // MONSTER'S CHOICE: PLAYER LOSES HITPOINTS IF MONSTER WINS
  if (monFight > playFight) {
    console.log("monster wins");

    var prevHitPoints = player.hitPoints;
    var monsterDamage = monster.damagePoints * monFight;
    player.hitPoints -= monsterDamage;
    var lostHitPoints = prevHitPoints - player.hitPoints;
    $("#hitpoints").text("Hitpoints: " + player.hitPoints + "/50");
    alert("Oh no! The monster chose " + monsterFight.toUpperCase() + " and you have lost " + lostHitPoints + " hitpoints.");
    if (player.hitPoints <= 0) {
      alert("Oh no! You have died. So sorry. Better luck next time!");
      $(".monster").hide();
    };
  };

  // MONSTER'S CHOICE: PLAYER GAINS EXPERIENCE IF PLAYER WINS
  if (playFight >= monFight) {
    console.log("player wins");

    var expGained = monster.expPoints * playFight;
    player.experience += expGained;
    $("#experience").text("Experience: " + player.experience);
    alert("The monster chose " + monsterFight.toUpperCase() + ", but you beat it! You gained " + expGained + " experience points.");
    if (player.experience >= 100) {
      alert("Congratulations! You have beat enough monsters for the locals to take it from here! Winner winner chicken dinner.");
      $(".monster").hide();
    };
  };
    // ADD CHECK EVERY 10 POINTS(?) TO SEE IF PLAYER GETS A SPECIAL ITEM
} else 
