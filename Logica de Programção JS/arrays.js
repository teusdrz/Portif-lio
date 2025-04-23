// array
// variavel

const paciente = []
let opcao = ""


//  promp com variavel
do {

opcao = prompt (
  "Bem-vindo ao Cadastro de imoveis. \nTotal de imoveis: " + paciente.length +
  "\n\nEscolha uma opção:\n1. Novo\n2. Listar Imóveis\n3. Sair" 
)


switch (opcao) {
  //caso seja selecionado a opção 1 
  case "1":

  // objeto imovel e iremos adicionar propiedadesn neles

  const imovel = {}

  imovel.dono = prompt ('Informe o nome do proprietario do imóvel ?')
  imovel.quartos = prompt ('Quantos quartos possui o imóvel?')
  imovel.banheiros = prompt("Quantos banheiros possui o imóvel ?")

  // para o cliente e confirmar suas filtragem 
  const confirmar = confirm (
    'Salvar este imóvel?\n' +
    '\nProprietário: ' + imovel.dono +
    '\nQuartos: ' + imovel.quartos +
    '\nBanheiros: ' + imovel.banheiros
  )

  if ( confirmar) {
    // pega os dados do objeto e coloca sempre se tiver todas informaçoes
    // em ultimo e armazenando os dados do cliente 
    paciente.push(imovel)
  }

  break

  case '2':
    //caso seja selecionado a opcão 2 ( que seria listar os nomes )
    // ou  seja ira listar quantidades de cadastro e as propiedades
    //de cada um como por exemplol (nome do proprietario, quartos e banheiros)
     for(let i = 0; i < paciente.length; i++) {
      alert (
        //irá mostrar quantidade no total de cadastros dos clientes
       "Imóvel: " + (i + 1) +
       "\nProprietario: " + paciente[i].dono + 
       "\nQuartos: " + paciente[i].quartos +
       "\nBanheiros: " + paciente[i].banheiros 
      )

     }
     break

     case "3":
      alert('Saindo...')
      break
    default:
      alert("Opção Inválida!")
      break
    }
} while ( opcao !== "3")
//