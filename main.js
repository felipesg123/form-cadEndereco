'use strict' ; // ativa o modo restrito
//código para 

//limpar consulta form já realizada
const limparformulario = () => {
    document.getElementById("inputRua").value
    document.getElementById("inputbairro").value
    document.getElementById("inputcidade").value
    document.getElementById("inputestado").value
}

// verifica se o cep é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// verifica o tamanho do cep
const sepvalido = (cep) => cep.length == 8 && eNumero(cep);

//função para preencher campos relasionados a cep
const  preencherForfmulario = (endereco) =>{
    document.getElementById('inputRua').value = endereco.logradouro;
    document.getElementById('inputbairro').value = endereco.localidade;
    document.getElementById('inputestado').value = endereco.uf;
}
