import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcryptjs'

export async function POST(request: Request) {
    try {
        const { username, email, password } = await request.json();

        const existingUserByEmail = await prisma.user.findUnique({
            where: { email }
        });
        if(existingUserByEmail) {
            return NextResponse.json({ message: 'Email already exists' }, { status: 400 })
        }

        const existingUserByUsername = await prisma.user.findUnique({
            where: { username }
        });
        if(existingUserByUsername) {
            return NextResponse.json({ message: 'Username already exists' }, { status: 400 })
        }

        const hashedPassword = await hash(password, 12)
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        return NextResponse.json({ message: 'User created successfully', user }, { status: 201 });

    } catch {
        return NextResponse.json({ message: 'Error creating account' }, { status: 500 })
    }
}