#pragma strict

var width = 45.0;
var freq = 0.5;

private var sequencer : Sequencer;

function Awake() {
	sequencer = FindObjectOfType(Sequencer);
}

function Update() {
	var phase = Mathf.PI * 2.0 * freq * sequencer.position;
	transform.localRotation = Quaternion.AngleAxis(Mathf.Cos(phase) * -width, Vector3.right);
}
