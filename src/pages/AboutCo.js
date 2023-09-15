import MyHeader from "../components/MyHeader";
import PageBody from "../components/PageBody";
export const AboutCo = () => {
  return (
    <>
      <MyHeader />
      <PageBody name="ABOUT COMPANY" introduction="클리퍼 컴퍼니" />
      <img
        className="AboutCoLogo"
        src={process.env.PUBLIC_URL + `/assets/logo/logo(white).svg`}
      />
      <div class="v-line"></div>
      <div className="AboutCoContainer">
        <div className="AboutCoInfo">
          클리퍼 컴퍼니는 제품에 대한 디자인, 프로모션을
        </div>
        <div className="AboutCoInfo">
          기본 베이스로 의류, 디자인 제품을 생산하는 제조회사입니다.
        </div>
        <div style={{ marginBottom: "10vh" }}></div>
        <div className="AboutCoInfoSmall">
          또한 하위 회사로 PB 상품을 판매하는 의류 브랜드와
        </div>
        <div className="AboutCoInfoSmall">
          디자인 스튜디오를 보유하고 있습니다.
        </div>
      </div>
    </>
  );
};
