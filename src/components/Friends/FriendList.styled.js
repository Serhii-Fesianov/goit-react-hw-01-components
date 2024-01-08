import styled from 'styled-components';

export const FriendList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`;

export const FriendCard = styled.li`
  width: 450px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  margin: 0 auto;
  border: 3px solid lightskyblue;
  border-radius: 5px;
  margin: 5px 0;
`;

export const Span = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $isonline }) => ($isonline ? 'green' : 'red')};
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  font-family: Snell Roundhand, cursive;
  margin: 0 auto;
`;
