// models/CUser.js

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';  // Switch from bcrypt to bcryptjs

const CuserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Method to compare passwo
CuserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const CUser = mongoose.models.CUser || mongoose.model('CUser', CuserSchema);


export default CUser;
