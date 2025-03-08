'use client'
import axios from 'axios'
import '../singIn.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SingIn() {
    const router = useRouter()
    const [nome, setNome] = useState("")
    const [palavraPasse, setPalavraPasse] = useState("")
    const [numero_telefone, setNumeroTelefone] = useState("")
    const [comunidade, setComunidade] = useState("") 
    const [isLoading, setIsLoading] = useState(false)
    const [mensagem, setMensagem] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        if(!nome.trim() || !palavraPasse.trim() || !numero_telefone.trim() || !comunidade.trim()) {
            setMensagem("Preencha todos os campos")
            setIsLoading(false)
        }

        try{
            const res = await axios.post('/api/singout', {
                nome,
                palavraPasse,
                numero_telefone,
                comunidade  
            })

            if (res.status === 201) {
                const { nome, comunidade, role} = await res.data
                localStorage.setItem("nome", nome);
                localStorage.setItem("comunidade", comunidade);
                localStorage.setItem("role", role)

                router.replace("/Menu")
            }

        }catch(error) {
            setIsLoading(false)
            setNome("")
            setNumeroTelefone("")
            setComunidade("")
            setPalavraPasse("")
            if (error.response) {
              setMensagem(error.response.data.erro || "Erro ao fazer login.");
            }
        }
    } 
return(<>
  <div className='ti'>
   <img src="/images.jpeg" alt="Logo INA" /><h1>Depaetameno do Ensino <br></br> Sapú Wenji-Maka</h1>
   </div>
        <div className='container' id="container"> 
        <form className="form" id="form" onSubmit={handleSubmit} >
                <label>Nome</label>
                <input type="name" placeholder="Nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
        
                <label>Palavra-Passe</label>
                <input type="password" placeholder="Palavra-Passe" id="palavra_passe" value={palavraPasse} onChange={(e) => setPalavraPasse(e.target.value)} />

                <label>Número de Telefone</label>
                <input type="name" placeholder="Número de Telefone" id="numero_telefone" value={numero_telefone} onChange={(e) =>  setNumeroTelefone(e.target.value)} />
    
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
              <p>Ainda não está Registrado</p><span><a href="/">Entar</a></span>
            </div>           
            

            <button type="submit" disabled={isLoading} id='b'>
                <div className='cl'>
                {isLoading ? <div className="loader"></div> : "Entrar"}
                </div>
            </button>
            {mensagem && <p id='erro'>{mensagem}</p>}
        </form>
    </div>
    </>)
}