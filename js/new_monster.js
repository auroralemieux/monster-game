var newMonster = function(monster, player) {
  console.log("inside new monster function");
// this should print the monster's stats as soon as you click on the button, but it's not appearing until all the dialogue boxes have finished
  printMonsterStats(monster);

  alert("You have encountered a " + monster.monsterName + "!");

// fight!
  var sawFirst = monster.sawFirst > player.sawFirst ? "monster" : "player";

  fight(sawFirst, monster, player);

  // check to see if winning or losing scenario is met
  playerChanges(player);
};
