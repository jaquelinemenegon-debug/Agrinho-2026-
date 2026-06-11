// Sistema de Respostas Inteligentes da AgroIA
const btnIaPerguntar = document.getElementById('btn-ia-perguntar');
const iaQuestionSelect = document.getElementById('ia-question');
const iaResponseBox = document.getElementById('ia-response');
const iaText = document.getElementById('ia-text');

// Banco de dados de respostas da IA baseada na seleção
const respostasIA = {
    erosao: "🤖 AgroIA Diagnóstico: Identifiquei fragilidade estrutural no terreno. Recomendo a imediata adoção do Sistema de Plantio Direto. Manter a palhada da colheita anterior protege a camada superficial contra o impacto das gotas de chuva, reduzindo o escoamento da água em até 60% e mantendo os nutrientes no lugar.",
    pragas: "🤖 AgroIA Diagnóstico: Alerta de desequilíbrio biológico. Em vez de aumentar os agrotóxicos pesados, utilize o Manejo Integrado de Pragas (MIP) associado a Bioinsumos (como o Bacillus thuringiensis). Isso elimina as lagartas específicas sem matar os polinizadores, gerando uma lavoura mais forte e econômica.",
    seca: "🤖 AgroIA Diagnóstico: Estresse hídrico detectado. A solução de longo prazo é aumentar a matéria orgânica no solo usando rotação de culturas (como a braquiária ou milheto). Solos ricos em palha retêm até 35% mais água. Para curto prazo, avalie sistemas de irrigação gota a gota automatizados por sensores de umidade.",
    pasto: "🤖 AgroIA Diagnóstico: Solo compactado e pobre em nitrogênio. Recomendo a transição para o sistema ILPF (Integração Lavoura-Pecuária-Floresta). Plantar leguminosas junto com o capim vai fixar nitrogênio no solo naturalmente. As árvores plantadas trarão sombra para o gado, acelerando a engorda e recuperando a terra.",
    adubo: "🤖 AgroIA Diagnóstico: Oportunidade de otimização de custos. Utilize bactérias fixadoras de nitrogênio (como o Bradyrhizobium) ou solubilizadores de fósforo. Elas desbloqueiam os minerais que já estão presos na terra, permitindo reduzir em até 30% a compra de fertilizantes químicos sintéticos mantendo o mesmo rendimento."
};

btnIaPerguntar.addEventListener('click', () => {
    const valorSelecionado = iaQuestionSelect.value;
    
    if (valorSelecionado === "") {
        iaText.innerText = "Por favor, selecione uma das opções de desafios na lavoura para receber a resposta.";
        iaResponseBox.classList.remove('hidden');
        return;
    }

    // Exibe a resposta correspondente
    iaText.innerText = respostasIA[valorSelecionado];
    iaResponseBox.classList.remove('hidden');
});