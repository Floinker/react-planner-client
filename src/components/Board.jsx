import React from 'react'
import { useLocation } from 'react-router-dom'

const Board = () => {

    const location = useLocation();

    return (
        <div>{location.state.board.board_name}</div>
    )
}

export default Board