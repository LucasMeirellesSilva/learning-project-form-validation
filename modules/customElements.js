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

export function toggleCheckbox(element){
    let checkbox = element.querySelector('.box');
    checkbox.checked = !checkbox.checked;
    element.classList.toggle('checked', checkbox.checked);
    let conteudo = element.querySelector('.language-content')
    conteudo.classList.toggle('checked', checkbox.checked);
};