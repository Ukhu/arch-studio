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
    </div>
  );
}

export default Home;
