var playerChanges = function(player) {

  // LOSING SCENARIO
  if (player.hitPoints <= 0) {
    console.log("player loses game");

    alert("Oh no! You have died. So sorry. Better luck next time!");
    $(".monster").hide();
  };

  // WINNING SCENARIO
  if (player.experience >= 100) {
    console.log("player wins game");

    alert("Congratulations! You have beat enough monsters for the locals to take it from here! Winner winner chicken dinner.");
    $(".monster").hide();
    $(".monster-stats").hide();
  };

  // LEVEL CHANGE
  if (player.experience >= 100) {
    console.log("leveled up to 5");
    player.level = 5;
    $("#level").text("Level: " + player.level);
    var reached_level5 = false;
    while (reached_level5 === false) {
      alert("Holy crapola! You have reached Level 5!");
      reached_level5 = true;
    }
  } else if (player.experience >= 75) {
      console.log("leveled up to 4");
      player.level = 4;
      $("#level").text("Level: " + player.level);
      var reached_level4 = false;
      while (reached_level4 === false) {
        alert("Goodness gracious! You have reached Level 4!");
        reached_level4 = true;
      }
  } else if (player.experience >= 50) {
      console.log("leveled up to 3");
      player.level = 3;
      $("#level").text("Level: " + player.level);
      var reached_level3 = false;
      while (reached_level3 === false) {
        alert("Yowza! You have reached Level 3!");
        reached_level3 = true;
      }
  } else if (player.experience >= 25) {
      console.log("leveled up to 2");
      player.level = 2;
      $("#level").text("Level: " + player.level);
      var reached_level2 = false;
      while (reached_level2 === false) {
        alert("Good job! You have reached Level 2!");
        reached_level2 = true;
      }
  } else {
      console.log("starting at level 1");
      player.level = 1;
    };

}
