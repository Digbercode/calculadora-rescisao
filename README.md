# Calculadora de Rescisão

Aplicação web para **estimativa e visualização de verbas de rescisão trabalhista**, criada a partir de uma planilha de cálculo e transformada em uma experiência simples para desktop e celular.

> \*\*Projeto em produção:\*\* https://calculorecisaoestimado.netlify.app/

## Sobre o projeto

A proposta nasceu de uma necessidade que vivencio no meu próprio ambiente de trabalho. Por atuar como terceirizado em um órgão público, faço parte de uma realidade em que a troca da empresa prestadora de serviços pode acontecer com certa frequência. Nesses períodos de transição, é comum surgirem dúvidas entre os trabalhadores sobre a rescisão e, principalmente, sobre uma estimativa dos valores que poderão receber.

A partir dessa experiência, surgiu a ideia de transformar uma planilha de cálculo de rescisão em uma ferramenta web mais simples e acessível, pensada principalmente para auxiliar outros trabalhadores terceirizados que não estão acostumados a lidar diretamente com planilhas e fórmulas.

A aplicação organiza os dados de entrada, apresenta recebimentos e descontos separadamente e fornece uma memória de cálculo legível, permitindo que o trabalhador tenha uma estimativa inicial dos valores envolvidos em sua rescisão. A ferramenta não pretende substituir cálculos oficiais ou orientação profissional, mas oferecer uma referência mais fácil de compreender.

O projeto foi evoluído em etapas: modelagem baseada na planilha original, desenvolvimento da interface web, adaptação para dispositivos móveis, criação de páginas educativas, SEO técnico, publicação no Netlify, integração com Google Search Console e Google Analytics e preparação da estrutura para monetização.

## Funcionalidades

* Cálculo estimado de saldo de salário
* Aviso-prévio
* 13º proporcional
* Férias e adicional de 1/3
* Estimativa de FGTS acumulado
* Multa rescisória
* Detalhamento de descontos
* Resultados separados para os cenários exibidos pela ferramenta
* Impressão / salvamento em PDF pelo navegador
* Compartilhamento da calculadora
* Layout responsivo
* Páginas educativas sobre os componentes da rescisão
* Sitemap, robots.txt e metadados para SEO
* Integração com Google Analytics
* Estrutura preparada para Google AdSense

## Tecnologias

* HTML5
* CSS3
* JavaScript (Vanilla)
* Netlify
* Google Search Console
* Google Analytics
* Google AdSense

O projeto não depende de framework JavaScript nem de backend para realizar os cálculos: a lógica principal roda no navegador.

## Estrutura

```text
.
├── index.html
├── style.css
├── app.js
├── guia-rescisao.html
├── ferias-proporcionais.html
├── decimo-terceiro.html
├── fgts-rescisao.html
├── aviso-previo.html
├── descontos-rescisao.html
├── sobre.html
├── privacidade.html
├── termos.html
├── 404.html
├── robots.txt / sitemap.xml   # quando presentes no deploy
├── ads.txt
└── docs/
    ├── calculos.md
    ├── arquitetura.md
    └── screenshots/
```

## Decisões de projeto

A interface foi mantida centralizada para priorizar a calculadora e reservar áreas laterais para publicidade em telas grandes. Em telas menores, o conteúdo se adapta para uma coluna e os elementos secundários deixam de competir com o formulário.

A ferramenta apresenta os componentes do cálculo separadamente para evitar um resultado final sem contexto. As páginas educativas complementam a calculadora e ajudam na compreensão dos campos.

## Documentação técnica

* [Arquitetura do projeto](docs/arquitetura.md)
* [Regras e memória dos cálculos](docs/calculos.md)

## Executando localmente

Por ser um projeto estático, você pode clonar o repositório e abrir `index.html` no navegador. Para uma experiência mais próxima da hospedagem, também pode servi-lo por um servidor HTTP local.

```bash
git clone URL\_DO\_REPOSITORIO
cd calculadora-rescisao
```

## Status

A versão publicada foi testada comparando os resultados com a planilha-modelo utilizada no desenvolvimento. Melhorias futuras podem incluir novos cenários de cálculo, testes automatizados e evolução da documentação.

## Aviso importante

Esta aplicação fornece **estimativas** e tem finalidade informativa. Ela não substitui TRCT, folha de pagamento, eSocial, extrato oficial do FGTS, convenções coletivas ou orientação profissional. Regras legais, tributárias e trabalhistas podem variar conforme o caso e mudar ao longo do tempo.

## Autoria

Projeto desenvolvido como aplicação web de portfólio, desde a transformação de uma planilha de cálculo até publicação, SEO, métricas e preparação para monetização.

