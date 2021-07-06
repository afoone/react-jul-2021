// importar react
import React from 'react'
import Title from './components/Title'
import List from './components/List'

// Generar el componente
const App = () => {

    const arr = [
        "Jose",
        "Susana",
        "María",
        "Juan",
        "Susana"
    ]

    return (
        <div>
            <Title text="mis amigos" />
            <List content={ arr } />
        </div>
    )

    // React.createElement("h1", null, "Hola Mundo");
}

// exportar el componente
export default App;

