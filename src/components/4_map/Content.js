import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.bgColor};
`;

export const Content = () => {
  const mainColor = "#293462";

  return (
    <div>
      <Box bgColor={mainColor}></Box>
    </div>
  );
};
