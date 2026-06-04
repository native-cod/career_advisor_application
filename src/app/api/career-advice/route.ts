import { NextRequest, NextResponse } from 'next/server';
import { generateCareerAdvice } from '@/ai/flows/generate-career-advice';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await generateCareerAdvice(body);

    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Career advice error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}