const team = {
  _players: [
    { firstName: "Deno", lastName: "maina", age: 26 },
    { firstName: "Den", lastName: "mai", age: 24 },
    { firstName: "De", lastName: "ma", age: 28 },
  ],

  _games: [
    { opponent: "moha", teamPoints: 119, opponentPoints: 211 },
    { opponent: "moha", teamPoints: 126, opponentPoints: 129 },
    { opponent: "moha", teamPoints: 205, opponentPoints: 230 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };

    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Titans", 100, 98);
console.log(team.games);
