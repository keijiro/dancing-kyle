#pragma strict

var trackNumber = -1;

private var sequencer : Sequencer;

function Awake() {
	audio.volume = (trackNumber >= 0) ? 0.0 : 1.0;
	sequencer = FindObjectOfType(Sequencer);
}

function StartPlay() {
	audio.Play();
	enabled = (trackNumber >= 0);
}

function Update() {
	audio.volume = sequencer.levels[trackNumber];
}
