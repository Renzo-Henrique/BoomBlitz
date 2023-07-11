import React, { useEffect } from 'react';
import calcularVariaveis from '../calcularVariaveis'

function MyKey(props){
    const [moviment, setMoviment] = React.useState({
        x: props.position.x,
        y: props.position.y
      });

   const variaveis = calcularVariaveis();

   let TILE_CENTER = variaveis.TILE_CENTER_EGG;

   let KEY_SIZE = variaveis.TILE_SIZE_EGG;



   return (
        <div 
        style={{
            position: 'absolute',
            width: KEY_SIZE ,
            height: KEY_SIZE ,
            backgroundImage: 'url("assets/objects/key.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            /*Animacoes*/
            animation: `egg-animation-moviment 1s steps(4) infinite`,
            /*animation: DEMON-animation-stand-by 1s steps(3) infinite;*/
            /*animation: DEMON-animation-hurt 1s steps(3) infinite;*/
            top: +TILE_CENTER + KEY_SIZE  * (moviment.y),
            left: +TILE_CENTER + KEY_SIZE  * (moviment.x),
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
export default MyKey;