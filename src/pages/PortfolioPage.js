import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import ImageSlide from "../components/ImageSlide";
import MyFooter from "../components/MyFooter";
import PortfolioBottomSlide from "../components/PortfolioBottomSlide";
import PageControlBtns from "../components/PageControlBtns";
// Portfolio.js 에서 썸네일 클릭 시 해당 prop으로 portfolio 객체가 전달되어야 함.

const props = {
  src: process.env.PUBLIC_URL + `/assets/portfolios/1.png`,
  name: "Owen - Cry",
  agency: "Eclipse Empire",
  date: "2022-10-31",
  introduction: `10월 31일 발매된 Owen님의 정규 앨범 [CRY] 의 디지
  털 앨범 커버와, 타이틀 곡 Jungle 에 사용된 헤드피스 
  소품을 제작했습니다. 헤드피스의 모델링 파일을 활용
  하여 라이브 방송과 팬들이 사용할 수 있는 인스타그램
   AR 필터를 제작했습니다.

  Design & Production
  Art Prop (Headpiece)
  Instagram AR Filter`,
};

const PortfolioPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const { id } = useParams();
  console.log(id);

  return (
    <>
      <div className="PortfolioFrame">
        <div>
          <div className="PortfolioPageSub">
            <div>{props.agency}</div>
            <div>{props.date}</div>
          </div>
          <div className="PortfolioPageName">{props.name}</div>
          <div className="PortfolioSynopsis">
            <img
              className="PortfolioPageThumbnail "
              src={props.src}
              width="500px"
            />
            <div className="PortfolioPageIntroduction">
              {props.introduction}
            </div>
          </div>
        </div>
        <hr
          className="PortfolioPageBorder1"
          style={{
            marginTop: 150,
            marginBottom: 150,
            height: 0.8,
            background: "black",
          }}
        />
        <hr
          className="PortfolioPageBorder2"
          style={{
            marginTop: 150,
            marginBottom: 20,
            height: 0.8,
            background: "black",
          }}
        />
        <PageControlBtns address="/portfolio" />
      </div>
      <div style={{ marginBottom: "40px" }}></div>
      <div className="PortfolioBottomSlideContainer">
        <PortfolioBottomSlide />
      </div>
      <MyFooter />
    </>
    // your PortfolioPage content here
  );
};

export default PortfolioPage;
