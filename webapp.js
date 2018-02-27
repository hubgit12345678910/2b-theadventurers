// JavaScript Document

window.onload = function() {
	updateScene("start");
};

function updateScene(s) {
	switch(s) {
		case "start":
		
			document.getElementById("scene_title").innerHTML = "The Beginning";
			document.getElementById("scene_text").innerHTML = "You wake up in the middle of a forest. You find a backpack containing a sword, a flashlight, five pieces of wood, and a flask of water. Will you continue deeper into the forest, or walk towards a nearby lake?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Walk into the forest";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s1')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Head towards the nearby lake";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s2')");
			break;
		case "s1":
		
			document.getElementById("scene_title").innerHTML = "The rusty stone axe";
			document.getElementById("scene_text").innerHTML = "As you venture deeper into the forest, you find a rusty, stone axe. Do you wish to chop down some trees?";
	
		// change the first button
			
			document.getElementById("btn1").innerHTML = "Chop down trees";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s3')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the axe and venture on";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s4')");
	
			break;
		case "s2":
			document.getElementById("scene_title").innerHTML = "The little canoe";
			document.getElementById("scene_text").innerHTML = "As you walk towards the lake, you see a little canoe with oars. Do you wish to steer the boat into the lake?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Ride the boat into the lake";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s5')");
				
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Ignore the boat and keep on walking";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s7')");
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
			document.getElementById("scene_text").innerHTML = "As you walk deeper, you find a dead deer carcass. Would you like to skin the deer with your sword?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Skin the deer";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s8')");
				
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the deer and go towards the lake";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s2')");
			break;
			case "s5":
			
			document.getElementById("ach1").innerHTML = "#1: All Aboard!";
			alert("Achievment 001: All Aboard! First time sailing? Good luck me matey!");
	
					
			document.getElementById("scene_title").innerHTML = "Row-Row-Row you boat";
			document.getElementById("scene_text").innerHTML = "After a few hours of intense rowing, you hear a crunch under your boat. As your boat starts to fill up with water, you suddenly realize that you are close to land";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Abandon the boat and swim to land";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s10')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Fix the boat with your wood";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s6')");
				
			break;
			case "s6":
			
			document.getElementById("ach4").innerHTML = "#4: Carpenter";
				alert("Achievment 004: Carpenter. ");
				
			document.getElementById("scene_title").innerHTML = "Fixing the Boat";
			document.getElementById("scene_text").innerHTML = "You use your wood to fix your boat. You row for a few more minutes and start to get exhausted but see the island that you suspected to be near. Would you like to row your boat to shore or start swimming to land";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Swim back to land";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s10')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Keep Rowing to the island";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s15')");
			
			break;
			
			case "s7":
		
			document.getElementById("scene_title").innerHTML = "Trekking on";
			document.getElementById("scene_text").innerHTML = "As you walk past the boat, you hear a deafening splash. When you look back, a huge fish jumps from under the boat, breaks it, and pieces of broken wood behind. Would you like to collect the wood?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Collect the wood";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s14')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the wood";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s14')");
			break;
			case "s8":
			
			document.getElementById("ach2").innerHTML = "#2: Hunter";
				alert("Achievment 002: Hunter");

				
			document.getElementById("scene_title").innerHTML = "Skinning the deer";
			document.getElementById("scene_text").innerHTML = "Before you skin the deer, you see a black wormhole in the bush right next to it. Would you like to check the wormhole out?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Shine your flashlight in the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Leave the deer";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s9')");
			
			break;
			
			case "s9":
			document.getElementById("scene_title").innerHTML = "The wormhole";
			document.getElementById("scene_text").innerHTML = "You slowly back away from the wormhole and continue deeper into the forest. You see another small wormhole on the ground. You hear whirring noises that might come from some sort of machine inside. What will you do?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Drop a rock into the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s12')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Jump into the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s13')");
			
			break;
			
			case "s10":
			
			document.getElementById("scene_title").innerHTML = "On the island";
			document.getElementById("scene_text").innerHTML = "You finally reach the island. You are extremely exhausted and you see a cave. Would you like to sleep in the cave and start a fire or would you like to make your own shelter?";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Sleep in the cave";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Make your own shelter outside";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s')");
			break;
			
			case "s11":
			document.getElementById("scene_title").innerHTML = "The mysterious hole";
			document.getElementById("scene_text").innerHTML = "You shine your flashlight in the hole. The beam disappears without a trace. No reflection, no trace, just gone.";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Jump into the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s13')");
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Drop a rock in and see what happens";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s12')");
			
			break;
			
			case "s12":
			document.getElementById("scene_title").innerHTML = "The Desperate Choice";
			document.getElementById("scene_text").innerHTML = "You drop a rock that you found on the ground in the hole. You suddenly hear a growl that makes your blood run cold. Your heart beats rapidly as you slowly turn around. You see a bear!";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Jump into the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s13')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Run from the bear and the wormhole";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s17')");
			break;
	
			case "s13":
			document.getElementById("scene_title").innerHTML = "The White Room";
			document.getElementById("scene_text").innerHTML = "When you jump into the wormhole, you feel a strange sensation, as if you were flying. As you land on the cold, hard marble floor, you see a bright room with a bunch of strange-looking machinery. Suddenly you see a red dot pointing at your chest. Will you look for where the dot is coming from or ignore it";
			
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Stand completely still";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s20')");
			
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Ignore the dot and inspect the area";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s18')");
			
			break;
			
			case "s14":
			document.getElementById("scene_title").innerHTML = "The mountain range";
			document.getElementById("scene_text").innerHTML = "After trekking on few hours until running into a mountain range. If you climb to the top of the mountain range, you can probably see the entire forest and valley. Would you like to climb to the top?";
	
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Climb to the top";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s21')");
						
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Go back to the lake and build a boat to sail into the lake";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s19')");
			
			break;
			
			case "s15":
			document.getElementById("scene_title").innerHTML = "Keep rowing to the island";
			document.getElementById("scene_text").innerHTML = "After rowing, you are exhausted and can't row anymore. You suddenly hear a strange noise behind you. You realize that is it a wormhole. Do you jump into wormhole or ignore it?";
	
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Jump into the wormhole";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s13')");
						
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Ignore the wormhole";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s16')");
			
			break;
			
			case "s16":
			document.getElementById("scene_title").innerHTML = "Ignoring the wormhole";
			document.getElementById("scene_text").innerHTML = "";
				alert("After ignoring and escaping the wormhole you die from starvation, exhaustion and dehydration. THE END"); 
				
			document.getElementById("btn1").innerHTML = "Go to the starting screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "index.html");
			
			break;
			
			case "s17":
			document.getElementById("scene_title").innerHTML = "Running from the bear and the wormhole";
			document.getElementById("scene_text").innerHTML = "";
				
				alert("You break into a full sprint and start running away from the bear. You weave around trees and try to lose the bear, but the bear is much faster than you. As you get eaten alive, you realize one important life lesson: Never try to outrun a bear! THE END!");
			document.getElementById("btn1").innerHTML = "Go to the starting screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "index.html");
			
			break;
			
			case "s18":
				document.getElementById("ach5").innerHTML = "#5: Getting fearless?";
				alert("Achievment 005: Fearless. ");
			document.getElementById("scene_title").innerHTML = "Ignore the dot and inspect your surroundings";
			document.getElementById("scene_text").innerHTML = "You slowly start to move around, trying to be as quiet as possible. The dot stays focused on your chest, moving as you move. You hear movement in the vents above you. You decide to look up and see a shadow holding what seems to be a gun. There are a few boxes separating you from the vents. Would you like to hide behind the box or stand still with your hands up?";
	
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Hide behind the box";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s')");
						
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Stand completly still";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s20')");
			
			break;
			
			case "s19":
				
			document.getElementById("scene_title").innerHTML = "Go back to the lake and build a boat";
			document.getElementById("scene_text").innerHTML = "After going back to the lake and taking the wood that was left behind, you start to build a boat. After working on building the boat for a few hours, you lose 5 pieces of wood. Would you like to go back to the forest, or ride the boat into the lake.";
	
			// change the first button
			
			document.getElementById("btn1").innerHTML = "Back to the forest";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s1')");
						
			// change the second button
			
			document.getElementById("btn2").innerHTML = "Riding the boat";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
			
			break;
			
			case "s20":
				
			document.getElementById("scene_title").innerHTML = "Standing completely still";
			document.getElementById("scene_text").innerHTML = "";
		alert("After standing completely still you hear a loud BANG. You start to run and you hear another BANG. You quickly look to the side and your life flashes before your eyes as a bullet is headed straight for you. All of a sudden, you can't feel your chest. You look down and a blood is pouring down your body. You realize, the bullet has hit you. THE END"); 
				
			document.getElementById("btn1").innerHTML = "Go to the starting screen";
			document.getElementById("btn1").setAttribute("onclick", window.location.href = "index.html");
			break;
			
			case "s21":
			
				document.getElementById("ach6").innerHTML = "#6: Climbing like a hiker?";
				alert("Achievment 006: Hiker. ");
				
			document.getElementById("scene_title").innerHTML = "Climbing the mountain";
			document.getElementById("scene_text").innerHTML = "";
	
			// change the first button
			
			document.getElementById("btn1").innerHTML = "";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s')");
						
			// change the second button
			
			document.getElementById("btn2").innerHTML = "";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s')");
			
			break;
	
	}
}