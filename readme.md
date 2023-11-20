# Contactify - Contact Management API

Contactify is a modern REST API designed for managing contacts and user handling. The application allows for managing a contact list, including adding, updating, deleting, and marking favorite contacts. Additionally, Contactify supports user registration, login, logout, and user subscription data update processes.

## Features

### Contact Management:

- Create, read, update, and delete contacts.
- Mark contacts as favorites.

### User Management:

- User registration and login.
- Update user subscription data.
- User logout.
- Retrieve data of the currently logged-in user.

## Technologies

- Node.js with Express.js for the backend.
- Mongoose for MongoDB interaction.
- Passport.js for authentication and JWT (JSON Web Tokens) handling.
- CORS for Cross-Origin Resource Sharing.
- Dotenv for managing environment variables.

## Installation

To run the project locally, follow these steps:

- Clone the repository to your device.
- Install dependencies using npm install.
- Create a .env file in the main project directory and configure environment variables (PORT, DB_HOST, SECRET).
- Start the local server using npm start.

## API Usage

Once the server is running, the API is available at http://localhost:[PORT]/api/. Available endpoints:

#### Contacts:

- GET /api/contacts - retrieves a list of contacts.
  - <a href="https://monosnap.com/file/1cMD7OWZBlx46CX1sW6CZW1xUteQr5" target="_blank">Screenshot: Displaying the Entire Contact List in Postman<a>
  - <a href="https://monosnap.com/file/e5xb3TNzccKEZRq1iu4XA7y3ADoGSb" target="_blank">Screenshot: Displaying the Contact List with Pagination in Postman<a>
  - <a href="https://monosnap.com/file/KFwgj0Bw6HmFvTsu9Sk62JuWzWangJ" target="_blank">Screenshot: Displaying the Favorite Contacts List with the 'favorite=true' Query in Postman<a>
- GET /api/contacts/:id - retrieves a specific contact by ID.
  - <a href="https://monosnap.com/file/JLrxLrmYmmdTH5pWHqWc9A7mBquSi7" target="_blank">Screenshot: Displaying a Specific Contact in Postman<a>
- POST /api/contacts - creates a new contact.
  - <a href="https://monosnap.com/file/xLpZjOyepXgIPYuyTYJ9wBOD03c2ay" target="_blank">Screenshot: Creating a New Contact in Postman<a>
  - <a href="https://monosnap.com/file/Qr7eHi472ixWvjMplxCFMQhyjXVPn7" target="_blank">Screenshot: Creating a New Contact - Contacts Collection in MongoDB Compass<a>
- PUT /api/contacts/:id - updates a contact by ID.
  - <a href="https://monosnap.com/file/RtmUTw1p7FG8lywxV1LCxtzsG6euUT" target="_blank">Screenshot: Updating a Contact in Postman<a>
  - <a href="https://monosnap.com/file/hm0VQWktr4DgS32wLPRjtQJaSnUJMN" target="_blank">Screenshot: Updating a Contact - Contacts Collection in MongoDB Compass<a>
- DELETE /api/contacts/:id - deletes a contact by ID.
  - <a href="https://monosnap.com/file/YX1LuZlGbl9E7uqzpRhTuna4UVVIHf" target="_blank">Screenshot: Deleting a Contact in Postman<a>
  - <a href="https://monosnap.com/file/isc5OuWsLgLeYJSPsikqn6IursD4bJ" target="_blank">Screenshot: Deleting a Contact - Contacts Collection in MongoDB Compass<a>
- PATCH /api/contacts/:id/favorite - marks a contact as a favorite.
  - <a href="https://monosnap.com/file/TwtFjXXhuYrEkR2uSy8GjDQJ2HPgXG" target="_blank">Screenshot: Marking a Contact as Favorite in Postman<a>
  - <a href="https://monosnap.com/file/jzSMwlXcKsadGUJJUNdKXO4XDRVb2F" target="_blank">Screenshot: Marking a Contact as Favorite - Contacts Collection in MongoDB Compass<a>

#### Users:

- POST /api/users/signup - registers a new user.
  - <a href="https://monosnap.com/file/FaSK5Q9tNLeFVjo5AJYVA7JMZA0W9a" target="_blank">Screenshot: User Registration in Postman<a>
  - <a href="https://monosnap.com/file/KW8SpaQIAJTZZZrji3lFFIV146czuC" target="_blank">Screenshot: User Registration - Users Collection in MongoDB Compass<a>
- GET /api/users/verify/:verificationToken - verifies a user's email.
  - <a href="https://monosnap.com/file/Bhy6SEW7hmmIsBxMjo5MNov1afCCQm" target="_blank">Screenshot showing the verification email received by the user with the verification link<a>
  - <a href="https://monosnap.com/file/iIZuvuS6nwGMDPl1ryMV6V5cZPp4Z7" target="_blank">Screenshot showing the response from the localhost server for email verification in a browser using the verification token<a>
- POST /api/users/login - logs in a user.
  - <a href="https://monosnap.com/file/1QearrUEnnz8tTMYbPgq9fX4LEPWEi" target="_blank">Screenshot: User Login in Postman<a>
- PATCH /api/users - updates a user's subscription.
  - <a href="https://monosnap.com/file/myoa3cc0fGcin36sHwUmPjsAFukLa5" target="_blank">Screenshot: Updating User Subscription in Postman<a>
  - <a href="https://monosnap.com/file/wfsKw7MML0kyf9mWeD5487UqYX8bDE" target="_blank">Screenshot: Updating User Subscription - Users Collection in MongoDB Compass<a>
- GET /api/users/logout - logs out a user.
  - <a href="https://monosnap.com/file/wzx7ReQLMecv0PcVfw8LRyKPxx2kIW" target="_blank">Screenshot: User Logout in Postman<a>
- GET /api/users/current - retrieves data of the currently logged-in user.
  - <a href="https://monosnap.com/file/DzhUArzRvQAk65ZdsxilbJC0lcdhst" target="_blank">Screenshot: Displaying the Current User in Postman<a>
- PATCH /api/users/avatars - updates a user's avatar.
  - <a href="https://monosnap.com/file/nB2cRb7BpTqF0S3pG9Lqulqsp2NWtb" target="_blank">Screenshot: Updating User Avatar in Postman<a>
  - <a href="https://monosnap.com/file/e8mAwkXi4IOyfr5BXPJY7kDsB3AFMF" target="_blank">Screenshot: Updated User Avatar - Users Collection in MongoDB Compass<a>
