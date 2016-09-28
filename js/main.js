$(document).ready(function() {
// get and save the player's name
// BUILD A MONSTER WITH RANDOMLY GENERATED STATS
// MONSTER NAMES ARE ADJECTIVE + COLOR + ANIMAL

// HELP BUTTON SHOULD WORK ALL THE TIME -- this does not affect the game play!
$("#help-button").click(function() {
  $(".help-popup").toggleClass("show");
  if ($(".help-popup").hasClass("show")) {
    $(".help-popup").show();
  } else {
    $(".help-popup").hide();
  };
});

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

var Player = function() {
  this.stealthStat = Math.floor((Math.random() * 6)+1);
  this.speedStat = Math.floor((Math.random() * 6)+1);
  this.strengthStat = Math.floor((Math.random() * 6)+1);
  this.hitPoints = 50;
  this.experience = 0;
  this.sawFirst = Math.floor((Math.random() * 10)+1);
};



var newGame = function() {

// MONSTER IS DEFINED HERE



// BUILD A PLAYER-GENERATOR WITH RANDOM STATS
// ALLOW PLAYER TO PICK THEIR NAME


  var player = new Player();
  var getName = prompt("What is your name?");
  while (getName === "") {
    console.log("invalid name");
    var getName = prompt("That's not an answer! Please tell me your name: ");
  };
  player.name = getName;
  console.log("name accepted");


// get the player some stats they're okay with
      alert("Hi, " + player.name + "!");
      alert("One moment... I'm generating your stats, " + player.name + ".");
      var playerStats = player.name + ", your stats are:\n\nStrength: " + player.strengthStat + " (max 6)\nStealth: " + player.stealthStat + " (max 6)\nSpeed: " + player.speedStat + " (max 6)\n\nType Accept to continue, or Reroll to reroll.";
      var acceptOrReroll = prompt(playerStats, "Accept/Reroll").toLowerCase();

      done = false

      while (done === false) {

        if (acceptOrReroll === "reroll")  {
            console.log("reroll");
            player.stealthStat = Math.floor((Math.random() * 6)+1);
            player.speedStat = Math.floor((Math.random() * 6)+1);
            player.strengthStat = Math.floor((Math.random() * 6)+1);
            player.hitPoints = 50;
          // then tell the new stats
            var playerStats = player.name + ", your new stats are:\n\nStrength: " + player.strengthStat + " (max 6)\nStealth: " + player.stealthStat + " (max 6)\nSpeed: " + player.speedStat + " (max 6)\n\nType Accept to continue, or Reroll to reroll.";
            acceptOrReroll = prompt(playerStats, "Accept/Reroll");
          }
          else if (acceptOrReroll === "accept") {
            console.log("accept");
            alert("You are ready to start your adventure, " + player.name + "!" + "\n\nYou have " + player.hitPoints + " hitpoints.");
            done = true;
          }
          else {
            console.log("invalid");
            alert("Please choose a valid option.");
            acceptOrReroll = prompt(playerStats, "Accept/Reroll").toLowerCase();
          }
        };



      $("#player-stats").text(player.name.toUpperCase() + "'S STATS");
      $("#strength-stat").text("Strength: " + player.strengthStat);
      $("#stealth-stat").text("Stealth: " + player.stealthStat);
      $("#speed-stat").text("Speed: " + player.speedStat);
      $("#hitpoints").text("Hitpoints: " + player.hitPoints + "/50");

      alert("You find yourself in a land where magical creatures are plaguing the population.\n\nThey are smart critters, and you will have to use your wits to defeat them. For some reason they resemble a black circle.\n\nEach time you encounter a monster you will have three options: FIGHT, FREEZE, or FLEE.\n\nChoose your method of battle to engage the monster, and see who wins!\n\nIf the monster sees you first, your stats will help you to beat its chosen attack.\n\nIf you win, you get some points. If you lose, you lose hitpoints. (You cannot gain back lost hitpoints.)\n\nYour object is to defeat all the monsters and free the land from their mayhem.\n\nIf you are lucky, you may find some objects along the way to help you in your quest!\n\nThe HELP button may be useful if you have any questions.");
      console.log("instructions given");


// MONSTERS NOW APPEAR ON THE PLAYING FIELD
  $(".monster").show();

//BATTLE CODE

      $(".monster").click(function() {
        console.log("new monster");
        var monster = new Monster();

        $("#monster-name").text("Monster: " + monster.monsterName);
        $("#monster-strength").text("Strength: " + monster.strengthStat);
        $("#monster-stealth").text("Stealth: " + monster.stealthStat);
        $("#monster-speed").text("Speed: " + monster.speedStat);

        alert("You have encountered a " + monster.monsterName + "!");

// fight!
        var sawFirst = monster.sawFirst > player.sawFirst ? "monster" : "player";

        fight(sawFirst, monster, player);


        // LOSING SCENARIO
        if (player.hitPoints <= 0) {
          console.log("player loses game");

          alert("Oh no! You have died. So sorry. Better luck next time!");
          $(".monster").hide();
        };

        //WINNING SCENARIO
        if (player.experience >= 100) {
          console.log("player wins game");

          alert("Congratulations! You have beat enough monsters for the locals to take it from here! Winner winner chicken dinner.");
          $(".monster").hide();
          $(".monster-stats").hide();
        };

      }); //THIS CLOSES THE MONSTERCLICK

    }; //THIS CLOSES newGame FUNCTION


    $("#game-start").click(function() {
      newGame();
      console.log("new game started");
    });

}); // THIS CLOSES THE INITIAL DOCUMENT READY FUNCTION
