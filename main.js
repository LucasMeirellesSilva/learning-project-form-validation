import { removerAlerta, removerTodosAlertas } from "./modules/alertMethods.js";
import cepComplete from "./modules/cep.js";
import { checkPersInfo, checkAdressInfo, checkProfInfo, checkAllInputs } from "./modules/validation.js";

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  removerTodosAlertas();
  if (checkAllInputs()) {
    window.alert('Suas informações foram enviadas com sucesso.')
  };
});

const persoInfoDiv = document.querySelector('.personal-info');
const adressInfoDiv = document.querySelector('.adress-info');
const inputsPerso = persoInfoDiv.querySelectorAll('input');
const inputsAdress = adressInfoDiv.querySelectorAll('input');
const radiosProf = document.querySelectorAll('input[name="experiencia"]');
const inputTelefone = document.querySelector('input#telefone');
const inputCpf = document.querySelector('input#cpf');
const inputCep = document.querySelector('input#cep');
inputsPerso.forEach(input => {
  if (input.id == 'nascimento') {
    input.addEventListener('blur', checkPersInfo);
  } else {
    input.addEventListener('change', checkPersInfo);
  }
})
inputsAdress.forEach(input => {
  input.addEventListener('change', checkAdressInfo);
})
radiosProf.forEach(radio => {
  radio.addEventListener('change', checkProfInfo);
})
inputTelefone.addEventListener('input', formatTelefone);
inputCpf.addEventListener('input', formatCpf);
inputCep.addEventListener('input', formatCep);
inputCep.addEventListener('change', cepComplete);
inputCep.addEventListener('change', removerAlerta);

function formatTelefone() {
  const telefone = document.getElementById('telefone');
  let userText = telefone.value.replace(/\D/g, '')

  if (userText.length > 2) {
    userText = userText.replace(/(\d{2})(\d)/, '$1 $2');
  }
  if (userText.length > 8) {
    userText = userText.replace(/(\d{2})\ (\d{5})(\d)/, '$1 $2-$3');
  }

  telefone.value = userText;
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

function formatCep() {
  const cep = document.getElementById('cep');
  let userText = cep.value.replace(/\D/g, '');

  if (userText.length > 5) {
    userText = userText.replace(/(\d{5})(\d)/, '$1-$2');
  }

  cep.value = userText
}