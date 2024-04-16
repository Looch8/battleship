import { expect, test } from "@jest/globals";
import Gameboard from "./Gameboard";

describe("Gameboard", () => {
	let gameboard;

	beforeEach(() => {
		gameboard = new Gameboard(); // Resect Gamboard instance before each test;
	});

	test("defines receiveAttack()", () => {
		expect(typeof gameboard.receiveAttack).toBe("function");
	});
});
