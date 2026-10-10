document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const outputPrompt = document.getElementById('outputPrompt');

    generateBtn.addEventListener('click', () => {
        const tema = document.getElementById('tema').value.trim();
        const nivel = document.getElementById('nivel').value;
        const audiencia = document.getElementById('audiencia').value.trim();
        const profesion = document.getElementById('profesion').value;
        const tipoMaterial = document.getElementById('tipoMaterial').value;
        const objetivo = document.getElementById('objetivo').value.trim();
        const tono = document.getElementById('tono').value;
        const estilo = document.getElementById('estilo').value;
        const elementos = document.getElementById('elementos').value.trim();
        const fraseGancho = document.getElementById('fraseGancho').value;

        const audienciaTexto = audiencia ? 
            Dirigido a ,  : 
            Dirigido a estudiantes de , ;

        const elementosTexto = elementos ? 
            Incluye . : 
            Incluye ejemplos claros y actividades prácticas.;

        const ganchoTexto = fraseGancho ? 
            \n\nFrase gancho sugerida: "". : 
            "";

        const prompt = 
Actúa como un profesional de .
Trabajas en una institución educativa que enseña  a estudiantes de .
crea un  que ayude a los estudiantes a .
Escribe con un tono  y un estilo .


        .trim();

        outputPrompt.value = prompt;
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(outputPrompt.value)
            .then(() => alert('Prompt copiado'))
            .catch(() => alert('Error al copiar'));
    });
});
