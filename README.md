# Curso Javascript ( Presencial ) (12-19/05/18)
>Curso que será dado nos dias 12-19/05/2018
## Cronograma
- O que é javascript?
- O que é github?
- Como eles se integram, dando fork no nosso projeto do github?
- Funções básicas do javascript e seus tipos de variáveis
- Hoisting?
- Como assim tudo objeto?
- Porque falamos que javascript tem paradigma Funcional?
- O que é clojure?
- Compondo funções
- Nosso primeiro pacote. ParetoJS
- Criando nossa composição com o pareto!
- Entendo callbacks e recursividade
- Map, filter, reduce e forEach?
- Recriando o forEach recursivo!
- Pera ai, não tá na hora de commitar? Commitar?
- Dando push e entendendo o fluxo do uso do github.
- Entendo promessas!
- Usando uma promessa com vários then encadeados para uma consulta no CEP
- Refatorando pra um conceito mais funcional
- Usando composição de funções e mônadas!
- Criando outra branch!
- Começando a criar nosso teclado musical com javascript puro!
- O rei do DOM! DOM?!
- Como javascript utiliza o DOM
- Fazendo um evento de click
- Modificando a imagem
- Fazendo um som hehe

### Assuntos avançados
- Currying?
- bind, call e apply. Que droga é essa?
- Como funciona as funções e o seu contexto
- Criando nosso próprio EventEmitter de eventos!
- Criando nossa própria lib!

# Começando

## O que é javascript?
Javascript é uma linguagem de programação não tipada e compilada que permite implementar conteúdo complexo dentro das paǵinas da internet como um gráfico, mapas ou HTML dinâmico.

> 1995 Netscape viu que precisavam de mais dinamismo nas páginas como verificar o que os usuários digitavam nos campos HTML. Brendan Eich escreveu o protótipo da linguagem em 10 dias para colocar ela na versão 2.0B3 Navigator no final de novembro de 1995. 

![Brendan Eich](https://upload.wikimedia.org/wikipedia/commons/0/09/BEich.jpg)

Exemplo de código:

```javascript
var nome = document.querySelector('#nome');

nome.addEventListener('click', atualizarNome);

function atualizarNome() {
  var nomeNovo = prompt('Insira um novo nome');
  nome.textContent = 'Jogador 1: ' + nomeNovo;
}
```

Javascript também é mais foda quando junto com API's. Temos 2 API's principais.
- Navegador
    - DOM (Document Object Model);
    - Geolocalização
    - Aúdio e Vídeo
- Terceiros
    - Twitter
    - Google
    - Spotify

## Hoisting

Em JavaScript, funções e variáveis são hoisted (ou "levados ao topo"). Hoisting é um comportamento do JavaScript de mover declarações para o topo de um escopo (o escopo global ou da função em que se encontra).

```javascript
console.log(name); // undefined
console.log(age); // throw Error

let age = 20;
var name = 'a';
```

## Objetos
Um objeto é uma coleção de propriedades chave -> valor tipo:
```javascript
let pessoa = {
    name:"Meu nome",
    age:20,
    jobs:[
        {name:"Developer"},
        {name:"Teacher"},
        {name:"Doctor"}
    ]
}
```
Em JavaScript, quase tudo é um objeto. Todos os tipos primitivos - com exceção de **null** e **undefined** - são tratados como objetos. Eles podem receber propriedades (propriedades atribuídas de alguns tipos não são persistentes), e possuem todas as características de objetos.


## Porque javascript é também vista como linguagem funcional? Como funciona as funções?

Javascript FUNÇÕES são tratadas como objetos, e isso que faz ela ser chamada de funcional.

Podemos fazer as seguintes brincadeiras com funções:
- Atribuir valor
- Passar função como parâmetro para outra função
- Retornar a função como valor de uma outra função
- Armazenar a funçao em uma estrutura

```javascript
    function tolowercase(x){
        return x.toLowerCase();
    }
    let tolowercase1 = (x) => {
        return x.toLowerCase();
    }

    //cb é um função usa-se recursividade.
    let tolowercase2 = (x, cb) =>{
        cb(x.toLowerCase());
    }

    let modificaPalavra = (x)=>{
        return tolowercase(x);
    }

    tolowercase('Javascript'); //Saida: javascript
    tolowercase1('Javascript'); //Saida: javascript
    tolowercase2('Javascript', (saida) => {
        //Saida: javascript
    });
    modificaPalavra('Javascript') //Saida: javascript
```

## Loading... Clojure

