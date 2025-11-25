export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { roman } = req.query;

    if (!roman || !isValidRoman(roman)) {
        return res.status(400).json({ error: "Parámetro 'roman' inválido o ausente" });
    }

    const arabic = toArabic(roman); // tu función de conversión
    return res.status(200).json({ arabic });
}