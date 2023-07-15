import React, { useEffect } from 'react';
import calcularVariaveis from '../calcularVariaveis'
import UseEggMoviment from '../hook/useEggMoviment/UseEggMoviment'

/**
 * Componente para renderizar um ovo de dinossauro.
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.position - Posição do tile no tabuleiro.
 * @param {number} props.position.x - Posição X do tile.
 * @param {number} props.position.y - Posição Y do tile.
 * @returns Componente representando o ovo.
 */
function MyEgg(props){
    // Define o estado de movimento do ovo
    const [moviment, setMoviment] = React.useState({
      x: props.position.x,
      y: props.position.y
    });
    
    // Calcula as variáveis necessárias
    const variaveis = calcularVariaveis();

    let TILE_CENTER = variaveis.TILE_CENTER_EGG;

    let EGG_SIZE = variaveis.TILE_SIZE_EGG;

    // Obtém o estado de movimento do ovo usando o hook UseEggMoviment
    UseEggMoviment(moviment);

    // Define um efeito que atualiza o estado do ovo após um certo tempo
    useEffect(() => {
      
      const timeoutId = setTimeout(() => {
        setMoviment({
          x: -1,
          y: -1
        });
      }, 3000);

      // Função de limpeza para cancelar o timeout se o componente for desmontado
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
            backgroundImage: 'url("assets/eggs/blueEgg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            /*Animacoes*/
            animation: `egg-animation-moviment 1s steps(4) infinite`,
            top: +TILE_CENTER + EGG_SIZE * (moviment.y),
            left: +TILE_CENTER + EGG_SIZE * (moviment.x),
        }}>
       </div>
    );

}
export default MyEgg;