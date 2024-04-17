import "./style.css";
import Ship from "./scripts/Ship";
import Gameboard from "./scripts/Gameboard";
import Player from "./scripts/Player";
import UserInterface from "./scripts/UserInterface";

const ship = new Ship(5, 1);

function loadDom() {
	UserInterface();
}

loadDom();
