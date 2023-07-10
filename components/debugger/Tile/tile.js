import React from 'react';
import calcularVariaveis from '../../calcularVariaveis'
import { Ecanvas } from '../../canvas/canvas';

function Tile(props){
    const initialPosition = {
        x: props.position.x,
        y: props.position.y
    };
    const qtd_x = 15;
    const qtd_y = 13;

    function getTileColor(){
        switch(props.text){
            case Ecanvas.FLOOR:{
                return 'darkgrey';
            }
            case Ecanvas.ROCK:{
                return 'red';
            }
            case Ecanvas.BORDER:{
                return ['darkyellow']
            }
            case Ecanvas.DINO:{
                return 'blue'
            }
            case Ecanvas.SLIME:{
                return 'orange'
            }
            case Ecanvas.DEMON:{
                return 'orange'
            }
        }
    }

    const color = getTileColor();

    return (
        <div
        style={{
            width: 480/qtd_x,
            height: 416/qtd_y,
            border: `2px solid ${color}`,
            position: 'absolute',
            top: initialPosition.x * 416/qtd_y,
            left: initialPosition.y * 480/qtd_x,
            color: color,
            fontSize: 20,
        }}
        >
            {props.text}
        </div>
    );
}

export default Tile;