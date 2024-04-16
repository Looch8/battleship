class Ship {
	constructor(length, numOfHitsReceived) {
		this.length = length;
		this.numOfHitsReceived = 0;
	}

	// increase hits to ship
	hit() {
		this.numOfHitsReceived++;
	}

	// determine if ship has been sunk or not
	isSunk() {
		if (this.numOfHitsReceived == this.length) {
			return true;
		}
		return false;
	}
}

export default Ship;
