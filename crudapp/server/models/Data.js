import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true,
    },

    email : {
        type: String,
        required:true,
        unique: true,
    },

    address : {
        type: String,
        required:true,
    },

    mobile : {
        type: String,
        required:true,
    }


},
 {timestamps:true}
);

export default mongoose.model('employees', DataSchema);


