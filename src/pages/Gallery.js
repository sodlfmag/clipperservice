import ImageSlide from "../components/ImageSlide";
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
        <ImageSlide />
      </div>
    </>
  );
};

export default Gallery;
