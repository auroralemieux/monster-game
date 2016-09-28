var getPlayerName = function(player) {
  var getName = prompt("What is your name?");
  while (getName === "") {
    console.log("invalid name");
    var getName = prompt("That's not an answer! Please tell me your name: ");
  };
  player.name = getName;
  console.log("name accepted");

  alert("Hi, " + player.name + "!");
};
