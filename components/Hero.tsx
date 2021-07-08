import Image from "next/image";

import Button from "./Button";

import style from "../styles/comps/Hero.module.scss";

import HeroImg from "../assets/images/image-hero-paramour.jpg";

const Hero = () => {
  return (
    <section className={style.hero}>
      <Image src={HeroImg} alt="Hero image" objectFit="cover" layout="fill" />
      <div className={style.hero_content}>
        <h2 className={style.hero_title}>Project Paramour</h2>
        <p className={style.hero_description}>
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
        <Button variant="normal">See Our Portfolio</Button>
      </div>
      <div className={style.hero_selector}>
        <Button variant="numbered" active>
          01
        </Button>
        <Button variant="numbered">02</Button>
        <Button variant="numbered">03</Button>
        <Button variant="numbered">04</Button>
      </div>
    </section>
  );
};

export default Hero;
