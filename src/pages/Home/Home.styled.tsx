import styled from "styled-components";

export const StyledHome = styled.div<any>`
  height: 100vh;
  width: 100vw;
  background-image: url(${({ src }) => src});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  justify-content: center;
  align-content: center;
`;
export const StyledFlexContainer = styled.div<any>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  margin-top: 20px;
  margin-right: ${({ justifyContent }) =>
    justifyContent === "end" ? "20px" : "0"};
`;
export const StyledTextContainer = styled.div`
  width: 60%;
  text-align: center;
  font-size: 18px;
  color: white;
  font-weight: 300;
`;

export const StyledImageContainer = styled.div<any>`
  height: 100px;
  width: 100px;
  background-image: url(${({ src }) => src});
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
export const StyledImage = styled.img`
  max-height: 70%;
  max-width: 70%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
`;
export const StyledText = styled.div`
  margin-top: 40px;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;
export const StyledFormContainer = styled.div``;
export const StyledLabel = styled.div``;
export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  margin-bottom: 20px;
  height: 30px;
  font-size: 18px;
  z-index: 2;
  margin-top: 20px;
  &:focus-visible {
    outline: 0px;
    color: white;
  }
`;
export const StyledButton = styled.div`
  background-color: orange;
  width: 240px;
  padding: 10px 0;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #ffd181;
  }
  z-index: 2;
  margin-bottom: 20px;
`;
