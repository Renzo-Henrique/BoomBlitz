

function mostrePrompt(message){
    alert(message);
    return true;
}

export default function GamePrompt(message) {

    if(mostrePrompt(message)){
        window.location.reload(true);
    }
    

    return(
        <p>
            
        </p>
    )
}