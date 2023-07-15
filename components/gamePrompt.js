

function mostrePrompt(message){
    alert(message);
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
