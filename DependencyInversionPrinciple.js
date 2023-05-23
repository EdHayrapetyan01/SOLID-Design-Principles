// Example: Instead of directly using a specific database implementation, 
// introduce an interface like DatabaseConnector that various database classes can implement,
//  allowing for flexible switching between different databases.


// DIP suggests that instead of relying on a specific database implementation, 
// we should depend on abstractions. This means introducing an interface or a contract that 
// defines the methods and functionality required for interacting with a database. 
// Then, we can have different classes implementing this interface to connect with different types of databases. 
// This allows for flexibility in switching between different databases without modifying the core logic of our code.



// Without DIP, directly using a specific MongoDB implementation

const DB = require('./config/keys').mongoURI;
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose
  .connect(DB, { useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully! ✅'))
  .catch((err) => {
    console.log(err);
  });


// With DIP, using an interface and multiple implementations

// Define the DatabaseConnector interface
class DatabaseConnector {
    connect() {
      throw new Error('Method not implemented');
    }
  }
  
  // Implement a MongoDBDatabase class that adheres to the DatabaseConnector interface
  class MongoDBDatabase extends DatabaseConnector {
    constructor(connectionString) {
      super();
      this.connectionString = connectionString;
    }
  
    connect() {
      const mongoose = require('mongoose');
      mongoose.set('strictQuery', false);
      return mongoose.connect(this.connectionString, { useUnifiedTopology: true });
    }
  }
  
  // Usage example with DIP
  const DB = require('./config/keys').mongoURI;
  
  // Create an instance of the MongoDBDatabase class
  const mongoDB = new MongoDBDatabase(DB);
  
  // Connect to MongoDB using the MongoDBDatabase class
  mongoDB.connect()
    .then(() => console.log('MongoDB connected successfully! ✅'))
    .catch((err) => {
      console.log(err);
    });

    

    // In the example with DIP, an interface DatabaseConnector is defined, 
    // and the MongoDBDatabase class implements this interface. The connect method in 
    // the MongoDBDatabase class utilizes the mongoose library to connect to the MongoDB database. 
    // By introducing the interface and separate implementation class, we achieve abstraction and flexibility.
    // We can easily switch to a different database implementation by creating another class that 
    // implements the DatabaseConnector interface without modifying the core logic of the code.


    // With the given example using DIP, here's how you can switch to a
    //  different database implementation, such as PostgreSQL:


    // Implement a PostgreSQLDatabase class that adheres to the DatabaseConnector interface
class PostgreSQLDatabase extends DatabaseConnector {
    constructor(connectionString) {
      super();
      this.connectionString = connectionString;
    }
  
    connect() {
      const { Client } = require('pg');
      this.client = new Client({
        connectionString: this.connectionString
      });
      return this.client.connect();
    }
  }
  
  // Usage example with DIP, switching to PostgreSQL
  const DB = require('./config/keys').postgresqlURI;
  
  // Create an instance of the PostgreSQLDatabase class
  const postgresDB = new PostgreSQLDatabase(DB);
  
  // Connect to PostgreSQL using the PostgreSQLDatabase class
  postgresDB.connect()
    .then(() => console.log('PostgreSQL connected successfully! ✅'))
    .catch((err) => {
      console.log(err);
    });
  