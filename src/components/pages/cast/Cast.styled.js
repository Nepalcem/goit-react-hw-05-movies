import styled from 'styled-components';

export const ActorBlock = styled.div`
width: 160px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
    & .actor-inner {
        padding: 5px;
    }
  & img {
    border-radius: 4px;
  }

  & span {
    font-weight: 500;
  }
  & .actor-name {
    margin-top: 10px;
  }
`;

export const ActorList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap:10px;
`;
