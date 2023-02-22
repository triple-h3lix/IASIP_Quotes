// TODO: create .json file that contains quotes and character name, get random quote from .json file, display inside div, and based on character name, change background of the page to an image of the source character

function randInt(max) {
	let n = Math.floor(Math.random() * mssg.length);
	return n;
}

function changeText() {
	document.getElementById("output").innerHTML = mssg[randInt()];
}
