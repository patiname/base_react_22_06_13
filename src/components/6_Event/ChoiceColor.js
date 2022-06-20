import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 20px 0;
    font-size: 30px;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  margin-bottom: 20px;
  transform: rotateZ(${(props) => props.rotate});
  transition: 0.5s;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 5px 20px;
  margin-right: 20px;
`;

export const ChoiceColor = () => {
  const [color, setColor] = useState("red");
  const [rotate, setRotate] = useState("0deg");

  const handleRedColor = () => setColor("red");

  const handleGreenColor = () => setColor("green");

  const handleBlueColor = () => setColor("blue");

  const handleRotate = () => setRotate("360deg");

  return (
    <Wrap>
      <h3>버튼을 눌러 색상을 바꿔보세요!</h3>
      <Box rotate={rotate} bgColor={color}></Box>
      <BtnWrap>
        <Button onClick={handleRedColor}>빨강</Button>
        <Button onClick={handleGreenColor}>초록</Button>
        <Button onClick={handleBlueColor}>파랑</Button>
        <Button onClick={handleRotate}>회전!</Button>
      </BtnWrap>
    </Wrap>
  );
};
