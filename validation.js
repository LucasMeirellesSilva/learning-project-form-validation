const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    validarDados();
})

// Validação dos Dados
function validarDados(){
    const userNome = document.getElementById('nome');
    validarNome(userNome);
    
    const userSobrenome = document.getElementById('sobrenome');
    validarSobrenome(userSobrenome);
    
    const userEmail = document.getElementById('email');
    validarEmail(userEmail);
    
    const userFone = document.getElementById('telefone');
    validarTelefone(userFone);
    
    
    const userCpf = document.getElementById('cpf');
    validarCpf(userCpf);
}

// Validação Nome
function validarNome(element){
    element.classList.remove('errado');
    let errorMessage = document.getElementById('nome-erro');
    errorMessage.textContent = '';
    isValid = true;
    if (element.value === '' || element.value.length < 3){
        isValid = false;
    }
    if (!isValid){
        errorMessage.textContent = 'Insira um nome válido';
        element.classList.add('errado');
    }
}

// Validação Sobrenome
function validarSobrenome(element){
    element.classList.remove('errado');
    let errorMessage = document.getElementById('sobrenome-erro');
    errorMessage.textContent = '';
    isValid = true;
    if (element.value === '' || element.value.length < 3){
        isValid = false;
    }
    if (!isValid){
        errorMessage.textContent = 'Insira um sobrenome válido';
        element.classList.add('errado');
    }
}

// Validação Email
function validarEmail(element){
    element.classList.remove('errado');
    let errorMessage = document.getElementById('email-erro');
    errorMessage.textContent = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;
    if (element.value === '' || !emailRegex.test(element.value)){
        isValid = false;
    }
    if (!isValid){
        errorMessage.textContent = 'Insira um Email válido';
        element.classList.add('errado');
    }
}
    
// Validação Telefone
function validarTelefone(element){
    element.classList.remove('errado');
    let errorMessage = document.getElementById('fone-erro');
    errorMessage.textContent = '';
    const telRegex = /^\d{2}\d{5}\d{4}$/;
    let isValid = true;
    if (element.value === '' || !telRegex.test(element.value)){
        isValid = false;
    }
    if (!isValid){
        errorMessage.textContent = 'Insira um telefone válido';
        element.classList.add('errado');
    }
}

// Validação CPF
function validarCpf(element){
    element.classList.remove('errado');
    let errorMessage = document.getElementById('cpf-erro');
    errorMessage.textContent = '';
    const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    let isValid = true;
    if (element.value === '' || !cpfRegex.test(element.value)){
        isValid = false;
    }
    if (!isValid){
        errorMessage.textContent = 'Insira um CPF válido';
        element.classList.add('errado');
    }
}

// Validação data de nascimento
// const userNascimento = document.getElementById('nascimento').value;

