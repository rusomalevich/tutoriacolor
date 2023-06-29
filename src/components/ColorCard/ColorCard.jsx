import React from 'react'
import './colorcard.css'
import ButtonBorder from '../ButtonBorder/ButtonBorder'

function ColorCard(props) {
    const {colors, likes, horas} = props
    return (
        <div className='card'>
            <div className='colors'>
                {colors.map((color, index) => (
                    <div className='color' style={{ "backgroundColor": "#" + color }} key={index}><div className='textoColor'>#{color}</div></div>
                ))}

            </div>
            <div className='meta'>
                <ButtonBorder>
                    <div className='likes'><i className='icon' icon='like'></i>{likes}</div>
                </ButtonBorder>
                <div className='horas'>Hace {horas} horas</div>
            </div>
        </div>
    );
}

export default ColorCard
