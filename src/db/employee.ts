import mongoose  from "mongoose";

const EmployeeSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    }
},
{
    timestamps: true,
}); 

export const EmployeeModel= mongoose.model('Employeee', EmployeeSchema);