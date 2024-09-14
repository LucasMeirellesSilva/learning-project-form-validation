document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    checkName()
  })

const alerta = document.createElement("img")
alerta.setAttribute('src', './icones/Alert-icon.png')
alerta.setAttribute('alt', "Ícone de Alerta")
alerta.style.cssText = "width: 32px;"

// const form = document.getElementById("formulario")
// form.append(alerta)

function checkName() {
    const nome = document.getElementById('nome')
    valor = String(nome.value)
    if (valor.lenght <= 2)
        alerta.setAttribute('title', 'O nome precisa ter mais que dois caractéres.')
        nome.parentNode.insertBefore(alerta, nome)
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