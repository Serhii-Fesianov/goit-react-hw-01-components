import styled from 'styled-components';

/////////BOX FOR CARD\\\\\\\\\
export const Card = styled.div`
  display: flex;
  width: 450px;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  margin: 30px auto 0 auto;
`;

/////////STYLE IMG\\\\\\\\\
export const Img = styled.img`
  object-fit: cover;
`;

/////////STYLE TITLE CARD\\\\\\\\\
export const CardTittle = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-family: Snell Roundhand, cursive;
  margin: 0 0 10px 0;
`;

/////////BASIC INFORMATION\\\\\\\\\
export const BasicInformation = styled.p`
  font-family: Snell Roundhand, cursive;
  margin: 0 0 10px 0;
`;

/////////UL SOCIAL INFORMATION\\\\\\\\\
export const ListSocial = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  margin: 0 auto;
  padding: 0;
`;

/////////BASIC STYLE FOR ELEMENT LIST\\\\\\\\\
export const ElementList = styled.li`
  font-family: Snell Roundhand, cursive;
  font-size: 20px;
  height: 30px;
`;
