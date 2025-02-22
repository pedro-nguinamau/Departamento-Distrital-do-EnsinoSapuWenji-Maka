'use client'
import './globals.css'
import './singIn.css'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
export default function Home() {
  const router = useRouter()
  const [palavraPasse, setPalavraPasse] = useState("");
  const [comunidade, setComunidade] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  

    console.log("Palavra-Passe:", palavraPasse);
  console.log("Comunidade selecionada:", comunidade);

  if (!palavraPasse.trim() || !comunidade.trim()) {
    setMensagem("Preencha todos os campos!");
    return;
  }

    try {
      const res = await axios.post("/api/login", {
        palavraPasse,
        comunidade,
      });
     
      if (res.status === 200) {
        const { nome, comunidade, role} = await res.data
        localStorage.setItem("nome", nome);
        localStorage.setItem("comunidade", comunidade);
        localStorage.setItem("role", role)
       
        router.replace("/Menu")
      }
    } catch (error) {
      setIsLoading(false)
      if (error.response) {
        setMensagem(error.response.data.erro || "Erro ao fazer login.");
      }
  
    } 
  };

  return (<>
    <div className='ti'>
   <img src="/images.jpeg" alt="Logo INA" /><h1>Depaetameno do Ensino <br></br> Sapú Wenji-Maka</h1>
   </div>
      <div className='container' id="container"> 
      <form className="form" id="form" onSubmit={handleSubmit}>
      <label>Palavra-Passe</label>
      <input type="password" placeholder="Palavra-Passe" value={palavraPasse} onChange={(e) => setPalavraPasse(e.target.value)} />

    
      <label>Selecione a Comunidade</label>
      <select value={comunidade} onChange={(e) => setComunidade(e.target.value)}>
        <option value="" disabled>Selecione a Comunidade</option>
        <option value="Wenji Maka">Wenji Maka</option>
        <option value="Estrela D'Alva">Estrela D'Alva</option>
        <option value="Vila Verde">Vila Verde</option>
        <option value="Primicias">Primicias</option>
        <option value="Sagrada Sapú">Sagrada Sapú</option>
        <option value="Caminho de Paz">Caminho de Paz</option>
        <option value="Sal">Sal</option>
        <option value="Luz">Luz</option>
        <option value="Casa Azul">Casa Azul</option>
        <option value="Coração Humilde">Coração Humilde</option>
        <option value="Oração da Fé">Oração da Fé</option>
      </select>

      <div className="Registro">
        <p>Ainda não está Registrado?</p><span><a href="/Cadastro">Registrar</a></span>
      </div>



    <button type="submit" disabled={isLoading} id='b'>
     <div className='cl'>
      {isLoading ? <div className="loader"></div> : "Entrar"}
     </div>
    </button>


      {mensagem && <p id='erro'>{mensagem}</p>}
    </form>
    </div>
  </>
  )

    
}
