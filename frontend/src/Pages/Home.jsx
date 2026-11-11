import { useState } from 'react'
import '../App.css'
import reactLogo from '../assets/react.svg'
import Header from '../Header'
import Menu from '../Menu'

function App() {
  const [contador, setContador] = useState(0)
  function increment(){
    setContador(contador + 1);
  }

  return (
    <>
      <Header title="Statup Chuta Toco!" />
      <Menu />
      <section id="center">
        <div>
          <h1>Projeto PI</h1>
          <img src={reactLogo} className="framework" alt="Logo do React" />
          <p><input type="button" value="Clique" onClick={increment} /></p>
          <p>{contador}</p> Cliques!
        </div>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App;
