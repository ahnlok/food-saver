require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

const app = express();

// PORT
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (Heroku)
app.use(express.static("client/build"));

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/food-saver",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Successfully connected to MongoDB!!!  Huzzah!");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB :-( NOOOOOOO" , err);
    });

    app.get("/api/config", (req, res) => {
        res.json({
            success: true,
        })
    });

    app.use(routes);

    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "client/build/index.html"));
    });
    
    // Listener
    app.listen(PORT, () => {
        console.log(`Back end server running on http://localhost:${PORT}`);
    });