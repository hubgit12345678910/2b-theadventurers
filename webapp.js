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
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s1')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Head towards the nearby lake";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s2')");
			break;
		case "s1":
		
			document.getElementById("scene_title").innerHTML = "Deeper into the Forest";
			document.getElementById("scene_text").innerHTML = "As you venture deeper into the forest, you fine a rusty, stone axe. Do you wish to chop down some trees?";
	
		// change the first button
			
			document.getElementById("btn1").innerHTML = "Chop down trees";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s3')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the axe and venture on";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s4')");
	
			break;
		case "s2":
			document.getElementById("scene_title").innerHTML = "Towards the lake";
			document.getElementById("scene_text").innerHTML = "As you walk towards the lake, you see a little canoe with oars. Do you wish to steer the boat into the lake?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Ride the boat into the lake";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s5')");
				
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Ignore the boat and keep on walking";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s6')");
			break;
			case "s3":
		
			document.getElementById("scene_title").innerHTML = "Chopping down the trees";
			document.getElementById("scene_text").innerHTML = "When you finish chopping down the trees, your hands feel burned and they are throbbing, but the good thing is that you collect 5 pieces of wood. Would you like to head deeper into the forest or head back to the lake?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Go deeper into the forest";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s4')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Go back and head towards the lake";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s2')");
			break;
			case "s4":
		
			document.getElementById("scene_title").innerHTML = "The Dead Deer Carcass";
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
			case "s5":
					document.getElementById("ach1").innerHTML = "#1: All Aboard!";
					alert("Achievment 001: All Aboard! First time sailing? Good luck me matey!");
			document.getElementById("scene_title").innerHTML = "Row-Row-Row you boat";
			document.getElementById("scene_text").innerHTML = "After a few hours of intense rowing, you hear a crunch under your boat. As your boat starts to fill up with water, you suddenly realize that you are close to land";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Abandon the boat and swim to land";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s10");
				document.getElementById("ach3").innerHTML = "#3: Olympic Swimmer";
				alert("Achievment 003: Olympic Swimmer. Don't get eaten by sharks!");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Fix the boat with you wood";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s6");
				document.getElementById("ach4").innerHTML = "#4:Carpenter";
				alert("Achievment 004: Carpenter. ");
			});
			break;
			case "s6":
		
			document.getElementById("scene_title").innerHTML = "Fixing the Boat";
			document.getElementById("scene_text").innerHTML = "You use your wood to fix your boat. You row for a few more minutes and see the island that you suspected to be near. Would you like to row your boat to shore";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Row to shore";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s10");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Keep Rowing";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s6");
			});
			break;
			case "s7":
		
			document.getElementById("scene_title").innerHTML = "Trekking on";
			document.getElementById("scene_text").innerHTML = "As you walk past the boat, you head an explosion behind you. You look behind you and realize it was the boat. Would you like to collect the wood?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Collect the wood";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s10");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the wood";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s6");
			});
			break;
			case "s8":
			document.getElementById("ach2").innerHTML = "#2: Hunter?";
				alert("Achievment 002: Hunter? More like tanner!");
			document.getElementById("scene_title").innerHTML = "Skinning the deer";
			document.getElementById("scene_text").innerHTML = "Before you skin the deer, you see a black wormhole in the bush right next to it. Would you like to check the wormhole out?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Shine you flashlight in the wormhole";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s11");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the deer";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s9");
			});
			break;
			case "s9":
			document.getElementById("scene_title").innerHTML = "The wormhole";
			document.getElementById("scene_text").innerHTML = "You slowly back away from the wormhole and continue deeper into the forest. You see another small wormhole on the ground. You hear whirring noises that might come from some sort of machine inside. What will you do?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Drop a rock into the wormhole";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s12");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Jump into the wprmhole";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s13");
			});
			break;
			case "s10":
			document.getElementById("scene_title").innerHTML = "On the island";
			document.getElementById("scene_text").innerHTML = "You finally reach the island. You are extremely exhausted and you see a cave. Would you like to sleep in the cave and start a fire or would you like to make your own shelter?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Sleep in the cave";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s10");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Make your own shelter";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s6");
			});
			break;
			case "s11":
			document.getElementById("scene_title").innerHTML = "The mysterious hole";
			document.getElementById("scene_text").innerHTML = "You shine you flashlight in the hole. The beam disappears without a trace. No reflection, no trace, just gone.";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Jump into the wormhole";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s13");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Drop a rock in and see what happens";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s12");
			});
			break;
			case "s12":
			document.getElementById("scene_title").innerHTML = "The Desperate Choice";
			document.getElementById("scene_text").innerHTML = "You drop a rock that you found on the ground in the hole. You suddenly hear a growl that makes your blood run cold. Your heart beats rapidly as you slowly turn around. You see a bear!";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Jump into the wormhole";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s13");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Run from the bear and the wormhole";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s6");
			});
			break;
			case "s12":
			document.getElementById("scene_title").innerHTML = "The Desperate Choice";
			document.getElementById("scene_text").innerHTML = "You drop a rock that you found on the ground in the hole. You suddenly hear a growl that makes your blood run cold. Your heart beats rapidly as you slowly turn around. You see a bear!";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Jump into the wormhole";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s13");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Run from the bear and the wormhole";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s6");
			});
			break;
			case "s13":
			document.getElementById("scene_title").innerHTML = "The White Room";
			document.getElementById("scene_text").innerHTML = "When you jump into the wormhole, you feel a strange sensation, as if you were flying. As you land on the cold, hard marble floor, you see a bright room with a bunch of strange-looking machinery.";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s13");
			});
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Run from the bear and the wormhole";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s6");
			});
			break;
			
	}
}