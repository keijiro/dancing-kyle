#pragma strict

private var yawPivot : Transform;
private var pitchPivot : Transform;
private var sequencer : Sequencer;
private var movement = 0.0;

function Awake() {
	pitchPivot = transform.parent;
	yawPivot = pitchPivot.parent;
	sequencer = FindObjectOfType(Sequencer);
}

function Update() {
	movement += Time.deltaTime * (0.5 + 0.7 * (sequencer.levels[0] + sequencer.levels[1] + sequencer.levels[2] + sequencer.levels[3]));
	yawPivot.localRotation = Quaternion.AngleAxis(15.0 * Mathf.Sin(movement * 0.333333), Vector3.up);
	pitchPivot.localRotation = Quaternion.AngleAxis(10.0 * Mathf.Sin(movement * 0.2) + 10.0, Vector3.right);

	if (sequencer.flags[0] && sequencer.flags[1] && sequencer.flags[2] && sequencer.flags[3]) {
		camera.fieldOfView = Mathf.Abs(Mathf.Sin(Mathf.PI * sequencer.position)) * -2.0 + 30.0;
	}
}

