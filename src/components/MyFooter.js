const MyFooter = () => {
  return (
    <div className="MyFooter">
      <div className="FooterLogo">
        <img
          src={process.env.PUBLIC_URL + `/assets/WhiteLogo.png`}
          width="200px"
        />
      </div>
      <div className="FooterInfo">
        <div>클리퍼 컴퍼니(Clipper Company)</div>
        <div>사업자등록번호 : 213-04-38717</div>
        <div>대표 : 이주호</div>
        <div>소재지 : 서울특별시 관악구 남부순환로 161가 길 16</div>
      </div>
      <hr className="FooterBorder" />
      <div className="FooterCopyright">
        COPYRIGHT © ClipperService. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default MyFooter;
