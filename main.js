import "./style.css";
import Ship from "./scripts/Ship";
import Gameboard from "./scripts/Gameboard";

console.log("hi");

const ship = new Ship(5, 1);

console.log(ship);
console.log(ship.isSunk());
