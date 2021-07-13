import Head from "next/head";

import Tag from "../components/Tag";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <div>
      <Head>
        <title>Arch Studio | Portfolio</title>
      </Head>
      <Tag name="Portfolio" />
      <Header />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default Portfolio;
