/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName, formattedRole;

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

var work = {
  "jobs" : [{
      "employer" : "Parhelion Astro Domiciles, LTD.",
      "title" : "Engineer",
      "location" : "Vesta",
      "dates" : "2012 to 2021",
      "description" : ""
  },
  {
      "employer" : "Omega Technologies",
      "title" : "Chief Engineer",
      "location" : "Baltimore, MD",
      "dates" : "2012 to 2021",
      "description" : ""
  }]
};


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

var projects = {
  "project" : [{
    "title" : "Hydra Delta",
    "dates" : "June 2014 to Present",
    "description" : "Open Source Delta FDM 3D printer",
    "images" : ""
  }]

}

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}


if (work.jobs.length > 0) {

  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
  }
}
