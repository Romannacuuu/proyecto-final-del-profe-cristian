// romanos.js
function arabicToRoman(num) {
    if (!Number.isInteger(num) || num <= 0 || num > 3999) {
        throw new Error("Número inválido: usa enteros entre 1 y 3999");
    }
    const map = [
        { v: 1000, r: "M" },
        { v: 900, r: "CM" },
        { v: 500, r: "D" },
        { v: 400, r: "CD" },
        { v: 100, r: "C" },
        { v: 90, r: "XC" },
        { v: 50, r: "L" },
        { v: 40, r: "XL" },
        { v: 10, r: "X" },
        { v: 9, r: "IX" },
        { v: 5, r: "V" },
        { v: 4, r: "IV" },
        { v: 1, r: "I" }
    ];
    let res = "";
    let n = num;
    for (const { v, r } of map) {
        while (n >= v) {
            res += r;
            n -= v;
        }
    }
    return res;
}

function romanToArabic(roman) {
    if (typeof roman !== "string" || roman.trim() === "") {
        throw new Error("Romano inválido: cadena no vacía");
    }
    const s = roman.toUpperCase().trim();
    if (!/^[MDCLXVI]+$/.test(s)) {
        throw new Error("Romano inválido: caracteres no permitidos");
    }
    const val = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    let prev = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const curr = val[s[i]];
        if (curr < prev) total -= curr;
        else {
            total += curr;
            prev = curr;
        }
    }
    if (total <= 0 || total > 3999) {
        throw new Error("Romano fuera de rango (1-3999)");
    }
    const canonical = arabicToRoman(total);
    if (canonical !== s) {
        throw new Error("Romano no canónico (forma incorrecta)");
    }
    return total;
}

module.exports = { arabicToRoman, romanToArabic };