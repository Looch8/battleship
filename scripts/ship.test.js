const Ship = require("./ship");

describe("Ship", () => {
	let ship;

	beforeEach(() => {
		ship = new Ship(0, 0); // Reset ship instance before each test
	});

	test("defines hit()", () => {
		expect(typeof ship.hit).toBe("function");
	});

	test("defines isSunk()", () => {
		expect(typeof ship.isSunk).toBe("function");
	});

	test("hit", () => {
		ship.hit();
		expect(ship.numOfHitsReceived).toBe(1);
	});

	test("isSunk", () => {
		expect(ship.isSunk()).toBe(true);
	});
});
