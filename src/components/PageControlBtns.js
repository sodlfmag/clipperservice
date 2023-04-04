import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const PageControlBtns = (props) => {
  return (
    <div style={{ textAlign: "right" }}>
      <Link to={props.address} style={{ textDecoration: "none" }}>
        <button className="PageControlBtn">목록으로</button>
      </Link>

      <button className="PageControlBtn" onClick={scrollToTop}>
        TOP
      </button>
    </div>
  );
};

export default PageControlBtns;
