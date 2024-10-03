// Função para criar uma Div de classe alerta, serve como container para o label e o ícone de alerta.
export function criarDiv() {
    const div = document.createElement('div');
    div.classList.add('alerta');
    div.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';
    return div;
}

// Função para criar um alerta em formato de imagem que contém uma animação inicial, o alerta dá feedback através de um hover na imagem, utilizando title.
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