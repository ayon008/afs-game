import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        // Parse the incoming JSON body
        const data = (await request.json()) as User;
        console.log(data);

        // Create the user in the database
        const createdUser = await prisma.user.create({
            data,
        });

        // Return a JSON response
        return NextResponse.json({
            success: true,
            message: "User created successfully!",
            user: createdUser,
        });
    } catch (error: any) {
        console.error("Error creating user:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}


export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const uid = searchParams.get("uid");

        if (!uid) {
            return NextResponse.json(
                { success: false, error: "UID is required" },
                { status: 400 }
            );
        }
        // Delete the user from the database
        const deletedUser = await prisma.user.delete({
            where: { uid },
        })
        return NextResponse.json({ message: 'User deleted', user: deletedUser });
    } catch (error: any) {
        console.error("Error deleting user:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
} 