import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullName:{
        type:String,
        required:true,
        index:true,
        trim:true
    },
    avatar:{
        type:String,
        required:true
    },
    coverImage:{
        type:String
    },
    watchHistory:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }],
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String,
        default:""
    }
}, {
    timestamps:true
});


userSchema.pre("save",async function(next){
    if(!thus.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})
userSchema.methods.isPasswordMatch = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}


userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        userName: this.userName,
        email: this.email
    },
    process.env.ACCESS_TOKEN_SECRET,
{
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    });
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign({_id: this._id,
    userName: this.userName,
    email: this.email
},process.env.REFERESH_TOKEN_SECRET, {
    expiresIn: process.env.REFERESH_TOKEN_EXPIRY
})
}


export const User = mongoose.model('User', userSchema);// this user contacts your database directly. We would directly call mongodb from here.