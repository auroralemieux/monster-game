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



  var newGame = function() {

  // ALLOW PLAYER TO PICK THEIR NAME

    var player = new Player();
    getPlayerName(player);

    // get the player's stats
    getStats(player);

    // print player stats to the DOM

    printPlayerStats(player);

    // explanation of game

    gameExplanation();


    // MONSTERS NOW APPEAR ON THE PLAYING FIELD
    $(".monster").show();


    $(".monster").click(function() {
      console.log("monster clicked");
      var monster = new Monster();
      newMonster(monster, player);
    });

  }; //THIS CLOSES newGame FUNCTION


  $("#game-start").click(function() {
    newGame();
    console.log("new game started");
  });

}); // THIS CLOSES THE INITIAL DOCUMENT READY FUNCTION
