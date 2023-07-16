import React, { useEffect, useState} from 'react';
import UseDinoMoviment from '../hook/useDinoMoviment/UseDinoMoviment'
import calcularVariaveis from '../calcularVariaveis'
import { randomDino } from '../../settings/constants';


/**
 * Componente para renderizar um dinossaruro.
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.position - Posição do tile no tabuleiro.
 * @param {number} props.position.x - Posição X do tile.
 * @param {number} props.position.y - Posição Y do tile.
 * @returns Componente representando o dinossauro.
 */
function MyDino(props){
    // Sprite do dinossauro eh aleatorio
    const [dinoSprite, setDinoSprite] = useState(randomDino()); // Estado para armazenar o valor de DINO_SPRITE
    // Url da imagem do dino
    const[dinoUrl, setDinoUrl] = useState(`/assets/dinos/sheets/DinoSprites_${dinoSprite}.png`);


    useEffect(() => {
        setDinoSprite(randomDino()); // Atualiza o valor de dinoSprite no estado
    }, []); // [] como segundo argumento para executar o useEffect apenas uma vez na montagem
    useEffect(() => {
        setDinoUrl(`"/assets/dinos/sheets/DinoSprites_${dinoSprite}.png"`); // Atualiza o valor de dinoUrl no estado
    }, [dinoSprite]); // [] como segundo argumento para executar o useEffect apenas uma vez na montagem
    
    // Define a posição inicial do dinossauro
    const initialPosition = {
        x: props.position.x,
        y: props.position.y
    };

    // Calcula as variáveis necessárias para estilizar o Dinossauro
    const variaveis = calcularVariaveis();
    
    let DINO_SIZE = variaveis.DINO_SIZE;
    let TILE_SIZE_DINO = variaveis.TILE_SIZE_DINO;
    let TILE_CENTER_DINO = variaveis.TILE_CENTER_DINO;

    // Obtém o estado de movimento do dinossauro usando o hook UseDinoMoviment
    const moviment = UseDinoMoviment(initialPosition);


    


    return (
        <div 
            style={{
                position: 'absolute',
                width: DINO_SIZE,
                height: DINO_SIZE,
                backgroundImage: `url(${dinoUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                /*Animacoes*/
                animation: 'dino-animation-moviment 1s steps(4) infinite',
                //animation: 'dino-animation-stand-by 1s steps(3) infinite',
                //animation: 'dino-animation-hurt 1s steps(3) infinite',
                top:  -TILE_CENTER_DINO+  TILE_SIZE_DINO * (moviment.position.y),
                left: -TILE_CENTER_DINO+ TILE_SIZE_DINO * (moviment.position.x ),
                transform: `scaleX(${moviment.direction === 'RIGHT' ? 1 : -1})`,
            }}>
        </div>
    );

}

export default MyDino;