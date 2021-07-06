// importar react
import React from 'react'
import Title from './components/Title'

// Generar el componente
const App = () => {
    return (
        <div>
            <Title text="mi titulo" />
            <Title text ="ojo piojo" />
        </div>
    )

    // React.createElement("h1", null, "Hola Mundo");
}

// exportar el componente
export default App;

