import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import ImageSlide from "../components/ImageSlide";
import MyFooter from "../components/MyFooter";
import PortfolioBottomSlide from "../components/PortfolioBottomSlide";
import PageControlBtns from "../components/PageControlBtns";
import parse from "html-react-parser";
// Portfolio.js 에서 썸네일 클릭 시 해당 prop으로 portfolio 객체가 전달되어야 함.
import { useLocation } from "react-router";
import MyHeader from "../components/MyHeader";

const PortfolioPage = (props) => {
  const index = useLocation().state.index;
  const element = props.portfolios[index];
  console.log("index: ", index);
  useEffect(() => {
    document.body.style.backgroundColor = "#F1F1F1";

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
      <MyHeader />
      <div className="PortfolioFrame">
        <div>
          <div className="PortfolioPageSub">
            <div>{element.agency}</div>
            <div>{element.date}</div>
          </div>
          <pre className="PortfolioPageName">{element.title}</pre>
          <div className="PortfolioSynopsis">
            <img
              className="PortfolioPageThumbnail "
              src={element.clipperImageDtos[0].fileName}
            />
            <div className="PortfolioPageIntroduction">
              {parse(element.introduction)}
            </div>
          </div>
        </div>
        <hr
          className="PortfolioPageBorder1"
          style={{
            marginTop: 150,
            marginBottom: 50,
            height: 0.8,
            background: "black",
          }}
        />

        {/*HTML elements로 내용 연동 시 파싱 
        HTML elements를 문자열 형태로 받아올 경우에 src의 경로가 절대경로여야 하고, 띄어쓰기가 없게 처리해야 함*/}
        {element.contents}
        <hr
          className="PortfolioPageBorder2"
          style={{
            marginTop: 100,
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
