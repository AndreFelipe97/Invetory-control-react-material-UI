export const maskCnpj = value => value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
export const unMaskCnpj = value => value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1$2$3$4$5");
export const maskFone = value => value.replace(/(\d{2})(\d{4})(\d{4})/g, "($1)$2-$3");
export const unMaskFone = value => value.replace(/(\d{2})(\d{4})(\d{4})/g, "$1$2$3");