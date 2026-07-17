import { NextResponse } from 'next/server';
import { sendContactEmail, type ContactSubmission } from '@/lib/graph-mailer';

export const runtime = 'nodejs';

const MAX_LENGTHS: Record<keyof ContactSubmission, number> = {
  name: 100,
  email: 200,
  businessName: 150,
  topic: 100,
  message: 5000,
};

function validate(body: Record<string, unknown>): { data?: ContactSubmission; error?: string } {
  const get = (key: string) => (typeof body[key] === 'string' ? (body[key] as string).trim() : '');

  const data: ContactSubmission = {
    name: get('name'),
    email: get('email'),
    businessName: get('businessName'),
    topic: get('topic'),
    message: get('message'),
  };

  if (!data.name || !data.email || !data.topic || !data.message) {
    return { error: 'Please fill in all required fields.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { error: 'Please enter a valid email address.' };
  }
  for (const [key, limit] of Object.entries(MAX_LENGTHS)) {
    const value = data[key as keyof ContactSubmission];
    if (value && value.length > limit) {
      return { error: `${key} is too long.` };
    }
  }

  return { data };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real users never fill a hidden field, bots usually do.
  if (typeof body.company === 'string' && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { data, error } = validate(body);
  if (!data) {
    return NextResponse.json({ error }, { status: 400 });
  }

  try {
    await sendContactEmail(data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed:', err);
    return NextResponse.json(
      { error: 'Something went wrong sending your message. Please email us directly.' },
      { status: 500 }
    );
  }
}
