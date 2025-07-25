import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({},{timestamps:true});
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
export const User = mongoose.model('User', userSchema);