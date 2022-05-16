import styled from 'styled-components';

const Board = styled.div`
    min-height: 100vh;
    width: 90%;
    max-width: 700px;
    margin: 3rem auto 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    h1 {
        text-align: center;
    }
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