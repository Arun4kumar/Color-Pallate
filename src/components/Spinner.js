import styled, { keyframes } from "styled-components";
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid lightgrey;
  border-right: 10px solid ${(props) => props.border};
  border-radius: 50%;
  animation: ${spin} 0.5s ease-in-out infinite;
`;

export default Spinner;
