// Bjorn's solution

const team = {};


team._players = [];
team._games = [];


team._players.push({
  firstName: "Player1FirstName",
  lastName: "Player1LastName",
  age: 25
});

team._players.push({
  firstName: "Player2FirstName",
  lastName: "Player2LastName",
  age: 28
});

team._players.push({
  firstName: "Player3FirstName",
  lastName: "Player3LastName",
  age: 22
});

team._games.push({
  opponent: "Team A",
  teamPoints: 80,
  opponentPoints: 75
});

team._games.push({
  opponent: "Team B",
  teamPoints: 90,
  opponentPoints: 85
});

team._games.push({
  opponent: "Team C",
  teamPoints: 70,
  opponentPoints: 78
});

team.players = () => {
  return team._players;
};

team.games = () => {
  return team._games;
};

team.addPlayer = (newFirstName, newLastName, newAge) => {
  const newPlayer = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  };
  team._players.push(newPlayer);
};

team.addPlayer("Bugs", "Bunny", 76);
console.log("Updated Players:", team.players());

team.addGame = (newOpponent, newTeamPoints, newOpponentPoints) => {
  const newGame = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  };
  team._games.push(newGame);
};

team.addGame("Titans", 100, 98);
console.log("Updated Games:", team.games());





