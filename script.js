/* let senhaTosa = 0;
let indexPet = 0;

let tutores = [
  "Maria Silva",
  "João Pereira",
  "Ana Costa",
  "Carlos Souza",
  "Fernanda Oliveira",
  "Lucas Mendes",
  "Patrícia Lima",
  "Rafael Gomes",
  "Juliana Dias",
  "Pedro Ferreira",
];

let telefones = ["(99) 99999-9999"];

let pets = [
  { senha: 101, nome: "Bobby", tipo: "Cavalo", precoTosa: 50 },
  { senha: 102, nome: "Mimi", tipo: "Gato", precoTosa: 40 },
  { senha: 103, nome: "Luna", tipo: "Cachorro", precoTosa: 55 },
  { senha: 104, nome: "Max", tipo: "Cachorro", precoTosa: 45 },
  { senha: 105, nome: "Bella", tipo: "Gato", precoTosa: 35 },
  { senha: 106, nome: "Rex", tipo: "Cachorro", precoTosa: 60 },
  { senha: 107, nome: "Toby", tipo: "Coelho", precoTosa: 25 },
  { senha: 108, nome: "Lola", tipo: "Gato", precoTosa: 50 },
  { senha: 109, nome: "Charlie", tipo: "Cachorro", precoTosa: 70 },
  { senha: 110, nome: "Nina", tipo: "Cachorro", precoTosa: 55 },
];

const tosas = [];

class Pet {
  constructor(senha, nome, preco) {
    this.senha = senha;
    this.nome = nome;
    this.preco = preco;
  }
  toString() {
    return `${this.senha} - ${this.nome} - R$${this.preco.toFixed(2)}`;
  }
}

class Tutor {
  constructor(nome, celular) {
    this.nome = nome;
    this.celular = celular;
  }
  toString() {
    return `${this.nome} = ${this.celular}`;
  }
}

class Tosa {
  constructor(senha, tutor) {
    this.senha = senha;
    this.tutor = tutor;
    this.pets = [];
    this.status = "Na Fila";
  }

  toString() {
    let listaPets = this.pets.map((pet) => pet.toString()).join("\n");

    return `[${this.status}] Tosa ${
      this.senha
    } - Tutor: ${this.tutor.toString()}\n Pets:\n ${listaPets}`;
  }

  incluir() {
    tosas.push(this);
  }

  alterarStatus(novoStatus) {
    this.status = novoStatus;
  }

  adicionarPet(pet) {
    this.pets.push(pet);
  }

  removerPet(senhaTosa) {
    const index = this.pets.findIndex((pet) => pet.senha == senhaTosa);

    if (index != -1) {
      this.pets.splice(index, 1);
    } else {
      alert("Pet não identificado");
    }
  }
}

function coletarDadosTosa() {
  const nome = prompt("Nome do tutor:", tutores[senhaTosa]);
  const celular = parseFloat(prompt("Celular do tutor:", telefones[0]));
  const senha = prompt("Digite a senha da tosa:", ++senhaTosa);

  const tutor = new Tutor(nome, celular);

  const tosa = new Tosa(senha, tutor);

  coletarDadosPet(tosa);
}

function coletarDadosPet(aTosa) {
  do {
    const senha = prompt("Senha do pet:", pets[indexPet].senha);
    const nome = prompt("Nome do pet", pets[indexPet].nome);
    const preco = parseFloat(prompt("Preço da tosa", pets[indexPet].precoTosa));

    indexPet++;

    const pet = new Pet(senha, nome, preco);

    aTosa.adicionarPet(pet);
  } while (confirm("Deseja incluir um novo pet à tosa?"));

  aTosa.incluir();

  if (confirm("Deseja solicitar uma nova tosa?")) {
    coletarDadosTosa();
  } else {
    exibirDadosTosa();
  }
}

function buscarTosaPorSenha(senhaTosa) {
  return tosas.find((tosa) => tosa.senha === senhaTosa);
}

function excluirPet() {
  const excluirPetDaTosa = buscarTosaPorSenha(
    prompt("Digite a senha da tosa para exclusão do pet da agenda")
  );

  console.log(excluirPetDaTosa);

  excluirPetDaTosa.removerPet(prompt("Senha do pet para exclusão"));

  exibirDadosTosa();
}

function alterarStatusTosa() {
  const alterarStatus = buscarTosaPorSenha(
    prompt("Código da tosa para alterar status")
  );

  if (alterarStatus) {
    console.log(alterarStatus);

    alterarStatus.alterarStatus("Tosa já feita");

    exibirDadosTosa();
  } else {
    return "Senha não encontrada";
  }
}

const calcularTotal = (asTosas) => {
  return asTosas.map((tosa) => {
    const qtdePets = tosa.pets.length;
    const valorTotal = tosa.pets.reduce((total, pet) => total + pet.preco, 0);

    return {
      senhaTosa: tosa.senha,
      qtdePets,
      valorTotal: valorTotal.toFixed(2),
    };
  });
};

function exibirTotal() {
  const totais = calcularTotal(tosas);

  console.log("Totais: " + JSON.stringify(totais, null, 2));
}

const obterTosasComPets = (asTosas, qtde) => {
  return asTosas.filter((tosa) => tosa.pets.length >= qtde);
};

function exibirFiltro() {
  const tosasComPets = obterTosasComPets(tosas, 3);
  console.log(
    "- Filtro - Pedido com Produtos: " + JSON.stringify(tosasComPets, null, 2)
  );
}

const verificarTosaSemPet = (asTosas) => {
  return asTosas.some((tosa) => tosa.pets.length == 0);
};

function exibirInconsistencias() {
  const temInconsistencia = verificarTosaSemPet(tosas);

  console.log(
    temInconsistencia ? "Tem inconsistência" : "Não há inconsistências"
  );
}
function exibirDadosTosa() {
  let txt = "";
  tosas.forEach((tosa) => {
    txt += tosa.toString() + "\n\n";
  });
  console.log(txt);
}

coletarDadosTosa();
alterarStatusTosa();
excluirPet();
exibirTotal();
exibirFiltro();
exibirInconsistencias(); */
