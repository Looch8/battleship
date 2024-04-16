import { expect, test } from "@jest/globals";
import Gameboard from "./Gameboard";
import Ship from "./Ship";

describe("Gameboard", () => {
	let gameboard;

	beforeEach(() => {
		gameboard = new Gameboard(); // Resect Gameboard instance before each test;
	});

	test("defines receiveAttack()", () => {
		expect(typeof gameboard.receiveAttack).toBe("function");
	});

	test("defines placeShip()", () => {
		expect(typeof gameboard.placeShip).toBe("function");
	});

	test("receiveAttack()", () => {
		const ship = new Ship(3);
		gameboard.placeShip(ship, 1, 1, true);

		// Attack the target coordinates
		gameboard.receiveAttack(1, 1);

		// Check if the ship has been hit
		expect(ship.numOfHitsReceived).toBe(1);
	});

	test("placeShip()", () => {
		const ship = new Ship(4);
		gameboard.placeShip(ship, 1, 1, true);

		// Check if instance of Ship is on this board space
		expect(gameboard.board[1][1]).toBeInstanceOf(Ship);
	});
});
