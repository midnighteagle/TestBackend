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
        email:{
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
export const User = mongoose.model('User',userSchema);