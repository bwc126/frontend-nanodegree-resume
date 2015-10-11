//bio contains basic personal and contact info
var bio = {
  "name" : "Brian Coe",
  "role" : "Front-End Engineer",
  "contacts" : {
  "location" : "Ashburn, VA",
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

};
//work contains info on past employment
var work = {
  "jobs" : [{
      "employer" : "Parhelion Astro Domiciles, LTD.",
      "title" : "Engineer",
      "location" : "Ashburn, VA",
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
    "title" : "How to do Neat Stuff",
    "school" : "Interwebs University",
    "dates" : "August 2015 to September 2015",
    "url" : "www.lel.org"
  }]
};
//projects contains info on personal projects
var projects = {
  "projects" : [{
    "title" : "Hydra Delta",
    "dates" : "June 2014 to Present",
    "description" : "Open Source Delta FDM 3D printer",
    "image" : ""
    },
    {
    "title" : "Personal Website",
    "dates" : "August 2015 to Present",
    "description" : "Personal website, inspired and tutored by Udacity",
    "image" : ""
    }
  ]
};
bio.display = function() {
  //Create the name section
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts["email"]);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts["github"]);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  //add picture and welcome message
  var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedPic);
  $("#header").append(formattedWelcome);
  //populate skills section
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
}
bio.display();
//populate work history
work.display = function() {
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

work.display();
//track clicks on page
$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});
//create a list of locations worked
// function locationizer() {
//   var locationList = [];
//   for (var job in work.jobs) {
//     locationList.push(work.jobs[job].location);
//   }
//   for (var school in education.schools) {
//     locationList.push(education.schools[school].location);
//   }
//
//   return locationList;
// }
// var locations = locationizer();
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
  for (var proj in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
    formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
    formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[proj].description);
    formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[proj].image);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImage);
  };
};

projects.display();
education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);
    formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
    formattedSchoolDegree = HTMLschoolName.replace("%data%",education.schools[school].degree);
    formattedSchoolDates = HTMLschoolName.replace("%data%",education.schools[school].dates);
    formattedSchoolLocation = HTMLschoolName.replace("%data%",education.schools[school].location);
    formattedSchoolMajors = HTMLschoolName.replace("%data%",education.schools[school].majors.join(", "));
    $(".education-entry:last").append(formattedSchoolName);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajors);
  }
  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
      formattedOnlineSchool =  HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
      formattedOnlineDates =  HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
      formattedOnlineURL =  HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedOnlineTitle);
      $(".education-entry:last").append(formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }
}
education.display();
$("#mapDiv").append(googleMap);
