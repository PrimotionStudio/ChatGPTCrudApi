const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// Create a new user
router.post("/", UserController.createUser);

// Authenticate a user and generate a JWT token
router.post("/login", UserController.loginUser);

// Get all users (requires authentication)
router.get("/", authMiddleware, UserController.getAllUsers);

// Get a specific user by ID (requires authentication)
router.get("/:id", authMiddleware, UserController.getUserById);

// Update a user by ID (requires authentication)
router.put("/:id", authMiddleware, UserController.updateUserById);

// Delete a user by ID (requires authentication)
router.delete("/:id", authMiddleware, UserController.deleteUserById);

module.exports = router;
