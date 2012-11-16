#pragma strict

var freq = 1.5;
var degree = 80.0;

private var initialRotation = Quaternion.identity;
private var target : Transform;

function Awake() {
	initialRotation = transform.localRotation;
	target = transform.Find("Target");
}

function Update() {
	transform.localRotation = Quaternion.AngleAxis(Mathf.Sin(Mathf.PI * 2.0 * freq * Time.time) * -degree, Vector3.forward) * initialRotation;
}
