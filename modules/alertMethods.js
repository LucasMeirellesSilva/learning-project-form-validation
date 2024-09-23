// Função que remove alertas ao usuário editar um campo de texto específico.
export function removerAlerta(e) {
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
export function removerTodosAlertas() {
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

export function appendAlert(div, label, alerta, elemento) {
  div.appendChild(label);
  div.appendChild(alerta);
  elemento.parentNode.insertBefore(div, elemento);
  elemento.classList.add('input-alerta');
  elemento.focus();
} 