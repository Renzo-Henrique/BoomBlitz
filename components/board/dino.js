import React, { useEffect } from 'react';
import useEventListener from '@use-it/event-listener'
import styles from '../../styles/dino.module.css';
import {DINO_SIZE, TILE_SIZE, TILE_CENTER} from '../../settings/constants';


const initialPosition = {
    x: 0,
    y: 0
};
function MyDino(){
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');

    useEventListener('keydown', (event) =>{
        //Faz movimentaçao
        if(event.key == 'ArrowLeft'){
            const newPosition = {
                x: positionState.x - 1,
                y: positionState.y,
            }
            updatePositionState(newPosition);
            updateDirectionState("LEFT");
        }else if(event.key == 'ArrowRight'){
            const newPosition = {
                x: positionState.x +1,
                y: positionState.y,
            }
            updatePositionState(newPosition);
            updateDirectionState("RIGHT");
        }else if(event.key == 'ArrowUp'){
            const newPosition = {
                x: positionState.x,
                y: positionState.y - 1,
            }
            updatePositionState(newPosition);
        }else if(event.key == 'ArrowDown'){
            const newPosition = {
                x: positionState.x,
                y: positionState.y + 1,
            }
            updatePositionState(newPosition);
        }

    })

    
    return (
        <div 
            style={{
                position: 'absolute',
                width: DINO_SIZE,
                height: DINO_SIZE,
                backgroundImage: 'url("assets/dinos/sheets/DinoSprites_doux.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                
                /*Animacoes*/
                animation: 'dino-animation-moviment 1s steps(4) infinite',
                /*animation: dino-animation-stand-by 1s steps(3) infinite;*/
                /*animation: dino-animation-hurt 1s steps(3) infinite;*/
                top: TILE_CENTER+ TILE_SIZE * positionState.y,
                left: TILE_CENTER + TILE_SIZE * positionState.x,
                transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`,
            }}>
        </div>
        // TILE_CENTER deve centralizar o dino no meio de um tile
        // positionState x e y fazem a movimentação de 1 tile
        // transform espelha a imagem para mudar de direção
        // STYLE DEVE FICAR AQUI, pro javascript n precisar pegar o ID na query
        // Com isso conseguimos modificar o css no javascript puro
    );

}
export default MyDino;

/*
// forma que descobrir de capturar dentro do pixel (nao consegui fazer funcionar ainda)
    useEffect(() => {
        var character = document.querySelector('.dino');
        //if (!character) return; // Verificar se o elemento está disponível
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
                    y += speed;
                }
                if (held_direction === directions.up) {
                    y -= speed;
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
    }, [])
*/
