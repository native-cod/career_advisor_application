import { NextRequest, NextResponse } from 'next/server';
import { generateCareerAdvice } from '@/ai/flows/generate-career-advice';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('Received body:', body);

    const result = await generateCareerAdvice(body);

    console.log('AI result:', result);

    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('FULL CAREER ADVICE ERROR:');
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}