import Ship from "./Ship.js";

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
		// Check if space is empty
		if (this.board[row][col] == null) {
			// place ship
			if (isVertical) {
				for (let i = 0; i < ship.length; i++) {
					this.board[row + i][col] = ship;
				}
			} else {
				for (let i = 0; i < ship.length; i++) {
					this.board[row][col + i] = ship;
				}
			}
		} else {
			console.log("cannot place ship there, spot is taken.");
		}
	}

	receiveAttack(row, col) {
		const target = this.board[row][col];
		if (target !== null) {
			console.log("hit!");
			target.hit();
			if (target.isSunk()) {
				console.log("Ship sunk!");
			}
			this.board[row][col] = "hit!";
		} else {
			console.log("miss");
			this.board[row][col] = "miss!";
		}
	}
}

// report whether or not all of their ships have been sunk

const gameboard = new Gameboard();

// Ships
const destroyer = new Ship(2);
const submarine = new Ship(3);
const cruiser = new Ship(3);
const battleship = new Ship(4);
const carrier = new Ship(5);

gameboard.placeShip(carrier, 0, 3, false);
gameboard.placeShip(cruiser, 3, 5, true);
gameboard.placeShip(submarine, 7, 7, true);

gameboard.receiveAttack(0, 4);
gameboard.receiveAttack(0, 1);
gameboard.receiveAttack(0, 5);
gameboard.receiveAttack(0, 6);
gameboard.receiveAttack(0, 7);
gameboard.receiveAttack(0, 3);

console.log(carrier);
console.log(cruiser);

console.log(gameboard.board);

export default Gameboard;
