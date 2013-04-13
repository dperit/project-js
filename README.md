## pjs-api

### Getting Started
Make sure you have the required tools:

* [Node.js](http://nodejs.org/)
* [MongoDB](http://www.mongodb.org/)

Fork and clone the repository, then change directories:
```
$ cd pjs-api
```

Install Node-specific dependencies:
```
$ npm install
```

Important note: If there is no data present in the database then the basic required data will be automatically generated
by app.js running through node, so the following data importation steps are strictly optional

Additional important note: dummydbApril08.js is slightly out of date, and its functionality cannot be fully guaranteed, but
is believed to work reasonably well. If any problems are encountered when using it, please double check that they can
be reproduced in a clean database before filing them as errors.

Database sample data installation (instructions created by Jennifer)
These steps must be performed on a local machine, they will not work for some unknown reason on the VM

1.  Load up the mongo shell in the console from within the project-js directory on your local computer
2.  Type in the following command in your mongo client shell:  load("dummydbApril08.js")
3.  To check for success, you can type:  show collections  [the result should be: projects, roles, users]
4.  To check that all the data is there, type: db.users.find()  ...or db.roles.find() or db.projects.find()  which will display all the data in the collection.

To then upload the data to the VM, you must:

1.  Run the mongodump command. This will generate a folder called dump.
2.  Copy dump to the project-js directory on the server, overwriting the existing dump directory if there is one
3.  Delete the contents of the DB folder
4.  Run nohup mongod --dbpath db &
5.  Run mongorestore

### Using pjs-api locally
First, make sure MongoDB is running:
```
$ mongod --dbpath db
```

You can then start the server by typing:
```
$ node app
```
The client is accessible at `localhost:<port>`
The API is accessible at `localhost:<port>/api/`
The API prefix can be configured in `config/project.js`.

### Server setup

Transfer all files over, except for db and node_modules, and then perform the following instructions in the
project-js folder

* run "npm install"
* run "mkdir db"
* (optional) perform the data import operations as shown above
* If it's not already running, run "nohup mongod --dbpath db"
* run "nohup node app"

The application will now be accessible at http://zenit.senecac.on.ca:9078

To remove the database prior to restoring it, kill the mongod process and the node process, delete everything in the DB folder,
then follow the data import steps

Alternatively you can run "mongo" to load up the mongo console (this will only work if the mongod process is also running).
and then run
db.projects.remove();
db.users.remove();
from that console. This will clear out all projects and users from the database.