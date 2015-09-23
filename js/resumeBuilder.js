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
    "degree" : "",
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
    "title" : "",
    "dates" : "",
    "description" : "",
    "images" : ""
  }]

}

formattedName = HTMLheaderName.replace("%data%",bio.name);
formattedRole = HTMLheaderRole.replace("%data%",bio.role);
formattedSkills = HTMLskills.replace("%data%",bio.skills.join(" "));
formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
formattedPic = HTMLbioPic.replace("%data%",bio.pictureURL);
formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[0].employer);
formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[0].title);
console.log(formattedWorkTitle);

formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[1].name);

$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedSkills);
$("#header").prepend(HTMLskillsStart);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedEmployer);
$(".work-entry").append(formattedWorkTitle);

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
