import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String},
    profile: {type: String},
    cover: {type: String},
    razorPayId: {type: String, default: ""},
    secret: {type: String, default: ""},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}) 

// const User = mongoose.model('User', schema)
export default mongoose.models.User || mongoose.model('User', schema)