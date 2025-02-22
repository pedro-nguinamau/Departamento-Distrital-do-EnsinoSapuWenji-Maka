import { google } from "googleapis";
import { NextResponse } from "next/server";
import { setCookie} from 'nookies'

export async function GET() {
 
 

   try {
    const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse.process.env.GOOGLE_APPLICATION_CREDENTIALS ,scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID_WENJI_MAKA,
        range: "Wenji Maka!A:J"
    });

    return NextResponse.json({ data: res.data.values}, { status: 200})
   } catch (error) {
    console.error(error);
    return NextResponse.json({ erro: "Verifique a Ligação e tente novamente!" }, { status: 500 });
   }

}