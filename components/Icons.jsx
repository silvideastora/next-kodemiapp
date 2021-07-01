import Image from "next/image";
import facebook from "../src/images/facebook-icon.svg";
import instagram from "../src/images/instagram-icon.svg";
import twitter from "../src/images/twitter-icon.svg";
import github from "../src/images/github-icon.svg";
import medium from "../src/images/medium-icon.svg";
import youtube from "../src/images/youtube-icon.svg";
import linkedin from "../src/images/linkedin-icon.svg";

import React from "react";

export default function Icons() {
  return (
    <div className="w-1/4 flex justify-between">
      <Image src={facebook} alt="facebook-icon" />
      <Image src={instagram} alt="instagram-icon" />
      <Image src={twitter} alt="twitter-icon" />
      <Image src={github} alt="github-icon" />
      <Image src={medium} alt="medium-icon" />
      <Image src={youtube} alt="youtube-icon" />
      <Image src={linkedin} alt="linkedin-icon" />
    </div>
  );
}
