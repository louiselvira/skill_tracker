var skillTracker = angular.module("skillTracker", ['ui.bootstrap']);

skillTracker.controller('mainController', function ($scope, $position) {
	
	//Container array for skills:
	var mySkills = []; 
	$scope.mySkills = mySkills;
	
	//Constructor for skill objects:
	function Skill(skillName) {
    	this.name = skillName;
    	this.hoursLogged = 0;
    	this.level = "";
		this.logHour = function (hours) { //Function to log hours to skill
			this.hoursLogged = this.hoursLogged + hours;
			var currentLevel = this.level;
			this.setLevel();
			this.checkForLevelUp(currentLevel);
		};
		
		this.setLevel = function () {
			if (this.hoursLogged >= 3600) {
				this.level = "God Mode";
			}
			else if (this.hoursLogged > 3000) {
				this.level = "Master";
			}
			else if (this.hoursLogged > 2400) {
				this.level = "Expert";
			}
			else if (this.hoursLogged > 1800) {
				this.level = "Advanced Practitioner";
			}
			else if (this.hoursLogged > 1200) {
				this.level = "Practitioner";
			}
			else if (this.hoursLogged > 600) {
				this.level = "Advanced Student";
			}
			else if (this.hoursLogged > 100) {
				this.level = "Student";
			}
			else if (this.hoursLogged > 1) {
				this.level = "Beginner";
			}
		};
		
		this.checkForLevelUp = function (currentLevel) {
			if (this.level != currentLevel) {
				var levelUpMessage = "Way to go! You've reached the level of " + this.level + ". Keep on doing your thing.";
				$('#alert-placeholder').html("<div class='alert alert-success alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Level up! </strong>" + levelUpMessage + "</div>");
				setTimeout(function() {
					$(".alert").remove();
				}, 5000);
			}
		};
	}

	//Container for capturing name of new skill to create a new skill object:
	var skillName = "";
	$scope.skillName = skillName;
	
	//Saves the new skill to skill container:
	$scope.save = function (skillName) {
		var skill = new Skill(skillName);
		mySkills.push(skill);
		$scope.skillName = "";
	};
	
	$scope.delete = function (skill) {
		mySkills.pop(skill);
	};
	
});
