import styled from 'styled-components';

const Board = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PanelHeader = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 20px;
  width: 89%;
  margin-top: 0;
`;
export const BoardHeader = styled.div`
  align-items: center;
  justify-content: center;
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10%;
  margin: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.elevation_1};
  border-radius: 5px;
`;

export const CreatePanelButton = styled.div``;

export const CreateTaskButton = styled.div`
  font-size: 1rem;
  background-color: green;
  max-width: 40%;
  text-align: center;
  border-radius: 0.3rem;
`;

export const RemovePanelButton = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  max-height: 2rem;
  background-color: red;
  max-width: 2rem;
  text-align: center;
  border-radius: 0.5rem;
`;

export const StyledBoardItem = styled.div`
  background-color: ${({ theme }) => theme.elevation_1};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  & > p {
    margin-top: 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export default Board;
