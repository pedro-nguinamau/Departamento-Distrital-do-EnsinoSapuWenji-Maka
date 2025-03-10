import { google } from "googleapis";
import { NextResponse } from "next/server";



export async function POST(req) {

    try {
        const {
            comunidade,
            temaEscolaDominical,
            professorEscolaDominical,
            temaReligioso,
            professorReligioso,
            meninosEscolaDominical,
            meninasEscolaDominical,
            meninosEnsinoReligioso,
            meninasEnsinoReligioso,
            oferenda,
            totalAlunos,
            Data // Adiciona o total ao envio
          } = await req.json();

          if (!temaEscolaDominical || !professorEscolaDominical || !temaReligioso || !professorReligioso || !meninosEscolaDominical || !meninasEscolaDominical || !meninosEnsinoReligioso || !meninasEnsinoReligioso || !oferenda || !totalAlunos || !Data) {
            return NextResponse.json({ erro: 'Preencha os campos' }, { status: 400 });
          };



          const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"), 
            },
         scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });


        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID_WENJI_MAKA, // ID da tua planilha
            range: `${comunidade}!A:K`, 
            valueInputOption: "RAW",
            requestBody: {
              values: [[
                
                temaEscolaDominical,
                professorEscolaDominical,
                temaReligioso,
                professorReligioso,
                meninosEscolaDominical,
                meninasEscolaDominical,
                meninosEnsinoReligioso,
                meninasEnsinoReligioso,
                totalAlunos,
                oferenda,
                Data
            ]],
            },
          });
        
          return NextResponse.json({message: 'Dados Adicionados'}, {status: 200});

    } catch(error) {
        return NextResponse.json({ erro: "Erro ao adicionar os dados!" }, { status: 500 });
    }
}