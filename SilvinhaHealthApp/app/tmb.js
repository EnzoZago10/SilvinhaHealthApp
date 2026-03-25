export const calcularTMB = (peso, altura, idade, sexo) => {
    const alturaCm = altura * 100;
    let tmb = 0;
    if (sexo === 'masculino') {
        tmb = (10 * peso) + (6.25 * alturaCm) - (5 * idade) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * alturaCm) - (5 * idade) - 161;
    }
    return Math.round(tmb);
};
