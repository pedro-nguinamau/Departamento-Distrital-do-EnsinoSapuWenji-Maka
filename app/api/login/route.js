import { google } from "googleapis";
import { NextResponse } from "next/server";
import { setCookie } from "nookies";

export async function POST(req) {

   

    try {
        const { palavraPasse, comunidade } = await req.json();
        if (!palavraPasse || !comunidade) {
            return NextResponse.json({ erro: 'Preencha os campos' }, { status: 400 });
        }


        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            
            },
         scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        const res = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID,
            range: "Professores!A:E"
        });

        const rows = res.data.values || [];

        const Professor = rows.find((row) => row[1] === palavraPasse && row[3] === comunidade);

        if (!Professor) {
            return NextResponse.json({ erro: "Credenciais inválidas!" }, { status: 401 });
        }

        return NextResponse.json({ mensagem: "Login bem-sucedido!", nome: Professor[0], comunidade: Professor[3], role: Professor[4] }, {status: 200});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ erro: "Verifique a Ligação e tente novamente!" }, { status: 500 });
    }
}

