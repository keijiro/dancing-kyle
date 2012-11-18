#pragma strict

private var sequencer : Sequencer;

function Awake() {
	sequencer = FindObjectOfType(Sequencer);
}
function Update() {
	renderer.enabled = sequencer.showInfo;
}
