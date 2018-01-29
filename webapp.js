// JavaScript Document

window.onload = function() {
	updateScene("start");
};

function updateScene(s) {
	switch(s) {
		case "start":
		
			document.getElementById("scene_title").innerHTML = "The Beginning";
			document.getElementById("scene_text").innerHTML = "You wake up in the middle of a forest. You find a backpack containing a wooden sword, a linen tunic, and a flask of water. Will you continue deeper into the forest, or walk towards a nearby lake?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Walk into the forest";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s1");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Head towards the nearby lake";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s2");
			});
			break;
		case "s1":
		
			document.getElementById("scene_title").innerHTML = "Deeper into the Forest";
			document.getElementById("scene_text").innerHTML = "As you venture deeper into the forest, you fine a rusty, stone axe. Do you wish to chop down some trees?";
	
		// change the first button
			
			document.getElementById("btn1").innerHTML = "Chop down trees";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s3");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the axe and venture on";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s4");
			});
	
			break;
		case "s2":
			document.getElementById("scene_title").innerHTML = "Towards the lake";
			document.getElementById("scene_text").innerHTML = "As you walk towards the lake, you see a little canoe with oars. Do you wish to steer the boat into the lake?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Ride the boat into the lake";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s5");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Ignore the boat and keep on walking";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s6");
			});
			break;
			case "s3":
		
			document.getElementById("scene_title").innerHTML = "Chopping down the trees";
			document.getElementById("scene_text").innerHTML = "When you finish chopping down the trees, your hands feel burned and they are throbbing, but the good thing is that you collect 5 pieces of wood. Then, you head deeper into the forest.";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Go deeper into the forest";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s4");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Same choice 'cause YOU AIN'T GOT A CHOICE!";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s4");
			});
			break;
			case "s4":
		
			document.getElementById("scene_title").innerHTML = "Leave the axe";
			document.getElementById("scene_text").innerHTML = "As you walk deeper into the forest, you find a dead deer carcass. Would you like to skin the deer with your sword?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Skin the deer";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s8");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the deer";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s9");
			});
			break;
	}
}