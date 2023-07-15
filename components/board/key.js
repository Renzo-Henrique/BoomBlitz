import React from 'react';
import calcularVariaveis from '../calcularVariaveis'
import UseKeyMoviment from '../hook/useKeyMoviment/UseKeyMoviment'



/**
 * Componente para renderizar uma chave.
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.position - Posição do tile no tabuleiro.
 * @param {number} props.position.x - Posição X do tile.
 * @param {number} props.position.y - Posição Y do tile.
 * @param {number} props.position.key_ - Valor da key1 ou key2.
 * @returns Componente representando a chave.
 */
function MyKey(props){
    // Define a posição inicial da chave
    const initialPositionKey = {
        x: props.position.x,
        y: props.position.y,
    };
    // Define qual eh a chave, key1 ou key2
    const key_ = props.key_

    // Calcula as variáveis necessárias
    const variaveis = calcularVariaveis();

    let TILE_CENTER = variaveis.TILE_CENTER_EGG;
    let KEY_SIZE = variaveis.TILE_SIZE_EGG;
   
    // Obtém o estado de movimento da chave usando o hook UseKeyMoviment
    const moviment = UseKeyMoviment(initialPositionKey, key_);

    // Cria uma cópia do estado de movimento da chave
    const moviment_key = {
        x: moviment.position.x,
        y: moviment.position.y,
    };

    // Verifica se a chave foi encontrada (x = 0, y = 0) e ajusta sua posição para fora do tabuleiro
    if(moviment_key.x == 0 && moviment_key.y == 0){
            moviment_key.x = -2;
            moviment_key.y = -2;
    }

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
            animation: `key-animation-moviment 2.5s steps(11) infinite`,
            top: +TILE_CENTER + KEY_SIZE  * (moviment_key.y),
            left: +TILE_CENTER + KEY_SIZE  * (moviment_key.x),
        }}>
       </div>
    );

}
export default MyKey;