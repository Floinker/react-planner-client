import useDashboard from "./hooks/useDashboard";
import BoardItem from "./BoardItem";
import StyledDashboard, { LoadMoreButton } from "./styled/Dashboard.styled";
import React from "react";

const Account = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useDashboard("my_posts");
  return (
    <StyledDashboard>
      <h1>My Boards</h1>
      {data?.pages?.map(page => page.boards.map(board => <BoardItem board={board} />))}
      <LoadMoreButton>
        {hasNextPage && !isFetchingNextPage && (
          <button onClick={() => fetchNextPage()}>Load More</button>
        )}
      </LoadMoreButton>
    </StyledDashboard>
  );
};

export default Account;