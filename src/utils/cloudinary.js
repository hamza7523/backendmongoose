import cloudinary from 'cloudinary';

import {v2 as cloudinary} from cloudinary;
import fs from "fs"
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY ,
    api_secret:process.env.CLOUD_API_SECRET
});


const uploadOnCloudinary =  async (localFilePath) =>{
    try{
        if(!localFilePath) return null
        //upload the file cloudinary
        const response = await cloudinary.v2.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded successfully
        console.log("File has been uploaded")
        console.log(response.url)
        return response

    }catch(err){
        fs.unlinkSync(localFilePath)//remove the locally saved temp file as the upload operation got failed
    }
}


export {uploadOnCloudinary}