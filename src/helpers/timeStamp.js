

/**
 * @name TimeStamp
 * @description Retorna o time stamp atual da máquina.
 * @returns Time Stamp Atual
 */
export const TimeStamp = () => { 
    return Number(new Date().getTime());
};