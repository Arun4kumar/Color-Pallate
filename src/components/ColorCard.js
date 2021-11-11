import styled from "styled-components";

export const Color = styled.div`
  width: 150px;
  height: 200px;
  background-color: ${(props) => props.background};
  margin-bottom: 10px;
  border-radius: 5px;
`;
export const ColorCard = styled.div`
  width: 150px;
  height: 230px;
  margin: 25px 15px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 5px;
  border-radius: 10px;
`;
export const Pallate = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
