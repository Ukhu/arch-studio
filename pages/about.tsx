import Head from "next/head";
import Image from "next/image";

import JakeImg from "../assets/images/leaders/avatar-jake.jpg";
import ThompsonImg from "../assets/images/leaders/avatar-thompson.jpg";
import JacksonImg from "../assets/images/leaders/avatar-jackson.jpg";
import MariaImg from "../assets/images/leaders/avatar-maria.jpg";
import HeritageImg from "../assets/images/image-heritage.jpg";

import Tag from "../components/Tag";
import Header from "../components/Header";
import PageHero from "../components/PegeHero";
import LeaderCard from "../components/LeaderCard";
import Footer from "../components/Footer";

import style from "../styles/pages/About.module.scss";

function About() {
  return (
    <div>
      <Head>
        <title>Arch Studio | About</title>
      </Head>
      <Tag name="About" />
      <Header />
      <PageHero title="About" heading="Your team of professionals">
        Our small team of world-class professionals will work with you every
        step of the way. Strong relationships are at the core of everything we
        do. This extends to the relationship our projects have with their
        surroundings.
      </PageHero>
      <section className={style.our_heritage}>
        <div className={style.our_heritage_content}>
          <div className={style.divider} />
          <h2 className={style.about_heading}>
            <span>Our</span>
            <span>Heritage</span>
          </h2>
          <p className={style.our_heritage_summary}>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p className={style.our_heritage_summary}>
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p className={style.our_heritage_summary}>
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>

        <div className={style.our_heritage_image}>
          <Image
            src={HeritageImg}
            alt="Heritage image"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>
      <section className={style.our_leaders}>
        <h2 className={style.about_heading}>
          <span>The</span>
          <span>Leaders</span>
        </h2>
        <div className={style.our_leaders_profiles}>
          <LeaderCard
            image={JakeImg}
            name="Jake Richards"
            title="Chief Architect"
          />
          <LeaderCard
            image={ThompsonImg}
            name="Thompson Smith"
            title="Head of Finance"
          />
          <LeaderCard
            image={JacksonImg}
            name="Jackson Rourke"
            title="Lead Designer"
          />
          <LeaderCard
            image={MariaImg}
            name="Maria Simpson"
            title="Senior Architect"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
