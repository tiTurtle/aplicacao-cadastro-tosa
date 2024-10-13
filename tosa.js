//Classes
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
    constructor(nome, celular, email) {
      this.nome = nome;
      this.celular = celular;
      this.email = email;
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

  }

  function pegarDadosTosa () {
    const nome =  document.getElementById("nome").value;
    const celular = document.getElementById("celular").value;
    const email = document.getElementById("email").value;
    const senha = Math.floor(1000 + Math.random() * 9000);

    const tutor = new Tutor (nome, celular, email)

    const tosa = new Tosa(tutor, senha)
    return tosa;
};

function pegarDadosPet () {
    const nome = document.getElementById("nomePet").value;
    const tipo = document.getElementById("tipo").value
    const preco = document.getElementById("preco")

    const pet = new Pet(nome, tipo, preco );

    return pet
}