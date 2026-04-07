function login() {
  const senha = document.getElementById("senha").value;

  if (senha === "12345678") {
    document.getElementById("sistema").style.display = "block";
    alert("Login realizado!");
  } else {
    alert("Senha incorreta!");
  }
}

function salvar() {
  const mercadoria = {
    nome: document.getElementById("nome").value,
    codigo: document.getElementById("codigo").value,
    peso: document.getElementById("peso").value,
    tipo: document.getElementById("tipo").value,
    valor: document.getElementById("valor").value,
    endereco: {
      logradouro: document.getElementById("logradouro").value,
      complemento: document.getElementById("complemento").value,
      numero: document.getElementById("numero").value,
      cep: document.getElementById("cep").value,
      cidade: document.getElementById("cidade").value,
      estado: document.getElementById("estado").value
    }
  };

  const vazio =
    !mercadoria.nome &&
    !mercadoria.codigo &&
    !mercadoria.peso &&
    !mercadoria.tipo &&
    !mercadoria.valor &&
    !mercadoria.endereco.logradouro &&
    !mercadoria.endereco.complemento &&
    !mercadoria.endereco.numero &&
    !mercadoria.endereco.cep &&
    !mercadoria.endereco.cidade &&
    !mercadoria.endereco.estado;

  if (vazio) {
    alert("Preencha pelo menos um campo!");
    document.getElementById("resultado").textContent = "";
    return;
  }

  document.getElementById("resultado").textContent =
    JSON.stringify(mercadoria, null, 2);
}