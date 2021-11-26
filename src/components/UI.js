import styled, { createGlobalStyle } from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.static};
  border: 0;
  margin: 10px 0;
  outline: 0;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: white;
  padding: 20px 100px;
  font-size: 1.2rem;
  &:hover {
    background-color: ${(props) => props.hover};
  }
`;

export const Message = styled.div`
  padding: 10px 30px;
  margin: 20px 0;
  display: inline-block;
  border-radius: 30px;
  background-color: ${(props) => props.background};
  color: ${({ text }) => text};
  text-align: center;
`;

export const Container = styled.div`
  background-color: ${(props) => props.background};
  width: 100%;
  min-height: 100vh;

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: repeat;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
