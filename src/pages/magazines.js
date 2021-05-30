import React from "react";
import MagazinesSection from "./../components/MagazinesSection";
import Directors from "./../components/Directors";

function MagazinesPage(props) {
  return (
    <>
      <MagazinesSection
        bgColor="default"
        size="medium"
        bgImage="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/sky-3.png"
        bgImageOpacity={0.8}
        title="Magazines"
        subtitle=""
      />
      <Directors
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Directors"
        subtitle=""
        image="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/pic.jpg"
      />
    </>
  );
}

export default MagazinesPage;
