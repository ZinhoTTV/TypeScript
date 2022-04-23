var Veiculo = /** @class */ (function () {
    function Veiculo(fabricante, modelo, cor, ano) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }
    Veiculo.prototype.exibirDados = function () {
        var msg = "Dados do Veiculo ";
        msg += "\n Fabricante " + this.fabricante;
        msg += "\n modelo " + this.modelo;
        msg += "\n cor " + this.cor;
        msg += "\n ano " + this.ano;
        console.log(msg);
        alert(msg);
    };
    return Veiculo;
}());
var veiculo = new Veiculo("Volks", "Kombi", "azul", 1920);
veiculo.exibirDados();
var veiculo1 = new Veiculo("CLIO", "Bombinha", "Blue", 2002);
veiculo1.exibirDados();
