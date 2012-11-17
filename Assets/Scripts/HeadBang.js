#pragma strict

var width = 50.0;
var ahead = -0.1;

private var sequencer : Sequencer;

function Awake() {
	sequencer = FindObjectOfType(Sequencer);
}

function Update() {
	var phase = Mathf.PI * 2.0 * (sequencer.position + ahead);
	transform.localRotation = Quaternion.AngleAxis(Mathf.Cos(phase) * -width, Vector3.forward);
}
