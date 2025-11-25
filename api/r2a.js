import { convertirRomanoAArabigo, esRomanoValido } from '../romanos.js';

export default function handler(req, res) {
    // Habilitar CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const { roman } = req.query;

    // Validación
    if (!roman || !esRomanoValido(roman)) {
        return res.status(400).json({ error: "Número romano inválido" });
    }

    const arabic = convertirRomanoAArabigo(roman);
    res.status(200).json({ arabic });
}