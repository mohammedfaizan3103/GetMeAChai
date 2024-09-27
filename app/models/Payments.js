import mongoose from "mongoose"

const schema = new mongoose.Schema({
    from_user: {type: mongoose.SchemaTypes.ObjectId, required: true},
    from_name: {type: String, required: true},
    to_user: {type: mongoose.SchemaTypes.ObjectId, required: true},
    message: {type: String},
    amount: {type: Number},
    time: { type: Date, default: Date.now },
    status: {type: Boolean, default: false}
})

// const Payments = mongoose.model('Payments', schema)
export default mongoose.models.Payments || mongoose.model('Payments', schema)