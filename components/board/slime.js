import React from 'react';
import UseMonsterMoviment from '../hook/useMonsterMoviment/UseMonsterMoviment'
import calcularVariaveis from '../calcularVariaveis'

function MySlime(props){
    const initialPositionSlime = {
        x: props.position.x,
        y: props.position.y
    };

   const variaveis = calcularVariaveis();

   let TILE_CENTER = variaveis.TILE_CENTER_MONSTER;

   let SLIME_SIZE = variaveis.MONSTER_SIZE;
   let TILE_SIZE_SLIME = variaveis.TILE_SIZE_MONSTER;

   const moviment_slime = UseMonsterMoviment(initialPositionSlime);
   var color = 'brown';
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
            animation: `slime-${color}-animation-moviment 1s steps(3) infinite`,
            /*animation: DEMON-animation-stand-by 1s steps(3) infinite;*/
            /*animation: DEMON-animation-hurt 1s steps(3) infinite;*/
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
