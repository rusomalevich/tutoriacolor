import React from 'react'
import './card.css'
import ButtonBorder from '../ButtonBorder/ButtonBorder'

const Card = ({colors, likes, horas}) => {
    let colorHex=["random"]
    let index=0
    colors.forEach(color => {
        colorHex[index] = color
        console.log(colorHex[index])
        index++
    })
    

    
    /*
    colors.map = (color, index) => {
        colorHex[index] = color
        console.log(colorHex[index])
    }
    */
    

  return (
      <div className='card'>
        <div className='colors'>
              <div className='color' style={{ "backgroundColor": "#" + colorHex[0] }}><div className='textoColor'>#{colorHex[0]}</div></div>
              <div className='color' style={{ "backgroundColor": "#" + colorHex[1] }}><div className='textoColor'>#{colorHex[1]}</div></div>
              <div className='color' style={{ "backgroundColor": "#" + colorHex[2] }}><div className='textoColor'>#{colorHex[2]}</div></div>
              <div className='color' style={{ "backgroundColor": "#" + colorHex[3] }}><div className='textoColor'>#{colorHex[3]}</div></div>
        </div>
        <div className='meta'>
            <ButtonBorder>
                <div className='likes'><i className='icon' icon='like'></i>{likes}</div>
            </ButtonBorder>
            <div className='horas'>{horas}</div>
        </div>
    </div>
  )
}

export default Card