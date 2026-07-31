import mongoose from "mongoose";

let isConnected  : boolean = false

export default async function connectDb() {
    if(isConnected) return;
    const MONGODB_URI : string = process.env.MONGODB_URI!


    if (!MONGODB_URI) {
        throw new Error("Please define MONGODB_URI in .env.local")
    }
    try {
        await mongoose.connect(MONGODB_URI)
        isConnected = true 
        console.log("MongoDb is connected");
    } catch (error) {
        console.log("MongoDb error",error);
        throw new Error("DataBase connected failed")
    }
}