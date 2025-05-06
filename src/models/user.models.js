import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true,
        },
        fullName:{
            type:String,
            required:true,

        },
        email:{
            type:String,
            required:true,
            unique:true,

        },
        avatar:{
            type:String,

        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        refreshToken:{
            type:String,
            
        }
    },
    {
        timestamps:true
    }
)

UserSchema.methods.isPasswordCorrect=async function (password) {
    return await bcrypt.compare(password,this.password)   
    }
    UserSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRE
        }
    )
    }
    UserSchema.methods.generateRefreshToken=function(){
      return jwt.sign( 
         {  
              _id:this._id,
         },
         process.env.REFRESH_TOKEN_SECRET,
         {
         expiresIn:process.env.REFRESH_TOKEN_EXPIRE
         }) 
     
        
    }
    export const User= mongoose.model("User",UserSchema)