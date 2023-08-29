import { useEffect, useState } from 'react';
import './User.css';

function User({ usuario }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${usuario}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Usuario no encontrado');
        }
      })
      .then((data) => {
        setUserData(data);
        setError(null);
      })
      .catch((error) => {
        setUserData(null);
        setError(error.message);
      });
  }, [usuario]);

  return (
    <div>
      {error ? (
        <p id="error">{error}</p>
      ) : userData ? (
        <div>
          <img src={userData.avatar_url} alt={userData.name} id="img" />
          <p>Nombre: {userData.name}</p>
          <p>Ubicación: {userData.location}</p>
          <p>Seguidores: {userData.followers}</p>
          <p>Siguiendo: {userData.following}</p>
          <p>Repositorios públicos: {userData.public_repos}</p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default User;
