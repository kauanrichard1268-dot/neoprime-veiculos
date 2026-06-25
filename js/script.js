document.addEventListener("DOMContentLoaded", function() {
    
    // 1. LÓGICA DA NAVBAR (Mudar de cor ao rolar)
    const navbar = document.querySelector('.navbar-personalizada');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-rolada');
        } else {
            navbar.classList.remove('navbar-rolada');
        }
    });

    // 2. LÓGICA DO FAQ (Sanfona / Accordion)
    const perguntasFaq = document.querySelectorAll('.pergunta-duvida');
    
    perguntasFaq.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const itemDuvida = pergunta.parentElement;
            const estaAberto = itemDuvida.classList.contains('ativo');

            // Fecha todas as outras perguntas
            document.querySelectorAll('.item-duvida').forEach(item => {
                item.classList.remove('ativo');
            });

            // Se não estava aberto, ele abre adicionando a classe "ativo"
            if (!estaAberto) {
                itemDuvida.classList.add('ativo');
            }
        });
    });

});