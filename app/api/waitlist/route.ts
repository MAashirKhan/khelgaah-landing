// Google Apps Script setup:
// 1. Create a new Google Sheet with columns: Timestamp | Email | Audience
// 2. In the sheet, go to Extensions > Apps Script
// 3. Replace the default code with:
//
// function doPost(e) {
//   try {
//     var data = JSON.parse(e.postData.contents);
//     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//     sheet.appendRow([new Date().toISOString(), data.email, data.audience]);
//     return ContentService
//       .createTextOutput(JSON.stringify({ success: true }))
//       .setMimeType(ContentService.MimeType.JSON);
//   } catch(err) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ success: false }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }
// }
//
// 4. Deploy > New deployment > Web app
//    Execute as: Me | Who has access: Anyone
// 5. Copy the URL to GOOGLE_SHEETS_SCRIPT_URL in .env.local

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, audience } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL

  if (!scriptUrl) {
    // No Google Sheet configured — log and return success anyway
    console.log(`[waitlist] ${audience}: ${email}`)
    return NextResponse.json({ success: true })
  }

  try {
    await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, audience, timestamp: new Date().toISOString() }),
    })
  } catch {
    console.error('[waitlist] Failed to write to Google Sheet')
  }

  return NextResponse.json({ success: true })
}
