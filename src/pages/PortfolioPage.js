import React, { useEffect } from "react";

function PortfolioPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>asdfasdfasf</div>
    // your PortfolioPage content here
  );
}

export default PortfolioPage;
