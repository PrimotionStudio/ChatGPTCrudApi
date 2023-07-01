const express = require("express");
const connectDB = require("./config/db");
const usersRoutes = require("./routes/users");

// Create the Express app
const app = express();

// Connect to the MongoDB database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/users", usersRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
