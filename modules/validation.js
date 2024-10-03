// Vai da um trabalhinho comentar tudo isso aqui, da um 10 pra nós sor, valeu
import { criarDiv, criarAlerta } from "./components.js";
import { removerAlerta, appendAlert } from "./alertMethods.js";

// Função boolean que checa se em uma string contém números.
function hasNumbers(userText) {
  return /\d/.test(userText);
  }

// Função boolean que checa se uma string está vazia ou se contém apenas espaços em branco.
function isEmpty(userText) {
  return /^\s*$/.test(userText);
}

// Função que checa o input nome e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkName() {
  const alerta = criarAlerta();
  const nome = document.getElementById('nome');
  const userText = String(nome.value);
  nome.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = nome.parentElement.querySelector('label');
  
  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'O nome não pode estar vazio.';
    appendAlert(div, label, alerta, nome);
    isValid = false;
  }

  else if (userText.length <= 2) {
    alerta.title += 'O nome precisa ter mais que dois caractéres.';
    appendAlert(div, label, alerta, nome);
    isValid = false;
  }

  if (userText.length > 50) {
    alerta.title += 'O nome não pode ter mais que cinquenta caractéres.';
    appendAlert(div, label, alerta, nome);
    isValid = false;
  }

  if (hasNumbers(userText)) {
    alerta.title += '\nO nome não pode incluir números.';
    appendAlert(div, label, alerta, nome);
    isValid = false;
  }

  return isValid;
}

// Função que checa o input sobrenome e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkSurname() {
  const alerta = criarAlerta();
  const sobrenome = document.getElementById('sobrenome');
  const userText = String(sobrenome.value);
  sobrenome.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = sobrenome.parentElement.querySelector('label');
  
  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'O sobrenome não pode estar vazio.';
    appendAlert(div, label, alerta, sobrenome);
    isValid = false;
    }

  else if (userText.length <= 2) {
    alerta.title += 'O sobrenome precisa ter mais que dois caractéres.';
    appendAlert(div, label, alerta, sobrenome);
    isValid = false;
  }

  if (userText.length > 50) {
    alerta.title += 'O sobrenome não pode ter mais que cinquenta caractéres.';
    appendAlert(div, label, alerta, sobrenome);
    isValid = false;
  }

  if (hasNumbers(userText)) {
    alerta.title += '\nO sobrenome não pode incluir números.';
    appendAlert(div, label, alerta, sobrenome);
    isValid = false;
  }

  return isValid;
}
  
// Função que checa o input data de nascimento e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkNascimento() {
  const alerta = criarAlerta();
  const nascimento = document.getElementById('nascimento');
  const data = new Date(nascimento.value);
  nascimento.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = nascimento.parentElement.querySelector('label');
  
  let isValid = true;

  function isFutureDate(date) {
    const currentDate = new Date();
    return date > currentDate;
  }

  if (data == "Invalid Date") {
    alerta.title += 'A data é inválida';
    appendAlert(div, label, alerta, nascimento);
    isValid = false;
  }

  if (isFutureDate(data)) {
    alerta.title += 'Você não pode ter nascido no futuro :).';
    appendAlert(div, label, alerta, nascimento);
    isValid = false;
  }

  return isValid;
}

// Função que checa o input CPF e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkCpf() {
  const alerta = criarAlerta();
  const cpf = document.getElementById('cpf');
  const userText = String(cpf.value);
  const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
  cpf.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = cpf.parentElement.querySelector('label');
  
  let isValid = true;
  
  if (isEmpty(userText)) {
    alerta.title += 'O CPF não pode estar vazio.';
    appendAlert(div, label, alerta, cpf);
    isValid = false;
  }

  else if (!cpfRegex.test(userText)) {
    alerta.title += 'O CPF não está correto.';
    appendAlert(div, label, alerta, cpf);
    isValid = false;
  }

  return isValid;
}

// Função que checa o input email e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkEmail() {
  const alerta = criarAlerta();
  const email = document.getElementById('email');
  const userText = String(email.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  email.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = email.parentElement.querySelector('label');
  
  let isValid = true;
  
  if (isEmpty(userText)) {
    alerta.title += 'O Email não pode estar vazio.';
    appendAlert(div, label, alerta, email);
    isValid = false;
  }

  else if (!emailRegex.test(userText)) {
    alerta.title += 'O Email não está correto.';
    appendAlert(div, label, alerta, email);
    isValid = false;
  }

  return isValid;
}

