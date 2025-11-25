const { arabicToRoman, romanToArabic } = require("../romanos.js");

describe("arabicToRoman", () => {
    test("convierte 1 -> I", () => {
        expect(arabicToRoman(1)).toBe("I");
    });
    test("convierte 4 -> IV", () => {
        expect(arabicToRoman(4)).toBe("IV");
    });
    test("convierte 3999 -> MMMCMXCIX", () => {
        expect(arabicToRoman(3999)).toBe("MMMCMXCIX");
    });
    test("lanza error en 0", () => {
        expect(() => arabicToRoman(0)).toThrow();
    });
    test("lanza error en 4000", () => {
        expect(() => arabicToRoman(4000)).toThrow();
    });
});

describe("romanToArabic", () => {
    test("convierte I -> 1", () => {
        expect(romanToArabic("I")).toBe(1);
    });
    test("convierte IV -> 4", () => {
        expect(romanToArabic("IV")).toBe(4);
    });
    test("convierte MMMCMXCIX -> 3999", () => {
        expect(romanToArabic("MMMCMXCIX")).toBe(3999);
    });
    test("rechaza repetición inválida (IIII)", () => {
        expect(() => romanToArabic("IIII")).toThrow();
    });
    test("rechaza caracteres inválidos", () => {
        expect(() => romanToArabic("A")).toThrow();
    });
    test("espacios y minúsculas aceptados (normalizados)", () => {
        expect(romanToArabic(" xiv ")).toBe(14);
    });
});