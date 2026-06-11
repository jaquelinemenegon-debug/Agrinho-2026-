// Elementos de Acessibilidade e AgroIA
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnContrast = document.getElementById('btn-contrast');

const btnIaPerguntar = document.getElementById('btn-ia-perguntar');
const iaQuestionSelect = document.getElementById('ia-question');
const iaResponseBox = document.getElementById('ia-response');
const iaText = document.getElementById('ia-text');

// Tamanho de Fonte Dinâmica
let currentFontSizePercent = 100;

btnIncrease.addEventListener('click', () => {
    if (currentFontSizePercent < 135) {
        currentFontSizePercent += 10;
        document.documentElement.style.setProperty('--base-font-size', currentFontSizePercent + '%');
    }
});

btnDecrease.addEventListener('click', () => {
    if (currentFontSizePercent > 85) {
        currentFontSizePercent -= 10;
        document.documentElement.style.setProperty('--base-font-size', currentFontSizePercent + '%');
    }
});

// Mecanismo Ativador de Alto Contraste
btnContrast.addEventListener('click', () => {
    document.body.classList.toggle('contrast-mode');
});

// Respostas Inteligentes AgroIA
const baseRespostasIA = {
    erosao: "🤖 AgroIA Diagnóstico: Seu solo está perdendo fixação estrutural. Recomendação: Implante imediatamente o Sistema de Plantio Direto e faça curvas de nível no terreno. Manter os restos vegetais da última colheita blinda o chão contra o impacto das chuvas pesadas e retém os adubos.",
    pragas: "🤖 AgroIA Diagnóstico: Alerta de desequilíbrio na fauna local. Recomendação: Utilize o Manejo Integrado de Pragas (MIP). Insira defensores biológicos (Bioinsumos como fungos específicos ou pequenas vespas biológicas) em vez de defensivos químicos puros. Isso limpa a praga sem afastar as abelhas polinizadoras.",
    seca: "🤖 AgroIA Diagnóstico: Estresse hídrico vegetal detectado. Recomendação: Melhore a matéria orgânica do solo por meio de plantas de cobertura profunda (como a braquiária). Solos bem cobertos de palha agem como esponjas e conservam até 35% mais água nos períodos sem chuvas.",
    pasto: "🤖 AgroIA Diagnóstico: Compactação severa e esgotamento do solo. Recomendação: Transicione para o sistema ILPF (Integração Lavoura-Pecuária-Floresta). A alternância periódica com lavouras de grãos quebra as pragas e recupera os nutrientes da grama de forma natural.",
    adubo: "🤖 AgroIA Diagnóstico: Dependência excessiva de insumos externos minerais. Recomendação: Adote bactérias fixadoras de nitrogênio (como o Bradyrhizobium) diretamente na semente da soja ou feijão. Elas puxam o nitrogênio do ar diretamente para a raiz da planta, poupando milhares de reais em adubo químico."
};

btnIaPerguntar.addEventListener('click', () => {
    const selecao = iaQuestionSelect.value;

    if (selecao === "") {
        iaText.innerText = "Por favor, selecione um problema na lista para receber as orientações ecológicas da AgroIA.";
        iaResponseBox.classList.remove('hidden');
        return;
    }

    iaText.innerText = baseRespostasIA[selecao];
    iaResponseBox.classList.remove('hidden');
});
   
