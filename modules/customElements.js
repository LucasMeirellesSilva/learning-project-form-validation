// Função para customização dos input radio
// Esconde o input e marca ele como ativo ao clicar na div que encapsula ele
// aplica um efeito de profundidade com a classe checked
export function toggleRadio(element){
    const radios = document.querySelectorAll('input[name="experiencia"]');
    radios.forEach((radio) => {
        radio.checked = false;
        radio.closest('.exp-input').classList.remove('checked');
    });
    const checkbox = element.querySelector('.box');
    checkbox.checked = true;
    element.classList.add('checked');
}

// Função para customização dos input checkbox
// Esconde o input e marca ele como ativo ao clicar na div que encapsula ele
// aplica um efeito de profundidade com a classe checked
export function toggleCheckbox(element){
    const checkbox = element.querySelector('.box');
    checkbox.checked = !checkbox.checked;
    element.classList.toggle('checked', checkbox.checked);
    const conteudo = element.querySelector('.language-content')
    conteudo.classList.toggle('checked', checkbox.checked);
};