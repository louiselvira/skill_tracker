// Skilltracker
// Louise Stigell

//The user can: 
//- Add and remove skills they'd like to start tracking
//- Log hours to that skill
//- See a progress bar that indicates how close they are to 10 000 hours ("mastery").
//- Reach different "levels" throughout their skill tracking.
//- Get a weekly overview of their skill progress

var skillTracker = angular.module("skillTracker", ['ui.bootstrap']); //"Hello, I'm an Angular app."

skillTracker.controller('mainController', function ($scope) {
	var title = "Welcome to SkillTracker";
	$scope.title = title;
	
	//Container array for skills:
	var mySkills = []; 
	$scope.mySkills = mySkills;
	
	//Constructor for skill objects:
	function Skill(skillName) {
    	this.name = skillName;
    	this.hoursLogged = 0;
    	this.level = 1;
		this.logHour = function (hours) { //Function to log hours to skill
			this.hoursLogged = this.hoursLogged + hours;
		};
	}

	//Container for capturing name of new skill to create a new skill object:
	var skillName = "";
	$scope.skillName = skillName;
	
	//Saves the new skill to skill container:
	$scope.save = function (skillName) {
		var skill = new Skill(skillName);
		mySkills.push(skill);
	};
	
	
});