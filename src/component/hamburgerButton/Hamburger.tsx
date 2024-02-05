import { Divide as Hamburger } from "hamburger-react";
import { hamburgerType } from "./HamburgerType";

export const HamburgerComp = ({ handleClick, value }: hamburgerType) => {
  return (
    <div onClick={handleClick}>
      <Hamburger size={20} toggled={value} />
    </div>
  );
};
