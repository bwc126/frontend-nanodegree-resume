'use strict';
//bio contains basic personal and contact info
var bio = {
  "name" : "Brian W Coe",
  "role" : "UI Engineer",
  "contacts" : {
  "location" : "Ashburn, VA",
  "email" : "bwc126@gmail.com",
  "github" : "https://github.com/bwc126"
  },
  "bioPic" : "https://s3.amazonaws.com/accredible-api-users/images/33122/original/1440302146071?1441671386",
  "welcomeMessage" : "Thanks for Your Consideration",
  "skills" : [
    "Systems Thinking",
    "Programming",
    "Systems Engineering"
  ],

};
//work contains info on past employment
var work = {
  "jobs" : [{
      "employer" : "Drexel University Biomaterials Laboratory",
      "title" : "Associate Research Engineer",
      "location" : "Philadelpha, PA",
      "dates" : "2008",
      "description" : "Synthesize microparticle therapeutic systems and characterize them"
  },
  {
      "employer" : "Geminate LLC",
      "title" : "Chief Engineer",
      "location" : "Baltimore, MD",
      "dates" : "2012-2014",
      "description" : "Develop novel additive manufacturing systems"
  }]
};
//education contains info on academic and self-directed learning
var education = {
  "schools" : [{
    "name" : "Drexel University",
    "location" : "Philadelpha, PA",
    "degree" : "Bachelor of Science (Incomplete)",
    "majors" : ["Materials Science and Engineering", "Biomedical Engineering"],
    "dates" : "2007-2010",
    "url" : ""
  },
  {
    "name" : "UMBC",
    "location" : "Baltimore, MD",
    "degree" : "Bachelor of Science (Incomplete)",
    "majors" : ["Biological Sciences", "Cultural Anthropology", "Psychology"],
    "dates" : "2011-2013",
    "url" : ""
  }],
  "onlineCourses" : [{
    "title" : "Intro to Computer Science",
    "school" : "Udacity",
    "dates" : "2015",
    "url" : "https://www.udacity.com/certificate/cs101"
  }]
};
//projects contains objects which describe various personal projects
var projects = {
  "projects" : [{
    "title" : "Hydra Delta",
    "dates" : "2014-2015",
    "description" : "Open Source Delta FDM 3D printer",
    "image" : "https://github.com/bwc126/Project-1-Portfolio/blob/master/images/Hydra2-S.png?raw=true"
    },
    {
    "title" : "Personal Portfolio Website",
    "dates" : "2015",
    "description" : "Personal website, inspired and tutored by Udacity",
    "image" : "https://raw.githubusercontent.com/bwc126/Project-1-Portfolio/master/images/bootstrap.png"
    }
  ]
};
var data = "%data%";
var $header = $("#header");
/** @function: bio.display() formats and appends data from bio to the resume */
bio.display = function() {
  //Create the name section
  var formattedName = HTMLheaderName.replace(data,bio.name);
  var formattedRole = HTMLheaderRole.replace(data,bio.role);
  var formattedEmail = HTMLemail.replace(data,bio.contacts["email"]);
  var formattedGithub = HTMLgithub.replace(data,bio.contacts["github"]);
  $header.prepend(formattedName + formattedRole);
  $("#topContacts, #footerContacts").append(formattedEmail + formattedGithub);
  //add picture and welcome message
  var formattedPic = HTMLbioPic.replace(data,bio.bioPic);
  var formattedWelcome = HTMLwelcomeMsg.replace(data,bio.welcomeMessage);
  $header.append(formattedPic + formattedWelcome);
  //populate skills section
  if (bio.skills.length) {
    $header.append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace(data,skill);
      $("#skills").append(formattedSkill);
    });
  }
}
bio.display();
/** @function: work.display() formats and appends data from work to the resume */
work.display = function() {
  if (work.jobs.length) {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace(data,job.employer);
      var formattedTitle = HTMLworkTitle.replace(data,job.title);
      var formattedDates = HTMLworkDates.replace(data,job.dates);
      var formattedLocation = HTMLworkLocation.replace(data,job.location);
      var formattedDescription = HTMLworkDescription.replace(data,job.description);
      $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
    });
  }
};
work.display();
/** @function: track clicks on the page and log the x, y coordinates to the console */
$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});
//add internationalize button to the page
$("#main").append(internationalizeButton);
/** @function: change the name on the resume to a more standard int'l format
 * where only first letter of first name is capitalized and last name is completely
 * capitalized */
function inName(name) {
  var names = name.trim().split(" ");
  var first = names[0];
  var last = names[names.length-1];
  return (first.slice(0,1).toUpperCase() + first.slice(1).toLowerCase() + " " + last.toUpperCase());
}
/** @function: projects.display() formats and appends data from projects
 * to the resume */
projects.display = function() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace(data,project.title);
    var formattedProjectDates = HTMLprojectDates.replace(data,project.dates);
    var formattedProjectDescription = HTMLprojectDescription.replace(data,project.description);
    var formattedProjectImage = HTMLprojectImage.replace(data,project.image);
    $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage);
  });
};
projects.display();
/** @function: education.display() formats and appends data from education about
 * schools and online courses as appropriate */
//populate the education section with schools and online courses
education.display = function() {
  //conventional schools
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolDegree;
    if (school.degree.indexOf("Incomplete") === -1) {
      formattedSchoolDegree = HTMLschoolDegree.replace(data,school.degree);
    };
    formattedSchoolDegree = HTMLschoolDegree.replace(" -- " + data,"");
    var formattedSchoolName = HTMLschoolName.replace(data,school.name);
    var formattedSchoolDates = HTMLschoolDates.replace(data,school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace(data,school.location);
    var formattedSchoolMajors = HTMLschoolMajor.replace(data,school.majors.join(", "));
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajors);
    //control logic to append degrees only if they were completed
  });
  //online courses
  if (education.onlineCourses.length) {
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace(data,course.title);
      var formattedOnlineSchool =  HTMLonlineSchool.replace(data,course.school);
      var formattedOnlineDates =  HTMLonlineDates.replace(data,course.dates);
      var formattedOnlineURL =  HTMLonlineURL.replace(data,course.url);
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
    });
  }
}
education.display();
//add the google map
$("#mapDiv").append(googleMap);
