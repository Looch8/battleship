class Ship {
	constructor(length, numOfHitsReceived) {
		this.length = length;
		this.numOfHitsReceived = numOfHitsReceived;
	}

	// increase hits to ship
	hit() {
		return (this.numOfHitsReceived += 1);
	}

	// determine if ship has been sunk or not
	isSunk() {
		if (this.numOfHitsReceived == this.length) {
			return true;
		}
		return false;
	}
}

const destroyer = new Ship(2, 0);
const submarine = new Ship(3, 0);
const cruiser = new Ship(3, 0);
const battleship = new Ship(4, 0);
const carrier = new Ship(5, 0);

export default Ship;
