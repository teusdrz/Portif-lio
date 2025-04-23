document.addEventListener("DOMContentLoaded", function () {
    const cpfInput = document.getElementById("cpf");
    const telefoneInput = document.getElementById("telefone");
    const nomeInput = document.getElementById("nome");


    cpfInput.addEventListener("keydown", bloquearNaoNumeros);
    telefoneInput.addEventListener("keydown", bloquearNaoNumeros);


    cpfInput.addEventListener("input", removerNaoNumeros);
    telefoneInput.addEventListener("input", removerNaoNumeros);

 
    nomeInput.addEventListener("keydown", bloquearNaoLetras);
    nomeInput.addEventListener("input", removerNaoLetras);
});

function bloquearNaoNumeros(event) {

    if (
        !(
            (event.key >= "0" && event.key <= "9") ||
            event.key === "Backspace" ||
            event.key === "Delete" || 
            event.key === "ArrowLeft" || 
            event.key === "ArrowRight" || 
            event.key === "Tab" 
        )
    ) {
        event.preventDefault();
    }
}

function removerNaoNumeros(event) {
    
    event.target.value = event.target.value.replace(/\D/g, "");
}

function bloquearNaoLetras(event) {
   
    if (
        !(
            (event.key >= "a" && event.key <= "z") || 
            (event.key >= "A" && event.key <= "Z") || 
            event.key === " " || 
            event.key === "Backspace" || 
            event.key === "Delete" || 
            event.key === "ArrowLeft" || 
            event.key === "ArrowRight" || 
            event.key === "Tab" 
        )
    ) {
        event.preventDefault(); 
    }
}

function removerNaoLetras(event) {
   
    event.target.value = event.target.value.replace(/[^a-zA-Z\s]/g, "");
}

function CliqeAlert(event) {

    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("data_nascimento").value;
    const telefone = document.getElementById("telefone").value;
    
    const apenasNumeros = /^\d{11}$/; 
    
    if (!apenasNumeros.test(cpf)) {
        alert("O CPF deve conter exatamente 11 dígitos numéricos. Tente novamente.");
        return;
    }
    if (!apenasNumeros.test(telefone)) {
        alert("O Telefone deve conter exatamente 11 dígitos numéricos. Tente novamente.");
        return;
    }

   
   
    const dadosPaciente = {
        nome: nome,
        cpf: cpf,
        dataNascimento: dataNascimento,
        telefone: telefone
    };


    console.log(`Dados do Paciente: \nNome: ${dadosPaciente.nome}\nCPF: ${dadosPaciente.cpf}\nData de Nascimento: ${dadosPaciente.dataNascimento}\nTelefone: ${dadosPaciente.telefone}`);

 
    alert("Dados enviados com sucesso!");
    alert(`Dados do Paciente: \nNome: ${dadosPaciente.nome}\nCPF: ${dadosPaciente.cpf}\nData de Nascimento: ${dadosPaciente.dataNascimento}\nTelefone: ${dadosPaciente.telefone}`);

  // Adicionando os dados na tabela
  const tabela = document.getElementById("pacientes-list");
  const novaLinha = document.createElement("tr");

  novaLinha.innerHTML = `
      <td>${dadosPaciente.nome}</td>
      <td>${dadosPaciente.cpf}</td>
      <td>${dadosPaciente.dataNascimento}</td>
      <td>${dadosPaciente.telefone}</td>
  `;

  tabela.appendChild(novaLinha);

  // Limpar os campos do formulário
  document.getElementById("nome").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("data_nascimento").value = "";
  document.getElementById("telefone").value = "";

  
  if (CliqeAlert == true) {
  const notificacao = document.createElement("div");
notificacao.classList.add("notificacao");
notificacao.textContent = "Dados enviados com sucesso!";


document.body.appendChild(notificacao);


setTimeout(() => {
    notificacao.remove();
}, 3000);
  }



 
}


