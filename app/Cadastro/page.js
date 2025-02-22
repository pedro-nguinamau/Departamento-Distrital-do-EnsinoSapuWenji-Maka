import '../singIn.css'
export default function SingIn() {
    return(<>
    <div className='ti'>
   <img src="/images.jpeg" alt="Logo INA" /><h1>Depaetameno do Ensino <br></br> Sapú Wenji-Maka</h1>
   </div>
        <div className='container' id="container"> 
        <form className="form" id="form" >
                <label>Nome</label>
                <input type="name" placeholder="Nome" id="nome" />
        
                <label>Palavra-Passe</label>
                <input type="password" placeholder="Palavra-Passe" id="palavra_passe" />

                <label>Número de Telefone</label>
                <input type="name" placeholder="Número de Telefone" id="numero_telefone" />
    
                <label>Selecione a Comunidade</label>
                <select id="comunidade">
                <option value="" disabled selected>Selecione a Comunidade</option>
                <option value="1">Wenji Maka</option>
                <option value="2">Estrela D'Alva</option>
                <option value="3">Vila Verde</option>
                <option value="4">Primicias</option>
                <option value="5">Sagrada Sapú</option>
                <option value="6">Caminho de Paz</option>
                <option value="7">Sal</option>
                <option value="8">Luz</option>
                <option value="9">Casa Azul</option>
                <option value="10">Coração Humilde</option>
                <option value="11">Oração da Fé</option>
            </select>
      
            
            <div className="Registro">
              <p>Ainda não está Registrado</p><span><a href="/">Entar</a></span>
            </div>
            
            <button type="submit" id="send">Entrar</button>
        </form>
    </div>
    </>)
}