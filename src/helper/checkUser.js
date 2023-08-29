async function checkUserGitHub(user) {
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.message === 'Not Found') {
        // console.log('Usuario no encontrado');
        return false;
      } else {
        // console.log('Usuario encontrado');
        return true;
      }
    });
}

export default checkUserGitHub;
