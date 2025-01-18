

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

// Mock data
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', password: 'password123' },
    { id: 2, name: 'Bob', email: 'bob@example.com', password: 'secret' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', password: 'password456' },
];

// User registration
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = users.find(user => user.email === email);
    
    if (existingUser) {
        return res.status(409).json({ message: 'Email already exists' });
    }
    
    const newUser = { id: users.length + 1, name, email, password };
});