import React from 'react';
import calcularVariaveis from '../calcularVariaveis'

function MyBush(props){
    const initialPositionBush = {
        x: props.position.x,
        y: props.position.y
    };

   const variaveis = calcularVariaveis();

   let TILE_CENTER = variaveis.TILE_CENTER_BUSH;

   let BUSH_SIZE = variaveis.TILE_SIZE_BUSH;

   return (
        <div 
        style={{
            position: 'absolute',
            width: BUSH_SIZE,
            height: BUSH_SIZE,
            backgroundImage: 'url("assets/blocks/bush.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            /*Animacoes*/
            // animation: `slime-${color}-animation-moviment 1s steps(3) infinite`,
            /*animation: DEMON-animation-stand-by 1s steps(3) infinite;*/
            /*animation: DEMON-animation-hurt 1s steps(3) infinite;*/
            top: +TILE_CENTER + BUSH_SIZE * (initialPositionBush.y),
            left: +TILE_CENTER + BUSH_SIZE * (initialPositionBush.x),
            // transform: `scaleX(${moviment_slime.direction === 'RIGHT' ? 1 : -1})`,
        }}>
       </div>
        // TILE_CENTER deve centralizar o DEMON no meio de um tile
        // positionState x e y fazem a movimentação de 1 tile
        // transform espelha a imagem para mudar de direção
        // STYLE DEVE FICAR AQUI, pro javascript n precisar pegar o ID na query
        // Com isso conseguimos modificar o css no javascript puro
    );

}
export default MyBush;