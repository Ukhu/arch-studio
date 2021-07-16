import Head from "next/head";

import Tag from "../components/Tag";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Head>
        <title>Arch Studio | About</title>
      </Head>
      <Tag name="About" />
      <Header />

      <Footer />
    </div>
  );
}

export default Home;
