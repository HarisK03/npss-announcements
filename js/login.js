/* 
Name: Haris Kamal (625415)
Course Code: ICS3UR
Date: October, 2019, Version 1.00
Title: North Park Announcement App - Login Script 
*/

/* Used to login and direct users of the application to their respective "Portal" (teacher and student) and require a code for teacher, however none for student
*/
function loginCode() {
    
    var code;
    
    // Save local storage
    code = document.getElementById("login").value;
    code = localStorage.setItem("accessCode", code);
    
    var access = localStorage.getItem("accessCode");
    
    // Verify if input is as stated ("625415")
    if(access == 625415)
    {
        // Redirect to "index.html"
        document.getElementById("loginMessage").innerHTML = ("Logging in!");
        location.href = "index.html"
    }
    
    // Display "Wrong Code" and do not redirect
    else 
    {
        document.getElementById("loginMessage").innerHTML = ("That code is wrong! Please try again!");
    }
}