// Função que checa o input telefone e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkTelefone() {
  const alerta = criarAlerta();
  const telefone = document.getElementById('telefone');
  const userText = String(telefone.value);
  const telRegex = /^\d{2} \d{5}-\d{4}$/;
  telefone.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = telefone.parentElement.querySelector('label');
  
  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'O Telefone não pode estar vazio.';
    appendAlert(div, label, alerta, telefone);
    isValid = false;
  }

  else if (!telRegex.test(userText)) {
    alerta.title += 'O Telefone não está correto.';
    appendAlert(div, label, alerta, telefone);
    isValid = false;
  }

  return isValid;
}

// Função que checa o input país e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkPais() {
  const alerta = criarAlerta();
  const pais = document.getElementById('pais');
  const userText = String(pais.value);
  pais.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = pais.parentElement.querySelector('label');

  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'O País não pode estar vazio.';
    appendAlert(div, label, alerta, pais);
    isValid = false;
  }

  if (hasNumbers(userText)) {
    alerta.title += 'O País não pode conter números.';
    appendAlert(div, label, alerta, pais);
    isValid = false;
  }

  return isValid;
}

// Função que checa o input Cep e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkCep() {
  const alerta = criarAlerta();
  const cep = document.getElementById('cep');
  const userText = String(cep.value);
  const cepRegex = /^\d{5}-\d{3}/;
  cep.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = cep.parentElement.querySelector('label');

  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'O CEP não pode estar vazio.';
    appendAlert(div, label, alerta, cep);
    isValid = false;
  }

  else if (!cepRegex.test(userText)) {
    alerta.title += 'O CEP não está correto.';
    appendAlert(div, label, alerta, cep);
    isValid = false;
  }
  
  return isValid;
}

// Função que checa o input estado e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkEstado() {
  const alerta = criarAlerta();
  const estado = document.getElementById('estado');
  const userText = String(estado.value);
  estado.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = estado.parentElement.querySelector('label');

  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'O Estado não pode estar vazio.';
    appendAlert(div, label, alerta, estado);
    isValid = false;
  }

  if (hasNumbers(userText)) {
    alerta.title += 'O Estado não pode conter números.';
    appendAlert(div, label, alerta, estado);
    isValid = false;
  }

  return isValid;
}

// Função que checa o input cidade e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkCidade() {
  const alerta = criarAlerta();
  const cidade = document.getElementById('cidade');
  const userText = String(cidade.value);
  cidade.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = cidade.parentElement.querySelector('label');

  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'A Cidade não pode estar vazia.';
    appendAlert(div, label, alerta, cidade);
    isValid = false;
  }

  if (hasNumbers(userText)) {
    alerta.title += 'A Cidade não pode conter números.';
    appendAlert(div, label, alerta, cidade);
    isValid = false;
  }

  return isValid;
}

// Função que checa o input baiirro e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkBairro() {
  const alerta = criarAlerta();
  const bairro = document.getElementById('bairro');
  const userText = String(bairro.value);
  bairro.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = bairro.parentElement.querySelector('label');

  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'O Bairro não pode estar vazio.';
    appendAlert(div, label, alerta, bairro);
    isValid = false;
  }

  if (hasNumbers(userText)) {
    alerta.title += 'O Bairro não pode conter números.';
    appendAlert(div, label, alerta, bairro);
    isValid = false;
  }

  return isValid;
}

// Função que checa o input rua e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkRua() {
  const alerta = criarAlerta();
  const rua = document.getElementById('rua');
  const userText = String(rua.value);
  rua.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = rua.parentElement.querySelector('label');

  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'A Rua não pode estar vazia.';
    appendAlert(div, label, alerta, rua);
    isValid = false;
  }

  if (hasNumbers(userText)) {
    alerta.title += 'A Rua não pode conter números.';
    appendAlert(div, label, alerta, rua);
    isValid = false;
  }

  return isValid;
}

// Função que checa o input numero e cria um alerta com os diferentes tipos de validação necessária, se passar por todas validações ela retorna true.
function checkNumero() {
  const alerta = criarAlerta();
  const numero = document.getElementById('numero');
  const userText = String(numero.value);
  numero.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = numero.parentElement.querySelector('label');

  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'O Número não pode estar vazio.';
    appendAlert(div, label, alerta, numero);
    isValid = false;
  }

  return isValid;
}

// Função que checa o container de conhecimentos e cria um alerta caso nenhum conhecimento tenha sido marcado, caso algum tenha sido marcado ela retorna true.
function checkConhecimentos() {
  const alerta = criarAlerta();
  const conhecimentos = document.querySelector('.conhecimentos');
  const inputs = conhecimentos.querySelectorAll('input[type="checkbox"]');

  let isValid = false;

  inputs.forEach(input => {
    if (input.checked == true) {
      isValid = true;
    }
  })

  if (isValid == false) {
    alerta.title += 'Você precisa marcar ao menos uma linguagem.';
    alerta.style.marginRight = '20px';
    alerta.style.width = '32px';
    const container = conhecimentos.querySelector('.title-container');
    container.classList.add('alerta-container');
    container.appendChild(alerta);
  }

  return isValid;
}

