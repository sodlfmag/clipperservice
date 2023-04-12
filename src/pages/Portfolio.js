import React from "react";
import MyFooter from "../components/MyFooter";

import PageBody from "../components/PageBody";
import PortfolioElement from "../components/PortfolioElement";
import getPortfolios from "../components/SamplePortfolio";
import EncourageBanner from "../components/EncourageBanner";

//[점검] 포트폴리오 이미지가 이미 round되고 그림자가 있는데 해당 효과가 css로 필요한지

// <PortfolioElement 에 상세페이지로 이어지는 Link가 필요하다.
const elements = getPortfolios();
const Portfolio = () => {
  return (
    <>
      <PageBody
        name="PORTFOLIO"
        introduction="클리퍼와 함께한 작업들 입니다."
      />
      <div className="PortfolioList">
        {elements.map((element) => (
          <>
            <PortfolioElement element={element} />
          </>
        ))}
      </div>
      <EncourageBanner />
      {MyFooter()}
    </>
  );
};

export default Portfolio;
