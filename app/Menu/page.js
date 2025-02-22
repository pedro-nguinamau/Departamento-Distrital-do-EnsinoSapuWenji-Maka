'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import './menu.css'
import { parseCookies} from 'nookies'


export default function Menu() {
  const router = useRouter()
  const [nome, setNome] = useState("");
  const [comunidade, setComunidade] = useState("");
  const a = () => {
    return router.push('/Menu/Enviar-Dados')
  }

  const ver = () => {
    window.open('https://docs.google.com/spreadsheets/d/e/2PACX-1vRcFCOyyVElqwx-wr4MYB0nbtZyRjPvad_j9gXyYDgfLlIfJm_MbTw36LaTOTezm6_51YYzueAtVQ9N/pubhtml?gid=1400028576&single=true')
  }

  useEffect(() => {
    setNome(localStorage.getItem("nome"));
    setComunidade(localStorage.getItem("comunidade"));
  }, []);
  const admin = 'admin'
  const role = admin

  return (
    <>

     
          <div className="float">
            {/* <h1>{token}</h1> */}
      
           
                 <h2>Olá, {nome}! Espero que esteja bem na graça do nosso Senhor Jesus Cristo!</h2>
              <div className="blocos">
                <div className="bloco" onClick={a} >
                  <p>Enviar Dados do Ensino</p>
                </div>
                <div className="bloco" onClick={ver}>
                  <p>Ver os dados da comunidade</p>
                </div>
              </div>
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