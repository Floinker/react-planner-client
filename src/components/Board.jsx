import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useBoard from './hooks/useBoard';
import StyledBoard from "./styled/Board.styled"
import { useState } from 'react';

const Board = () => {
    const location = useLocation();
    const board = location.state.board;

    const [panels, setPanels] = useState(null);

    const { mutate: getBoard } = useBoard();

    useEffect(() => {
        setPanels(getBoard(board))
    }, [])

    return (
        <StyledBoard>
            {board.board_name}{board.id}
            {panels}
        </StyledBoard>
    )
}

export default Board