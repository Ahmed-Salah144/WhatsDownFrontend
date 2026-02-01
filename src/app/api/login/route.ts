import { NextRequest, NextResponse } from 'next/server';
import { findUserByEmail } from '../mockDb';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Validate required fields
        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Find user by email
        const user = findUserByEmail(email);
        
        // User not found
        if (!user) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Check password
        if (user.password !== password) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Create mock JWT token
        const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
        const payload = btoa(JSON.stringify({
            userId: user.id,
            name: user.name,
            profileImageURL: user.profileImageURL,
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // 24 hours
        }));
        const signature = btoa('mock-signature-' + user.email);
        const mockToken = `${header}.${payload}.${signature}`;

        return NextResponse.json({
            success: true,
            token: mockToken,
            user: {
                id: user.id,
                name: user.name,
                profileImageURL: user.profileImageURL
            }
        });

    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request' },
            { status: 400 }
        );
    }
}
