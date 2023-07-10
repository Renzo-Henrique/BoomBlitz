 import React from 'react';
 import UseMonsterMoviment from '../hook/useMonsterMoviment/UseMonsterMoviment'
 import calcularVariaveis from '../calcularVariaveis'




 function MyDemon(props){
    const initialPositionDemon = {
        x: props.position.x,
        y: props.position.y
    };
    
    const moviment_demon = UseMonsterMoviment(initialPositionDemon);
    const variaveis = calcularVariaveis();

    let DEMON_SIZE = variaveis.MONSTER_SIZE;
    let TILE_SIZE_DEMON = variaveis.TILE_SIZE_MONSTER;
    let TILE_CENTER = variaveis.TILE_CENTER_MONSTER;


    return (
        <div 
            style={{
                position: 'absolute',
                width: DEMON_SIZE,
                height: DEMON_SIZE,
                backgroundImage: 'url("assets/monsters/demon.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                /*Animacoes*/
                animation: 'demon-animation-moviment 1s steps(7) infinite',
                /*animation: DEMON-animation-stand-by 1s steps(3) infinite;*/
                /*animation: DEMON-animation-hurt 1s steps(3) infinite;*/
                top: +TILE_CENTER  + TILE_SIZE_DEMON * (moviment_demon.position.y),
                left: +TILE_CENTER  + TILE_SIZE_DEMON * (moviment_demon.position.x),
                transform: `scaleX(${moviment_demon.direction === 'RIGHT' ? 1 : -1})`,
            }}>
        </div>
            
         // TILE_CENTER deve centralizar o DEMON no meio de um tile
         // positionState x e y fazem a movimentação de 1 tile
         // transform espelha a imagem para mudar de direção
         // STYLE DEVE FICAR AQUI, pro javascript n precisar pegar o ID na query
         // Com isso conseguimos modificar o css no javascript puro
     );

 }
 export default MyDemon;
