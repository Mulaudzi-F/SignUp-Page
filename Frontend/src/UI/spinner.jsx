import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled(BiLoaderAlt)`
  width: 6.4rem;
  height: 6.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default Spinner;
