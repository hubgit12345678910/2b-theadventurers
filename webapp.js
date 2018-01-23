// JavaScript Document

window.onload = function() {
	updateScene("start");
};

function updateScene(s) {
	switch(s) {
		case "start":
			document.getElementById("scene_title").innerHTML = "The Beginning";
			document.getElementById("scene_text").innerHTML = "You wake up in the middle of a forest. You find a backpack containing a wooden sword, a linen tunic, and a flask of water. Will you continue deeper into the forest, or walk towards a nearby lake?";
			break;
		case "s1":
			document.getElementById("scene_title").innerHTML = "Walk into the forest";
			document.getElementById("scene_text").innerHTML = "Walk into the lake";
			break;
	}
}