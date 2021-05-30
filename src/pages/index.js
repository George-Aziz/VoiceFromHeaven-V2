import React from "react";
import Landing from "./../components/Landing";
import About from "./../components/About";

function IndexPage(props) {
  return (
    <>
      <Landing
        bgColor="primary"
        size="large"
        bgImage="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/heaven-img.jpg"
        bgImageOpacity={0.3}
        title=""
        subtitle=""
      />
      <About
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="About"
        subtitle=""
        image="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/Abouna.png"
      />
    </>
  );
}

export default IndexPage;
