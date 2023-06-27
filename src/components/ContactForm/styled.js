import styled from 'styled-components';
import { Colors } from 'common/COLORS';

const Button = styled.button`
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

export const SubmitBtn = styled(Button)`
  margin: 16px 0;
  font-weight: 500;
  font-size: 16px;
`;

export const Form = styled.form`
  padding: 0 16px;
  border: 2px solid ${Colors.blue};
  border-radius: 8px;
  max-width: 420px;
`;
