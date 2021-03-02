require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const db = require('./models');
// const routes = require("./routes");
const cors = require("cors");

const app = express();

// models
const Items = require('./models/items')

// PORT
const PORT = process.env.PORT || 3001;

const ObjectId = require('mongoose').Types.ObjectId;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
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


    // app.use(routes);
    // Register route
    app.post('/register', (req, res) => {
        console.log(req.body);
        const { username, password } = req.body;
        const user = db.User.findOne({ username }).exec();
        if (user) {
            console.log(user)
            // res.status(500);
            res.json({
                message: "user already exists",
            });
            return;
        }
        db.User.create({ username, password });
        res.json({
            message: 'Successfully Registered',
        });
    });

    // Log In Route
    app.post('/login', (req, res) => {
        const { username, password } = req.body;
        console.log(req.body);
        db.User.findOne({ username }).then(user => {
            console.log("user", user);
            if(!user || user.password !==password) {
                res.status(403);
                res.json({
                    message: 'Invalid Login',
                });
                return;
            }
            res.json({
                message: 'Successfully Logged into the Food Saver',
            });
        });
    });

    app.get('/users', (req, res) => {
        db.User.find({})
        .then((response) => {
            console.log(response);
            res.send(response)
        })
        .catch((err) => {
            res.send(err);
        }
        )
    })
    // Item Page Route
    app.post('/items', async (req,res) => {
        // const { authorization } = req.headers;
        // const [, token] = authorization.split(' ');
        // const [username, password] = token.split(':');
        const getItems = req.body;
        // const user = await db.User.findOne({ username }).exec();
        // if (!user || user.password !== password) {
        //     res.status(403);
        //     res.json({
        //         message: 'Invalid Account, Cannot Access!',
        //     });
        //     return;
        // }

        let user = {
            _id: "603d464d2040be37b4049d9d"
        }

        const items = await Items.findOne({ userId: user._id }).exec();
        if (!items) {
            await Items.create({
                userId: user._id,
                items: getItems,
            });
        } else {
            items.items.push(getItems);
            await items.save();
        }
        res.json(getItems);
    });

    app.get("/seedItem", (req, res) => {

        const sampleSeed = [
            {
                name: "Milk",
                category: "Fridge",
                expiration: "03-02-2021",
            }
        ]

        Items.create({
            userId: "603d464d2040be37b4049d9d",
            items: sampleSeed
        }).then(() => {
            res.send("Seed item success!")
        })
    } )

    // Items get Route
    app.get('/items', async (req, res) => {
        // const { authorization } = req.headers;
        // const [, token] = authorization.split(' ');
        // const [username, password] = token.split(':');
        // const user = await db.User.findOne({ username }).exec();
        // if (!user || user.password !==password) {
        //     res.status(403);
        //     res.json({
        //         message: "Invalid Access",
        //     });
        //     return;
        // }

        
        let user = {
            _id: "603d464d2040be37b4049d9d"
        }

        const { items } = await Items.findOne({ userId: user._id }).exec();
        res.json(items);
    });


    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "client/build/index.html"));
    });
    
    // Listener
    app.listen(PORT, () => {
        console.log(`Back end server running on http://localhost:${PORT}`);
    });