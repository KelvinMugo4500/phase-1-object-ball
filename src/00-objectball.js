function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
        }
      }
    };
  }
  
  function numPointsScored(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let players = game[teamKey].players;
      if (playerName in players) {
        return players[playerName].points;
      }
    }
    return null;
  }
  
  function shoeSize(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let players = game[teamKey].players;
      if (playerName in players) {
        return players[playerName].shoe;
      }
    }
    return null;
  }
  
  function teamColors(teamName) {
    let game = gameObject();
    for (let teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        return game[teamKey].colors;
      }
    }
    return null;
  }
  
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    let game = gameObject();
    for (let teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        let players = game[teamKey].players;
        return Object.values(players).map(player => player.number);
      }
    }
    return null;
  }
  
  function playerStats(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let players = game[teamKey].players;
      if (playerName in players) {
        return players[playerName];
      }
    }
    return null;
  }
  
  function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    for (let teamKey in game) {
      let players = game[teamKey].players;
      for (let playerName in players) {
        let shoeSize = players[playerName].shoe;
        if (shoeSize > largestShoeSize) {
          largestShoeSize = shoeSize;
          playerWithLargestShoe = playerName;
        }
      }
    }
  
    if (playerWithLargestShoe) {
      return playerStats(playerWithLargestShoe).rebounds;
    }
  
    return null;
  }
  
  console.log(numPointsScored("Alan Anderson"));
  console.log(shoeSize("Jeff Adrien")); 
  console.log(teamColors("Brooklyn Nets"));
  console.log(teamNames());
  console.log(playerNumbers("Brooklyn Nets"));
  console.log(playerStats("Alan Anderson")); 
  console.log(bigShoeRebounds()); 
  