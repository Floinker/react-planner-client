import styled from 'styled-components';

export const StyledBoardItem = styled.div`
    background-color: ${({ theme }) => theme.elevation_1};
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    & > p {
    margin-top: 1rem;
    }
`;