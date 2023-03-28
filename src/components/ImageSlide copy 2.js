import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const portfolioItems = [
  {
    image: process.env.PUBLIC_URL + `/assets/gallery/1.png`,
    title: "Clipper Service personal work of April",
    date: "2023-05-01",
  },
  {
    image: process.env.PUBLIC_URL + `/assets/gallery/2.png`,
    title: "Project 3",
    date: "2023-05-01",
  },
  {
    image: process.env.PUBLIC_URL + `/assets/gallery/3.png`,
    title: "Project 3",
    date: "2023-05-01",
  },
  {
    image: process.env.PUBLIC_URL + `/assets/gallery/2.png`,
    title: "Project 4",
    date: "2023-05-01",
  },

  // add more portfolio items as necessary
];
const ImageSlide4 = () => {
  const [cnt, setCnt] = useState(0);

  const handleNextClick = () => {
    setCnt(cnt + 1);
  };
  const CustomButtonGroup = (handleNextClick) => (
    <button onClick={handleNextClick}>Next</button>
  );
  const len = portfolioItems.length;
  console.log(len);
  console.log(cnt);
  return (
    <Carousel
      customButtonGroup={<CustomButtonGroup next={handleNextClick} />}
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
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          slidesToSlide: 1,
        },
      }}
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div>
        <img
          className="portfolio-slide__image"
          src={portfolioItems[0].image}
          alt={portfolioItems[0].title}
          style={{ borderRadius: "5px" }}
        />
        <div className="GallerySub" style={{ marginBottom: "40px" }}>
          <div>{portfolioItems[0].title}</div>
          <div>{portfolioItems[0].date}</div>
        </div>
        <img
          className="portfolio-slide__image"
          src={portfolioItems[1].image}
          alt={portfolioItems[1].title}
          style={{ borderRadius: "5px" }}
        />
        <div className="GallerySub">
          <div>{portfolioItems[1].title}</div>
          <div>{portfolioItems[1].date}</div>
        </div>
      </div>
      <div>
        <img
          className="portfolio-slide__image"
          src={portfolioItems[2].image}
          alt={portfolioItems[2].title}
          style={{ borderRadius: "5px" }}
        />
        <div className="GallerySub" style={{ marginBottom: "40px" }}>
          <div>{portfolioItems[2].title}</div>
          <div>{portfolioItems[2].date}</div>
        </div>
        <img
          className="portfolio-slide__image"
          src={portfolioItems[3].image}
          alt={portfolioItems[3].title}
          style={{ borderRadius: "5px" }}
        />
        <div className="GallerySub">
          <div>{portfolioItems[3].title}</div>
          <div>{portfolioItems[3].date}</div>
        </div>
      </div>
    </Carousel>
  );
};

// const ImageSlide4 = () => {
//   return (
//     <div className="carousel-wrapper">
//       <Carousel
//         style={{ width: "80%" }}
//         showDots={false}
//         additionalTransfrom={0}
//         arrows
//         autoPlaySpeed={3000}
//         centerMode={false}
//         className=""
//         containerClass="container"
//         dotListClass=""
//         draggable={false}
//         focusOnSelect={false}
//         infinite
//         itemClass=""
//         keyBoardControl
//         minimumTouchDrag={80}
//         renderButtonGroupOutside={false}
//         renderDotsOutside={false}
//         responsive={{
//           desktop: {
//             breakpoint: {
//               max: 3000,
//               min: 1024,
//             },
//             items: 4,
//             itemWidth: 200,
//           },
//           mobile: {
//             breakpoint: {
//               max: 464,
//               min: 0,
//             },
//             items: 1,
//           },
//           tablet: {
//             breakpoint: {
//               max: 1024,
//               min: 464,
//             },
//             items: 2,
//           },
//         }}
//         itemWidth={1000}
//         sliderClass=""
//         slidesToSlide={1}
//         swipeable
//       >
//         {portfolioItems.map((item) => (
//           <div key={item.title}>
//             <div className="GalleryElement">
//               <img
//                 className="portfolio-slide__image"
//                 src={item.image}
//                 alt={item.title}
//                 style={{ borderRadius: "5px" }}
//               />
//               <div className="GallerySub">
//                 <div>{item.title}</div>
//                 <div>{item.date}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

export default ImageSlide4;
