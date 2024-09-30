import { removerAlerta, removerTodosAlertas } from "./modules/alertMethods.js";
import cepComplete from "./modules/cep.js";
import { toggleRadio, toggleCheckbox } from "./modules/customElements.js";
import { checkPersInfo, checkAdressInfo, checkExpInfo, checkAllInputs } from "./modules/validation.js";

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  removerTodosAlertas();
  if (checkAllInputs()) {
    window.alert('Suas informações foram enviadas com sucesso.');
  };
});

const persoInfoDiv = document.querySelector('.personal-info');
const adressInfoDiv = document.querySelector('.adress-info');
const inputsPerso = persoInfoDiv.querySelectorAll('input');
const inputsAdress = adressInfoDiv.querySelectorAll('input');
const inputTelefone = document.querySelector('input#telefone');
const inputCpf = document.querySelector('input#cpf');
const inputCep = document.querySelector('input#cep');
const linguagens = document.querySelectorAll('.linguagem');
const inputExp = document.querySelectorAll('.exp-input');
const selectSpan = document.getElementById('custom-select');
const options = document.querySelector('.options');
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
linguagens.forEach(item => {
    item.addEventListener('click', () => {
        toggleCheckbox(item);
    });
});
inputExp.forEach(item => {
    item.addEventListener('click', () => {
        toggleRadio(item);
    });
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              checkExpInfo();
              observer.disconnect();
          }
      });
  });

  const config = { attributes: true };

  observer.observe(item, config);
});

inputTelefone.addEventListener('input', formatTelefone);
inputCpf.addEventListener('input', formatCpf);
inputCep.addEventListener('input', formatCep);
inputCep.addEventListener('change', cepComplete);
inputCep.addEventListener('change', removerAlerta);
selectSpan.addEventListener('click', () => {
  options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
})
options.querySelectorAll('span').forEach( optionSpan => {
  optionSpan.addEventListener('click', () => {
      selectSpan.textContent = optionSpan.textContent;
      options.style.display = 'none';
      if(selectSpan.textContent === ''){
          selectSpan.textContent = 'Escolha uma opção:'
      }
  })
})
document.addEventListener('click', (event) => {
  if (options.style.display === 'flex' && event.target.closest('custom-select')){
      options.style.display = 'none';
  }
})

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