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
        <ImageSlide />
      </div>
      <div>
        <div className="GalleryTitle">Clipper Service Personal work</div>
        <ImageSlide4 />
      </div>
      <div style={{ marginBottom: "150px" }}></div>
      <MyFooter />
    </>
  );
};

export default Gallery;
