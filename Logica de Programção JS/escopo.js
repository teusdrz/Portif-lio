function contagemregressiva (numero ){
    if ( numero === 0) {
        console.log("BOOM ")
    return
    }
    console.log(numero);
    contagemregressiva(numero - 1);
}

contagemregressiva(10)


const mensagem = function ( ){
    console.log('Você mandou bem usando função anónima!')
    return 
    

}

mensagem()


const mostrarDados = function ( nome, idade) {

nome = "Matheus"
idade = "20"

console.log("Olá," + nome + "! voce tem " + idade + " anos.")
alert("Olá , " + nome + "! voce tem " + idade + " anos.")

    return
}

mostrarDados()



