let emails = []

 function validarEmail ( ){

   const  email = prompt ("Infome o email:")
   const confirmarEmail =  confirm ('Confirma o e-mail: ' + email)


    if (!confirmarEmail){
        alert ("E-mail não confirmado. Tente novamente.")
        return
    }
    
     
    emails.push(email);

    if (email.includes("@") && email.includes(".")) {

        alert ( 'E-mail válido')
        console.log("E-mails salvo", emails)
    } else {
        alert ("E-mail ínválido")
    }


 }

 validarEmail("")

let ArmazemPassword = []


 function CreatePassword (){
    let Password;


    do {
    
     Password = prompt ("Crie uma senha para realizar a comprar " )

    if (Password.length < 6  ){
     alert ("Senha pequena, tente novamente com acima de 6 caracteres.")
    } else  if ( Password.length >= 6 && Password.length <= 9) {
        alert ("Senha média. Salva com sucesso!")
        ArmazemPassword.push(Password)
       console.log('Senha criada com sucesso: ' + ArmazemPassword)
        break
    } else if ( Password.length >= 10){
        alert ( "Senha forte. Salva com sucesso")
        ArmazemPassword.push(Password)
        console.log('Senha criada com sucesso: ' + Password)
        break
    }

    

    } while (true)



 }


 CreatePassword()



 function  CadastrarProduct (nome, preco, quantidade, estoqueTotal) {
  
  {
    nome = "Mackbook",
    preco = 8000,
    quantidade = 2,
    estoqueTotal = 10
  }
 const confirmarValor = confirm ( "Valor da compra para e-mail: " +  emails + "\né " + preco + " cofirma ?")
  
 if (!confirmarValor) {
    alert("Valor não confirmado para comprar.")
 } else {
    alert ( 'Comprando...')
    alert ( "Aplicando desconto...")
   const Desconto = confirm ("Valor total com desconto aplicado: " + preco / quantidade +  " Confirma ?")
 
   if ( !Desconto){
      alert ( " Erro na compre. Tente novamente")
   } else {
     alert ("Parabens pela compra de um " + nome)
     alert("Comprado: " + nome + "\ne-mail do usuario: " + emails)
     console.log("Comprado: " + nome + "\ne-mail do usuario: " + emails)
   }

}
 }

 
 CadastrarProduct ()

 
 function ComprasnaLoja ( nomedoproduto, preco, quantidade){


     {
        nomedoproduto  =  "Mackbook",
        preco = 4000
        quantidade = 1
        

        }

        alert  ("Tabela do Produto: " + "\nNome do Produto: "
            + nomedoproduto + "\nPreço: " + preco + 
            "\nQuantidade Restantes: " + quantidade)

        console.log
        ("Tabela do Produto: " + "\nNome do Produto: "
             + nomedoproduto + "\nPreço: " + preco + 
             "\nQuantidade Restantes: " + quantidade)


 }

 ComprasnaLoja()
