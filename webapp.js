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
			document.getElementById("scene_title").innerHTML = "Deeper into the Forest";
			document.getElementById("scene_text").innerHTML = "As you venture deeper into the forest, you fine a rusty, stone axe. Do you wish to chop down some trees?";
			break;
	case "s2":
	document.getElementById("scene_title").innerHTML = "Towards the lake";
	document.getElementById("scene_text").innerHTML = "As you walk towards the lake, you see a little canoe with oars. Do you wish to steer the boat into the lake?";
	break;
	}
}