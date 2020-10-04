/* 
Name: Haris Kamal (625415)
Course Code: ICS3UR
Date: October, 2019, Version 1.00
Title: North Park Announcement App - Student Script 
*/

// Onload various arrays if they do not exist or have no data within 
function arrayOnload()
{
    // If there are no preexisting arrays (club, gender, grade, message) with data it will create empty arrays, if false it will not
    if (localStorage.getItem("messageName") === null)
    {
    localStorage.setItem("clubName", "[]");
    localStorage.setItem("genderName", "[]");
    localStorage.setItem("gradeName", "[]");
    localStorage.setItem("messageName", "[]");
    localStorage.setItem("dateName", "[]");    
    }

    // Check if there is data within the array for added clubs, if not set empty array
    if (localStorage.getItem("addClub") === null)
    {
    localStorage.setItem("addClub", "[]");   
    }
    viewAnnouncementNone();
}

// Used for student viewer, displays ONLY announcements pertaining to the student and their selected options (club, gender, grade)
function viewAnnouncement() 
{
    // Define
    var club;
    var gender; 
    var grade;
    var message; 
    var saveClub = localStorage.getItem("clubSetting");
    var saveGender = localStorage.getItem("genderSetting");
    var saveGrade = localStorage.getItem("gradeSetting");
    var teacherName = localStorage.getItem("teacherName");
    var clubListShow = JSON.parse(localStorage.getItem("clubName"));
    var gradeListShow = JSON.parse(localStorage.getItem("gradeName"));
    var genderListShow = JSON.parse(localStorage.getItem("genderName"));
    var messageListShow = JSON.parse(localStorage.getItem("messageName"));
    var dateListShow = JSON.parse(localStorage.getItem("dateName"));
    var iLen; 
    var announceTable = "<table>";
    
    // If no announcements in array, display "No Announcements"
    if (messageListShow.length === 0)
    {
        document.getElementById("noAnnouncements").innerHTML = "No Announcements Available.";
    }
    
    else
    {
        // Create a table that will hold the contents of the announcement and defines the table headers
        document.getElementById("announcementTitle").innerHTML = "View Announcements";
        announceTable += "<tr><th>" + "Date" + "</th><th>" + "Club" + "</th><th>" + "Announcement" + "</th><th>" + "Posted By" + "</th></tr>";
        
        // For loop that runs through the indexes of the arrays
        for (var i = 1; i < messageListShow.length + 1; i++)    
        {
        var iLen = messageListShow.length - i;
        
        // Checking to see if the student selected options match with the posted announcement
        if
        (
            (clubListShow[iLen] === saveClub || clubListShow[iLen] === "All Students") &&
            (gradeListShow[iLen] === saveGrade || gradeListShow[iLen] === "All Grades") &&
            (genderListShow[iLen] === saveGender || genderListShow[iLen] === "All Genders")
        )
        {
            // Display the announcement contents (date, club, message, teacher name)
            announceTable += "<tr><td>" + dateListShow[iLen] + "</td>" + "<td>" + clubListShow[iLen] + "</td>" + "<td>" + messageListShow[iLen] + "</td><td>" + teacherName + "</td></tr>";
        }
        }
        
        // Close the table tag and display the table to the respective location
        announceTable += "</table>";
        document.getElementById("displayAnnouncement").innerHTML = announceTable;
        
        // Create button for emailing the teacher, and creating onclick that will open a mail application with preset email
        var emailButton = document.createElement("button");
        emailButton.innerHTML = "Email Teacher";
        emailButton.setAttribute("class", "emailButton");
        emailButton.onclick = function() {
            var email = localStorage.getItem("teacherEmail");
            window.location.href = "mailto:" + email;
        }
        document.getElementById("emailButton").appendChild(emailButton);        
    }
}

// Used for the teacher viewer, displays ALL posted announcements with no distinction to parameters (club, gender, grade)
function viewAnnouncementNone() 
{
    // Define
    var club;
    var gender; 
    var grade;
    var message; 
    var saveClub = localStorage.getItem("clubSetting");
    var saveGender = localStorage.getItem("genderSetting");
    var saveGrade = localStorage.getItem("gradeSetting");
    var teacherName = localStorage.getItem("teacherName");
    var clubListShow = JSON.parse(localStorage.getItem("clubName"));
    var gradeListShow = JSON.parse(localStorage.getItem("gradeName"));
    var genderListShow = JSON.parse(localStorage.getItem("genderName"));
    var messageListShow = JSON.parse(localStorage.getItem("messageName"));
    var dateListShow = JSON.parse(localStorage.getItem("dateName"));
    var iLen; 
    var announceTable = "<table>";
    
    // If no announcements in array, display "No Announcements"    
    if (messageListShow.length === 0)
    {
        document.getElementById("noAnnouncements").innerHTML = "No Announcements Available.";
    }
    
    else
    {
        // Create a table that will hold the contents of the announcement and defines the table headers
        document.getElementById("announcementTitle").innerHTML = "View Announcements";
        announceTable += "<tr><th>" + "Date" + "</th><th>" + "Club" + "</th><th>" + "Announcement" + "</th><th>" + "Posted By" + "</th></tr>";
        
        // For loop that runs through the indexes of the arrays
        for (var i = 1; i < messageListShow.length + 1; i++)    
        {
            var iLen = messageListShow.length - i;
            
            // Display the announcement contents (date, club, message, teacher name)
            announceTable += "<tr><td>" + dateListShow[iLen] + "</td>" + "<td>" + clubListShow[iLen] + "</td>" + "<td>" + messageListShow[iLen] + "</td><td>" + teacherName + "</td></tr>";
        }
        
        // Close the table tag and display the table to the respective location
        announceTable += "</table>";
        document.getElementById("displayAnnouncement").innerHTML = announceTable;
    }
    nameEmailPrompt();
}

// Check for name and email in localStorage, if no data then enable prompts for name and email respectively
function nameEmailPrompt()
{
    var nameGet = localStorage.getItem("teacherName");
    var emailGet = localStorage.getItem("teacherEmail");
    
    // If no name in localStorage, prompt user to enter name and email
    if (nameGet === null)
    {
        var name = prompt("Please Enter Your Name:");
        localStorage.setItem("teacherName", name);
        var email = prompt("Please Enter Your Email:")
        localStorage.setItem("teacherEmail", email);   
    }
    
    // Get the name and display in respective location
    else
    {
        document.getElementById("nameGet").innerHTML = nameGet; 
    }
}