import mongoose from "mongoose";

let cached =global.mongoose

if(!cached){
    cached =global.mongoose={conn: null, promise: null}
}

async function connectDB(){

    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: false
        }
        // store the promise (do NOT await here) so concurrent calls share the same promise
        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then((mongooseInstance) => {
            return mongooseInstance;
        });
    }

    cached.conn = await cached.promise
    return cached.conn
}
export default connectDB