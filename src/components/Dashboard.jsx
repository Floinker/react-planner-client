import useDashboard from "./hooks/useDashboard";
import StyledDashboard, { CreateBoardButton, LoadMoreButton } from "./styled/Dashboard.styled";
import React from "react";
import { useState } from "react";
import BoardItem from "./BoardItem";
import BoardModal from "./BoardModal";

const Dashboard = () => {
  const [modalOpen, setModal] = useState(false);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useDashboard();

  const createNewBoard = () => {
    console.log("create new board");
    setModal(c => !c);
  };

  return (
    <StyledDashboard>
      <h1>My Boards</h1>
      {data?.pages?.map(page => page.boards.map(board => <BoardItem key={board.id} board={board} />))}
      <LoadMoreButton>
        {hasNextPage && !isFetchingNextPage && (
          <button onClick={() => fetchNextPage()}>Load More</button>
        )}
      </LoadMoreButton>
      <CreateBoardButton>
        <button onClick={() => createNewBoard()}>Create New Board</button>
      </CreateBoardButton>
      {modalOpen && <BoardModal setModal={setModal} />}
    </StyledDashboard>
  );
};

export default Dashboard;