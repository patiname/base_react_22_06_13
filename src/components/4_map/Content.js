import styled from "styled-components";
import { mainStyle } from "../../styles/GlobalStyeld";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.bgColor};
  /* =>프롭스 받아올때 사용방법 */
  font-size: ${mainStyle.fontSize};
`;

export const Content = () => {
  return (
    <div>
      <Box bgColor={mainStyle.color}>Styled compoents</Box>
      {/* =>스타일 컴포넌트 사용할때 프롭스 전달  */}
    </div>
  );
};
