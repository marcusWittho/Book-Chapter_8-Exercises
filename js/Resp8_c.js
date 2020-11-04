function atualizar() {  
  if(localStorage.getItem("ordem")) {
    var serv = localStorage.getItem("ordem").split(";");
    document.querySelector("#outPendentes").textContent = serv.length;
  }else {
    document.querySelector("#outPendentes").textContent = 0;
  }  
}

atualizar();

function ordemServico() {  
  var inServico = document.querySelector("#inServico");
  var servico = inServico.value;
  
  if(servico == "") {
    alert("Preencha corretamente o campo.");
    inServico.focus();
    return;
  }
  
  if (localStorage.getItem("ordem")) {
    var serv = localStorage.getItem("ordem").split(";");
    serv.push(servico);
    localStorage.setItem("ordem", serv.join(";"));
  }else {
    localStorage.setItem("ordem", servico);
  }
  
  atualizar();

  inServico.value = "";
  inServico.focus();
}

var btAdicionar = document.querySelector("#btAdicionar");
btAdicionar.addEventListener("click", ordemServico);


function executarServico() {
  if(localStorage.getItem("ordem")) {
    var serv = localStorage.getItem("ordem").split(";");
  }else {
    document.querySelector("#outExecucao").textContent = "";
    alert("Não há serviços pendentes.")
    return;
  }

  servExec = serv.shift();
  localStorage.setItem("ordem", serv.join(";"));

  atualizar();

  document.querySelector("#outExecucao").textContent = servExec;

  inServico.focus();
}

var btExecutar = document.querySelector("#btExecutar");
btExecutar.addEventListener("click", executarServico);