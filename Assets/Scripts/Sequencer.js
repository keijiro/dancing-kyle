#pragma strict

var bpm = 128.0;
var fadeSpeed = 2.0;

var flags = [false, false, false, false];
var levels = [0.0, 0.0, 0.0, 0.0];
var position = 0.0;

private var startTime = 0.0;

function Start() {
	yield WaitForSeconds(1.0);
	startTime = Time.time;
	GameObject.Find("Audio Tracks").BroadcastMessage("StartPlay");
}

function Update() {
	if (startTime > 0.0) {
		position = (Time.time - startTime) * bpm / 60.0;
	}

	var fadeDelta = fadeSpeed * Time.deltaTime;
	for (var i = 0; i < 4; i++) {
		levels[i] = Mathf.Clamp01(levels[i] + (flags[i] ? 1.0 : -1.0) * fadeDelta);
	}
}
