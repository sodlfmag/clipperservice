//[점검] 비구조화 할당, 스프레드 문법으로 prop 받아오는 방법

import { Link } from "react-router-dom";

const PortfolioElement = (props) => {
  // 포트폴리오 배열에서 현재 Element 요소의 index
  const index = props.index;
  // 포트폴리오 고유 id
  const location = "/portfolio/" + props.element.portfolioId;
  return (
    <div className="PortfolioElement">
      <Link
        className="PortfolioLink"
        to={location}
        state={{
          index: index,
        }}
      >
        <img
          className="PortfolioImage"
          // 각 요소 이미지 배열에서 첫 번째 이미지가 썸네일로 입력
          src={props.element.clipperImageDtos[0].fileName}
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
