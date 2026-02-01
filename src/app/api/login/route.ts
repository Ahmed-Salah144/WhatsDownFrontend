import { profile } from 'console';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, password } = body;

        // Mock validation - accept any email/password for testing
        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Mock user data
        const mockUser = {
            id: 'user-123',
            name: 'Ahmed Salah',
            profileImageURL: 'https://i.pinimg.com/originals/26/ea/fc/26eafce27f80bfd438d3fff61fc7479e.jpg'
        };

        // Create a simple mock JWT (not cryptographically secure, just for testing)
        // Format: header.payload.signature
        const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
        const payload = btoa(JSON.stringify({
            userId: mockUser.id,
            name: mockUser.name,
            profileImageURL: mockUser.profileImageURL,
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // 24 hours
        }));
        const signature = btoa('mock-signature-' + email);
        const mockToken = `${header}.${payload}.${signature}`;

        return NextResponse.json({
            success: true,
            token: mockToken,
            user: mockUser
        });

    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request' },
            { status: 400 }
        );
    }
}
