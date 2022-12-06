import styled from "styled-components";

export const StyledModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  position: fixed;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledStartModal = styled.div<any>`
  width: 95%;
  max-height: 95vh;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 40%);
  background-color: white;
  overflow: hidden;
  position: absolute;
  &:focus-visible {
    outline: none;
  }
  text-align: center;
  font-size: 18px;
  font-weight: 200;
  background-image: url(${({ src }) => src});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledModalCloseButton = styled.div``;
export const StyledModalTitle = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 15px 0;
`;
export const StyledModalText = styled.div`
  margin: 20px 0;
`;
export const StyledModalLink = styled.div`
  width: 240px;
  margin-bottom: 20px;
`;
