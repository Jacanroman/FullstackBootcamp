import './App.css';
import Mensaje from './Mensaje.js'

const Description = () =>{
    return <p>
      Esta es la app del curso fullstack bootcamp
    </p>
}


function App() {

  const a = 2;
  const b = 3;
  return (
    <div className="App">
      <h1>Hola Mundo</h1>

      <Mensaje color='rojo' message='Estamos trabajando ' />
      <Mensaje color='azul' message='en un curso react' />
      <Description />
    </div>
  );
}

export default App;
