# NP-Announcements-App
ICS3UR North Park Announcements Application

Instructions to Operate North Park Announcement App - Published by Haris Kamal

Firstly, there are 5 different webpages that are within this .zip file:

1) index.html - Serves as the portal for posting announcements for the teacher
2) view.html - Serves as the portal for viewing announcements for the teacher (does not respect parameters of student)
3) student-view.html - Serves as the portal for viewing announcemets for the student (respects the parameters of student)
4) settings.html - Serves as the portal for setting the student options that they are apart of (club, gender, grade)
5) login.html - Serves as the portal for accessing both the teacher and student portals, through redirect or code

index.html
==========
This is where the teacher will posting their announcements. Firstly, they will prompted to enter their name and email upon entering for the first time (this will only happen for the first visit, after storing in localStorage it will become unchangeable *could be added in a future version*). Next, they will be able to see their name upon refresh. They can select the club, gender and grade that they want to "target" in their announcement. Additionally if they want to add a new club to the already exhaustive list of clubs, they are able to do so. The new clubs will then become visible for both teachers and students to select. Finally, the teachers have the ability to post the announcement, adding the value to the respective array.

view.html
=========
Firstly, they will prompted to enter their name and email upon entering for the first time (this will only happen for the first visit, after storing in localStorage it will become unchangeable *could be added in a future version*). This is where the teacher can view all the posted announcements. This viewer doesn't respect the parameters of the student, and the teacher is able to see ALL posted announcements regardless of club, gender and grade. If no announcements are applicable, then it will show "No Announcements Available".

student-view.html
=================
The student is able to see all announcements that are related to the options they selected in "settings.html". They are able to email the teacher and will pull up the email that the teacher entered (currently only holds one email but adding to an array will be possible in future versions). If no announcements are applicable, then it will show "No Announcements Available".

settings.html
=============
This is where the student can select what club, gender, and grade they are apart of. This will be used as a comparator in determining what announcements to show on "student-view.html". Additionally, the student can see their previously chosen options in the "enrolled" section below.

login.html
==========
This is where the user can select whether they want to go to the teacher or student portal. If they wish to go to the teacher portal, they need the access code (625415) to prevent unauthorized users from posting announcements. If an individual wishes to reach the student portal, they can click the button and they will be redirected to the portal with no code or login.

Hopefully your time using this application is a pleasant one. If you have any questions or bugs to report, please contact me at 625415@pdsb.net. 

Thanks for using my application!
