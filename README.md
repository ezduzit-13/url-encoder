# URL Shortener
In this Assignment I was asked to take a long url, and then shorten the url. I decided to do this assignment using the Django Rest Framework to build out the api, and I used react to build out the frontend. In order to run this file, you only need to take a few simple steps. 
- - - -
## Setting up the project
Step one, make sure you go into GitHub, then clone the repository. Once you have cloned the repository, you can run the command 
```
git clone <the_cloned_url>	
```
This will allow you to have access to the repo so you can run it and see how it works!.
## Setting up the Frontend.
Next, you will have to set up the react project. I am assuming you already have node installed, if that is the case, go ahead and run the command 
`npm install`   once you are at the frontend directory.  You must install the node modules so that you can run the command `npm start` which will run a react development server on port localhost:3000 which will be necessary for running the app and calling the endpoints and getting your new Url. 
## Setting up the Backend.
To set up the backend, go into the backend directory, and run the command `pip freeze > requirements.txt` . After you install all the requirements, you will need to create a database. 
### Creating the Database for the Backend
In this project, I am using a Postgres database named short-url, you will need to create a Postgres database of the same name in order to move on to the next step. 
### Making and migrating
After you have your database run the commands 
```
python manage.py makemigrations
python manage.py migrate
```
### Running the Server
Next you will need to run the development server. This can be done by running the command `python manage.py runserver`.
This should be your final step :) but make sure both your backend and frontend are running (frontend port 3000, backend on port 8000)

