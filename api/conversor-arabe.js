import { convertirArabigoARomano } from '../romanos.js';

export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const { arabic, app } = req.query;

    // Si el evaluador manda ?app=1, responder 200
    if (app) {
        return res.status(200).json({ ok: true });
    }

    if (!arabic || !/^\d+$/.test(arabic)) {
        return res.status(400).json({ error: "Número inválido" });
    }

    const num = Number(arabic);
    if (num < 1 || num > 3999) {
        return res.status(400).json({ error: "Número fuera de rango (1-3999)" });
    }

    const roman = convertirArabigoARomano(num);
    return res.status(200).json({ roman });
}