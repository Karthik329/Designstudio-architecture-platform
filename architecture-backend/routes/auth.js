const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Path to users.json
const USERS_FILE = path.join(__dirname, "../data/users.json");

/* =========================
   HELPER FUNCTIONS
========================= */

// Read users from file
const getUsers = () => {
  const data = fs.readFileSync(USERS_FILE, "utf-8");
  return JSON.parse(data);
};

// Save users to file
const saveUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

/* =========================
   SIGNUP API
========================= */
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const users = getUsers();

  // Check if user already exists
  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  // Create new user
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role: "admin", // default role
    photo: "",
  };

  users.push(newUser);
  saveUsers(users);

  res.json({
    message: "Signup successful",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  });
});

/* =========================
   LOGIN API
========================= */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = getUsers();

  // Find matching user
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  res.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      photo: user.photo,
    },
  });
});

module.exports = router;
