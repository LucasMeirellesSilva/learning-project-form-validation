import { removerAlerta, removerTodosAlertas } from "./modules/alertMethods.js";
import cepComplete from "./modules/cep.js";
import { checkName, checkSurname, checkNascimento, checkCpf, checkEmail, checkTelefone, checkPersInfo, checkAdressInfo, checkProfInfo } from "./modules/validation.js";

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  removerTodosAlertas();
  const isNameValid = checkName();
  const isSurnameValid = checkSurname();
  const isNascimentoValid = checkNascimento();
  const isCpfValid = checkCpf();
  const isEmailValid = checkEmail();
  const isTelefoneValid = checkTelefone();
});

const persoInfoDiv = document.querySelector('.personal-info');
const adressInfoDiv = document.querySelector('.adress-info');
const inputsInfo = persoInfoDiv.querySelectorAll('input');
const inputsAdress = adressInfoDiv.querySelectorAll('input');
const radiosProf = document.querySelectorAll('input[name="experiencia"]');
const inputCpf = document.querySelector('input#cpf');
const inputCep = document.querySelector('input#cep');
inputsInfo.forEach(input => {
  input.addEventListener('change', checkPersInfo);
})
inputsAdress.forEach(input => {
  input.addEventListener('change', checkAdressInfo);
})
radiosProf.forEach(radio => {
  radio.addEventListener('change', checkProfInfo);
})
inputCpf.addEventListener('input', formatCpf);
inputCep.addEventListener('change', cepComplete);
inputCep.addEventListener('change', removerAlerta);

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