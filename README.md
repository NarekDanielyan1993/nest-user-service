Prerequisites

- Node.js installed
- PostgreSql server installed locally

Installation

1. Clone the repository: git@github.com:NarekDanielyan1993/nest-user-service.git
   git clone

2. Install dependencies:
   npm install

3. copy env variables of env.example file located in the root directory into the .env file and set variables values.

Database Setup

1. Make sure your local PostgreSql server is running.

2. Run the following commands to initialize the database schema:
   npm run migrate

3. To fill your database with arbitrary data run following command
   npm run data:sync

To start the application run following command

npm run dev

The application will be served at http://localhost:3000.
