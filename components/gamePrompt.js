import {openPrompt} from './promptUtils'

/**
 * 
 * @brief Componente que mostra o prompt com a mensagem específica
 */
function mostrePrompt(message){
    console.log("abrindo alert");
    alert(message);
    console.log("Abrindo prompt");
    openPrompt();

    return true;
}

/**
 * @brief Componente que representa o prompt de continuar jogo ou reiniciar jogo
 * @returns Se escolher reiniciar: Recarrega a página, reiniciando o jogo. Se escolher continuar: Continua o jogo
 */
export default function GamePrompt(message) {

    if(mostrePrompt(message)){
        window.location.reload(true);
    }
    

    return(
        <p>
            
        </p>
    )
}
