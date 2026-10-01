# Arquitetura

## Visão geral

A Calculadora de Rescisão é uma aplicação estática. A interface e o conteúdo são entregues em HTML/CSS, enquanto os cálculos são executados em JavaScript diretamente no navegador.

## Camadas

### Interface
`index.html` contém o formulário principal, os blocos de resultados e a navegação para os conteúdos educativos.

### Estilos
`style.css` concentra a identidade visual, responsividade, cartões, formulário, áreas de resultado e comportamento de impressão.

### Regras de cálculo
`app.js` lê os campos, executa a lógica usada pelo projeto e atualiza a memória de cálculo no DOM.

### Conteúdo
As páginas HTML adicionais explicam férias, 13º, FGTS, aviso-prévio, descontos e conceitos gerais da rescisão.

### Produção
O projeto é hospedado como site estático no Netlify. Search Console é usado para descoberta/indexação, Analytics para métricas e a estrutura de publicidade foi preparada para AdSense.

## Privacidade por arquitetura

Os cálculos são feitos no navegador e o projeto não exige cadastro ou banco de dados para processar a simulação. Integrações de terceiros presentes no site devem ser consideradas separadamente conforme as respectivas políticas e a configuração de produção.
