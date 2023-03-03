import {
  StyledButton,
  StyledFlexContainer,
  StyledImage,
  StyledImageContainer,
} from "../../pages/Home/Home.styled";
import { User } from "../../utils/interfaces";
import { Modal } from "../general/Modal/Modal";
import {
  StyledModalCloseButton,
  StyledModalLink,
  StyledModalText,
  StyledModalTitle,
  StyledStartModal,
} from "../general/Modal/Modal.styled";
import sfondo2 from "../../assets/sfondo2.png";
import ominoFelice from "../../assets/omino_felice.png";
import ominoTriste from "../../assets/omino_triste.png";

import winter from "../../assets/winter.jpg";
import { PaginaBiscotto } from "../../pages/Biscotto/Biscotto";
export const StartModal = ({
  setIsStartModalOpen,
  user,
  setValue,
}: StartModalProps) => {
  const handleCloseModal = () => {
    setIsStartModalOpen(false);
    setValue("");
  };

  return (
    <Modal>
      {user && <GoModal handleCloseModal={handleCloseModal} user={user} />}
      {!user && <StopModal handleCloseModal={handleCloseModal} />}
    </Modal>
  );
};

const GoModal = ({ handleCloseModal, user }: GoStopModalProps) => {
  // console.log(user);
  return (
    <StyledStartModal src={winter}>
      <StyledFlexContainer justifyContent={"end"}>
        <StyledModalCloseButton onClick={handleCloseModal}>
          X
        </StyledModalCloseButton>
      </StyledFlexContainer>

      <StyledFlexContainer>
        <StyledImageContainer src={sfondo2}>
          <StyledImage src={ominoFelice} style={{ height: "100%" }} />
        </StyledImageContainer>
      </StyledFlexContainer>
      <StyledModalTitle>Tanti auguri di</StyledModalTitle>
      <StyledModalTitle>Buon Natale </StyledModalTitle>
      <StyledModalTitle>{user?.name}</StyledModalTitle>
      <StyledModalText>da Barbara e Anna Chiara!</StyledModalText>
      <StyledFlexContainer>
        <StyledModalLink>
          <PaginaBiscotto user={user} />
        </StyledModalLink>
      </StyledFlexContainer>
    </StyledStartModal>
  );
};

const StopModal = ({ handleCloseModal }: GoStopModalProps) => {
  return (
    <StyledStartModal src={winter}>
      <StyledFlexContainer justifyContent={"end"}>
        <StyledModalCloseButton onClick={handleCloseModal}>
          X
        </StyledModalCloseButton>
      </StyledFlexContainer>
      <StyledFlexContainer>
        <StyledImageContainer src={sfondo2}>
          <StyledImage src={ominoTriste} />
        </StyledImageContainer>
      </StyledFlexContainer>
      <StyledModalTitle>Ci spiace!</StyledModalTitle>
      <StyledModalText>
        il codice che hai digitato non è corretto... RIPROVA!
      </StyledModalText>
      <StyledFlexContainer>
        <StyledButton onClick={handleCloseModal}>Torna indietro</StyledButton>
      </StyledFlexContainer>
    </StyledStartModal>
  );
};

interface StartModalProps {
  setIsStartModalOpen: any;
  user: User | null;
  setValue: any;
}
interface GoStopModalProps {
  user?: User | undefined;
  handleCloseModal: any;
}
