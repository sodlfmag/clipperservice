import TabButton from "./TabButton";
import { NavLink } from "react-router-dom";

const MyHeader = () => {
  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
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
        <a
          className="TabButton"
          onClick={() => handleOpenNewTab("https://clipperservice.info")}
        >
          PB STORE
        </a>
        <a
          className="TabButton"
          onClick={() => handleOpenNewTab("https://quarterdeckstudio.com/")}
        >
          QDS
        </a>
      </div>
    </header>
  );
};

export default MyHeader;
