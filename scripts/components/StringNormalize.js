export class StringNormalize {

    // Uniformise les chaînes de caractère

    static normalizeAccents(string) {
        return string
            .toLowerCase()
            .replace(/[.,;:!\?\*"()°]/g, "")
            .replace(/[']/g, " ")
            .replace(/[\d]/g, "")
            .replace(/[àäâ]/g, "a")
            .replace(/[ç]/g, "c")
            .replace(/[éèêë]/g, "e")
            .replace(/[îï]/g, "i")
            .replace(/[ôö]/g, "o")
            .replace(/[ùûû]/g, "u");
    }

    // Met la première lettre d'une string en capitale

    static capitalizeFirstChar(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}