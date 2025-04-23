function calcular (operacao, a, b) {
    return operacao(a, b);
}

function somar (x, y) {
     return x + y;
}

const resultado = calcular(somar, 5, 3);
console.log(`O resultado da soma é: ${resultado}`)







function People (Peoplefunc, address, country){
    return Peoplefunc(address, country);
}



function AddPeople (address, country) {
    return `James mora na rua  ${address} e no pais ${country}`;

}


const tab = People(AddPeople,  "Rua 1", 'EUA');
console.log(`O nome é: ${tab}`);



//HIGH ORDER FUNCTION => MAP


do {


    const saldo = parseFloat(prompt("Digite o saldo da conta"))
    console.log(`O saldo da conta é: ${saldo}`)
    const valor = [8000]
    const confirmacao = confirm("Você deseja realizar uma compra de um Mackbook no\n valor de  R$1000,00?");
     


   
    if (confirmacao == true) {
        alert("Aplicando desconto...")
        const discount = valor.map(preco => preco * 0.9);
        alert("Desconto aplicado com sucesso")
        alert(`O valor da compra é: ${discount}`)
        const ConfirmDiscount = confirm("Você deseja continuar com a compra?")

        if( ConfirmDiscount == true) {
            alert("Compra realizada com sucesso")
            alert("Obrigado por comprar conosco")
            alert('Saldo atual da conta: ' + (saldo - discount))
        } else {
            alert("Compra cancelada")
        }
     
    } 


    // HIGH ORDER FUNCTION => FILTER

    const Products = [
        { nome: "Mackook 2010", preco: 8000, categoria: "eletronicos"},
        { nome: "Mackook 2014", preco: 10000, categoria: "eletronicos"},
        { nome: "Mackook 2016", preco: 15000, categoria: "eletronicos"},
        { nome: "Mackook 2020", preco: 25000, categoria: "eletronicos"},
   
       ]
   

       if (  Products.filter(product => product.preco >= 15000) ){
       
        console.log('O produto comprado foi um ' +
        Products.filter(name => name.preco === 8000).map(name => name.nome))
       } else {
        console.log('Produto não encontrado')

       }


       // HIGH ORDER FUNCTION => REDUCE

       const totalProduct = Products.reduce((acc, venda) => acc + venda.preco, 0)
       console.log(`O valor total dos produtos é: ${totalProduct}`)
      
     





} while ( confirm == true)


