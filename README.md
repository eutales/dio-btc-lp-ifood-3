# dio-btc-lp-ifood-3
Terceiro desafio de projeto do Bootcamp Lógica de Programação - Ifood. #JavaScript O desafio contempla conceitos de função, operadores, condicionais, estruturas de repetição, classes e objetos!

## Como usar
1. Clone o repositorio para a pasta que preferir, usando o seguinte comando:

```sh
git clone https://github.com/eutales/dio-btc-lp-ifood-3.git
```

2. Acesse a pasta do projeto com o comando:
```sh
cd dio-btc-lp-ifood-3
```

3. Execute o programa com o comando `npm run app` ou com o comando `node src/index.js`.

Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
