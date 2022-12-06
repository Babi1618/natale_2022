import { Snow } from "../../components/general/Snow/Snow";
import { StyledPageIntoSnow } from "../../components/general/Snow/Snow.styled";
import { Page404 } from "../Page404/Page404";
import { StyledPersonalAuguri, StyledPersonalPage } from "./Personal.styled";
import pergamena from "../../assets/pergamena.jpg";

export const Personal = ({ user }: any) => {
  return (
    <>
      {user && (
        <div>
          <Snow></Snow>
          <StyledPageIntoSnow>
            <StyledPersonalPage src={pergamena}>
              <StyledPersonalAuguri>{user.biscotto}</StyledPersonalAuguri>
            </StyledPersonalPage>
          </StyledPageIntoSnow>
        </div>
      )}
      {!user && <Page404 />}
    </>
  );
};
