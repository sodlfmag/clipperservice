// You can live edit this code below the import statements
import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Fade bottom>
          <Link to="/contact">
            <img
              className="EncourageBannerImg"
              src={process.env.PUBLIC_URL + `/assets/EncourageBanner.png`}
            />
          </Link>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;
