// Skilltracker
// Louise Stigell

//The user can: 
//- Enter skills they'd like to start tracking
//- Log hours to that skill
//- See a progress bar that indicates how close they are to 10 000 hours ("mastery").
//- Reach different "levels" throughout their skill tracking.

var skillTracker = angular.module("skillTracker", ['ngProgress']); //"Hello, I'm an Angular app."

skillTracker.controller('mainController', function ($scope, ngProgressFactory) {
	var title = "Welcome to SkillTracker";
	$scope.title = title;
	
	var mySkills = [];
	$scope.mySkills = mySkills;
	
	function Skill(skillName) {
    	this.name = skillName;
    	this.hoursLogged = 0;
    	this.level = 1;
		this.progressbar = ngProgressFactory.createInstance();
		var logHour = function () {
			this.hoursLogged += 1;
			this.progressbar.set(this.progressbar.status += 5);	
		};
	}

	
	var skillName = "";
	$scope.skillName = skillName;
	
	$scope.save = function (skillName) {
		var skill = new Skill(skillName);
		skill.progressbar.set(3);
		mySkills.push(skill);
	};
	
	/*$scope.logHours = function (skill) {
		skill.hoursLogged += 1;
		skill.progressbar.set(skill.progressbar.status += 5);
	};*/
	
	//Clear input field after save.
	//Show progress bar in skill list.
	
});