#pragma strict

@script RequireComponent(Animator)

var bodyTarget : Transform;
var lookTarget : Transform;
var leftFootTarget : Transform;
var rightFootTarget : Transform;

private var animator : Animator;

function Awake() {
	animator = GetComponent.<Animator>();
}

function OnAnimatorIK(layerIndex : int) {
	if (bodyTarget) {
		animator.bodyPosition = bodyTarget.position;
		animator.bodyRotation = bodyTarget.rotation;
	}
	if (lookTarget) {
		animator.SetLookAtWeight(1.0, 0.3, 0.7);
		animator.SetLookAtPosition(lookTarget.position);
	}
	if (leftFootTarget) {
		animator.SetIKPosition(AvatarIKGoal.LeftFoot, leftFootTarget.position);
		animator.SetIKRotation(AvatarIKGoal.LeftFoot, leftFootTarget.rotation);
		animator.SetIKPositionWeight(AvatarIKGoal.LeftFoot, 1.0);
		animator.SetIKRotationWeight(AvatarIKGoal.LeftFoot, 0.6);
	}
	if (rightFootTarget) {
		animator.SetIKPosition(AvatarIKGoal.RightFoot, rightFootTarget.position);
		animator.SetIKRotation(AvatarIKGoal.RightFoot, rightFootTarget.rotation);
		animator.SetIKPositionWeight(AvatarIKGoal.RightFoot, 1.0);
		animator.SetIKRotationWeight(AvatarIKGoal.RightFoot, 0.6);
	}
}
