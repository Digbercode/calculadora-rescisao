# Memória dos cálculos

Esta documentação descreve **a lógica implementada no projeto e validada contra a planilha-modelo utilizada no desenvolvimento**. Ela não deve ser interpretada como uma especificação universal da legislação trabalhista.

## Entradas principais

- salário bruto mensal;
- data de admissão;
- data de desligamento;
- tipo de desligamento;
- situação do aviso-prévio;
- dias trabalhados no mês da saída;
- informação sobre saldo de salário já pago;
- quantidade de férias tiradas;
- valor de alimentação informado no formulário.

## Contagens

A aplicação calcula períodos utilizados na memória de FGTS, 13º e férias. A regra adotada no modelo considera o mês quando há pelo menos 15 dias trabalhados nos pontos em que essa condição foi definida na planilha.

## Recebimentos exibidos

A interface separa saldo de salário, aviso-prévio, 13º proporcional, férias, adicional de 1/3, saldo estimado de FGTS e multa rescisória quando aplicável à lógica do projeto.

## Descontos do modelo

O projeto apresenta separadamente os parâmetros de desconto definidos durante o desenvolvimento, incluindo INSS, vale-transporte e alimentação. A implementação deve ser conferida no `app.js` para a regra exata da versão publicada.

## FGTS

O saldo mostrado pela aplicação é uma estimativa produzida pela lógica do modelo. O extrato oficial do FGTS é a referência para os depósitos efetivamente realizados.

## Validação

Durante o desenvolvimento, os resultados da aplicação foram comparados com a planilha-modelo. Mudanças futuras nas fórmulas devem ser acompanhadas de nova validação antes de publicação.
