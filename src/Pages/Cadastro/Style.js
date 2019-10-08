import styled from "styled-components";
import { Button } from "../../StyledComponents/Button";

export const FormBox = styled.div`
  width: 90vw;
  max-width: 600px;
  height: auto;
  min-height: 200px;
  overflow: auto;
  background: #a8ff76;
  border-radius: 20px;
  margin: 10px auto;
  text-align: center;
`;

export const InputLabel = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  display: block;
  color: #000;
`;

export const InputText = styled.input`
  border: none;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  display: block;
  margin: 10px auto;
  width: 90%;
`;

export const ConfirmButton = styled(Button)`
  width: 90%;
`;
