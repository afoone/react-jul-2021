import React from 'react'
import AddUserForm from './AddUserForm'
import Board from './Board'
import SelectUser from './SelectUser'

const Game = () => {
    return (
        <div>
            <h1>Tic-tac-toe</h1>
            <AddUserForm></AddUserForm>
            <div style={{
                display: "grid",
                gridTemplateColumns:"auto auto"
            }}>
                <Board></Board>
                <SelectUser></SelectUser>
            </div>
        </div>
    )
}

export default Game
