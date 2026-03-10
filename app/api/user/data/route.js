import connectDB from "@/config/db";
import User from "@/models/user";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const authObj = getAuth(request)
    let { userId } = authObj

    // Fallback to custom header if Clerk fails to parse it
    if (!userId) {
      userId = request.headers.get('x-user-id')
    }

    if (!userId) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const user = await User.findById(userId)

    if (!user) {
      return NextResponse.json({ success: false, message: 'User Not Found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, user })
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}