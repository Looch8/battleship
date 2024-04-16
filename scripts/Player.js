// Create a Player class/factory.
// There will be two types of players in the game, ‘real’ players and ‘computer’ players.
// Each player object should contain it’s own gameboard.

import Gameboard from "./Gameboard";

class Player {
	constructor(name) {
		this.name = name;
		this.gameboard = new Gameboard();
	}
}

const player = new Player("luke");
const computer = new Player("computer");

console.log(player);
console.log(computer);

export default Player;
