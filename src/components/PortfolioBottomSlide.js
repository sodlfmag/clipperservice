import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const portfolioItems = [
  {
    image: process.env.PUBLIC_URL + `/assets/portfolios/1.png`,
  },
  {
    image: process.env.PUBLIC_URL + `/assets/portfolios/2.png`,
  },
  {
    image: process.env.PUBLIC_URL + `/assets/portfolios/3.png`,
  },
  {
    image: process.env.PUBLIC_URL + `/assets/portfolios/4.png`,
  },
  {
    image: process.env.PUBLIC_URL + `/assets/portfolios/5.png`,
  },
  {
    image: process.env.PUBLIC_URL + `/assets/portfolios/6.png`,
  },
  // add more portfolio items as necessary
];

const ImageSlide = () => {
  return (
    <Carousel
      style={{ width: "80%" }}
      showDots={false}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable={false}
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
        },
      }}
      itemWidth={1000}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {portfolioItems.map((item) => (
        <div key={item.title}>
          <div className="GalleryElement">
            <img className="PortfolioBottomImage" src={item.image} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlide;
