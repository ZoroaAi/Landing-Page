import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { createUser, getUserByEmail, getAdminByEmail } from '@/lib/airtable';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check if user already exists
    const existingUser = await getUserByEmail(email) || await getAdminByEmail(email);
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await createUser({ email, password: hashedPassword, role: 'user' });
    if (!newUser) {
      return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
    }

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'An error occurred during signup' }, { status: 500 });
  }
}