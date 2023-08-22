function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "" || password === "") {

      alert("Por favor, completa ambos campos.");
    } else {
      localStorage.setItem('authenticated', 'true'); //se guarda para mostrar que esta autentificado
      localStorage.setItem('username', username); //se guarda en el localstorage el nombre de usuario
      window.location.href = "index.html";
    }
  }



  function isAuthenticated() {
    return localStorage.getItem('authenticated') === 'true';

  } 