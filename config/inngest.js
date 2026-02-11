import { Inngest } from "inngest";
// connectDB will be imported dynamically in handlers to ensure availability at runtime
import User from "../models/user";
import connectDB from "./db";
import Order from "@/models/Order";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

//Inngest function to save user data to a database
export const syncUserCreation = inngest.createFunction(
    {
    id:'sync-user-from-clerk'
    },
    { event :'clerk/user.created'},
    async ({event}) => {
        const{ id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + (last_name || ''),
            imageUrl: image_url
        }
        try {
            const { default: connectDB } = await import("./db");
            await connectDB();
        } catch (err) {
            console.error('connectDB failed (creation):', err);
            throw err;
        }
        await User.create(userData)
    }
)

//Inngest function to update user data in a database

export const syncUserUpdate = inngest.createFunction(
    {
    id:'user-update-from-clerk'
    },
    { event :'clerk/user.updated'},
    async ({event}) => {
         const{ id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + (last_name || ''),
            imageUrl: image_url
        }
        try {
            const { default: connectDB } = await import("./db");
            await connectDB();
        } catch (err) {
            console.error('connectDB failed (update):', err);
            throw err;
        }
        await User.findByIdAndUpdate(id, userData)
    } 
)

//inngest function to delete user data from a database

export const syncUserDeletion = inngest.createFunction(
    {
        id:'user-deletion-with-clerk'
    },
    { event :'clerk/user.deleted'},
    async ({event}) => {
        
        const{ id } = event.data
        try {
            const { default: connectDB } = await import("./db");
            await connectDB();
        } catch (err) {
            console.error('connectDB failed (deletion):', err);
            throw err;
        }
        await User.findByIdAndDelete(id)
    }
)

//Inngest function to create user's order in database
export const createUserOrder = inngest.createFunction(
    {
        id:'create-user-order',
        batchEvents: {
            maxSize: 5,
            timeout: '5s'
        }


    },
    {event: 'order/created'},
    async ({events}) => {
       
        const orders = events.map((event) =>{
            return {
                userId: event.data.userId,
                items: event.data.items,
                amount: event.data.amount,
                address: event.data.address,
                date: event.data.date

            }

        })
        await connectDB()
        await Order.insertMany(orders)

        return { success: true,processed: orders.length };

    }
)