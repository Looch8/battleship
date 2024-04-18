// Create a Player class/factory.
// There will be two types of players in the game, ‘real’ players and ‘computer’ players.
// Each player object should contain it’s own gameboard.

import Gameboard from "./Gameboard";

class Player {
	constructor(name) {
		this.name = name;
		this.board = new Gameboard();
	}
}

export default Player;
