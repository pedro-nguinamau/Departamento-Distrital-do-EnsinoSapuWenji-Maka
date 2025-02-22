'use client'
import './Enviar.css'
import '../../singIn.css'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'


export default function EnviarDados() {
  const router = useRouter()
  const [temaEscolaDominical, setTemaEscolaDominical] = useState("");
  const [professorEscolaDominical, setProfessorEscolaDominical] = useState("");
  const [temaReligioso, setTemaReligioso] = useState("");
  const [professorReligioso, setProfessorReligioso] = useState("");
  const [meninosEscolaDominical, setMeninosEscolaDominical] = useState("");
  const [meninasEscolaDominical, setMeninasEscolaDominical] = useState("");
  const [meninosEnsinoReligioso, setMeninosEnsinoReligioso] = useState("");
  const [meninasEnsinoReligioso, setMeninasEnsinoReligioso] = useState("");
  const [Data, setData] = useState("");
  const [oferenda, setOferenda] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Calcula o total de alunos automaticamente
    const totalAlunos =
      Number(meninosEscolaDominical) +
      Number(meninasEscolaDominical) +
      Number(meninosEnsinoReligioso) +
      Number(meninasEnsinoReligioso);

      const comunidade = localStorage.getItem("comunidade"); 

    try {
      const res = await axios.post("/api/enviar-dados", {
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
      });

      if (res.status === 200) {
        setMensagem("Dados enviados com sucesso!");
        isLoading(false)
        router.push("/Menu")
      } else {
        setMensagem("Erro ao enviar os dados.");
      }
    } catch (error) {
      setIsLoading(false)
      if (error.response) {
        setMensagem(error.response.data.erro || "Erro ao fazer login.");
        
      }
    }
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label>Tema da Escola Dominical</label>
        <input
          type="text"
          placeholder="Tema da Escola Dominical"
          value={temaEscolaDominical}
          onChange={(e) => setTemaEscolaDominical(e.target.value)}
        />

        <label>Professor(a) Escola Dominical</label>
        <input
          type="text"
          placeholder="Nome do Professor(a) Escola Dominical"
          value={professorEscolaDominical}
          onChange={(e) => setProfessorEscolaDominical(e.target.value)}
        />

        <label>Tema do Ensino Religioso</label>
        <input
          type="text"
          placeholder="Tema do Ensino Religioso"
          value={temaReligioso}
          onChange={(e) => setTemaReligioso(e.target.value)}
        />

        <label>Professor(a) Ensino Religioso</label>
        <input
          type="text"
          placeholder="Nome do Professor(a) Ensino Religioso"
          value={professorReligioso}
          onChange={(e) => setProfessorReligioso(e.target.value)}
        />

        <div className='content-mf'>
          <h3>Número de Alunos da Escola Dominical</h3>
          <div className='tm'>
            <div className="mf">
              <label htmlFor="MeninosEscolaDominical">M</label>
              <input
                type="number"
                placeholder="Meninos"
                name="MeninosEscolaDominical"
                value={meninosEscolaDominical}
                onChange={(e) => setMeninosEscolaDominical(e.target.value)}
              />
            </div>
            <div className="mf">
              <label htmlFor="MeninasEscolaDominical">F</label>
              <input
                type="number"
                placeholder="Meninas"
                name="MeninasEscolaDominical"
                value={meninasEscolaDominical}
                onChange={(e) => setMeninasEscolaDominical(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className='content-mf'>
          <h3>Número de Alunos do Ensino Religioso</h3>
          <div className='tm'>
            <div className="mf">
              <label htmlFor="MeninosEnsinoReligioso">M</label>
              <input
                type="number"
                placeholder="Meninos"
                name="MeninosEnsinoReligioso"
                value={meninosEnsinoReligioso}
                onChange={(e) => setMeninosEnsinoReligioso(e.target.value)}
              />
            </div>
            <div className="mf">
              <label htmlFor="MeninasEnsinoReligioso">F</label>
              <input
                type="number"
                placeholder="Meninas"
                name="MeninasEnsinoReligioso"
                value={meninasEnsinoReligioso}
                onChange={(e) => setMeninasEnsinoReligioso(e.target.value)}
              />
            </div>
          </div>
        </div>

        <label htmlFor="Oferenda">Oferenda</label>
        <input
          type="number"
          placeholder="Oferenda"
          name='oferenda'
          value={oferenda}
          onChange={(e) => setOferenda(e.target.value)}
        />
        <label>Data</label>
        <input
          type='date'
          placeholder='data'
          value={Data}
          onChange={(e) => setData(e.target.value)}
          
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar"}
        </button>

        {mensagem && <p>{mensagem}</p>}
      </form>
    </>
  );
}

// 'use client'
// import './Enviar.css'
// import '../../singIn.css'
// import { useState } from 'react'
// export default function EnviarDdos() {

//     return(<>
//       <form className='form'>
//       <label>Tema da Escola Dominical</label>
//          <input 
//          type="text" 
//          placeholder="Tema da Escola Dominical"
//          value={TemadaEscolaDominical}
//           />

//         <label>Professor(a) Escola Dominical</label>
//         <input 
//         type="text" 
//         placeholder="Nome do Professor(a) Escola Dominical"
//         value={professorEscolaDominical} 
        
//         />

//          <label>Tema do Ensino Religioso</label>
//          <input 
//           type="text" 
//           placeholder="Tema do Ensino Religioso"
//           value={temaReligioso}
        
//            />

//         <label>Professor(a) Ensino Religioso</label>
//         <input 
//         type="text" 
//         placeholder="Nome do Professor(a) Ensino Religioso " 
//         value={professorReliligioso}
        
//         />

//      <div className='content-mf'>
//      <h3>Numero de Alunos Da Escola Dominical</h3>
//      <div className='tm'>
//          <div className="mf">
//            <label htmlFor="MeninosEscolaDominical">M</label>
//            <input 
//             type="number" 
//             placeholder="Meninos" 
//             name="MeninosEscolaDominical" 
//             value={MeninosEscolaDominical}
//             />
            
//           </div>
//          <div className="mf">
//            <label htmlFor="MeninasEscolaDominical">F</label>
//            <input   
//            type="number"  
//            placeholder="Meninas"  
//            name="MeninasEscolaDominical" 
//            value={MeninasEscolaDominical}
//            />
//          </div>
//        </div>
//      </div>

//       <div className='content-mf'>
//        <h3>Numero de Alunos Do Ensino Religioso</h3>
//           <div className='tm'>
//             <div className="mf">
//             <label htmlFor="MeninosEnsinoReligioso">M</label>
//             <input 
//               type="number" 
//               placeholder="Meninos" 
//               id="Meninos" 
//               name="MeninosEnsinoReligioso" 
//               value={MeninosEnsinoReligioso}
//               />
              
              
//           </div>
//           <div className="mf">
//             <label htmlFor="MeninasEnsinoReligioso">F</label>
//             <input 
//               type="number" 
//               placeholder="Meninas" 
//               name="MeninasEnsinoReligioso" 
//               value={MeninasEnsinoReligioso}
//               />
              
//           </div>
//           </div>
//        </div>

//        <label htmlFor="Oferenda">Oferenda</label>   
//        <input 
//         type="number" 
//         placeholder="Oferenda"
//         name='oferenda'
//         value={oferenda}
//         />
//       </form>     
//     </>)
// }