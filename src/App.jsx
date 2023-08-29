import { useState } from 'react';
import User from './components/User';

function App() {
  const [usuario, setUsuario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueInput = e.target.usuario.value;
    setUsuario(valueInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>GitHub request</h1>
        <h2>¿Qué usuario quieres espiar?</h2>
        <input type="text" name="usuario" placeholder="Usuario" />
      </form>
      {usuario && <User usuario={usuario} />}
    </>
  );
}

export default App;
