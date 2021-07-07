// Importar React desde react
import React from "react";

// clase que hereda de React.Component
class UserList extends React.Component {
  
  
  // crear un método render(), que es el que devuelve el jsx a renderizar
  render() {
    return <div className="user-list">User List</div>;
  }
}

// exportar el componente
export default UserList;
