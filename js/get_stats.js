var getStats = function(player) {

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
};
