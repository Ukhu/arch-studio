import Image from "next/image";
import Link from "next/link";

import BannerImg from "../assets/images/image-small-team.jpg";

import Button from "./Button";

import style from "../styles/comps/AboutBanner.module.scss";

const AboutBanner = () => {
  return (
    <section className={style.banner}>
      <Image src={BannerImg} alt="Hero image" objectFit="cover" layout="fill" />
      <div className={style.banner_content}>
        <h2 className={style.banner_text}>Small team, big ideas</h2>

        <Link href="/about">
          <a>
            <Button variant="normal">About Us</Button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default AboutBanner;
