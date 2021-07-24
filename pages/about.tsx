import Head from "next/head";

import Tag from "../components/Tag";
import Header from "../components/Header";
import PageHero from "../components/PegeHero";
import Footer from "../components/Footer";

import style from "../styles/pages/About.module.scss";

function Home() {
  return (
    <div>
      <Head>
        <title>Arch Studio | About</title>
      </Head>
      <Tag name="About" />
      <Header />
      <PageHero />
      <section className={style.our_heritage}>
        <h2 className={style.our_heritage_heading}>Our Heritage</h2>
        <p className={style.our_heritage_summary}>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p className={style.our_heritage_summary}>
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p className={style.our_heritage_summary}>
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
