const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();
const app = express()

app.use(express.json());

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic

    const newCourse = await Course.create({
        title:req.body.title,
        description: req.body.description,
        imageLink:req.body.imageLink,
        price:req.body.price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/', (req, res) => {
    res.send('Hello World!');
  })

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    res.json({
        courses: await Course.find({})
    })
});

app.use('/', router);
app.listen(3000)
module.exports = router;