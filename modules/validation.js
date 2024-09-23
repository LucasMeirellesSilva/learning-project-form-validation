import { criarDiv, criarAlerta } from "./components.js";
import { removerAlerta, appendAlert } from "./alertMethods.js";

function hasNumbers(valor) {
    const numeros = [...Array(10).keys()];
    const contemNumero = numeros.some(num => valor.includes(num));
    return contemNumero;
  }

function isEmpty(valor) {
    return valor == ''
}

export function checkName() {
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
  
export function checkSurname() {
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
  
export function checkNascimento() {
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
      alerta.title += 'Data inválida';
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
  
export function checkCpf() {
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
  
export function checkEmail() {
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
  
export function checkTelefone() {
    const alerta = criarAlerta();
    const telefone = document.getElementById('telefone');
    const userText = String(telefone.value);
    const telRegex = /^\d{2}\d{5}\d{4}$/;
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
  
export function checkPersInfo() {
    const persoInfo = document.querySelector('.personal-info');
    const inputs = persoInfo.querySelectorAll('input');
    let pronto = true;
    inputs.forEach(input => {
      if (input.value == '') {
        pronto = false;
      }
    })
    if (pronto) {
      mostrarElemento('.adress-info');
      this.removeEventListener('change', checkPersInfo)
    }
  }
  
export function checkAdressInfo() {
    const adressInfo = document.querySelector('.adress-info');
    const inputs = adressInfo.querySelectorAll('input');
    let pronto = true;
    inputs.forEach(input => {
      if (input.value == '') {
        pronto = false;
      }
    })
    if (pronto) {
      mostrarElemento('.conhecimentos');
      setTimeout(() => {
        mostrarElemento('.professional-info');
      }, 1000)
      this.removeEventListener('change', checkAdressInfo)
    }
  }
  
export function checkProfInfo() {
    mostrarElemento('.info-adicional');
      setTimeout(() => {
        mostrarElemento('.btn-wrapper');
        document.querySelector('.btn-wrapper').style.display = 'flex';
      }, 1000)
      this.removeEventListener('change', checkProfInfo)
  }