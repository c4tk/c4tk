# Getting Started
1. Download and install [node](http://nodejs.org/) The latest version we tested with is [v12](https://nodejs.org/dist/v0.12.7/)
2. Download and install the GitHub Client for [Windows](https://windows.github.com/) or [Mac](https://mac.github.com/)
3. Fork the [c4tk repository](https://github.com/chrislim/c4tk) to get your own version to play with.
4. Clone it to your local machine through the GitHub Client.
5. Open a command prompt in the repository.
6. Install grunt by running `npm install grunt-cli -g` you may need to use `sudo npm install grunt-cli -g`
7. Install the software to generate the site by running `npm install`
8. Run `grunt server` to start a local version of the site.
9. Visit http://localhost:9000 to view the site on your local machine.

# How to view the site locally on your machine
In the repository's master branch you should see Gruntfile.js which makes available two tasks: `server` and `build`.
server is used to run the site locally so you can play with it while making your changes.
build is used to compile the site into the `dist/` directory. When the site is built, the contents of the `dist/` folder can be copied to any server and you can start using the site.

To view your site locally run `grunt server`.
It should open a browser to a location like: http://0.0.0.0:9000
You can then play with the site.
When you make changes to the underlying files, the site will automatically refresh.
If your changes are not getting picked up, you can refresh the page manually and if that does not work, restart the `grunt server` command.

# Where things are and where they go
Go to your repository folder. There are two top-level folders: dist and src

## dist
Files that users can download belong in `dist/assets/downloads`. For example, a PDF explaining different sponsorship levels would go here.

Images to be used on the site go in `dist/assets/images`. For example, a profile picture of a mentor goes in `dist/assets/images/mentors`.

## src
Actual content for events and pages goes in the src directory. 

To create a new landing page for an event go to `src/content/events/`.

In this directory you will see a folder for each location like `src/content/events/seattle`.

In each location, you will see a folder for each event like `src/content/events/seattle/2014`.

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
