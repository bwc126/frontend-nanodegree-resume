//nio contains basic personal and contact info
var bio = {
  "name" : "Brian Coe",
  "role" : "Front-End Engineer",
  "contacts" : {
  "email" : "myEmail@domain.com",
  "github" : "https://github.com/bwc126"
  },
  "bioPic" : "http://placehold.it/200x200",
  "welcomeMessage" : "Greetings and Salutations",
  "skills" : [
    "Engineering",
    "Programming",
    "Calculus",
    "Systems Thinking",
    "Spanish"
  ],
  "location" : "Ashburn, VA",
};
//work contains info on past employment
var work = {
  "jobs" : [{
      "employer" : "Parhelion Astro Domiciles, LTD.",
      "title" : "Engineer",
      "location" : "Vesta",
      "dates" : "2012 to 2021",
      "description" : "je suis le description"
  },
  {
      "employer" : "Omega Technologies",
      "title" : "Chief Engineer",
      "location" : "Baltimore, MD",
      "dates" : "2012 to 2021",
      "description" : "je suis le decription aussi"
  }]
};
//education contains info on academic and self-directed learning
var education = {
  "schools" : [{
    "name" : "Drexel University",
    "location" : "Philadelpha, PA",
    "degree" : "Bachelor of Science",
    "majors" : ["Materials Science and Engineering", "Biomedical Engineering"],
    "dates" : "August 2007 to January 2010",
    "url" : ""
  },
  {
    "name" : "UMBC",
    "location" : "Baltimore, MD",
    "degree" : "Bachelor of Science",
    "majors" : ["Biological Sciences", "Cultural Anthropology", "Psychology"],
    "dates" : "September 2011 to January 2013",
    "url" : ""
  }],
  "onlineCourses" : [{
    "title" : "",
    "school" : "",
    "dates" : "",
    "url" : ""
  }]
};
//projects contains info on personal projects
var projects = {
  "project" : [{
    "title" : "Hydra Delta",
    "dates" : "June 2014 to Present",
    "description" : "Open Source Delta FDM 3D printer",
    "images" : ""
  }]

};
//Create the name section
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts["email"]);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts["github"]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
//populate skills section
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
};
//populate work history
function displayWork() {
  if (work.jobs.length > 0) {
    for (var job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

displayWork();
//track clicks on page
$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});
//create a list of locations worked
function locationizer(work_obj) {
  var locationList = [];
  for (var job in work_obj.jobs) {
    locationList.push(work_obj.jobs[job].location);
  }
  return locationList;
}

var locations = locationizer(work);
//add internationalize button to the page
$("#main").append(internationalizeButton);
//internationalize the name
function inName(name) {
  var names = name.trim().split(" ");
  var first = names[0];
  var last = names[1];
  return (first.slice(0,1).toUpperCase() + first.slice(1).toLowerCase() + " " + last.toUpperCase());
}
//populate projects section
projects.display = function() {
  //append project info to projects section, using HTMLprojectStart for each new project
}
