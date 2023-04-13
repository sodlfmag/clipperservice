import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import ImageSlide from "../components/ImageSlide";
import MyFooter from "../components/MyFooter";
import PortfolioBottomSlide from "../components/PortfolioBottomSlide";
import PageControlBtns from "../components/PageControlBtns";
// Portfolio.js 에서 썸네일 클릭 시 해당 prop으로 portfolio 객체가 전달되어야 함.
import { useLocation } from "react-router";
// const props = {
//   src: process.env.PUBLIC_URL + `/assets/portfolios/1.png`,
//   name: "Owen - Cry",
//   agency: "Eclipse Empire",
//   date: "2022-10-31",
//   introduction: `10월 31일 발매된 Owen님의 정규 앨범 [CRY] 의 디지
//   털 앨범 커버와, 타이틀 곡 Jungle 에 사용된 헤드피스
//   소품을 제작했습니다. 헤드피스의 모델링 파일을 활용
//   하여 라이브 방송과 팬들이 사용할 수 있는 인스타그램
//    AR 필터를 제작했습니다.

//   Design & Production
//   Art Prop (Headpiece)
//   Instagram AR Filter`,
// };

// src={props.clipperImageDtos[0].fileName}

const PortfolioPage = (props) => {
  const index = useLocation().state.index;
  const element = props.portfolios[index];
  console.log("index: ", index);
  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const { id } = useParams();
  console.log("id: ", id);
  const length = props.portfolios.length;
  console.log("length: ", length);
  let reverseIndex = length - index - 1;
  console.log("ReverseIndex: ", reverseIndex);
  console.log(reverseIndex === 0);

  // 포트폴리오 페이지 하단 슬라이드가 현재 페이지 기준으로 순서가 매핑되게 만드는 슬라이싱 구조
  let sliders;
  if (reverseIndex === 0) {
    sliders = [
      props.portfolios[0],
      ...[...props.portfolios].reverse().slice(0, length - 1),
    ];
  } else if (reverseIndex === length - 1) {
    sliders = [
      ...[...props.portfolios].reverse().slice(length - 2),
      ...[...props.portfolios].reverse().slice(0, length - 2),
    ];
  } else {
    sliders = [
      ...[...props.portfolios].reverse().slice(reverseIndex - 1),
      ...[...props.portfolios].reverse().slice(0, reverseIndex - 1),
    ];
  }

  return (
    <>
      <div className="PortfolioFrame">
        <div>
          <div className="PortfolioPageSub">
            <div>{element.agency}</div>
            <div>{element.date}</div>
          </div>
          <div className="PortfolioPageName">{element.title}</div>
          <div className="PortfolioSynopsis">
            <img
              className="PortfolioPageThumbnail "
              src={element.clipperImageDtos[0].fileName}
              width="446px"
            />
            <div className="PortfolioPageIntroduction">
              {element.introduction}
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
        <PortfolioBottomSlide sliders={sliders} />
      </div>
      <MyFooter />
    </>
    // your PortfolioPage content here
  );
};

export default PortfolioPage;
