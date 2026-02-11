import authSeller from '@/lib/authSeller'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import Product from '@/models/product'
import connectDB from '@/config/db'


export async function GET(request) {

  try {

    await connectDB()

    const { userId } = await auth()

    const isSeller = await authSeller(userId)

    if (!isSeller) {

      return NextResponse.json({ success: false, message: 'not authorized' });
    }

    const products = await Product.find({})
    return NextResponse.json({ success: true, products })


  } catch (error) {

    return NextResponse.json({ success: false, message: error.message })

  }

}