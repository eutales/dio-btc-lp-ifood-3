//Criando a classe hero e seu construtor contendo os atributos heroName, heroAge, heroVocation.
class hero {
  constructor(heroName, heroAge, heroVocation) {
    this.heroName = heroName;
    this.heroAge = heroAge;
    this.heroVocation = heroVocation;
  }

  //Criando o método attack
  attack() {
    //Utilizando a estrutura condicional Switch/Case para definir a mensagem a ser exibida na tela. 
    switch (this.heroVocation) {
      case "mago":
        return `O sábio herói chamado ${this.heroName}, um experiente ${this.heroVocation} de ${this.heroAge} anos, atacou usando a mágica FIREBALL!`;
      case "guerreiro":
        return `O sábio herói chamado ${this.heroName}, um experiente ${this.heroVocation} de ${this.heroAge} anos, atacou usando sua lendária espada EXCALIBUR!`;
      case "monge":
        return `O sábio herói chamado ${this.heroName}, um experiente ${this.heroVocation} de ${this.heroAge} anos, atacou usando suas habilidades em ARTES MARCIAIS!`;
      case "ninja":
        return `O sábio herói chamado ${this.heroName}, um experiente ${this.heroVocation} de ${this.heroAge} anos, atacou usando sua afiada e silenciosa SHURIKEN!`;
      default:
        return `O sábio herói chamado ${this.heroName}, um aprendiz de Rookgaard que ainda não possui vocação de ${this.heroAge} anos, atacou usando um CABO DE VASSOURA!`;
    }
  }
}

// Criando 5 heróis, 4 com vocações definidas e um sem especificar a vocação. 
let tales = new hero("Tales", 32, "mago");
console.log(tales.attack());

let lucas = new hero("Lucas", 40, "guerreiro");
console.log(lucas.attack());

let pablo = new hero("Pablo", 26, "monge");
console.log(pablo.attack());

let tenshu = new hero("Tenshu", 30, "ninja");
console.log(tenshu.attack());

let junior = new hero("Junior", 15);
console.log(junior.attack());
