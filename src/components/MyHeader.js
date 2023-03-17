import TabButton from "./TabButton";
import { NavLink } from "react-router-dom";

const MyHeader = () => {
  return (
    <header>
      <NavLink to={"/"}>
        <img
          className="Logo"
          width="254px"
          src={process.env.PUBLIC_URL + `/assets/WhiteLogo.png`}
        />
      </NavLink>
      <div className="TabList">
        <TabButton name="PORTFOLIO" path="/portfolio" />
        <TabButton name="GALLERY" path="/gallery" />
        <TabButton name="CONTACT" path="/contact" />
        <TabButton name="STORE" path="/store" />
      </div>
    </header>
  );
};

export default MyHeader;
