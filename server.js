const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

// Basic setup
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Sample lecture data - this will be your starting content
const sampleLectures = [
    {
        title: "Advanced Mathematics - Calculus Fundamentals",
        duration: "45 min",
        date: "2025-07-31",
        description: "Master the basics of differential and integral calculus with practical examples and problem-solving techniques.",
        tags: ["Mathematics", "Calculus", "Advanced"]
    },
    {
        title: "Physics - Quantum Mechanics Introduction", 
        duration: "60 min",
        date: "2025-07-30",
        description: "Explore the fascinating world of quantum physics and understand the fundamental principles of matter and energy.",
        tags: ["Physics", "Quantum", "Science"]
    },
    {
        title: "Chemistry - Organic Compounds Structure",
        duration: "50 min", 
        date: "2025-07-29",
        description: "Learn about the structure and properties of organic compounds and their role in biological processes.",
        tags: ["Chemistry", "Organic", "Biology"]
    },
    {
        title: "Computer Science - Data Structures",
        duration: "55 min",
        date: "2025-07-28", 
        description: "Understand essential data structures and algorithms used in modern software development.",
        tags: ["Computer Science", "Algorithms", "Programming"]
    },
    {
        title: "English Literature - Shakespeare Analysis",
        duration: "40 min",
        date: "2025-07-27",
        description: "Deep dive into Shakespeare's masterpieces and analyze their literary significance and impact.",
        tags: ["Literature", "Shakespeare", "Analysis"]
    }
];

// API to get lectures
app.get('/api/lectures', (req, res) => {
    res.json(sampleLectures);
});

// API for health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve the main website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Rangreja is running on port ${PORT}`);
});
