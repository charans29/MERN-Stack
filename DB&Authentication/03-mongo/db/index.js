const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://charansai407:Learning2024@cluster0.kwqk7km.mongodb.net/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('admins', AdminSchema);
const User = mongoose.model('users', UserSchema);
const Course = mongoose.model('courses', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}