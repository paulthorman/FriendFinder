# FriendFinder

Deployed to Heroku: https://paulsfriendfinder.herokuapp.com/.

## Technologies Used

- [x] Front end: HTML5, CSS3, Bootstrap4, ES7

- [x] Back end: Node, Express, MySQL

## Overview

Compatibility-based "FriendFinder" application, using Express JS to handle routing and Node. Full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match.

## How to Run

To run Friend Finder, you will need [Bash](https://git-scm.com/downloads/), [Node](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm), and [Heroku](https://www.heroku.com/).

1. In Bash, type `git clone https://github.com/paulthorman/FriendFinder.git` to download Friend Finder.

2. Navigate to the directory then, type `npm install` to download the required packages.

3. To deploy on Heroku, you will need to move the directory to a folder that isn't a Git repository.

4. Afterwards, type `git init; git add .; git commit -m "final build"` to create a Git repository.

5. Type `heroku login` to log in to your Heroku account. Then, type `heroku create` to create a Heroku app.

6. Finally, type `git push heroku master` to build the app. You can find the URL at the end.

## How to Configure Database

To use your own database, you will also need [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

1. On Heroku, you can use either [ClearDB](https://devcenter.heroku.com/articles/cleardb) or [JawsDB](https://devcenter.heroku.com/articles/jawsdb). Both provide a free-tier option.

For JawsDB, type `heroku addons:create jawsdb`, then `heroku config:get JAWSDB_URL` to find (in the order of appearance) your username, password, hostname, port number, and default schema.

2. Open the file `app/data/friends.js`, change the values on lines 13 - 17, and type `git push heroku master` in Bash to apply the changes.

3. To seed your database, open MySQL Workbench and click Setup New Connection.

Enter your username, hostname, port number, and default schema. Once you click on OK, you will be asked for the password.

4. Finally, connect to your database and run `app/data/friend_finder_db.sql`.
