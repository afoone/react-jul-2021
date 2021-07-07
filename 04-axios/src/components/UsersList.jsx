// Importar React desde react
import React from "react";
// importar axios
import axios from "axios";
import Skeleton from "react-loading-skeleton";

// clase que hereda de React.Component
class UserList extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      users: [],
    };
  }

  getUsersFromServer = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("he terminado");
      this.setState({
        users: res.data,
      });
    });
  };

  componentDidUpdate() {
    console.log("component did update");
  }

  componentDidMount() {
    console.log("component did mount");
    this.getUsersFromServer();
  }

  // crear un método render(), que es el que devuelve el jsx a renderizar
  render() {
    console.log("render");
    return (
      <div className="user-list">
        <ul>
          {this.state.users.length < 1 ? (
            <Skeleton count={10}></Skeleton>
          ) : null}

          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// exportar el componente
export default UserList;