// Função que checa o container de experiencias e cria um alerta caso nenhum nivel de experiencia ou profissão tenha sido selecionada, caso ambos estejam marcados ela retorna true.
function checkExperiencia() {
  const alerta = criarAlerta();
  const experiencia = document.querySelector('.experiencia');
  const inputs = document.querySelectorAll('input[name="experiencia"]');
  const select = document.querySelector('#custom-select');

  let isValid = false;

  inputs.forEach(input => {
    if (input.checked == true && select.textContent != 'Escolha uma opção:') {
      isValid = true;
    }
  })

  if (isValid == false) {
    alerta.title += 'Você precisa marcar seu nível de experiência ou profissão.';
    alerta.style.marginRight = '20px';
    alerta.style.width = '32px';
    const container = experiencia.querySelector('.title-container');
    container.classList.add('alerta-container');
    container.appendChild(alerta);
  }

  return isValid;
}

// Função que checa o textarea de informação adicional e cria um alerta caso nenhuma informação adicional seja digitada, caso contrário ela retorna true.
function checkAdditionalInfo() {
  const alerta = criarAlerta();
  const descricao = document.getElementById('descricao');
  const infoAdd = document.querySelector('.info-adicional');
  const userText = String(descricao.value);

  let isValid = true;

  if (isEmpty(userText)) {
    alerta.title += 'A descrição não pode estar vazia.';
    alerta.style.marginRight = '20px';
    alerta.style.width = '32px';
    const container = infoAdd.querySelector('.title-container');
    container.classList.add('alerta-container');
    container.appendChild(alerta);
    isValid = false;
  }

  return isValid;
}

// Função que remove a classe "escondida" e adiciona uma animação de opacidade para um elemento (container) ser mostrado na tela.
function mostrarElementos(className) {
  const elementos = document.querySelector(className);

  elementos.classList.remove('hidden');
  elementos.classList.add('show');
  
  setTimeout(() => {
    elementos.classList.add('aparecendo');
    
    elementos.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }, 10);
}

// Função que checa o container de informações pessoais possui algum input em branco, caso nenhum esteja em branco ela chama a função mostrarelemento e permite ao usuario adicionar mais informações.
export function checkPersInfo() {
  const persoInfo = document.querySelector('.personal-info');
  const inputs = persoInfo.querySelectorAll('input');
  let ready = true;
  inputs.forEach(input => {
    if (input.value == '') {
      ready = false;
    }
  })
  if (ready) {
    mostrarElementos('.adress-info');
    inputs.forEach(input => {
      input.removeEventListener('change', checkPersInfo);
      input.removeEventListener('blur', checkPersInfo);
    })
  }
}
  
// Função que checa o container de informações de endereço possui algum input em branco, caso nenhum esteja em branco ela chama a função mostrarelemento e permite ao usuario adicionar mais informações.
export function checkAdressInfo() {
  const adressInfo = document.querySelector('.adress-info');
  const inputs = adressInfo.querySelectorAll('input');
  let ready = true;
  inputs.forEach(input => {
    if (input.value == '') {
      ready = false;
    }
  })
  if (ready) {
    mostrarElementos('.conhecimentos');
    setTimeout(() => {
      mostrarElementos('.experiencia');
    }, 1000)
    inputs.forEach(input => {
      input.removeEventListener('change', checkAdressInfo);
    })
  }
}

// Função que checa o container de experiências pessoais possui algum input em branco, caso nenhum esteja em branco ele chama a função mostrarelemento e permite ao usuario adicionar um texto adicional e enviar o formulário.
export function checkExpInfo() {
  const inputs = document.querySelectorAll('input[name="experiencia"]');
  mostrarElementos('.info-adicional');
    setTimeout(() => {
      mostrarElementos('.btn-wrapper');
      document.querySelector('.btn-wrapper').style.display = 'flex';
    }, 1000)
    inputs.forEach(input => {
      input.removeEventListener('change', checkExpInfo);
    })
}

// Função que faz a validação de todos os inputs e ocorre quando o botão de submit for clicado, se todas validações retornarem true, ele envia um feedback que as informações foram enviadas.
export function checkAllInputs() {
  let ready = true
  const validators = [
    checkName(),
    checkSurname(),
    checkNascimento(),
    checkCpf(),
    checkEmail(),
    checkTelefone(),
    checkPais(),
    checkCep(),
    checkEstado(),
    checkCidade(),
    checkBairro(),
    checkRua(),
    checkNumero(),
    checkConhecimentos(),
    checkExperiencia(),
    checkAdditionalInfo()
  ];

  validators.forEach(validate => {
    if (!validate) {
      ready = false;
    }
  })

  return ready;
}