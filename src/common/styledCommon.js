import styled from 'styled-components';
import { Colors } from './COLORS';

export const Form = styled.form`
  padding: 50px;
  margin: auto;
  height: 300px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 4px 8px;
  border-radius: 8px;
  border: 2px solid ${Colors.blue};
  background-color: ${Colors.bgYellow};
  color: ${Colors.blue};

  &:hover,
  &:focus {
    outline: solid 2px ${Colors.blue};
    background-color: ${Colors.yellow};
  }
`;

export const Input = styled.input`
  background-color: ${Colors.bgYellow};
  border-style: none;
  border-radius: 8px;
  padding: 4px 8px;
  outline: none;

  &:hover,
  &:focus {
    outline: solid 2px ${Colors.yellow};
  }
  &:valid {
    background-color: ${Colors.bgBlue};
  }
`;

export const Label = styled.label`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${Colors.blue};
  font-weight: 500;
`;

export const Div = styled.div`
  max-width: 420px;
`;

export const Header = styled.h1`
  color: ${Colors.blue};
`;

