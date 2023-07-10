import React from 'react';
import calcularVariaveis from '../../calcularVariaveis'

function Tile(props){
    const initialPosition = {
        x: props.position.x,
        y: props.position.y
    };
    const qtd_x = 15;
    const qtd_y = 13;
    return (
        <div
        style={{
            width: 480/qtd_x,
            height: 416/qtd_y,
            border: '2px solid red',
            position: 'absolute',
            top: initialPosition.x * 416/qtd_y,
            left: initialPosition.y * 480/qtd_x,
            color: 'black',
        }}
        >
            {props.text}
        </div>
    );
}

export default Tile;