
const team = {
    _players: [
        {firstName:"job",lastName:"koech",age:25},
        {firstName:"john",lastName:"doe",age:35},
        {firstName:"kevin",lastName:"smith",age:45}
    ],
    _games: [
        {opponent:"job", teamPoints: 30, opponentPoints: 20},
        {opponent:"john", teamPoints: 40, opponentPoints: 30},
        {opponent:"kevin", teamPoints: 45, opponentPoints: 35}
    ],

    get players(){
        return this._players
    },
    get games(){
        return this._games
    },
    addPlayer(newFirstName,newLastName,newAge){
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }
        this._players.push(player)
        return this._players
    },
    addGame(newOpponent,newTeamsPoint,newOpponentsPoint){
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamsPoint,
            opponentPoints: newOpponentsPoint
        }
        this._games.push(game)
        return this._games
    }
}

let player1=team.addPlayer("Bugs","Bunny",76)
console.log(player1)

let game1 = team.addGame("Titans",100,98)
console.log(game1)