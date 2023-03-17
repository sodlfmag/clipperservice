const TabButton = ({ name, path, onClick }) => {
  return (
    <button>
      {name}
      onClick={onClick({ path })}
    </button>
  );
};

TabButton.defaultProps = {
  name: "default",
  path: "",
};

export default TabButton;
