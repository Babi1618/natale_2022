import {
  StyledBiscottoContainer,
  StyledBiscottoImg,
  StyledPaginaBiscotto,
} from "./Biscotto.styled";
import biscottoAperto from "../../assets/fortunaOpen.png";
import biscottoChiuso from "../../assets/fortunaClosed.png";
import { useState } from "react";
import { StyledModalText } from "../../components/general/Modal/Modal.styled";
import { Link } from "react-router-dom";

export const PaginaBiscotto = ({ user }: any) => {
  const [isBiscottoOpen, setIsBiscottoOpen] = useState<boolean>(false);

  return (
    <>
      <StyledPaginaBiscotto>
        <StyledModalText>
          {!isBiscottoOpen
            ? `${user.name} clicca sul tuo biscotto per vedere cosa ha in serbo per te il 2023!`
            : `Bene! Clicca sul biglietto per leggere il tuo messaggio!`}
        </StyledModalText>
        <StyledBiscottoContainer>
          {isBiscottoOpen ? (
            <BiscottoOpen user={user}></BiscottoOpen>
          ) : (
            <BiscottoClosed setIsBiscottoOpen={setIsBiscottoOpen} />
          )}
        </StyledBiscottoContainer>
      </StyledPaginaBiscotto>
    </>
  );
};

const BiscottoOpen = ({ user }: any) => {
  return (
    <Link to={`auguri/${user.id}`}>
      <StyledBiscottoImg src={biscottoAperto} />
    </Link>
  );
};

const BiscottoClosed = ({ setIsBiscottoOpen }: any) => {
  return (
    <StyledBiscottoImg
      src={biscottoChiuso}
      onClick={() => setIsBiscottoOpen(true)}
    />
  );
};
