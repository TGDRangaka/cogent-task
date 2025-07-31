import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'contact-submissions.json');

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    let submissions = [];
    if (fs.existsSync(DATA_FILE)) {
      const file = fs.readFileSync(DATA_FILE, 'utf-8');
      submissions = JSON.parse(file);
    }
    submissions.push({ name, email, message, date: new Date().toISOString() });
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2));
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Error saving submission:', e);
    return NextResponse.json({ error: 'Failed to save submission.' }, { status: 500 });
  }
}
