import React, { useEffect, useState} from 'react';
import UseMonsterMoviment from '../hook/useMonsterMoviment/UseMonsterMoviment'
import calcularVariaveis from '../calcularVariaveis'
import {Ecanvas} from '../canvas/canvas'
import { randomBoard } from '../../settings/constants';

/**
 * Componente para renderizar um inimigo slime.
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.position - Posição do tile no tabuleiro.
 * @param {number} props.position.x - Posição X do tile.
 * @param {number} props.position.y - Posição Y do tile.
 * @returns Componente representando o slime.
 */
function MySlime(props){
    // Sprite aleatorio do slime
    const [slimeSprite, setSlimeSprite] = useState(randomBoard);

    useEffect(() => {
        setSlimeSprite(randomBoard); // Atualiza o valor de slimeSprite no estado
    }, []); // [] como segundo argumento para executar o useEffect apenas uma vez na montagem
    
    // Define a posição inicial do slime
    const initialPositionSlime = {
        x: props.position.x,
        y: props.position.y
    };

   const variaveis = calcularVariaveis();

   // Calcula as variáveis necessárias
   let TILE_CENTER = variaveis.TILE_CENTER_MONSTER;
   let SLIME_SIZE = variaveis.MONSTER_SIZE;
   let TILE_SIZE_SLIME = variaveis.TILE_SIZE_MONSTER;

    // Obtém o estado de movimento do slime usando o hook UseMonsterMoviment
   const moviment_slime = UseMonsterMoviment(initialPositionSlime, Ecanvas.SLIME);

   // Define a cor do slime 
   var color = 'brown';
   if(slimeSprite == 1){
        color = 'brown';
   }
   else if (slimeSprite == 2){
        color = 'green';
   }
   
    // Sprite animation
    const[slimeAnimation, setSlimeAnimation] = useState(`slime-${color}-animation-moviment 1s steps(3) infinite`);
    // Define a animação do slime
    useEffect(() => {
        setSlimeAnimation(`slime-${color}-animation-moviment 1s steps(3) infinite`); // Atualiza o valor de slimeSprite no estado
    }, []); // [] como segundo argumento para executar o useEffect apenas uma vez na montagem

   return (
           
        <div 
        style={{
            position: 'absolute',
            width: SLIME_SIZE,
            height: SLIME_SIZE,
            backgroundImage: 'url("assets/monsters/slime.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            /*Animacoes*/
            animation: `${slimeAnimation}`,
            top: +TILE_CENTER  + TILE_SIZE_SLIME * (moviment_slime.position.y),
            left: +TILE_CENTER  + TILE_SIZE_SLIME * (moviment_slime.position.x),
            transform: `scaleX(${moviment_slime.direction === 'RIGHT' ? 1 : -1})`,
        }}>
       </div>
        // TILE_CENTER deve centralizar o DEMON no meio de um tile
        // positionState x e y fazem a movimentação de 1 tile
        // transform espelha a imagem para mudar de direção
        // STYLE DEVE FICAR AQUI, pro javascript n precisar pegar o ID na query
        // Com isso conseguimos modificar o css no javascript puro
    );

}
export default MySlime;
