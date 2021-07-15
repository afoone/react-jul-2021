export const ADD_USER = "add-user";
export const ADD_PARTIDA = "add-partida";

export const addUser = (username) => ({
    type: ADD_USER, 
    payload: {
        username,
        partidas: 0
    }
})

export const addPartida = (username) => ({
    type: ADD_PARTIDA, 
    payload: username
})