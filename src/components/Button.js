import styled from "@emotion/styled";

const Button = styled.button`
  margin-top: 10px;
  background: ${props => props.theme.colors.textPrimary};
  height: 30px;
  border-radius: 10px;
  font-size: 1.1rem;
  outline: none;
  font-weight: bold;
`;

export default Button;
