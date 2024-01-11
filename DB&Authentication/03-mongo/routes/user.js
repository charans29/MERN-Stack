const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const app = express()

app.use(express.json());

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    
    User.create({
        username:req.body.username, 
        password:req.body.password
    })
    res.json({
        message: "User created successfully"
    })
});

router.get('/', (req, res) => {
    res.send('User+'+'s'+' Hello World!');
  })

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    res.json({
         courses: await Course.find({})
     })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic

    await User.updateOne({
        username: req.headers.username
    }, {
        "$push": {
            purchasedCourses: req.params.courseId
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

app.use('/', router);
app.listen(3001)

module.exports = router