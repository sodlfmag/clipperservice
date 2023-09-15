import { Link } from "react-router-dom";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";

const Contact = () => {
  return (
    <>
      <MyHeader />
      <div style={{ marginBottom: "5vh" }}></div>
      <div className="BusinessCard">
        <div className="LogoContainer">
          <img
            className="Logo"
            width="254px"
            src={process.env.PUBLIC_URL + `/assets/logo/logo(black).svg`}
          />
        </div>
        <div className="CorpInfoContainer">
          <div className="CorpInfo">
            ADDRESS: 부산광역시 수영구 강서로 35번길 10 1F
          </div>
          <div className="CorpInfo">
            BUSINESS MAIL: clipper.co.service@gmail.com
          </div>
          <div className="CorpInfo">MOBILE: +82 10-2262-6091 (대표번호)</div>
          <div className="CorpInfo">FAX: 0504-494-1090</div>
        </div>
      </div>
      <div className="RequestButtonContainer">
        <div style={{ marginBottom: "3vh" }}></div>
        <Link
          className="RequestLink"
          to="/contact/requestpage"
          style={{ textDecoration: "none" }}
        >
          <button className="RequestButton">협업 문의하기</button>
        </Link>
      </div>
      <div style={{ marginBottom: "10vh" }}></div>
      <MyFooter />
    </>
  );
};

export default Contact;
