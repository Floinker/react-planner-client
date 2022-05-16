import styled from 'styled-components';

const Task = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: ${({ theme }) => theme.elevation_2};
    border-radius: 0.2rem;
  }

  > p {
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }
`;

export default Task;
