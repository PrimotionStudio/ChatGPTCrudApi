# ChatGPTCrudApi

# RESTful API with Node.js and MongoDB

This is a sample implementation of a RESTful API using Node.js and MongoDB. The API allows you to perform CRUD (Create, Read, Update, Delete) actions on a "users" resource and includes authentication using JSON Web Tokens (JWT).

## Prerequisites

- Node.js (version X.X.X)
- MongoDB (version X.X.X)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repository
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the MongoDB connection:

   - Create a `config` directory in the project's root directory.
   - Inside the `config` directory, create a `config.js` file.
   - Define the MongoDB connection URL and JWT secret in the `config.js` file. For example:

     ```javascript
     module.exports = {
       mongoURI: "mongodb://localhost:27017/myapp",
       jwtSecret: "your-secret-key",
     };
     ```

5. Start the application:

   ```bash
   npm start
   ```

6. The API server should now be running on `http://localhost:3000`.

## API Documentation

### Authentication

- **POST** `/users/login`

  Authenticate a user and generate a JWT token.

  Request Body:

  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```

  Response:

  ```json
  {
    "token": "your-jwt-token"
  }
  ```

  Note: Include the JWT token in the request header for authenticated routes (`Authorization: Bearer <token>`).

### Users

- **POST** `/users`

  Create a new user.

  Request Body:

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password"
  }
  ```

  Response:

  ```json
  {
    "message": "User created successfully"
  }
  ```

- **GET** `/users`

  Get all users.

  Response:

  ```json
  [
    {
      "id": "user-id",
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": "another-user-id",
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
  ]
  ```

- **GET** `/users/:id`

  Get a specific user by ID.

  Response:

  ```json
  {
    "id": "user-id",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```

- **PUT** `/users/:id`

  Update a user by ID.

  Request Body:

  ```json
  {
    "name": "Updated Name",
    "email": "updated.email@example.com",
    "password": "newpassword"
  }
  ```

  Response:

  ```json
  {
    "message": "User updated successfully"
  }
  ```

- **DELETE** `/users/:id`

  Delete a user by ID.

  Response:

  ```json
  {
    "message": "User deleted successfully"
  }
  ```

## Error Handling

If an error occurs during the API requests or server operations,

the API will respond with appropriate status codes and error messages in the following format:

```json
{
  "message": "Error message"
}
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
