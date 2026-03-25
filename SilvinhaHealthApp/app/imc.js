export const calcularIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    let classificacao = '';
    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else if (imc < 34.9) classificacao = 'Obesidade Grau I';
    else if (imc < 39.9) classificacao = 'Obesidade Grau II';
    else classificacao = 'Obesidade Grau III';
    return {
        valor: imc.toFixed(2),
        classificacao
    };
};