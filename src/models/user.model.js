import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
            index:true,
        
        
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true,
        },
        avatar:{
            type:String, // cloudinary Url use
            required:true,
            
        },
        coverImage: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
            
            }
        ],
        password:{ // Sequrity challenge for password. 
            type:String,
            required:[true, 'Password is required '],

        }
        

        
    },
    {
        timestamps:true,
    }
)



// incrypting the password by using the jwt  it is done only sometimes like during first time and next is in changeing the password.
userSchema.pre("save",async function(next){
    if(!this.isModified('password')) return next();
    this.password =  bcrypt.hash(this.password,10);
    next();
} )




// here bycrypt also compare the password now entered and save passwords.
userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}

// userSchema AccessTokenGenerate hota hai using JWT
userSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id: this.id,
            email: this.email,
            username: this.username,
            fullName: this.fullName,
            

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}




// userSchema RefreshTokenGenerate hota hai using JWT
userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign(
        {
            _id: this.id,
            

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const User = mongoose.model('User',userSchema);