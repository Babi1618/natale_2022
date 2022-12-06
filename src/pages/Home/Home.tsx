import {
  StyledButton,
  StyledFlexContainer,
  StyledFormContainer,
  StyledHome,
  StyledInput,
  StyledLabel,
  StyledText,
  StyledTextContainer,
} from "./Home.styled";
import sfondo from "../../assets/sfondo.jpg";
import { useEffect, useState } from "react";
import { StartModal } from "../../components/Modals/StartModal";
import { Snow } from "../../components/general/Snow/Snow";
import { StyledPageIntoSnow } from "../../components/general/Snow/Snow.styled";
import { userList } from "../../constants/userList";
// import { userList } from "../../constants/userList";

export const Home = ({ user, setUser }: any) => {
  const [isStartModalOpen, setIsStartModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const usersFilter = (userList: any) => {
    userList.filter((user: any) => {
      if (user.personalCode === inputValue) {
        setUser(user);
      }
    });
  };

  const handleClick = () => {
    usersFilter(userList);
    setIsStartModalOpen(true);
  };

  return (
    <>
      <Snow></Snow>
      {!isStartModalOpen && (
        <StyledPageIntoSnow>
          <StyledHome src={sfondo}>
            <StyledFlexContainer>
              <StyledTextContainer>
                <StyledText>Buon Natale!!</StyledText>
                <StyledFormContainer>
                  <StyledLabel> Inserisci la parola magica!</StyledLabel>
                  <StyledFlexContainer>
                    <StyledInput
                      onChange={(e) => {
                        setInputValue(e.target.value);
                      }}
                    />
                  </StyledFlexContainer>
                  <StyledFlexContainer>
                    <StyledButton onClick={handleClick}>Partiamo!</StyledButton>
                  </StyledFlexContainer>
                </StyledFormContainer>
              </StyledTextContainer>
            </StyledFlexContainer>
          </StyledHome>
        </StyledPageIntoSnow>
      )}

      {isStartModalOpen && (
        <StartModal
          setIsStartModalOpen={setIsStartModalOpen}
          user={user}
          setValue={setInputValue}
        />
      )}
    </>
  );
};
