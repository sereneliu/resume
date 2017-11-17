var bio = {
    "name": "Serene Liu",
    "role": "web developer",
    "contacts": {
        "mobile": "510-394-4261",
        "email": "serene@sereneliu.com",
        "github": "sereneliu",
        "location": "Boston, MA"
    },
    "welcomeMessage": "Hire me!",
    "skills": ["awesomeness", "programming", "marketing", "teaching"],
    "biopic": "https://media.licdn.com/media/p/3/005/06c/1a9/12a045e.jpg"
};

var education = {
    "schools": [{
            "name": "Harvard Extension School",
            "location": "Cambridge, MA",
            "degree": "Certificate",
            "majors": ["Real Estate Investment"],
            "dates": "2016-2017",
            "url": "https://www.extension.harvard.edu/academics/professional-graduate-certificates/real-estate-investment-certificate"
        },
        {
            "name": "Cornell University",
            "location": "Ithaca, NY",
            "degree": "Bachelor of Science",
            "majors": ["Urban and Regional Studies"],
            "dates": "2008-2013",
            "url": "https://aap.cornell.edu/academics/crp/undergraduate"
        }
    ],

    "onlineCourses": [{
            "title": "Intro to Programming Nanodegree",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        },
        {
            "title": "Marketing Strategy Certificate",
            "school": "Cornell University",
            "dates": "2015-2016",
            "url": "http://www.ecornell.com/certificates/marketing/marketing-strategy/"
        },
    ]
};

var work = {
    "jobs": [{
            "employer": "Raising A Reader MA",
            "title": "Development and Communications Assistant",
            "location": "Boston, MA",
            "dates": "2014-2016",
            "description": "Worked in a small (2-3 person) development team in charge of fundraising over $1 million a year. Created strategic calendars for development and communications. Maintained all organizational communication channels including social media, email, and direct mail. Developed a grant management system in Salesforce. Assisted in major fundraising events for 100+ donors.",
            "url": "http://www.raisingareaderma.org"
        },
        {
            "employer": "Raising A Reader MA",
            "title": "Outreach Coordinator",
            "location": "Chelsea, MA",
            "dates": "2013-2014",
            "description": "Served as a Commonwealth Corps Member to build capacity and to recruit/manage volunteers. Promoted evidence-based workshops for parents of young children in gateway cities. Supported 25 local early childhood playgroups and schools in the implementation of our program. Expanded Raising A Reader’s reach to Chinese families through leading parent workshops and translating resources. Improved and expanded methods of data collection & analysis to develop continually evolving outreach plans. Developed and led social media professional development for regional program managers.",
            "url": "http://www.raisingareaderma.org"
        }
    ]
};

var projects = {
    "projects": [{
        "title": "Stage 1: Make a Web Page",
        "dates": "2016",
        "description": "Created an about page using HTML and CSS.",
        "images": ["images/about.png"]
    }]
};

bio.display = function() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role)).prepend(HTMLheaderName.replace("%data%", bio.name)).append(HTMLbioPic.replace("%data%", bio.biopic)).append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)).append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });

    var formattedContact = [];
    formattedContact.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContact.push(HTMLemail.replace(/%data%/g, bio.contacts.email));
    formattedContact.push(HTMLgithub.replace(/%data%/g, bio.contacts.github));
    formattedContact.push(HTMLlocation.replace("%data%", bio.contacts.location));

    formattedContact.forEach(function(contact) {
        $("#topContacts").append(contact);
        $("#footerContacts").append(contact);
    });
};

bio.display();

work.display = function() {

    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkURL = HTMLworkURL.replace("%data%", job.url);
        var formattedEmployerTitle = formattedWorkURL + formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);
    });
};

work.display();

education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolURL = HTMLschoolURL.replace("%data%", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDegree = formattedSchoolURL + formattedSchoolName + formattedDegree;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolDegree).append(formattedSchoolDates).append(formattedSchoolLocation);
        
        school.majors.forEach(function(major) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry:last").append(formattedMajor);
        });
    });

    if (education.onlineCourses.length) {
        $("#education").append(HTMLonlineClasses);
    }
    education.onlineCourses.forEach(function(onlineCourse) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitleStart = HTMLonlineTitleStart.replace("%data%", onlineCourse.url);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineTitleSchool = formattedOnlineTitleStart + formattedOnlineTitle + formattedOnlineSchool;
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        //var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
        $(".education-entry:last").append(formattedOnlineTitleSchool).append(formattedOnlineDates);//.append(formattedOnlineURL);
    });
};

education.display();

projects.display = function() {

    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectTitle).append(formattedProjectDates).append(formattedProjectDescription);
        
        project.images.forEach(function(image) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedProjectImage);
        });
    });
};

projects.display();

$("#mapDiv").append(googleMap);