//Aqui ja é um metodo novo de criar uma classes

class celular {

    constructor() {

        this.cor = "prata";

    }

    ligar(){

        console.log("Uma ligação!!");
        return "Ligando";

    }

}

let objeto = new celular();

console.log(objeto.ligar);
