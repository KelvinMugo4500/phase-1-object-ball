// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    console.log("gameKey:", gameKey); // Added console.log
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      console.log("teamKey:", teamKey); // Added console.log
      debugger;

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.players; // Corrected: Access 'players' instead of 'player'
      console.log("data:", data); // Added console.log
      for (let key in data) {
        debugger;
      }
    }
  }
}
