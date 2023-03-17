const MyHeader = () => {
  return (
    <header>
      <img
        className="Logo"
        width="200px"
        src={process.env.PUBLIC_URL + `/assets/WhiteLogo.png`}
      />
      This is header
    </header>
  );
};

export default MyHeader;
