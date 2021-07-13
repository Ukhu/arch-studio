import Head from "next/head";

import Tag from "../components/Tag";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WelcomeNote from "../components/WelcomeNote";
import AboutBanner from "../components/AboutBanner";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Head>
        <title>Arch Studio | Home</title>
      </Head>
      <Tag name="Home" />
      <Header />
      <Hero />
      <WelcomeNote />
      <AboutBanner />
      <Featured />
      <Footer />
    </div>
  );
}

export default Home;
