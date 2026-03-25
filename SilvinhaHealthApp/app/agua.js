export const calcularAgua = (peso) => {
    const aguaMl = peso * 35;
    const aguaL = aguaMl / 1000;
    return {
        ml: Math.round(aguaMl),
        l: aguaL.toFixed(1)
    };
};
