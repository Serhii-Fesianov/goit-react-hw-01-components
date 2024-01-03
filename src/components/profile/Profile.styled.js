import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  width: 450px;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  margin: 30px auto 0 auto;
`;

export const Img = styled.img`
  object-fit: cover;
`;

export const CardTittle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  font-family: Snell Roundhand, cursive;
`;

export const LabelSocial = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-direction: row;
  background-color: beige;
  width: 280px;
`;

export const BasicInformation = styled.p`
  font-family: Snell Roundhand, cursive;
`;

export const TextSocial = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-family: Snell Roundhand, cursive;
  flex-direction: column;
`;
