const linguagens = document.querySelectorAll('.linguagem');

linguagens.forEach(function(item) {
    item.addEventListener('click', function(){
        toggleCheckbox(item);
    });
});

function toggleCheckbox(element){
    let checkbox = element.querySelector('.box');
    checkbox.checked = !checkbox.checked;
    element.classList.toggle('checked', checkbox.checked);
    let conteudo = element.querySelector('.language-content')
    conteudo.classList.toggle('checked', checkbox.checked);
};






