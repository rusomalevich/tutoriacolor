import React from "react"
import './input.css'

const Input = () => {
    return (
        <div className="searchContainer">
            <input type='text' placeholder='Search palettes' className="inputSearch border"/>
            <i className="inputSearchIcon icon"></i>
        </div>
    )
}

export default Input