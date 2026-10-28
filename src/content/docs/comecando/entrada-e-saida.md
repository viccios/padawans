---
title: Entrada de Saída de Dados
sidebar:
  order: 3
---

Para conversar com o computador precisamos falar com ele, e ele precisa falar com a gente.

- **Quando ele falar com a gente:** estamos fazendo uma saída de dados. Ele pode mandar um texto pro terminal, imprimir algum valor na tela, imprimir alguma mensagem em uma impressora...
- **Ao falarmos com ele:** estamos fazendo uma entrada de dados. Isso pode ser muitas coisas, como o clique de um mouse, um áudio ou um texto digitado pelo teclado. Nós, em todo o curso, só vamos trabalhar com esse último.

Logicamente, é natural pensar que um algoritimo não comece com o computador falando, mas sim com a gente, pois, de novo, o computador só segue coisas e nós estamos interessados em saber no que vai acontecer depois dele seguir todas essas coisas. Assim, também é natural pensarmos em um programa de computador a seguinte sequência:

1. **Entrada de dados:** nós informamos algo pro computador. **Ex:** sua data de nascimento.
2. **Processamento** ele realiza cálculos em cima dessa entrada. **Ex:** a diferença entre a data atual e a data de quando tu nasceu.
3. **Saída de dados:** ele imprime os resultados dos cálculos. **Ex:** a tua idade.

Vamos fazer exatamente o programa dos exemplos agora, mostrando como conversar com o computador seguindo cada linguagem de programação.

## ENTRADA DE DADOS

- **Em Python:** recebemos dados com o comando `input()`. O input é uma função que recebe um dado digitado pelo teclado. Dentro do parênteses é possível colocar um pequeno texto que aparecerá na tela e, logo no final dele, o usuário vai poder enviar o texto do teclado pressionando enter.
- **Em JavaScript:** recebemos dados com uma biblioteca do Node chamada readline. Uma biblioteca é um conjunto de instruções prontas para um computador. Tu pode pensar numa biblioteca como uma coleção de algoritmos já feitos por outra pessoa. Para importar a biblioteca, nós usamos o comando `require()`. E dessa biblioteca, nós tiramos o comando `readline.question()`, que daí sim funciona que nem o Python e atribui o texto que o usuário digitar.

> [!TIP]
> Caso require não esteja instalado em sua máquina e ele acusar um erro de biblioteca inexistente, é possível instalar digitando tanto no bash, como no cmd o comando `npm install require-sync`.

> [!NOTE]
> É importante notar que as duas entradas entram como texto, texto (símbolos) no computador. Nós vamos precisar transformar os símbolos dos números em números de verdade para o computador conseguir fazer os cálculos.

## PROCESSAMENTO

Nas duas linguagens, o processamento desse programa vai ser igual. Nós vamos fazer `dataUsuario - dataAtual` e guardar isso numa variável para depois imprimir isso na tela.

## SAÍDA DE DADOS

- **Em Python:** usamos o comando `print()` para imprimir coisas no terminal. Vamos colocar dentro dos parênteses o que queremos imprimir.

```py runnable
print("Hello, world!")
```

- **Em JavaScript:** usamos o comando `console.log()` para também imprimir coisas no terminal. Também vamos colocar dentro dos parênteses o que queremos imprimir.
```js runnable
console.log("Hello, world!");
```

---

E daí, em cada linguagem, o programa vai ficar assim:

## PYTHON

```py title="entrada-saida.py" annotations="side"
# [!annotate] Para fazer um comentário em Python utilizamos uma # no ínicio da linha. Comentários são textos ignorados pelo interpretador.

dataUsuario = int(input("Digite seu ano de nascimento: ")) # [!annotate] Aqui nós fazemos 3 coisas. O input() para receber os dados, que vem por padrão em texto. O int() para transformar os simbólos do texto em números inteiros. E só então guardamos isso na variável dataUsuario.
idade = 2026 - dataUsuario # [!annotate] Fazemos a diferença entre 2026 e a dataUsuario para saber a idade do usuário e guardamos esse valor na variável idade para imprimir isso depois.
print(idade) # [!annotate] Imprimimos o valor da variável idade.
```

Teste isso no seu Python digitando qualquer ano.

## JAVASCRIPT

