import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String, // by the cloudinary url se.
            required : true,
        
        },
        thumbnail:{
            type: String, // by the cloudinary url se.
            required : true,
        
        },
        title:{
            type: String,
            required : true,
        
        },
        description:{
            type: String,
            required : true,
        
        },
        duration:{
            type: Number, // by the cloudinary url.
            required : true,
        
        },
        views:{
            type: Number,
            default: 0,
        
        },
        isPublished:{
            type: Boolean,
            default: false,
        
        },
        owner:{
            type: Schema.type.ObjectId,
            ref: 'User',
        
        }

        

    },
    {
        timestamps:true,
    }
)
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model('Video',videoSchema) 
