import Ship from "./Ship.js";
// Create Gameboard class/factory.
// Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
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
}

// place ship by calling ship function
// receiveAttack functon - takes a pair of coordinates, determine whether or not attack hit a ship and sends the 'hit' function to the correct ship, or records the coordinates of the missed shot
// keep track of missed attacks so they can display them properly.
// report whether or not all of their ships have been sunk

const gameboard = new Gameboard();

console.log(gameboard.board);

export default Gameboard;
