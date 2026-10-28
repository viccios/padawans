---
title: Exercícios
sidebar:
  order: 4
---

Para treinar um pouco de lógica, funcionamento de algoritimos e entrada e saída de dados. Só veja as solução se estritamente necessário.

## **Exercício 1**

Sempre que criamos um algoritmo, pensamos em **Entrada, Processamento e Saída**. Imagine a balança do caixa de um supermercado quando você vai comprar tomates. O sistema da balança é um computador rodando um algoritmo simples. Ela fornece um preço com base no peso.
Liste o que representa a entrada de dados, o processamento e a saída de dados nessa situação do supermercado.

<details>
<summary>Solução</summary>

- **Entrada de dados:** O peso dos tomates (quando são colocados em cima da balança) e, às vezes, o código do produto que o caixa digita.
- **Processamento:** O computador da balança multiplica o peso lido pelo valor do quilo do tomate.
- **Saída de dados:** O valor final a ser pago que aparece no visor da balança.

</details>

---

## **Exercício 2**

Imagine que você precise criar um algoritmo para um robô fritar um ovo. Você escreveu os seguintes passos:

1. Coloque óleo na frigideira.
2. Ligue o fogão.
3. Quebre o ovo.
4. Coloque a frigideira no fogão.
5. Coloque o ovo na frigideira.

Se o robô seguir **exatamente** essa sequência lógica, que problema grave (e sujo) vai acontecer na sua cozinha?

<details>
<summary>Solução</summary>

O robô vai quebrar o ovo no passo 3, mas a frigideira só será colocada no fogão no passo 4. Dependendo de onde o robô estiver no passo 3, o ovo vai cair no chão ou em cima do fogão frio. Além disso, o fogão foi ligado no passo 2 sem a frigideira em cima, desperdiçando gás e podendo causar um acidente.

**A ordem mais lógica seria:** Coloque a frigideira no fogão -> Coloque óleo -> Ligue o fogão -> Quebre o ovo na frigideira.
</details>

---

## **Exercício 3**

Imagine que você tem dois copos na sua frente. O **Copo A** está cheio de café. O **Copo B** está cheio de leite.
Você precisa transferir o café para o Copo B e o leite para o Copo A. Porém, a regra é: você não pode misturar os líquidos e não pode jogar nada fora.
Como você resolve esse problema logicamente? O que você precisaria adicionar ao seu ambiente para que essa troca seja possível? Você está na cozinha, pode pegar o que precisar...

<details>
<summary>Solução</summary>

Você pode adicionar um **Copo C (um copo vazio)**.
A lógica da troca seria:

1. Despeje o café do Copo A no Copo C (Agora o Copo A está vazio).
2. Despeje o leite do Copo B no Copo A (Agora o Copo B está vazio e o A tem leite).
3. Despeje o café do Copo C no Copo B.

> [!NOTE]
> Na programação, frequentemente usamos essa lógica de criar uma terceira variável "vazia" temporária apenas para conseguir trocar os valores de duas variáveis de lugar sem perder os dados.

</details>

---

## **Exercício 4**

Crie um programa que peça para o usuário digitar um número. O seu algoritmo deve ler esse número, calcular o dobro dele e, por fim, imprimir apenas o resultado final na tela.

> [!TIP]
> Para realizar uma operação de multiplicação, usamos o operador `*`. Ex `produto = 4 * 5 --> produto = 20`.

<details>
<summary>Solução</summary>

**Em Python:**

```python
numero = int(input("Digite um número: ")) # Guardamos a entrada do usuário transformada em um inteiro na var 'numero'.
dobro = numero * 2 # Guardamos o dobro da entrada do usuário em 'dobro'.
print(dobro) # Imprimimos o valor de 'dobro'.
```

**Em JavaScript:**

```javascript
let readline = require("readline-sync"); // Em JS, precisamos importar readline para entrada de dados.

let numero = parseInt(readline.question("Digite um numero: ")); // # Guardamos a entrada do usuário transformada em um inteiro na var 'numero'.
let dobro = numero * 2; // Guardamos o dobre da entrada do usuário em 'dobro'.
console.log(dobro); // Imprimimos o valor de 'dobro'.
```

</details>

---

## **Exercício 5**

Você e seu amigo pediram uma pizza gigante e vão dividir o valor meio a meio. Crie um algoritmo que pergunte qual foi o valor total da conta. O programa deve calcular a metade desse valor e imprimir apenas o quanto cada um deve pagar.

> [!TIP]
> Para fazermos divisão, utilizamos o operador `/`. Ex: `quociente = 10 / 2 --> quociente = 5`.

<details>
<summary>Solução</summary>

**Em Python:**

```python
conta = int(input("Qual o valor total da pizza? ")) # Guardamos a entrada do usuário transformada em um inteiro na var 'conta'.
metade = conta / 2 # Guardamos a metade da entrada do usuário em 'metade'.
print(metade) # Imprimimos o valor de 'metade'.
```

**Em JavaScript:**

```javascript
let readline = require("readline-sync"); // Em JS, precisamos importar readline para entrada de dados.

let conta = parseInt(readline.question("Qual o valor total da pizza? ")); // Guardamos a entrada do usuário transformada em um inteiro na var 'conta'.
let metade = conta / 2; // Guardamos a metade da entrada do usuário em 'metade'.
console.log(metade); // Imprimimos o valor de 'metade'.
```

</details>

---

Daniel Reschke, 3 de outubro de 2026.
