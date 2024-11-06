import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); 
  return NextResponse.json({ name: 'John Doe', email: 'john.doe@example.com' });
}