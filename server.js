const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// মূল রুট (Root Route)
app.get('/', (req, res) => {
    res.send('AI Backend is Running Successfully!');
});

// ফটো প্রসেস করার জন্য টেস্ট রুট
app.post('/upload', (req, res) => {
    res.json({ message: "ফটো ব্যাকএন্ডে পৌঁছেছে!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
