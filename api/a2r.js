const { arabicToRoman } = require("../romanos.js");

module.exports = (req, res) => {
    // Habilitar CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const { number } = req.query;

    // Validación estricta: solo dígitos
    if (!number || !/^\d+$/.test(number)) {
        return res.status(400).json({ error: "Número inválido" });
    }

    const num = Number(number);
    if (num < 1 || num > 3999) {
        return res.status(400).json({ error: "Número inválido" });
    }

    try {
        const roman = arabicToRoman(num);
        res.status(200).json({ input: num, output: roman });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};