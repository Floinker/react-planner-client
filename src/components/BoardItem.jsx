import React from "react";
import { StyledBoardItem } from "./styled/Board.styled";
import { useNavigate } from "react-router-dom";

const BoardItem = React.memo(({ board }) => {

  const navigate = useNavigate();

  const viewBoard = () => {
    navigate("/board", { replace: true, state: { board: board } });
  }

  return (
    <StyledBoardItem>
      <h2 onClick={viewBoard}>{board.board_name}</h2>
      <p>{board.description}</p>
    </StyledBoardItem>
  );
});

export default BoardItem;