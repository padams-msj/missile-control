function launchMissile() {
	console.log("Launch Missile button clicked.");

	if (confirm("Are you sure you want to launch the missile?")) {
		alert("Missile launched!");
		console.log("User confirmed missile launch.");
	} else {
		alert("Launch aborted.");
		console.log("User canceled missile launch.");
	}
}

function selfDestruct() {
	console.log("Self Destruct button clicked.");

	if (confirm("This will initiate self destruct. Continue?")) {
		alert("Self destruct sequence activated!");
		console.log("User confirmed self destruct.");
	} else {
		alert("Self destruct canceled.");
		console.log("User canceled self destruct.");
	}
}
