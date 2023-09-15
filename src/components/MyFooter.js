const MyFooter = () => {
  return (
    <div className="MyFooter">
      <div className="FooterLogo">
        <img
          src={process.env.PUBLIC_URL + `/assets/logo/logo(white).svg`}
          width="200px"
        />
      </div>
      <div className="FooterInfo">
        <div>클리퍼 컴퍼니(Clipper Company)</div>
        <div>사업자등록번호 : 213-04-38717</div>
        <div>대표 : 이주호</div>
        <div>소재지 : 부산광역시 수영구 강서로 35번길 10 1F</div>
      </div>
      <hr className="FooterBorder" />
      <div className="FooterCopyright">
        COPYRIGHT © ClipperService. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default MyFooter;
