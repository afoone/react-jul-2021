import React, { useEffect } from 'react'
import AddUserForm from './AddUserForm'
import Board from './Board'
import SelectUser from './SelectUser'
import {getUsers} from '../redux/usersAction'
import {useDispatch} from 'react-redux'

const Game = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsers())
    }, [])

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
