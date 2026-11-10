import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Menu from './Menu'

function App() {
  let contador = 0;
  function increment(){
    contador++;
    console.log(contador);
  }

  return (
    <>
      <Header title="Bem vindo Denisson" />
      <Menu />
      <section id="center">
        
        <div>
          <h1>Projeto PI</h1>  
          <p><input type="button" value="Clique" onClick={increment} /></p>
          <p>{contador}</p> Cliques!
        </div>
        
      </section>
      
      <section id="spacer"></section>
    </>
  )
}

export default App