```sh frame="terminal" title="Instalar readline-sync"
$ npm install readline-sync
```

```js title="entrada-saida.js" annotations="side"
// [!annotate]  Para fazer um comentário em JS utilizamos duas / no ínicio da linha. Comentários são textos ignorados pelo interpretador.

let readline = require("readline-sync"); // [!annotate] Importamos a biblioteca readline-sync e atribuimos a ele o seu nome simplificado: readline. Ela vem por padrão no Node. Dela, vamos usar o algoritimo question. Por isso há um ponto entre readline e question. É a question da readline.
let dataUsuario = parseInt(readline.question("Digite seu ano de nascimento: ")); // [!annotate] Aqui nós fazemos 3 coisas. O question() para receber os dados, que vem por padrão em texto. O parseInt() para transformar os simbólos do texto em números inteiros. E só então guardamos isso na variável dataUsuario.
let idade = 2026 - dataUsuario; // [!annotate] Fazemos a diferença entre 2026 e a dataUsuario para saber a idade do usuário e guardamos esse valor na variável idade para imprimir isso depois.
console.log(idade); // [!annotate] Imprimimos o valor da variável idade.
```

Teste isso no seu JS digitando qualquer ano.

---

Observe que nas duas linguagens, o resultado será o mesmo, porque usamos a **mesma lógica**, só utilizamos palavras e termos diferentes. É como se fossemos explicar para uma pessoa bilíngue o mesmo algoritimo em inglês e português. Ela entenderia das duas formas, só muda o jeito como as coisas são captadas.

Observe também que em Python, quando declaramos uma variável (escrevemos ela pela primeira vez), nós não precisamos dizer nada, ele já aceita de primeira. Em JS, não. Nele, nós precisamos informar com o comando `let` para indicar ao computador que estamos falando de uma variável nova. Vão existir outros jeitos de declarar uma variável em JS e a utilidade do `let` vai fazer bastante sentido.

Por último, note que o Python já vem com o comando `input()` pronto, nós só precisamos usá-lo. E, de novo, em JS não. Nele, nós precisamos puxar esse comando de uma grande coleções de códigos (de uma biblioteca pronta) para usá-lo.

Essas situações vão ocorrer cotidianamente no curso, pois Python é uma linguagem mais próxima do que os seres humanos falam e JS mais próxima do que os computadores conversam. Muitas vezes Python vai ter uma escrita mais fluída e menos verbal. Nós vamos precisar dizer menos coisas pro computador porque ele vai assumir por padrão aquilo que não estamos dizendo. Claro, isso tem um preço em processamento - fica mais custoso pro computador entender a gente. Em síntese:

| Característica             | Python                                | JavaScript                            |
| :------------------------- | :------------------------------------ | :------------------------------------ |
| **Proximidade**            | Mais próxima do ser humano            | Mais próxima do computador            |
| **Estilo de Escrita**      | Fluida, enxuta e menos verbosa        | Mais detalhada e explícita            |
| **Autonomia do Código**    | Assume comportamentos por padrão      | Exige instruções mais diretas         |
| **Custo de Processamento** | Maior (exige mais esforço da máquina) | Menor (mais direto para o computador) |

---

## RESUMO DOS COMANDOS

| Python                   | JavaScript            | Funcionamento                                                                                                          |
| :----------------------- | :-------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `#`                      | `//`                  | **Comentário:** Escreve um texto que é ignorado pelo computador, usado apenas para explicar o código.                  |
| `input()`                | `readline.question()` | **Entrada de dados:** Exibe uma mensagem na tela e captura o texto digitado pelo usuário.                              |
| _(Nativo / não precisa)_ | `require()`           | **Importar biblioteca:** Puxa e carrega um pacote de algoritimos prontos feitos por outras pessoas.                    |
| `int()`                  | `parseInt()`          | **Conversão de tipo:** Transforma os símbolos de um texto que contém números em um número inteiro para fazer cálculos. |
| _(Atribuição direta)_    | `let`                 | **Declaração de variável:** Avisa ao computador que estamos criando uma variável nova para guardar dados na memória.   |
| `print()`                | `console.log()`       | **Saída de dados:** Imprime e exibe textos, valores ou resultados na tela do terminal.                                 |

---

Daniel Reschke, 2 de outubro de 2026.
