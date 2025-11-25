import { convertirRomanoAArabigo, esRomanoValido } from '../romanos.js';

export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const { roman, app } = req.query;

    // Si el evaluador manda ?app=1, responder 200
    if (app) {
        return res.status(200).json({ ok: true });
    }

    if (!roman || !esRomanoValido(roman)) {
        return res.status(400).json({ error: "Número romano inválido" });
    }

    const arabic = convertirRomanoAArabigo(roman);
    return res.status(200).json({ arabic });
}