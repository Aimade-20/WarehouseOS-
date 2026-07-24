import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "@/lib/validation/registerSchema";
import connectDb from "@/lib/mongodb";
import User from "@/model/register";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    await connectDb();
    const body = await request.json();
    const normalizedBody = {
      ...body,
      email: body.email?.trim().toLowerCase(),
    };
    const result = registerSchema.safeParse(normalizedBody);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }
    const user = await User.findOne({
      email: normalizedBody.email,
    });
    if (user) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists",
        },
        {
          status: 400,
        },
      );
    }
    const hashedPassword = await bcrypt.hash(normalizedBody.password, 10);
    await User.create({
      fullname: normalizedBody.fullname,
      email: normalizedBody.email,
      password: hashedPassword,
    });
    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
