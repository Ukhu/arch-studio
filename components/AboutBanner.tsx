import Image from "next/image";

import Button from "./Button";

import style from "../styles/comps/AboutBanner.module.scss";

import BannerImg from "../assets/images/image-small-team.jpg";

const AboutBanner = () => {
  return (
    <section className={style.banner}>
      <Image src={BannerImg} alt="Hero image" objectFit="cover" layout="fill" />
      <div className={style.banner_content}>
        <h2 className={style.banner_text}>Small team, big ideas</h2>
        <Button variant="normal">About Us</Button>
      </div>
    </section>
  );
};

export default AboutBanner;
