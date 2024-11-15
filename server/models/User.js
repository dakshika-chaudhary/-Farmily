// models/User.js

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';  // Switch from bcrypt to bcryptjs
import jwt from 'jsonwebtoken'; // Add this import

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Method to compare password
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.models.User || mongoose.model('User', userSchema);


export default User;
