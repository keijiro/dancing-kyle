#pragma strict

@script RequireComponent(Animator)

var bodyTarget : Transform;
var lookTarget : Transform;
var leftFootTarget : Transform;
var rightFootTarget : Transform;
var leftHandTarget : Transform;
var rightHandTarget : Transform;

private var animator : Animator;
private var sequencer : Sequencer;

function Awake() {
	animator = GetComponent.<Animator>();
	sequencer = FindObjectOfType(Sequencer);
}

function OnAnimatorIK(layerIndex : int) {
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

	if (lookTarget) {
		animator.SetLookAtWeight(sequencer.levels[0], 0.3, 0.7);
		animator.SetLookAtPosition(lookTarget.position);
	}

	if (bodyTarget && sequencer.levels[1] > 0.01) {
		animator.bodyPosition = Vector3.Lerp(animator.bodyPosition, bodyTarget.position, sequencer.levels[1]);
	}

	if (bodyTarget && sequencer.levels[2] > 0.01) {
		animator.bodyRotation = Quaternion.Slerp(animator.bodyRotation, bodyTarget.rotation, sequencer.levels[2]);
	}

	if (leftHandTarget) {
		animator.SetIKPosition(AvatarIKGoal.LeftHand, leftHandTarget.position);
		animator.SetIKPositionWeight(AvatarIKGoal.LeftHand, 0.7 * sequencer.levels[3]);
	}
	if (rightHandTarget) {
		animator.SetIKPosition(AvatarIKGoal.RightHand, rightHandTarget.position);
		animator.SetIKPositionWeight(AvatarIKGoal.RightHand, 0.7 * sequencer.levels[3]);
	}
}
