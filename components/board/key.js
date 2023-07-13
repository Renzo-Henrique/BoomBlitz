import React, { useEffect } from 'react';
import calcularVariaveis from '../calcularVariaveis'
import UseKeyMoviment from '../hook/useKeyMoviment/UseKeyMoviment'
import {Ecanvas} from '../canvas/canvas'


function MyKey(props){

    //Verificador de bugs
    if (props === null) {
        console.log("O objeto é nulo. Foi encontrado neste ponto do código: " + 'keys');
        console.log(new Error().stack);
    }

    const initialPositionKey = {
        x: props.position.x,
        y: props.position.y,
    };

    const key_ = props.key_

    //console.log( 'Chaves x:'+ initialPositionKey.x + ' y:', initialPositionKey.y);
   const variaveis = calcularVariaveis();

   let TILE_CENTER = variaveis.TILE_CENTER_EGG;

   let KEY_SIZE = variaveis.TILE_SIZE_EGG;
   
    
   const moviment = UseKeyMoviment(initialPositionKey, key_);

   const moviment_key = {
    x: moviment.position.x,
    y: moviment.position.y,
    };

    //Verificador de bugs
    if (moviment.position === null) {
        console.log("O objeto é nulo. Foi encontrado neste ponto do código: " + 'keys');
        console.log(new Error().stack);
    }


   if(moviment_key.x == 0 && moviment_key.y == 0){
        console.log("Encontrou uma chave!!");
        moviment_key.x = -2;
        moviment_key.y = -2;
   }

   console.log( 'Chaves x:'+ moviment_key.x + ' y:', moviment_key.y);
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
            top: +TILE_CENTER + KEY_SIZE  * (moviment_key.y),
            left: +TILE_CENTER + KEY_SIZE  * (moviment_key.x),
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