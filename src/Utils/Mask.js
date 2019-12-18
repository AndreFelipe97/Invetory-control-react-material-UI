export const maskCnpj = value => value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
export const maskFone = value => value.replace(/(\d{2})(\d{4})(\d{4})/g, "($1)$2-$3");
export function MaskMonetario(v) {

    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito

    v = v.replace(/(\d{2})$/, ",$1"); //Coloca a virgula

    v = v.replace(/(\d+)(\d{3},\d{2})$/g, "$1.$2"); //Coloca o primeiro ponto

    var qtdLoop = (v.length - 3) / 3;

    var count = 0;

    while (qtdLoop > count)

    {

        count++;

        v = v.replace(/(\d+)(\d{3}.*)/, "$1.$2"); //Coloca o resto dos pontos

    }

    v = v.replace(/^(0)(\d)/g, "$2"); //Coloca hífen entre o quarto e o quinto dígitos

    return v;

}

export function UnMaskMonetario(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito

    v = v.replace(/(\d{2})$/, ".$1"); //Coloca a virgula

    v = v.replace(/(\d+)(\d{3},\d{2})$/g, "$1,$2"); //Coloca o primeiro ponto

    var qtdLoop = (v.length - 3) / 3;

    var count = 0;

    while (qtdLoop > count)

    {

        count++;

        v = v.replace(/(\d+)(\d{3}.*)/, "$1,$2"); //Coloca o resto dos pontos

    }

    v = v.replace(/^(0)(\d)/g, "$2"); //Coloca hífen entre o quarto e o quinto dígitos

    return v;
}