import { NextRequest, NextResponse } from 'next/server';
import { generateChatListForUser, findUserById } from '../mockDb';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { id: userId } = body;

        if (!userId) {
            return NextResponse.json(
                { error: 'User ID is required' },
                { status: 400 }
            );
        }

        // Check if user exists
        const user = findUserById(userId);
        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Generate chat list for this user
        const chatList = generateChatListForUser(userId);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(chatList);

    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request' },
            { status: 400 }
        );
    }
}
