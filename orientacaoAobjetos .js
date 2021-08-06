let celular = function(){

    this.cor = "prata";

    this.ligar = function(){

        console.log("Uma ligação");
        return "ligando";

    }

}

let objeto = new celular();
//Se eu quiser colocar só o valor prata é só colocar objeto .cor
console.log(objeto.ligar());

/* Deste modo não consigo acessar o valor que esta la dentro 
eu vejo que é um objeto mas ele não tem nada dentro.
a não ser que eu promova a variavel cor para um atributo ai sim eu consigo acessar de fora
fazer um.
*/
