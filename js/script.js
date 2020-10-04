/* 
Name: Haris Kamal (625415)
Course Code: ICS3UR
Date: October, 2019, Version 1.00
Title: North Park Announcement App - Teacher Script 
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
    
    // Onload the new clubs inputed by the teacher if they choose to do so, adding options to the id="club" <select> tag
    else
    {
        var option; 
        var addClubList = JSON.parse(localStorage.getItem("addClub"));
        var dropdown = document.getElementById("club");
        for (var i = 0; i < addClubList.length; ++i)
        {
            dropdown[dropdown.length] = new Option(addClubList[i], addClubList[i]);
        }
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
        document.getElementById("nameGet").innerHTML = name;
    }
    
    // Get the name and display in respective location
    else
    {
        document.getElementById("nameGet").innerHTML = nameGet; 
    }
}

// Post the announcement for the teachers
function postAnnouncement() 
{
    var clubList = JSON.parse(localStorage.getItem("clubName"));
    var genderList = JSON.parse(localStorage.getItem("genderName"));
    var gradeList = JSON.parse(localStorage.getItem("gradeName"));
    var messageList = JSON.parse(localStorage.getItem("messageName"));

    alert("Submitted Announcement!");
    
    var club = document.getElementById("club").value;
    var gender = document.getElementById("gender").value;
    var grade = document.getElementById("grade").value;
    var message = document.getElementById("message").value; 

    clubList.push(club);
    genderList.push(gender);
    gradeList.push(grade);
    messageList.push(message);
    
    // Store the array as a string in localStorage 
    localStorage.setItem("clubName", JSON.stringify(clubList));
    localStorage.setItem("genderName", JSON.stringify(genderList));
    localStorage.setItem("gradeName", JSON.stringify(gradeList));
    localStorage.setItem("messageName", JSON.stringify(messageList));
    
    getTime();
}

// Generate the time of the posted announcement for displaying purposes later
function getTime() 
{
    var dateList = JSON.parse(localStorage.getItem("dateName"));
    
    // Generate the date and differentiate between AM and PM
    var date = new Date();
    var hours = date.getHours();
    var ampm 
    if (hours >= 12)
    {
        ampm = ("PM");
    }
    else
    {
        ampm = ("AM")
    }
    
    var hours = (hours % 12) || 12;
    
    // Format the date in a format that is comprehensible for the user
    var datePrint = 
        ("" + 
        ("00" + (date.getMonth() + 1)).slice(-2) + "/" + 
        ("00" + date.getDate()).slice(-2) + "/" + 
        (date.getFullYear()) + " - " + (hours) + ":" +
        ("00" + date.getMinutes()).slice(-2) + " " + (ampm)); 
        
    // Expected output: Sent on MM/DD/YYYY @ HH:MM (AM/PM)

    dateList.push(datePrint); 
    localStorage.setItem("dateName", JSON.stringify(dateList));
}

// Allow the teacher to add new clubs to the <select> for id="club"
function addClub()
{ 
    var option; 
    var addClubList = JSON.parse(localStorage.getItem("addClub"));
    var addInput = document.getElementById("addInput").value;
    
    // If there is an input for a new club, store the value in an array
    if (document.getElementById("addInput").value.length !== 0)
    {
        alert("New Club Added!");
        addClubList.push(addInput);
        localStorage.setItem("addClub", JSON.stringify(addClubList)); 
    }
    
    // Recall the index and display the new options at the bottom of the dropdown
    var dropdown = document.getElementById("club");
    for (var i = 0; i < addClubList.length; ++i)
    {
        dropdown[dropdown.length] = new Option(addClubList[i], addClubList[i]);
    }
}   