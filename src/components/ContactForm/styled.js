import styled from 'styled-components';
import { Button } from 'common/styledCommon';
import { Colors } from 'common/COLORS';

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
