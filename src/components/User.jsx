import { useEffect, useState } from 'react';
import './User.css';
import formatDate from '../helper/formatDate.js';

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
  console.log(userData);

  // const URL = `https://api.github.com/users/${userData.login}`;

  return (
    <div>
      {error ? (
        <p id="error">{error}</p>
      ) : userData ? (
        <div>
          <img src={userData.avatar_url} alt={userData.name} id="img" />
          {/* <table id="table"> */}
          <tr>
            <td>Nombre: {userData.name}</td>
          </tr>
          <tr>
            <td>Seguidores: {userData.followers}</td>
          </tr>
          <tr>
            <td>Siguiendo: {userData.following}</td>
          </tr>
          <tr>
            <td>Miembro desde: {formatDate(userData.created_at)}</td>
          </tr>
          <tr>
            <td>Repositorios públicos: {userData.public_repos}</td>
          </tr>
          {userData.location !== null && (
            <tr>
              <td>Ubicación: {userData.location}</td>
            </tr>
          )}
          {userData.email !== null && (
            <tr>
              <td>Email: {userData.email}</td>
            </tr>
          )}
          {userData.twitter_username !== null && (
            <tr>
              <td>
                Twitter:{' '}
                <a href={`https://twitter.com/${userData.twitter_username}`}>
                  @{userData.twitter_username}
                </a>
              </td>
            </tr>
          )}
          <tr>
            <td>
              Página: <a href={`https://github.com/${userData.login}`}>LINK</a>
            </td>
          </tr>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default User;
