import ImageSlide from "../components/ImageSlide";
import ImageSlide4 from "../components/ImageSlide copy 2";
import MyFooter from "../components/MyFooter";
import PageBody from "../components/PageBody";
import { ProgressBars } from "../components/ProgressBar";

const Gallery = () => {
  return (
    <>
      <PageBody
        name="GALLERY"
        introduction="클리퍼의 단독 프로젝트를 매거진 형태로 만나보세요."
      />
      <div>
        <div className="GalleryTitle">Clipper Collection</div>

        {/* 갤러리 내용 추가 시 커밍 순 이미지 없애고 후처리 */}
        {/* <ImageSlide /> */}
        <img
          src={process.env.PUBLIC_URL + `/assets/ComingSoon.png`}
          style={{ width: "50%", marginLeft: "25%" }}
        />
      </div>
      {/* <div>
        <div className="GalleryTitle">Clipper Service Personal work</div>
        <ImageSlide4 />
      </div> */}
      <div style={{ marginBottom: "150px" }}></div>
      <MyFooter />
    </>
  );
};

export default Gallery;
