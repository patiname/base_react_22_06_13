import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
`;

export const ChangeColor = () => {
  const [color, setColor] = useState("salmon");
  const handleColor = () => {
    setColor("gold");
  };

  return <Box bgColor={color} onClick={handleColor} />;
};
