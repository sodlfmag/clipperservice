import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/portfolio"}>Portfolio</Link>
      <br />
      <Link to={"/gallery"}>Gallery</Link>
      <br />
      <Link to={"/contact"}>Contact</Link>
      <br />
    </>
  );
};
