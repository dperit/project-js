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

[MongoDB Database Dump (March 17 2013)](https://www.dropbox.com/s/245eqdb67auofyk/dump.zip)
To import the above database dump:

1. Unzip the contents of the file somewhere
2. Open up a terminal window to the same directory that **contains** the `dump` directory

There are two different ways to import the data: directly into the filesystem or into
a running instance of MongoDB.

The filesystem way:
`mongorestore --dbpath <path/to/mongo/db/folder>`

The MongoD is running way:
`mongorestore --host localhost --port <your-local-mongo-port>`

Start hacking!

### Using pjs-api
First, make sure MongoDB is running:
```
$ mongod
```

You can then start the server by typing:
```
$ node app
```
The client is accessible at `localhost:&lt;port&gt;`
The API is accessible at `localhost:&lt;port&gt;/api/`
The API prefix can be configured in `config/project.js`.
