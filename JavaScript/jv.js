function login() {
  var logado = 0;
  var usuario = document.getElementsByName('usuario')[0].value.toLowerCase();
  var senha = document.getElementById('senha').value.toLowerCase();

  if (usuario === "admin" && senha === "123456") {
      window.location.href = "index.html";
      logado = 1;
  } else {
      alert("Acesso Negado. Dados incorretos");
  }
}

function cadastro() {
  alert("Cadastrado com sucesso!");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("botao-cadastrar").addEventListener("click", function() {
      document.getElementById("form-cadastrar").style.display = "block";
      document.getElementById("section-login").style.display = "none";
      document.getElementById("botao-logar").style.display = "block";
      document.getElementById("botao-cadastrar").style.display = "none";
  });

  document.getElementById("botao-logar").addEventListener("click", function() {
      document.getElementById("form-cadastrar").style.display = "none";
      document.getElementById("section-login").style.display = "block";
      document.getElementById("botao-logar").style.display = "none";
      document.getElementById("botao-cadastrar").style.display = "block";
  });
});
