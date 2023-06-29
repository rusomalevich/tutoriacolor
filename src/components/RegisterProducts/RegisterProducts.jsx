import React, { useState } from 'react'
import './registerproducts.css'


const RegisterProducts = () => {
    const opciones = ['juegos', 'tecnologia', 'hogar', 'Electrodomesticos']
    const [formData, SetFormData] = useState({
        nombre:'',
        categoria: '',
        precio:'',
        envios:'',
        thumbnail: ''
    })
    const handleSubmitRegistedProduct = (evento) => {
        evento.preventDefault()
    }

    const onHandleChangeInput = (evento) => {
        
        SetFormData({ ...formData, [evento.target.name]: evento.target.value })
    }
    
    
    const [products, setProducts] = useState([])
    return (
        <div className='formularioUsuario'>
            <h1>Registro de productos en React</h1>
            <form onSubmit={handleSubmitRegistedProduct}>
                <label htmlFor="nombre">Ingrese el nombre de su producto</label>
                <input type="text" placeholder='Carta especial 32' id='nombre' name='nombre' value={formData.nombre} onChange={onHandleChangeInput} />
                <label htmlFor="categoria">Ingrese la categoria del producto:</label>
                <select name="categoria" id="categoria">
                    {opciones.map((opcion) => <option value={opcion} key={opcion}>{opcion}</option>)}
                </select>
                <label htmlFor='precio'>Ingrese el costo del producto:</label>
                <input type="number" name="precio" id="precio" value={formData.precio} onChange={onHandleChangeInput} />
                <label htmlFor='envios'>Acepta envios:</label>
                <input type="checkbox" name="envios" id="envios" value={formData.envios} onChange={onHandleChangeInput} />
                <label htmlFor='thumbnail'>Ingrese la direccion de la imagen:</label>
                <input type='text' id='thumbnail' name='thumbnail' value={formData.thumbnail} onChange={onHandleChangeInput} />
                <input type='submit' value='Registrar' />
            </form>


            {/* Aca iria el mapeo de productos */}
            <div>
                <h2>Producto: nombre</h2>
                <h3>Precio: $88000</h3>
                <div>Acepta envios: SI (o no)</div>
                <div>
                    <img src="https://img.remediosdigitales.com/2b411c/ferrari-f8-spider_/1366_2000.jpg" alt="nombre del producto" width={'200px'} />
                </div>
                <div><b>Categoria:</b> categoria</div>
            </div>
        </div>
    )
}


export default RegisterProducts
