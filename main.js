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
const eNumero = (numero) => /^[0-9]+$/