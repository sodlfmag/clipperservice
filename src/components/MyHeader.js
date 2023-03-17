import TabButton from "./TabButton";

const MyHeader = () => {
  return (
    <header>
      <img
        className="Logo"
        width="254px"
        src={process.env.PUBLIC_URL + `/assets/WhiteLogo.png`}
      />
      Portfolio Gallery Store Contact
    </header>
  );
};

export default MyHeader;
