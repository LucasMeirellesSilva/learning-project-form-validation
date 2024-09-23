document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  removerTodosAlertas();
  // checkName();
  // checkSurname();
  // checkNascimento();
  // checkCpf();
  // checkEmail();
  // checkTelefone();
});

const persoInfoDiv = document.querySelector('.personal-info');
const adressInfoDiv = document.querySelector('.adress-info');
const inputsInfo = persoInfoDiv.querySelectorAll('input');
const inputsAdress = adressInfoDiv.querySelectorAll('input');
inputsInfo.forEach(input => {
  input.addEventListener('change', checkPersInfo)
})
inputsAdress.forEach(input => {
  input.addEventListener('change', checkAdressInfo)
})

function criarAlerta() {
  const alerta = document.createElement("img");
  alerta.classList.add('alerta');
  alerta.classList.add('animation');
  alerta.setAttribute('src', './icones/Alert-icon.png');
  alerta.setAttribute('alt', "Ícone de Alerta");
  alerta.setAttribute('title', '');
  alerta.style.cssText = "width: 24px;";
  return alerta;
}

// Função que remove alertas ao usuário editar um campo de texto específico.
function removerAlerta(e) {
  const inputParent = e.target.closest('.input-usuario');
  const alertaImg = inputParent.querySelector('img.alerta');
  if (alertaImg) {
      alertaImg.remove();
  }
  const divToRemove = inputParent.querySelector('div.alerta');
  if (divToRemove) {
    divToRemove.replaceWith(...divToRemove.childNodes);
  }
  e.target.classList.remove('input-alerta');
}

// Função que remove todos os alertas para impedir que eles acumulem a cada tentativa de envio do formulário.
function removerTodosAlertas() {
  const alertas = document.querySelectorAll('img.alerta');
  const divs = document.querySelectorAll('div.alerta');
  if (alertas) {
      alertas.forEach(alerta => {
          alerta.remove();
      })
  }
  if (divs) {
    divs.forEach(div => {
      div.replaceWith(...div.childNodes);
    })
  }
}

function criarDiv() {
  const div = document.createElement('div');
  div.classList.add('alerta');
  div.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';
  return div;
}

function appendAlert(div, label, alerta, elemento) {
  div.appendChild(label);
  div.appendChild(alerta);
  elemento.parentNode.insertBefore(div, elemento);
  elemento.classList.add('input-alerta');
  elemento.focus();
} 

function formatCpf() {
  const cpf = document.getElementById('cpf');
  let userText = cpf.value.replace(/\D/g, '');

  if (userText.length > 3) {
    userText = userText.replace(/(\d{3})(\d)/, '$1.$2');
  }
  if (userText.length > 7) {
    userText = userText.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  }
  if (userText.length > 10) {
    userText = userText.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  }

  cpf.value = userText
}

// function formatTelefone()

function mostrarElemento(className) {
  const elemento = document.querySelector(className);

  elemento.classList.remove('hidden');
  elemento.classList.add('show');
  
  setTimeout(() => {
    elemento.classList.add('aparecendo');
    
    elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }, 10);
}

function checkPersInfo() {
  const persoInfo = document.querySelector('.personal-info');
  const inputs = persoInfo.querySelectorAll('input');
  let pronto = true
  inputs.forEach(input => {
    if (input.value == '') {
      pronto = false
    }
  })
  if (pronto) {
    mostrarElemento('.adress-info')
  }
}

function checkAdressInfo() {
  const adressInfo = document.querySelector('.adress-info');
  const inputs = adressInfo.querySelectorAll('input');
  let pronto = true
  inputs.forEach(input => {
    if (input.value == '') {
      pronto = false
    }
  })
  if (pronto) {
    mostrarElemento('.conhecimentos')
  }
}

function contemNumeros(valor) {
  const numeros = [...Array(10).keys()];
  const contemNumero = numeros.some(num => valor.includes(num));
  return contemNumero;
}

function checkName() {
  const alerta = criarAlerta();
  const nome = document.getElementById('nome');
  const userText = String(nome.value);
  nome.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = nome.parentElement.querySelector('label');
  
  if (userText.length <= 2) {
      alerta.title += 'O nome precisa ter mais que dois caractéres.';
      appendAlert(div, label, alerta, nome);
  }
  if (userText.length > 50) {
      alerta.title += 'O nome não pode ter mais que cinquenta caractéres.';
      appendAlert(div, label, alerta, nome);
  } 
  if (contemNumeros(userText)) {
      alerta.title += '\nO nome não pode incluir números.';
      appendAlert(div, label, alerta, nome);
  }
}

function checkSurname() {
  const alerta = criarAlerta();
  const sobrenome = document.getElementById('sobrenome');
  const userText = String(sobrenome.value);
  sobrenome.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = sobrenome.parentElement.querySelector('label');
  
  if (userText.length <= 2) {
      alerta.title += 'O sobrenome precisa ter mais que dois caractéres.';
      appendAlert(div, label, alerta, sobrenome);
  } 
  if (userText.length > 50) {
      alerta.title += 'O sobrenome não pode ter mais que cinquenta caractéres.';
      appendAlert(div, label, alerta, sobrenome);
  } 
  if (contemNumeros(userText)) {
      alerta.title += '\nO sobrenome não pode incluir números.';
      appendAlert(div, label, alerta, sobrenome);
  }
}

function checkNascimento() {
  const alerta = criarAlerta();
  const nascimento = document.getElementById('nascimento');
  const data = new Date(nascimento.value);
  nascimento.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = nascimento.parentElement.querySelector('label');

  function isFutureDate(date) {
    const currentDate = new Date();

    return date > currentDate;
  }


  if (data == "Invalid Date") {
    alerta.title += 'Data inválida'
    appendAlert(div, label, alerta, nascimento)
  }
  if (isFutureDate(data)) {
    alerta.title += 'Você não pode ter nascido no futuro :).';
    appendAlert(div, label, alerta, nascimento);
  }
}

function checkCpf() {
  const alerta = criarAlerta();
  const cpf = document.getElementById('cpf');
  const userText = String(cpf.value);
  const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
  cpf.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = cpf.parentElement.querySelector('label');

  if (!cpfRegex.test(userText)) {
    alerta.title += 'O CPF não está correto.';
    appendAlert(div, label, alerta, cpf)
  }
}

function checkEmail() {
  const alerta = criarAlerta();
  const email = document.getElementById('email');
  const userText = String(email.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  email.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = email.parentElement.querySelector('label');

  if (!emailRegex.test(userText)) {
    alerta.title += 'O Email não está correto.';
    appendAlert(div, label, alerta, email)
  }
}

function checkTelefone() {
  const alerta = criarAlerta();
  const telefone = document.getElementById('telefone');
  const userText = String(telefone.value);
  const telRegex = /^\d{2}\d{5}\d{4}$/;
  telefone.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = telefone.parentElement.querySelector('label');

  if (!telRegex.test(userText)) {
    alerta.title += 'O Telefone não está correto.';
    appendAlert(div, label, alerta, telefone)
  }
}