import React, { useEffect, useState} from 'react';
import useEventListener from '@use-it/event-listener';
import styles from '../../styles/dino.module.css';
import UseDinoMoviment from '../hook/useDinoMoviment/UseDinoMoviment'
import calcularVariaveis from '../calcularVariaveis'


// Gerando dinos aleatórios
const currentTime = new Date();
const seconds = currentTime.getSeconds();
const DINO_SPRITE = Math.trunc((seconds/ 15 )%4) + 1 ;

function MyDino(props){
    const variaveis = calcularVariaveis();

    const initialPosition = {
        x: props.position.x,
        y: props.position.y
    };

    let PIXEL_SIZE = variaveis.PIXEL_SIZE;
    let DINO_SIZE = variaveis.DINO_SIZE;
    let TILE_SIZE_DINO = variaveis.TILE_SIZE_DINO;
    let TILE_CENTER_DINO = variaveis.TILE_CENTER_DINO;

    const moviment = UseDinoMoviment(initialPosition);


    // Sprite do dino
    const [dinoSprite, setDinoSprite] = useState(DINO_SPRITE); // Estado para armazenar o valor de DINO_SPRITE

    useEffect(() => {
        const currentTime = new Date();
        const seconds = currentTime.getSeconds();
        console.log(seconds);
        const newDinoSprite = Math.trunc((seconds / 15) % 4) + 1;
        setDinoSprite(newDinoSprite); // Atualiza o valor de dinoSprite no estado
    }, []); // [] como segundo argumento para executar o useEffect apenas uma vez na montagem

    const url_dino = "assets/dinos/sheets/DinoSprites_" + dinoSprite +".png";
    console.log(url_dino);
    return (
        <div 
            style={{
                position: 'absolute',
                width: DINO_SIZE,
                height: DINO_SIZE,
                backgroundImage: `url(${url_dino})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                /*Animacoes*/
                animation: 'dino-animation-moviment 1s steps(4) infinite',
                /*animation: dino-animation-stand-by 1s steps(3) infinite;*/
                /*animation: dino-animation-hurt 1s steps(3) infinite;*/
                top:  -TILE_CENTER_DINO+  TILE_SIZE_DINO * (moviment.position.y),
                left: -TILE_CENTER_DINO+ TILE_SIZE_DINO * (moviment.position.x ),
                transform: `scaleX(${moviment.direction === 'RIGHT' ? 1 : -1})`,
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