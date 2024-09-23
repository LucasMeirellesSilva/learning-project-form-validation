export function criarDiv() {
    const div = document.createElement('div');
    div.classList.add('alerta');
    div.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';
    return div;
}

export function criarAlerta() {
    const alerta = document.createElement("img");
    alerta.classList.add('alerta');
    alerta.classList.add('animation');
    alerta.setAttribute('src', './icones/Alert-icon.png');
    alerta.setAttribute('alt', "Ícone de Alerta");
    alerta.setAttribute('title', '');
    alerta.style.cssText = "width: 24px;";
    return alerta;
}