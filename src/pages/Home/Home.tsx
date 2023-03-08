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
import { useCallback, useEffect, useState } from "react";
import { StartModal } from "../../components/Modals/StartModal";
import { Snow } from "../../components/general/Snow/Snow";
import { StyledPageIntoSnow } from "../../components/general/Snow/Snow.styled";
import { fetchData } from "../../utils/api";

export const Home = ({ user, setUser }: any) => {
  const [isStartModalOpen, setIsStartModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [userList, setUserList] = useState([
    {
      id: "mock_user",
      personalCode: "user",
      name: "User",
      biscotto:
        "Benvenuto nella mia App di Natale! Questo biscotto ti porterà molta fortuna!",
    },
  ]);

  const getData = useCallback(async () => {
    const users = await fetchData();
    setUserList([...userList, users]);
  }, []);

  const usersFilter = (userList: any) => {
    userList.filter((user: any) => {
      if (user.personalCode.toUpperCase() === inputValue.toUpperCase()) {
        setUser(user);
      }
    });
  };

  const handleClick = useCallback(() => {
    usersFilter(userList);
    setIsStartModalOpen(true);
  }, [usersFilter]);

  useEffect(() => {
    getData();
  }, [getData]);
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
