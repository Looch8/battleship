import "./style.css";
import Ship from "./scripts/Ship";

console.log("hi");

const ship = new Ship(5, 1);

console.log(ship);
console.log(ship.isSunk());
