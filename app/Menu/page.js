'use client'
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import './menu.css'
import { parseCookies} from 'nookies'


export default function Menu() {
  const router = useRouter()
  const [nome, setNome] = useState("");
  const [comunidade, setComunidade] = useState("");
  const [role, setRole] = useState("")
  useEffect(() => {
    setNome(localStorage.getItem("nome"));
    setComunidade(localStorage.getItem("comunidade"));
    setRole(localStorage.getItem("role"))
    
  }, []);
  const enviar = () => {
    return router.push('/Menu/Enviar-Dados') 
  }

  const ver = () => {
    if (comunidade === "Wenji Maka") {
      window.open('https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=1400028576&single=true')
    } else if(comunidade === "Estrela D'Alva ") {
      window.open('https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=905349875&single=true')
    } else if(comunidade === "Vila Verde") {
      window.open('https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=615060223&single=true')
    } else if(comunidade === "Primicias") {
      window.open('https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=1374547864&single=true')
    } else if(comunidade === "Sagrada Sapú") {
      window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=1731963216&single=true")
    } else  if(comunidade === "Caminho de Paz"){
      window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=1724008359&single=true")
    } else if(comunidade === "Sal") {
      window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=2146575414&single=true")
    } else if(comunidade === "Luz"){
      window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=1305502546&single=true")
    } else if (comunidade === "Casa Azul") {
      window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=2042077870&single=true")
    } else if (comunidade === "Coração Humilde") {
      window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=2046432040&single=true")
    } else if(comunidade === "Oração da Fé") {
      window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=573054338&single=true")
    }
      
  }

 const verdistrito = () => {
  window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml#")

 }
 const sair = () => {
  localStorage.clear(); 
  router.replace('/')
 }

  return (
    <>
         <div>
  {/* Mostrar a primeira div apenas se o role for "admin" */}
  {role === "ADMIN" && (
    <div className="float">
      <h2>Olá, {nome}! Espero que esteja bem na graça do nosso Senhor Jesus Cristo!</h2>
      <div className="blocos">
        <div className="bloco" onClick={enviar}>
          <p>Enviar Dados do Ensino</p>
        </div>
        <div className="bloco" onClick={ver}>
          <p>Ver os dados da comunidade</p>
        </div>
        <div className="bloco" onClick={verdistrito}>
          <p>Ver os dados de todo o Distrito</p>
        </div>
        <div className="blocoss" onClick={sair}>
          <p>Sair</p>
        </div>
      </div>
    </div>
  )}

  {/* Mostrar a segunda div apenas se o role for "user" */}
  {role === "USER" && (
    <div className="float">
      <h2>Olá, {nome}! Espero que esteja bem na graça do nosso Senhor Jesus Cristo!</h2>
      <div className="blocos">
        <div className="bloco" onClick={enviar}>
          <p>Enviar Dados do Ensino</p>
        </div>
        <div className="bloco" onClick={ver}>
          <p>Ver os dados da comunidade</p>
        </div>
        <div className="blocoss" onClick={sair}>
          <p>Sair</p>
        </div>
      </div>
    </div>
  )}
</div>
        
        
        
    {/* <div className="float">
        <h3>Olá, {nome} espero que a sua saúde esteje boa conforme as nossas orações</h3>
     <div className="blocos">
       <div className="bloco">
         <p>Enviar Dados do Ensino</p>
       </div>
       <div className="bloco">
         <p>Ver os dados das Comunidades do Distrito</p>
       </div>
     </div>
 </div> 
       */}
    </>
  );
}