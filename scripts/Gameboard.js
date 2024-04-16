import Ship from "./Ship.js";

// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.

class Gameboard {
	constructor() {
		// Create  10x10 2D gameboard array
		this.board = Array.from({ length: 10 }, () =>
			Array.from({ length: 10 }).fill(null)
		);
	}

	// True for vertial, false for horizontal
	placeShip(ship, row, col, isVertical) {
		if (isVertical) {
			for (let i = 0; i < ship.length; i++) {
				this.board[row + i][col] = ship;
			}
		} else {
			for (let i = 0; i < ship.length; i++) {
				this.board[row][col + i] = ship;
			}
		}
	}

	receiveAttack() {}
}

// receiveAttack functon - takes a pair of coordinates, determine whether or not attack hit a ship and sends the 'hit' function to the correct ship, or records the coordinates of the missed shot
// keep track of missed attacks so they can display them properly.
// report whether or not all of their ships have been sunk

const gameboard = new Gameboard();

// Ships
const destroyer = new Ship(2, 0);
const submarine = new Ship(3, 0);
const cruiser = new Ship(3, 0);
const battleship = new Ship(4, 0);
const carrier = new Ship(5, 0);

gameboard.placeShip(carrier, 0, 3, false);
gameboard.placeShip(cruiser, 3, 5, true);

console.log(gameboard.board);

// This is how we select individual coordinates in gameboard array.
// gameboard2.board[1][3] = "hit";

export default Gameboard;
