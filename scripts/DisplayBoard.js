import Player from "./Player";
// Import your classes/factories into another file, and drive the game using event listeners to interact with your objects. Create a module that helps you manage actions that should happen in the DOM.
// At this point it is appropriate to begin crafting your User Interface.
const container = document.querySelector("#container");
const playerContainer = document.querySelector("#playerBoard");
const computerContainer = document.querySelector("#computerBoard");

const playerBoard = new Player("player");
const computerBoard = new Player("computer");

// Set up a new game by creating Players. For now just populate each player’s Gameboard with predetermined coordinates. You are going to implement a system for allowing players to place their ships later.
function displayPlayerBoard() {
	playerBoard.board.board.forEach((row) => {
		row.forEach((cell) => {
			const div = document.createElement("div");
			div.classList = "playerBoardCells";
			div.textContent = cell;
			playerContainer.append(div);
			console.log(cell);
		});
	});

	console.log(playerBoard.board);
}

function displayComputerBoard() {
	computerBoard.board.board.forEach((row) => {
		row.forEach((cell) => {
			const div = document.createElement("div");
			div.classList = "computerBoardCells";
			div.textContent = cell;
			computerContainer.append(div);
			console.log(cell);
		});
	});

	console.log(playerBoard.board);
}
displayPlayerBoard();
displayComputerBoard();
// We’ll leave the HTML implementation up to you for now, but you should display both the player’s boards and render them using information from the Gameboard class/factory.
// You’ll need methods to render each player’s Gameboard, so put them in an appropriate module.
// Your event listeners should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function, step back and figure out which class or module that function should belong to.
// For attacks, let the user click on a coordinate in the enemy Gameboard. Send the user input to methods on your objects, and re-render the boards to display the new information.
// Players should take turns playing the game by attacking the enemy Gameboard. If you feel the need to keep track of the current player’s turn, it’s appropriate to manage that in this module, instead of another mentioned object.
// The game is played against the computer, so make the ‘computer’ players capable of making random plays. The computer does not have to be smart, but it should know whether or not a given move is legal (i.e. it shouldn’t shoot the same coordinate twice).
// Create conditions so that the game ends once one player’s ships have all been sunk. This function is also appropriate for this module.

export { displayComputerBoard, displayPlayerBoard };