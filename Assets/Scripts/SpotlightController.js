#pragma strict

var speed = 200.0;

private var sequencer : Sequencer;
private var spotlight : Light;

function Awake() {
	sequencer = FindObjectOfType(Sequencer);
	spotlight = GetComponentInChildren.<Light>();
}

function Update () {
	spotlight.enabled = (sequencer.flags[0] && sequencer.flags[1] && sequencer.flags[2] && sequencer.flags[3]);
	transform.localRotation = Quaternion.AngleAxis(Time.time * speed, Vector3.up);
}
