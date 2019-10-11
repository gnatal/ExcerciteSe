import styled from "styled-components";

export const Card = styled.div`
  width: 90vw;
  box-shadow: 0px 0px 5px rgba(20, 20, 20, 0.5);
  background: #a8ff76;
  @media (max-width: 600px) {
    text-align: center;
  }
  margin: 10px auto;
`;

export const CardText = styled.p`
  margin: 10px;
  font-weight: bold;
  font-size: 1.2em;
  font-family: sans-serif;
  vertical-align: top;
  display: inline-block;
`;

export const CardImage = styled.img`
  box-shadow: 0px 0px 2px rgba(20, 20, 20, 0.2);
  width: 20vw;
  height: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  @media (max-width: 600px) {
    width: 100%;
    display: block;
  }

  display: inline-block;
`;
