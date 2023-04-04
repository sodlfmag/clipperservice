import React, { useEffect } from "react";
import PageControlBtns from "../components/PageControlBtns";
import MyFooter from "../components/MyFooter";
const props = {
  src: process.env.PUBLIC_URL + `/assets/gallery/1.png`,
  name: "Clipper Service 2023 S/S Capsule collection ",
  date: "2023-06-10",
};

const GalleryPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F1F1F1";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <div className="GalleryFrame">
        <div style={{ fontSize: "32px", marginTop: "80px" }}>{props.name}</div>
        <div
          style={{
            fontSize: "20px",
            marginTop: "20px",
            marginBottom: "20px",
            color: "#525252",
          }}
        >
          {props.date}
        </div>
        <hr
          className="GalleryPageBorder1"
          style={{
            marginTop: 150,
            marginBottom: 150,
            height: 0.8,
            background: "black",
          }}
        />
        <hr
          className="GalleryPageBorder2"
          style={{
            marginTop: 150,
            marginBottom: 20,
            height: 0.8,
            background: "black",
          }}
        />
        <PageControlBtns address="/gallery" />
      </div>
      <div style={{ marginBottom: "40px" }}></div>
      <div className="GalleryBottomSlideContainer">
        {/* <GalleryBottomSlide /> */}
      </div>
      <MyFooter />
    </>
  );
};

export default GalleryPage;
