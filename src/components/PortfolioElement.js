//[점검] 비구조화 할당, 스프레드 문법으로 prop 받아오는 방법

import { Link } from "react-router-dom";

const PortfolioElement = (props) => {
  const location = "/portfolio/" + props.element.portfolioId;
  return (
    <div className="PortfolioElement">
      <Link className="PortfolioLink" to={location}>
        <img
          className="PortfolioImage"
          // 각 요소 이미지 배열에서 첫 번째 이미지가 썸네일로 입력
          src={props.element.clipperImageDtos[0].fileName}
          width="330px"
        />
        <div className="PortfolioSub">
          <div>{props.element.agency}</div>
          <div>{props.element.date}</div>
        </div>
        <div className="PortfolioName">{props.element.title}</div>
      </Link>
    </div>
  );
};

export default PortfolioElement;
