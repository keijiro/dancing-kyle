#pragma strict

private var sequencer : Sequencer;
private var spotlight : Light;

function Awake() {
	sequencer = FindObjectOfType(Sequencer);
	spotlight = GetComponentInChildren.<Light>();
}

function Update () {
	particleSystem.enableEmission = (sequencer.flags[0] && sequencer.flags[1] && sequencer.flags[2] && sequencer.flags[3]);
}
