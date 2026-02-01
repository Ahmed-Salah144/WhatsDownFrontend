import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    // For mock logout, just return success
    return NextResponse.json({
        success: true,
        message: 'Logged out successfully'
    });
}
