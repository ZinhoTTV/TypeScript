class Veiculo {
    fabricante : string;
    modelo :string;
    cor : string;
    ano : number;

    constructor (fabricante :string, modelo : string, cor : string, ano : number,){
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    exibirDados(): void{
        let msg = "Dados do Veiculo";

        msg += "Fabricante" +this.fabricante; 
        msg += "modelo" +this.modelo; 
        msg += "cor" +this.cor; 
        msg += "ano" +this.ano; 

        console.log(msg);
        alert(msg);

    }
}

let veiculo = new Veiculo("Volks","Kombi", "azul", 1920)
veiculo.exibirDados();

let veiculo1 = new Veiculo("CLIO", "Bombinha", "Blue", 2002)
veiculo1.exibirDados();