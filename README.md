# Blog-Application
Description :
    A Backend blog application that was created by using nodejs,Expressjs & MongoDB
    The Application can able to create new user,login to existing user,view blogs of the users ,add blogs & able update and delete the blogs created

Requirements to run the program:
  1) Node version 14 or above
  2) Express js
  3) MongoDb Atlas
  4) Postman

Execution: 
  1) Clone the repository and cd into the backend folder
  
  2) Install nodejs and dependencies using the command "npm init "
  
  3) Install Expressjs 
  
  4) Create a MongoDb Atlas account and create a database
  
  5) Now open app.js in the backed folder and change the database connection query to your database details
    5.1) Change "admin" to "your database user name"
    5.2) Change password of the database to your database user password
    
  6) Now open postman appication and enter the urls below and change the methods based on the request of the url
    6.1) http://localhost:3000/blogApp/user                   -get request
    6.2) http://localhost:3000/blogApp/user/signup            -post request (select raw -> change type from text to json)
    6.3) http://localhost:3000/blogApp/user                   -post request (select raw -> change type from text to json)
    6.4) http://localhost:3000/blogApp/blogs                  -get request
    6.5) http://localhost:3000/blogApp/blogs/newBlog          -post request (select raw -> change type from text to json)
    6.6) http://localhost:3000/blogApp/blogs/updateBlog/      -put
    
Pull Request Procedure:
    To contibute to this project just add a PULL REQUEST or mail to sibi.sibichandru@gmail.com.


                                              **********************************************************
