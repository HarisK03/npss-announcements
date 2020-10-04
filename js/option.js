/* 
Name: Haris Kamal (625415)
Course Code: ICS3UR
Date: October, 2019, Version 1.00
Title: North Park Announcement App - Student Settings 
*/

// Will retrieve the newly added options through the input of the user in id="addClub"
function getNewClub()
{  
    var option; 
    addClubList = JSON.parse(localStorage.getItem("addClub"));
    var dropdown = document.getElementById("saveClub");
    
    // For loop to add each array element based on index to the end of the dropdown
    for (var i = 0; i < addClubList.length; ++i)
    {
        dropdown[dropdown.length] = new Option(addClubList[i], addClubList[i]);
    }
    enrolled();
}

// Determine what options the student has selected and is "enrolled" in
function enrolled()
{   
    var enrolledClub = localStorage.getItem("clubSetting");
    var enrolledGender = localStorage.getItem("genderSetting");
    var enrolledGrade = localStorage.getItem("gradeSetting");
    
    // Check for enrolled club, and display 
    if (enrolledClub === null)
    {
        document.getElementById("enrolledClub").innerHTML = ("None");
    }
    
    else
    {
        document.getElementById("enrolledClub").innerHTML = (enrolledClub);
    }

    // Check for enrolled gender, and display 
    if (enrolledGender === null)
    {
        document.getElementById("enrolledGender").innerHTML = ("None");
    }
    
    else
    {
        document.getElementById("enrolledGender").innerHTML = (enrolledGender);
    }

    // Check for enrolled grade, and display 
    if (enrolledGrade === null)
    {
        document.getElementById("enrolledGrade").innerHTML = ("None");
    }
    
    else
    {
        document.getElementById("enrolledGrade").innerHTML = (enrolledGrade);
    }
}

// This function will save the User Settings on the website (grade, gender, club)
function saveSettings() 
{
    var saveClub;
    var saveGender;
    var saveGrade;
    var saveIbt; 
    
    alert("Settings Saved!")
    
    // Get values of the student options
    saveClub = document.getElementById("saveClub").value;
    saveGender = document.getElementById("saveGender").value;
    saveGrade = document.getElementById("saveGrade").value;
    
    // Store the values in local storages, used to verify in student viewer as comparators
    saveClub = localStorage.setItem("clubSetting", saveClub);
    saveGender = localStorage.setItem("genderSetting", saveGender);
    saveGrade = localStorage.setItem("gradeSetting", saveGrade);
}