import styled from "@emotion/styled";

const Card = styled.div`
  background-color: ${props => props.theme.colors.backgroundCard};
  width: 100%;
  height: 70vh;
  border-radius: 10px;
  opacity: 0.6;
  -webkit-box-shadow: 10px 10px 34px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 34px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 34px 2px rgba(0, 0, 0, 0.75);
`;

export default Card;
