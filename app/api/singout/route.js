import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        const {
            nome,
            palavraPasse,
            numero_telefone,
            comunidade  
        } = await req.json()
        const role = 'USER'

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"), 
            },
         scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

            // Consulta as comunidades já cadastradas
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: "Professores!D2:D", // Coluna D (Comunidade) a partir da linha 2
      });
  
      const comunidadesCadastradas = response.data.values?.flat() || [];
  
      // Verifica se a comunidade já existe
      if (comunidadesCadastradas.includes(comunidade)) {
        return NextResponse.json(
          { erro: "Esta comunidade já tem um representante cadastrado!" },
          { status: 400 }
        );
      }

      const res =  await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: "Professores!A:E",
            valueInputOption: "RAW",
            requestBody: {
                values: [[
                    nome,
                    palavraPasse,
                    numero_telefone,
                    comunidade,
                    role
                ]]
            }
        })  

        return NextResponse.json({message: 'Dados Adicionados', nome: nome, comunidade: comunidade, role: role}, {status: 201})

    } catch (error) {
        return NextResponse.json({ erro: "Verifique a Ligação e tente novamente!" }, { status: 500 });
    }
}