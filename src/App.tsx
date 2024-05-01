import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <img id='logo-pill-pal' src="src\assets\LogoCompleto.svg" alt="LogoPillPal"/>
      <div className="texts">
        <h1>Login</h1>
        <p>Use seu e-mail para se conectar</p>
      </div>
      <form action="" method="post" className='form'>
        <div className="input-field">
            <input type="email" name="femail" id="femail" required/>
            <div className="labelline">E-mail</div>
        </div>
        <div className="input-field">
          <input type="password" name="fpassword" id="fpassword" required/>
          <div className="labelline">Senha</div>
        </div>
          <button type="submit">Entrar</button>
        
      </form>
      <div className="options">
        <a href="#">Esqueci a senha?</a>
        <a href="#">Não tem uma conta? Cadastre-se</a>
      </div>
    </>
  )
}

export default App
