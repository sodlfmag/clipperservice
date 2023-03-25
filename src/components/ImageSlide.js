import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const portfolioItems = [
  {
    image: process.env.PUBLIC_URL + `/assets/gallery/1.png`,
    title: "Project 1",
    description: "This is my first project.",
  },
  {
    image: process.env.PUBLIC_URL + `/assets/gallery/2.png`,
    title: "Project 2",
    description: "This is my second project.",
  },
  {
    image: process.env.PUBLIC_URL + `/assets/gallery/3.png`,
    title: "Project 3",
    description: "This is my third project.",
  },

  // add more portfolio items as necessary
];

const ImageSlide = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
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
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {portfolioItems.map((item) => (
        <div key={item.title}>
          <img
            className="portfolio-slide__image"
            src={item.image}
            alt={item.title}
          />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlide;

//--------------
// import React from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

// const divStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundSize: "cover",
//   height: "400px",
// };
// const slideImages = [
//   {
//     url: process.env.PUBLIC_URL + `/assets/gallery/1.png`,
//     caption: "Slide 1",
//   },
//   {
//     url: `/assets/gallery/2.png`,
//     caption: "Slide 2",
//   },
//   {
//     url: `/assets/gallery/3.png`,
//     caption: "Slide 3",
//   },
// ];

// const ImageSlide = () => {
//   return (
//     <div className="slide-container">
//       <Slide>
//         {slideImages.map((slideImage, index) => (
//           <div key={index}>
//             <div
//               style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
//             >
//               <span style={spanStyle}>{slideImage.caption}</span>
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   );
// };

// export default ImageSlide;
