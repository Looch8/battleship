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

export default Ship;
