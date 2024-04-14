class Ship {
	constructor(length, numOfHitsReceived) {
		this.length = length;
		this.numOfHitsReceived = numOfHitsReceived;
	}

	// increase hits to ship
	hit() {
		return (this.numOfHitsReceived += 1);
	} // TEST THIS METHOD

	// determine if ship has been sunk or not
	isSunk() {
		if (this.numOfHitsReceived == this.length) {
			return true;
		}
		return false;
	}
}

const ship1 = new Ship(3, 2);

ship1.hit();

export default Ship;
