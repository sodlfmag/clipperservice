const TabButton = ({ name, path, onClick }) => {
  return (
    <Button>
      {name}
      onClick={onClick({ path })}
    </Button>
  );
};

TabButton.defaultProps = {
  name: "default",
  path: "",
};

export default TabButton;
