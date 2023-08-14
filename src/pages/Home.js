// video를 muted 한 상태에서만 자동재생이 가능.
// 소리를 켜야하는 경우는 추가 옵션 필요

import MainHeader from "../components/MainHeader";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <MainHeader />
      <div className="VideoContainer">
        <video className="VisualizerVideo" loop autoplay="" muted>
          <source
            src={
              process.env.PUBLIC_URL + `/assets/visualizerVideo/WaveVideo.mp4`
            }
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Home;
