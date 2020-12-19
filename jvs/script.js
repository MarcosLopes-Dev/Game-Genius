let order =[];
let clickOrder = [];
let score = 0;

// 0 = verde   1 = vermelho  2 = amarelo  3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let sorteiaOrdem = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende proxima cor
let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 250);

    setTimeout(() => {
        
        element.classList.remove("selected");
    });
}
//checa botões clicados
let checkOrder = () => {
    for (let i in clickOrder){
        if(clickOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length){
        alert('Pontuação: ' + score + '\n Você acertou! iniciando próximo nível.');
        nextLevel();
    }
}

let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

}

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    }else if (color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

let nextLevel = () => {
    score++;
    sorteiaOrdem();
}

let gameOver = () =>{
    alert('Pontuação: ' + score + '\n Você perdeu o jogo!\n Clique em OK para iniciar');
    order = [];
    clickOrder = [];

    playGame();
}


let playGame = () =>{
    alert('bem vindo ao Genius! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//green.addEventListener("onclick", click(0));

green.onclick = () => {click(0)};

red.onclick = () => {click(1)};

yellow.onclick = () => {click(2)};

blue.onclick = () => {click(3)};


playGame();