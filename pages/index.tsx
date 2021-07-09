import AboutBanner from "../components/AboutBanner";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Tag from "../components/Tag";
import WelcomeNote from "../components/WelcomeNote";

function Home() {
  return (
    <div>
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
