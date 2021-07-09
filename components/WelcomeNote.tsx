import Image from "next/image";

import WelcomeImage from "../assets/images/image-welcome.jpg";

import style from "../styles/comps/WelcomeNote.module.scss";

const WelcomeNote = () => {
  return (
    <article className={style.welcome}>
      <div className={style.welcome_border} />
      <div className={style.welcome_banner}>Welcome</div>
      <div className={style.welcome_content_wrap}>
        <div className={style.welcome_content}>
          <h1 className={style.welcome_heading}>Welcome to Arch Studio</h1>
          <p className={style.welcome_note}>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p className={style.welcome_note}>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p className={style.welcome_note}>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <div className={style.welcome_img}>
          <Image src={WelcomeImage} alt="Welcome image" width={350} />
        </div>
      </div>
    </article>
  );
};

export default WelcomeNote;
