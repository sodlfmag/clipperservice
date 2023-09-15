import TabButton from "./TabButton";
import { NavLink } from "react-router-dom";

const MyHeader = () => {
  return (
    <header className="MyHeader">
      <NavLink to={"/"}>
        <img
          className="LogoImage"
          width="254px"
          src={process.env.PUBLIC_URL + `/assets/logo/logo(white).svg`}
        />
      </NavLink>
      <div className="TabList">
        <TabButton name="ABOUT CO." path="/aboutco" />
        <TabButton name="CONTACT" path="/contact" />
        <TabButton name="PB STORE" path="https://clipperservice.info/" />
        <TabButton name="QDS" path="https://quarterdeckstudio.com/" />
      </div>
    </header>
  );
};

export default MyHeader;
