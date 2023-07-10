import React, { useEffect } from 'react';
import calcularVariaveis from '../calcularVariaveis'
import UseEggMoviment from '../hook/useEggMoviment/UseEggMoviment'

function MyEgg(props){
    const [moviment, setMoviment] = React.useState({
        x: props.position.x,
        y: props.position.y
      });

   const variaveis = calcularVariaveis();

   let TILE_CENTER = variaveis.TILE_CENTER_EGG;

   let EGG_SIZE = variaveis.TILE_SIZE_EGG;

   UseEggMoviment(moviment);

   useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMoviment({
        x: -1,
        y: -1
      });
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [props.position]);

   return (
        <div 
        style={{
            position: 'absolute',
            width: EGG_SIZE,
            height: EGG_SIZE,
            backgroundImage: 'url("assets/eggs/blue Egg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            /*Animacoes*/
            animation: `egg-animation-moviment 1s steps(4) infinite`,
            /*animation: DEMON-animation-stand-by 1s steps(3) infinite;*/
            /*animation: DEMON-animation-hurt 1s steps(3) infinite;*/
            top: +TILE_CENTER + EGG_SIZE * (moviment.y),
            left: +TILE_CENTER + EGG_SIZE * (moviment.x),
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
export default MyEgg;