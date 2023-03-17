import TabButton from "./TabButton";

const MyHeader = () => {
  return (
    <header>
      <img
        className="Logo"
        width="254px"
        src={process.env.PUBLIC_URL + `/assets/WhiteLogo.png`}
      />
      <div className="TabList">
        <TabButton name="Portfolio" path="/portfolio" />
        <TabButton name="Gallery" path="/gallery" />
        <TabButton name="Contact" path="/contact" />
        <TabButton name="Store" path="/store" />
      </div>
    </header>
  );
};

export default MyHeader;
