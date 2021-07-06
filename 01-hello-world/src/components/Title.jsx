// importar react 
import React from 'react'
import './Title.css'


// crear una función que devuelve jsx
function Title(props) {
    return <h1 className="title">{ props.text.toUpperCase() }</h1>
}


// exportar la función
export default Title;