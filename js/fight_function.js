var fight = function(character, monster, player) {

  // this is where the character chooses how they are fighting
  console.log(character);
  if (character === "monster") {
    console.log("monster saw first");

    alert("The monster saw you first! Let's see what it decides to do (FIGHT, FREEZE, or FLEE).");

    // THIS IS HOW THE MONSTER CHOOSES FIGHT, FREEZE, OR FLEE
    var monsterChoice = Math.floor((Math.random() *3)+1);
    var c = monsterChoice;
    function monsterChooses(c) {
      var fightMethods = ["dummy", "fight", "freeze", "flee"];
      return fightMethods[c];
    };
    var characterFight = monsterChooses(c);

  } else {
    console.log("player saw first");

    var characterFight = prompt("You got the jump on the monster! What will you do?", "FIGHT/FREEZE/FLEE");
  };


// sets the stats that will fight
  var validAnswer = false
  while (validAnswer === false) {
    if (characterFight === "fight") {
      var monFight = monster.strengthStat;
      var playFight = player.strengthStat;
      validAnswer = true
    } else if (characterFight === "freeze") {
      var monFight = monster.stealthStat;
      var playFight = player.stealthStat;
      validAnswer = true
    } else if (characterFight === "flee") {
      var monFight = monster.speedStat;
      var playFight = player.speedStat;
      validAnswer = true
    }
    else {
      console.log("player made invalid fight choice")
      characterFight = prompt("Please enter a valid choice!", "FIGHT/FREEZE/FLEE");
    };
  };


// if the monster wins do this stuff

  if (monFight > playFight) { // MONSTER WINS
    console.log("monster wins");

    var prevHitPoints = player.hitPoints;
    var monsterDamage = monster.damagePoints * monFight;
    player.hitPoints -= monsterDamage;
    var lostHitPoints = prevHitPoints - player.hitPoints;
    $("#hitpoints").text("Hitpoints: " + player.hitPoints + "/50");
    if (character === monster) {
      alert("Oh no! The monster chose " + monsterFight.toUpperCase() + " and you have lost " + lostHitPoints + " hitpoints.");
    } else {
      alert("Oh no, the monster won! You have lost " + lostHitPoints + " hitpoints.");
    };



    // if the player wins do this stuff
  } else {
    console.log("player wins");

    var expGained = monster.expPoints * playFight;
    player.experience += expGained;
    $("#experience").text("Experience: " + player.experience);
    if (character === monster) {
      alert("The monster chose " + monsterFight.toUpperCase() + ", but you beat it! You gained " + expGained + " experience points.");
    } else {
      alert("Great job! You beat the monster and gained " + expGained + " experience points.");
    };
    
  };

};
