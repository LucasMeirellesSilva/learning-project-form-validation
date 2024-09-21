document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  removerTodosAlertas();
  checkName();
  checkSurname();
});

function criarAlerta() {
  const alerta = document.createElement("img");
  alerta.classList.add('alerta');
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
  e.target.classList.remove('input-alerta')
}

// Função que remove todos os alertas para impedir que eles acumulem a cada tentativa de envio do formulário.
function removerTodosAlertas() {
  const alertas = document.querySelectorAll('img.alerta');
  if (alertas) {
      alertas.forEach(alerta => {
          alerta.remove();
      })
  }
}

function criarDiv() {
  const div = document.createElement('div');
  div.classList.add('alerta');
  div.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';
  return div;
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

  function appendAlert() {
    div.appendChild(label);
    div.appendChild(alerta);
    nome.parentNode.insertBefore(div, nome);
    nome.classList.add('input-alerta');
    nome.focus();
  }
  
  if (userText.length <= 2) {
      alerta.title += 'O nome precisa ter mais que dois caractéres.';
      appendAlert();
  }
  if (userText.length > 50) {
      alerta.title += 'O nome não pode ter mais que cinquenta caractéres.';
      appendAlert();
  } 
  if (contemNumeros(userText)) {
      alerta.title += '\nO nome não pode incluir números.';
      appendAlert();
  }
}

function checkSurname() {
  const alerta = criarAlerta();
  const sobrenome = document.getElementById('sobrenome');
  const userText = String(sobrenome.value);
  sobrenome.addEventListener('change', removerAlerta);
  const div = criarDiv();
  const label = sobrenome.parentElement.querySelector('label');

  function appendAlert() {
    div.appendChild(label);
    div.appendChild(alerta);
    sobrenome.parentNode.insertBefore(div, sobrenome);
    sobrenome.classList.add('input-alerta');
    sobrenome.focus();
  }
  
  if (userText.length <= 2) {
      alerta.title += 'O sobrenome precisa ter mais que dois caractéres.';
      appendAlert();
  } 
  else if (userText.length > 50) {
      alerta.title += 'O sobrenome não pode ter mais que cinquenta caractéres.';
      appendAlert();
  } 
  else if (contemNumeros(userText)) {
      alerta.title += '\nO sobrenome não pode incluir números.';
      appendAlert();
  }
}

// function checkData() {
//     const data = document.querySelectorAll("input")
//     data.forEach(e => {
//         if (e.type == 'number' || 'text'){
//             if (e.value == '') {
//                 let errorMsg = document.createElement('span');
//                 errorMsg.textContent = `Elemento ${e.name} não pode ficar em branco.`;
//                 errorMsg.style.cssText = "color : red; font-size: 0.8rem;"
//                 e.parentElement.append(errorMsg)
//                 e.style.border = "1px solid red"
//             }
//         }
//     });
//     console.log(data)
// }