export const calcularPesoIdeal = (altura, sexo) => {
    const alturaCm = altura * 100;
    let pesoIdeal = 0;
    if (sexo === 'masculino') {
        pesoIdeal = 50 + 2.3 * ((alturaCm - 152.4) / 2.54);
    } else {
        pesoIdeal = 45.5 + 2.3 * ((alturaCm - 152.4) / 2.54);
    }
    return pesoIdeal.toFixed(1);
};