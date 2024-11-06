import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  return NextResponse.json([
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
  ]);
}