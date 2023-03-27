// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const portfolioItems = [
//   {
//     image: process.env.PUBLIC_URL + `/assets/gallery/1.png`,
//     title: "Clipper Service personal work of April",
//     description: "2023-05-01",
//   },
//   {
//     image: process.env.PUBLIC_URL + `/assets/gallery/2.png`,
//     title: "Project 3",
//     description: "This is my third project.",
//   },
//   {
//     image: process.env.PUBLIC_URL + `/assets/gallery/3.png`,
//     title: "Project 3",
//     description: "This is my third project.",
//   },

//   // add more portfolio items as necessary
// ];

// const ImageSlide = () => {
//   return (
//     <Carousel
//       style={{ width: "80%" }}
//       additionalTransfrom={0}
//       arrows
//       autoPlaySpeed={3000}
//       centerMode={false}
//       className=""
//       containerClass="container"
//       dotListClass=""
//       draggable={false}
//       focusOnSelect={false}
//       infinite
//       itemClass=""
//       keyBoardControl
//       minimumTouchDrag={80}
//       renderButtonGroupOutside={false}
//       renderDotsOutside={false}
//       responsive={{
//         desktop: {
//           breakpoint: {
//             max: 3000,
//             min: 1024,
//           },
//           items: 2,
//         },
//         mobile: {
//           breakpoint: {
//             max: 464,
//             min: 0,
//           },
//           items: 1,
//         },
//         tablet: {
//           breakpoint: {
//             max: 1024,
//             min: 464,
//           },
//           items: 2,
//         },
//       }}
//       itemWidth={1000}
//       showDots
//       sliderClass=""
//       slidesToSlide={1}
//       swipeable
//     >
//       {portfolioItems.map((item) => (
//         <div key={item.title}>
//           <img
//             className="portfolio-slide__image"
//             src={item.image}
//             alt={item.title}
//             style={{ borderRadius: "5px" }}
//           />
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// export default ImageSlide;
