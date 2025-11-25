import { convertirArabigoARomano } from '../romanos.js';

export default function handler(req, res) {
    // Habilitar CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const { arabic } = req.query;

    // Validación estricta: solo dígitos
    if (!arabic || !/^\d+$/.test(arabic)) {
        return res.status(400).json({ error: "Número inválido" });
    }

    const num = Number(arabic);
    if (num < 1 || num > 3999) {
        return res.status(400).json({ error: "Número inválido" });
    }

    const roman = convertirArabigoARomano(num);
    res.status(200).json({ roman });
}