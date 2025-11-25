export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { arabic } = req.query;

    if (!arabic || isNaN(arabic)) {
        return res.status(400).json({ error: "Parámetro 'arabic' inválido o ausente" });
    }

    const num = parseInt(arabic, 10);
    if (num <= 0 || num > 3999) {
        return res.status(400).json({ error: "Número fuera de rango (1-3999)" });
    }

    const roman = toRoman(num); // tu función de conversión
    return res.status(200).json({ roman });
}