// Uma função para autocompletar o CEP digitado pelo usuário, utilizando uma API.
export default function cepComplete() {
  const cep = document.querySelector('input[name="cep"]');
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          console.log(data);
          cep.value = data.cep;
          const estado = document.querySelector('#estado');
          estado.value = data.estado;
          const cidade = document.querySelector('#cidade');
          cidade.value = data.localidade;
          const bairro = document.querySelector('#bairro');
          bairro.value = data.bairro;
          const rua = document.querySelector('#rua');
          rua.value = data.logradouro;
        }
      })
      .catch(() => {
        console.log('Autocomplete do CEP não foi possível.')
      });
  }