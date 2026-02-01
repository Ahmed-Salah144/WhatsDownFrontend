import { NextRequest, NextResponse } from 'next/server';
import { isEmailTaken } from '../mockDb';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, email, password, confirmPassword } = body;

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Validate required fields
        if (!username || !email || !password || !confirmPassword) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate username length
        if (username.length < 2) {
            return NextResponse.json(
                { error: 'Name must be at least 2 characters' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Must be a valid email address' },
                { status: 400 }
            );
        }

        // Check if email already exists
        if (isEmailTaken(email)) {
            return NextResponse.json(
                { error: 'Email is already registered' },
                { status: 409 }
            );
        }

        // Validate password length
        if (password.length < 5) {
            return NextResponse.json(
                { error: 'Password is too short' },
                { status: 400 }
            );
        }

        // Validate password contains uppercase
        if (!/[A-Z]/.test(password)) {
            return NextResponse.json(
                { error: 'Must include uppercase letter' },
                { status: 400 }
            );
        }

        // Validate password contains number
        if (!/[0-9]/.test(password)) {
            return NextResponse.json(
                { error: 'Must include a number' },
                { status: 400 }
            );
        }

        // Validate password contains symbol
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return NextResponse.json(
                { error: 'Must include a symbol' },
                { status: 400 }
            );
        }

        // Validate passwords match
        if (password !== confirmPassword) {
            return NextResponse.json(
                { error: 'Passwords must match' },
                { status: 400 }
            );
        }

        // In a real app, we'd create the user here
        // For mock purposes, we just return success
        return NextResponse.json({
            success: true,
            message: 'Registration successful! Please login with an existing account for testing.'
        });

    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request' },
            { status: 400 }
        );
    }
}
