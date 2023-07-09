import React from 'react';
import styles from '../../styles/dino.module.css';

// forma que descobrir de capturar dentro do pixel (nao consegui fazer funcionar ainda)
React.useEffect(() => {
    var character = document.querySelector('.dino');
}, [])

// posicao no tabuleiro
var x = 0;
var y = 0;

// teclas pressionadas de movimento
var held_directions = [];

// velocidade personagem
var speed = 1;

// IMPORTANTE: assistir o video: https://www.youtube.com/watch?v=Lf3ZV0UsnEo e utilizar object literals
const placeCharacter = () => { // acho que essa notacao é de typescript
    var pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));  // continuando a historia de pegar o tamanho do pixel

    const held_direction = held_directions[0];

    if (held_direction){
        if (held_direction === directions.right) {
            x += speed;
        }
        if (held_direction === directions.left) {
            x -= speed;
        }
        if (held_direction === directions.down) {
            x += speed;
        }
        if (held_direction === directions.up) {
            x -= speed;
        }
        character.setAttribute("walking", held_direction ? "true" : "false");
    }

    character.setAttribute("walking", held_direction ? "true" : "false");

    character.style.transform = 'translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0)';
};

const step = () => { // acho que essa notacao é de typescript
    placeCharacter();
    window.requestAnimationFrame(() => {
        step();
    })
}
step();

const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
}

const keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
}

document.addEventListener("keydown", (e) => {
    var dir = e.key;

    if (dir && held_directions.indexOf(dir) === -1){
        held_directions.unshift(dir);
    }
});

document.addEventListener("keyup", (e) => {
    var dir = e.key;
    var index = held_directions.indexOf(dir);

    if (index > -1){
        held_directions.splice(index, 1);
    }
});

function handleKeyDown(event){
    const keyPressed = event.key;

    const command = {
        keyPressed,
    }

    notifyAll(command);
}

function Dino(){
    return (
        <div className={styles.dino}>
            <div className={styles.dino_spritesheet}></div>
        </div>
    );
};

export default Dino;