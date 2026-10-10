document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");
    const outputPrompt = document.getElementById("outputPrompt");

    generateBtn.addEventListener("click", () => {
        const tema = document.getElementById("tema").value.trim();
        const nivel = document.getElementById("nivel").value;
        const audiencia = document.getElementById("audiencia").value.trim();
        const profesion = document.getElementById("profesion").value;
        const tipoMaterial = document.getElementById("tipoMaterial").value;
        const objetivo = document.getElementById("objetivo").value.trim();
        const tono = document.getElementById("tono").value;
        const estilo = document.getElementById("estilo").value;
        const elementos = document.getElementById("elementos").value.trim();
        const fraseGancho = document.getElementById("fraseGancho").value;

        if (!tema || !objetivo) {
            alert("Por favor, completa al menos el tema y el objetivo del aprendizaje.");
            return;
        }

        const audienciaTexto = audiencia
            ? Dirigido a , 
            : Dirigido a estudiantes de , ;

        const elementosTexto = elementos
            ? Incluye .
            : Incluye ejemplos claros, actividades prácticas y criterios de evaluación básicos.;

        const ganchoTexto = fraseGancho
            ? \n\nFrase gancho sugerida: "".
            : "";

        const prompt = 
Actúa como un profesional de .
Trabajas en una institución educativa que enseña  a estudiantes de .
crea un  que ayude a los estudiantes a .
Escribe con un tono  y un estilo .


Ten en cuenta que el contenido debe ser realista, aplicable y respetuoso con la diversidad del alumnado.

        .trim();

        outputPrompt.value = prompt;
    });

    copyBtn.addEventListener("click", () => {
        if (!outputPrompt.value.trim()) {
            alert("No hay ningún prompt generado para copiar.");
            return;
        }

        navigator.clipboard.writeText(outputPrompt.value)
            .then(() => {
                alert("Prompt copiado al portapapapeles.");
            })
            .catch(() => {
                alert("No se pudo copiar el prompt. Copia manualmente desde el cuadro de texto.");
            });
    });
});
