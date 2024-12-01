function buscarEnderecoPorCEP(event) {
    event.preventDefault();

    var cep = document.getElementById('cep').value;
    // Fazendo requisição para a API do ViaCEP
    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('endereco').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('uf').value = data.uf;
                // Se houver número no retorno, preenche o campo número
                if (data.numero) {
                    document.getElementById('numero').value = data.numero;
                }
                // Se houver complemento no retorno, preenche o campo complemento
                if (data.complemento) {
                    document.getElementById('complemento').value = data.complemento;
                }
            } else {
                alert('CEP não encontrado');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            alert('Preencha o Campo Corretamente para buscar CEP');
        });
}
