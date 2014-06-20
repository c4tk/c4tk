# Getting Started
1. Download and install node
2. Download and install the GitHub Windows Client
3. Fork the c4tk repository
4. Install grunt
5. Run npm install

# Where things are and where they go
Go to your repository folder. There are two top-level folders: dist and src

## dist
dist/assets/downloads is where files users can download go. For example, a PDF explaining different sponsorship levels would go here.
dist/assets/images is where images to be shown on the site go. For example, a profile picture of a mentor goes in dist/assets/images/mentors.

## src
The src directory is where your actual content goes. 
To create a new landing page for an event go to:
src/content/events/
In this directory you will see a folder for each location. 
In each location, you will see a folder for each event.

# How to view the site locally on your machine
In the repository you should see Gruntfile.js which makes available two tasks: server and build.
server is used to run the site locally so you can play with it while making your changes.
build is used to compile the site into the dist/ directory. When the site is built, the contents of the dist/ folder can be copied to any server and you can start using the site.

To view your site locally run grunt server.
It should open a browser to a location like: http://0.0.0.0:9000
You can then play with the site.
When you make changes to the underlying files, the site will automatically refresh.
If your changes are not getting picked up, you can refresh the page manually and if that does not work, restart the grunt server command.

# Creating a new event
If you are creating a page for a new event at an existing location like Seattle,
go to the seattle directory.
You will see a folder for each event at that location. To create a new event, make a copy of the folder.

Rename the *.hbs file in the folder you just created to be something for your new page. For example, you might change it from seattle2014.hbs to bayarea2014.hbs
Update the details in the beginning of the file to reflect the new event you are creating.

Next, edit the about.md file to reflect the appropriate month of the event, the event themes and the location.

Go through each *.md file and update the cwd to match what directory your files are in.

## Adding an API
Go to the apis directory for your event. 
Each api has its own file.
If the apis are up to date, no need to make any changes.
If you need to add or remove the apis available at an event, do so to the files.

## Adding a Challenge
Go to the challenges folder for your event.
Each challenge has its own file.
If the challenges are up to date, no need to make any changes.
Otherwise edit the challenges, create new ones and delete old ones as you see fit.

## Adding a Mentor
Go to the mentors folder for your event.
Each mentor has its own file.
If the mentors are up to date, no need to make any changes.
Otherwise edit the mentors, create new ones and delete old ones as you see fit.

## Adding an Organizer
See above

## Adding a Sponsor
See above

## Adding winners
After the event, edit the winners.md file so the public knows who won the event.

# Putting your event on the main page
Once the event page is created, highlight it on the home page of the site.

# Submitting your changes to the official site
When your changes are ready, create a pull request on the original repository.
The maintainers of the official site will review your changes and merge them into the official repository and publish the changes to the official site.
