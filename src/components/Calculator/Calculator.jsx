import React, { useState } from 'react'
import './calculator.css'

const Calculator = () => {
  
    const [numeros, setNumeros] = useState({
      numero_1:'',
      numero_2:''
    })

    const [resultado, setResultado] = useState()
    
    const handleSubmitCalculatorForm = (evento) => {
      evento.preventDefault()
      
        let operacion = evento.nativeEvent.submitter.value
        if (operacion == '+') {
          setResultado(numeros.numero_1 + numeros.numero_2)
          
        } else if (operacion == '-'){
          setResultado(numeros.numero_1 - numeros.numero_2)
        } else if (operacion == '*'){
          setResultado(numeros.numero_1 * numeros.numero_2)
        } else {
          setResultado(numeros.numero_1 / numeros.numero_2)
        }
        console.log(numeros)
        console.log(operacion)
        
        //setNumeros({ ...numeros, [evento.target.name]: evento.target.value })
        //console.log(evento.nativeEvent.submitter.value)
        //evento.target[0].value
        //evento.target[1].value
      //console.log(evento.target[0].value + evento.nativeEvent.submitter.value + evento.target[1].value)
      //console.log(evento)
      //console.log(numeros)
    }
  
  const onHandleChangeCalculatorInput = (evento) => {
    setNumeros({ ...numeros, [evento.target.name]: Number(evento.target.value) })
  }


return (
    <div>
        <h1>Calculadora React</h1>
    <form action="" onSubmit={handleSubmitCalculatorForm}>
            <label htmlFor="numero_1">Ingrese el primer número</label>
            <input type="number" name='numero_1' id='numero_1' value={numeros.numero_1} onChange={onHandleChangeCalculatorInput} />

            <label htmlFor="numero_2">Ingrese el primer número</label>
            <input type="number" name='numero_2' id='numero_2' value={numeros.numero_2} onChange={onHandleChangeCalculatorInput} />

              <div>
                <button type="submit" value='+'>+</button>
                <button type="submit" value='-'>-</button>
                <button type="submit" value='*'>*</button>
                <button type="submit" value='/'>/</button>
              </div>
              <h2 className='resultado'>El resultado de la operación es:{resultado}</h2>
        </form>

    </div>
  )
}

export default Calculator