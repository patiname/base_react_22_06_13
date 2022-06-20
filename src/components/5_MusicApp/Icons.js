import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Icon = styled.div``;

export const Icons = () => {
  return (
    <Icon>
      <FontAwesomeIcon icon={faArrowPointer} />
    </Icon>
  );
};
