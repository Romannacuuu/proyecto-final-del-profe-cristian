// script.js

// Funciones que llaman a los endpoints en Vercel
async function a2rRemote(n) {
    const url = `/api/a2r?number=${encodeURIComponent(n)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error desconocido");
    return data.output;
}

async function r2aRemote(roman) {
    const url = `/api/r2a?roman=${encodeURIComponent(roman)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error desconocido");
    return data.output;
}

// DOM: conectar botones con los endpoints
document.getElementById("btn-a2r").addEventListener("click", async () => {
    const val = Number(document.getElementById("arabic").value);
    const el = document.getElementById("res-a2r");
    el.textContent = "Procesando…";
    try {
        const res = await a2rRemote(val);
        el.textContent = `Resultado: ${res}`;
    } catch (e) {
        el.textContent = `Error: ${e.message}`;
    }
});

document.getElementById("btn-r2a").addEventListener("click", async () => {
    const val = document.getElementById("roman").value;
    const el = document.getElementById("res-r2a");
    el.textContent = "Procesando…";
    try {
        const res = await r2aRemote(val);
        el.textContent = `Resultado: ${res}`;
    } catch (e) {
        el.textContent = `Error: ${e.message}`;
    }
});