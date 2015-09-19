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

  "position" : "Engineer",
  "employer" : "Geminate Industries",
  "years" : "",
  "city" : ""

}

var education = {

  "school" : "UMBC",
  "years" : "1.5",
  "city" : "Baltimore, MD"

}

formattedName = HTMLheaderName.replace("%data%",bio.name);
formattedRole = HTMLheaderRole.replace("%data%",bio.role);
formattedSkills = HTMLskills.replace("%data%",bio.skills.join(" "));
formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
formattedPic = HTMLbioPic.replace("%data%",bio.pictureURL);
formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer);
formattedWorkTitle = HTMLworkTitle.replace("%data%",work.position);
console.log(formattedWorkTitle);

formattedSchoolName = HTMLschoolName.replace("%data%",education.school);

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
