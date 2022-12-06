import styled from "styled-components";

export const StyledPersonalPage = styled.div<any>`
  height: 100vh;
  width: 100vw;
  background-image: url(${({ src }) => src});
  display: grid;
  justify-content: center;
  align-content: center;
`;

export const StyledPersonalAuguri = styled.div<any>`
  padding: 0 50px;
  font-size:20px; 
  font-weight:600;;
`;
