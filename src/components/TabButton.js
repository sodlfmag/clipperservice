import { Link } from "react-router-dom";
const TabButton = ({ name, path }) => {
  return (
    <Link className="TabButton" to={path} style={{ textDecoration: "none" }}>
      {name}
    </Link>
  );
};

TabButton.defaultProps = {
  name: "default",
  path: "",
};

export default TabButton;
