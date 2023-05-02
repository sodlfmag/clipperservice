import { Link } from "react-router-dom";
import MyFooter from "../components/MyFooter";

const Contact = () => {
  return (
    <>
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
            ADDRESS: 서울특별시 관악구 남부순환로 161가 길 16
          </div>
          <div className="CorpInfo">
            BUSINESS MAIL: clipper.co.service@gmail.com
          </div>
          <div className="CorpInfo">MOBILE: +82 10-9597-1090 (디자인실)</div>
          <div className="CorpInfo">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            +82 10-2262-6091(기획실)
          </div>
          <div className="CorpInfo">FAX: 0504-494-1090</div>
        </div>
      </div>
      <div className="RequestButtonContainer">
        <Link
          className="RequestLink"
          to="/contact/requestpage"
          style={{ textDecoration: "none" }}
        >
          <button className="RequestButton">협업 문의하기</button>
        </Link>
      </div>
      <div style={{ marginBottom: "150px" }}></div>
      <MyFooter />
    </>
  );
};

export default Contact;
