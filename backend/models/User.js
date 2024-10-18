const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    role: { type: String, default: 'Member' } // Role can be defined as required if needed
})

const ProjectSchema = new mongoose.Schema({
    pro_name: { type: String, required: true },
    pro_tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]  // References to Task documents
});

const Project = mongoose.model('Project', ProjectSchema);

const TaskSchema = new mongoose.Schema({
    task_name: { type: String, required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project'}, // Reference to Project model
    pro_name: {type: String},
    in_charge: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    in_charge_name: {type: String},
    date: {type: String, default: ''},
    isComplete: {type: Boolean, default: false},
});

const Task = mongoose.model('Task', TaskSchema);

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    profile_picture: {
        type: String,
        default: 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png'
    },
    members: [MemberSchema],
    projects: [ProjectSchema],
    tasks: [TaskSchema],
    created_date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = User = mongoose.model('user', UserSchema);