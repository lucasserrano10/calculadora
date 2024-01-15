
function calculadora(Num1, Num2, operação) {
    let resultado;


    Num1 = parseInt(Num1);
    Num2 = parseInt(Num2);

    
    switch (operação) {
        case "+":
            resultado = Num1 + Num2;
            break;

        case "-":
            resultado = Num1 - Num2;
            break;

        case "*":
            resultado = Num1 * Num2;
            break;

        case "/":
            resultado = Num1 / Num2;
            break;

        case "e":
            resultado = 1;
            for (let contador = 1; contador <= Num2; contador++) {
                resultado *= Num1;
            }
            break;
    }


    if (resultado > 1000000 || resultado === undefined) {
        console.log("ERRO");
    }

    return resultado;
}

