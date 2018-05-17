'use strict'

// Funções básicas e tipos de variáveis
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