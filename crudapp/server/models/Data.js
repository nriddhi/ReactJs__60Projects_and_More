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

    mobile : {
        type: String,
        required:true,
    }


},
 {timestamps:true}
);

export default mongoose.model('Users', DataSchema);


