const DimensitionAraay = [
 [ 'arroz', 'feijao', 'carne', 'batata'],
 ['arroz',  'feijao preto', 'salada'],
 ['churrasco', 'coca', 'salada de maionese']

]




for (let i = 0; i < DimensitionAraay.length; i++ ){
   for (let j = 0; j < DimensitionAraay[i].length; j++){
     console.log(DimensitionAraay[i][j])
   }
}


const Person = {}

Person.name = 'Matheus'
Person.age = '20'
Person.country = 'São Paulo'
Person.address = {rua: 'Rua Jose Francisco Lopes',
    numero: 213,
    Bairro: "Artur Alvim"
}
Person.vizinhos = ['Joyce', 'Jessica', 'Ana Claudia']

console.log(Person)


const imoveis = []
let opcao = ""

do {

opcao = prompt (
    "Bem-vindo ao Cadastro de Imoveis. \nTotal de imoveis: " + imoveis.length +
    "\n\nEscolha uma opcão:\n1. Novo\n2. Listar imóveis\n3. Sair"
)



switch (opcao) {
    case "1":

    const imovel = {}

    imovel.proprietario = prompt("Informe o nome do proprietario do imóvel:")
    imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
    imovel.banheiros = parseFloat(prompt("Quantos Banheiros possui o imóvel?"))
    imovel.garagem = prompt("O imovel possui garagem (sim/não)")

    const confirmar = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        '\nPossui Garagem: ' + imovel.garagem 

    )

    if (confirmar) {
        imoveis.push(imovel)
    }

    break
    case "2":

    for ( let i = 0; i < imoveis.length; i++ ) {
        alert (
            "Imóvel " + (i + 1) +
            "\nProprietario: " + imoveis[i].proprietario +
            "\nQuartos: " + imoveis[i].banheiros +
            "\nBanheiros " + imoveis[i].banheiros +
            "\nPossui Garagem " + imoveis[i].garagem

        )
    }

    break
    case "3":
        alert ("Saindo...")
    default:
    alert("Opção inválida!")
    break

}
} while (opcao !== "3")