const express = require("express");
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const router = express.Router();
const jwt = require("jsonwebtoken");

const app = express()

app.use(express.json());

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await User.create({
        username: username,
        password: password
    })

    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await User.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

router.get('/', (req, res) => {
    res.send('User\'s'+' Hello World!');
  })

app.use('/', router);

app.listen(3001)

module.exports = router