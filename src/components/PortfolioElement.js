//[점검] 비구조화 할당, 스프레드 문법으로 prop 받아오는 방법

import { Link } from "react-router-dom";

const PortfolioElement = (props) => {
  const location = "/portfolio/" + props.element.portfolioId;
  return (
    <Link to={location}>
      <div className="PortfolioElement">
        <img
          className="PortfolioImage"
          src={props.element.clipperImageDtos[0].fileName}
          width="330px"
        />
        <div className="PortfolioSub">
          <div>{props.element.agency}</div>
          <div>{props.element.date}</div>
        </div>
        <div className="PortfolioName">{props.element.title}</div>
      </div>
    </Link>
  );
};

export default PortfolioElement;
