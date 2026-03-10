import connectDB from "@/config/db";
import User from "@/models/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";




export async function POST(request) {
    try {

        const authObj = await auth()
        let { userId } = authObj

        if (!userId) {
            userId = request.headers.get('x-user-id')
        }

        const { cartData } = await request.json()

        await connectDB()
        const user = await User.findById(userId)

        user.cartItems = cartData
        await user.save()

        return NextResponse.json({ success: true })

    } catch (error) {

        return NextResponse.json({ success: false, message: error.message })

    }
}