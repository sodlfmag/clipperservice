import React from "react";

import PageBody from "../components/PageBody";
import PortfolioElement from "../components/PortfolioElement";
import PageTitle from "../components/PageTitle";

//[점검] 포트폴리오 이미지가 이미 round되고 그림자가 있는데 해당 효과가 css로 필요한지

const element = {
  src: process.env.PUBLIC_URL + `/assets/portfolios/1.png`,
  name: "Owen - Cry",
  agency: "Eclipse Empire",
  date: "2022-10-31",
};
const Portfolio = ({ name, introduction }) => {
  return (
    <>
      <PageBody
        name="PORTFOLIO"
        introduction="클리퍼와 함께한 작업들 입니다."
      />
      <div className="PageBody">
        <PageBody name={name} introduction={introduction} />
        <PortfolioElement element={element} />
      </div>
    </>
  );
};

export default Portfolio;
