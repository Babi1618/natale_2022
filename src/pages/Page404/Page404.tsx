import { Link } from "react-router-dom";
import { StyledModalLink } from "../../components/general/Modal/Modal.styled";
import { StyledFlexContainer } from "../Home/Home.styled";
import { StyledPage404 } from "./Page404.styled";

export const Page404 = () => {
  return (
    <StyledPage404>
      <div>404</div>
      <StyledFlexContainer>
        <StyledModalLink>
        <Link to="/">Torna alla Home</Link>
        </StyledModalLink>
      </StyledFlexContainer>
    </StyledPage404>
  );
};
