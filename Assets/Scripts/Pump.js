#pragma strict

var freq = 1.5;
var width = 0.5;
var shakeWidth = 30.0;
var shakeFreq = 1.5;

private var initialPosition = Vector3.zero;
private var initialRotation = Quaternion.identity;

function Awake() {
	initialPosition = transform.localPosition;
	initialRotation = transform.localRotation;
}

function Update() {
	transform.localPosition = initialPosition + Vector3.up * (Mathf.Sin(Mathf.PI * 2.0 * freq * Time.time) * width);
	transform.localRotation = Quaternion.AngleAxis(Mathf.Sin(Mathf.PI * 2.0 * shakeFreq * Time.time) * shakeWidth, Vector3.right) * initialRotation;
}
