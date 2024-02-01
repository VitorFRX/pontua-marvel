
/**
 * 
 * @param {string} texto 
 * @param {number} tamMaxString 
 * @param {number} qtdMaxCaracteres 
 * @returns String abreviada com a quantidade máxima de caracteres definida.
 */
export const abreviaTexto = (texto, tamMaxString, qtdMaxCaracteres) => {
    if(texto && texto.length > tamMaxString) {

      return texto.substring(0, qtdMaxCaracteres) + '...';
    }

    return texto;
};