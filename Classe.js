class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando objetos da classe Heroi
const guerreiro = new Heroi("Leon", 25, "guerreiro");
const ninja = new Heroi("Ryu", 28, "ninja");

// Chamando o método atacar para cada herói
guerreiro.atacar();
ninja.atacar();
