#pragma strict

var pumpWidth = 0.2;
var pumpAhead = 0.12;
var shakeWidth = 30.0;
var shakeFreq = 1.5;

private var sequencer : Sequencer;

function Awake() {
	sequencer = FindObjectOfType(Sequencer);
}

function Update() {
	var phase = Mathf.PI * 2.0 * (sequencer.position + pumpAhead);
	transform.localPosition = Vector3.up * (Mathf.Cos(phase) * pumpWidth);

	phase = Mathf.PI * 2.0 * shakeFreq * sequencer.position;
	transform.localRotation = Quaternion.AngleAxis(Mathf.Cos(phase) * shakeWidth, Vector3.right);
}
