import mongoose from "mongoose";
const connection = {};

async function connectDb(){
    return true;

}

async function disconnectDb(){
    if(connection.isConnected) {
        if(process.env.NODE_END === "production"){
            await mongoose.disconnect();
            connection.isConnected = false;
        } else {
            console.log("not disconnected from the database")
        }
    }
}

const db = {connectDb, disconnectDb};
export default db;