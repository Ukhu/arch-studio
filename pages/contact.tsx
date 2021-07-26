import Head from "next/head";

import Tag from "../components/Tag";
import Header from "../components/Header";
import PageHero from "../components/PegeHero";
import ContactDetails from "../components/ContactDetails";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <div>
      <Head>
        <title>Arch Studio | Contact Us</title>
      </Head>
      <Tag name="Contact" />
      <Header />
      <PageHero title="Contact" heading="Tell us about your project">
        We’d love to hear more about your project. Please, leave a message below
        or give us a call. We have two offices, one in Texas and one in
        Tennessee. If you find yourself nearby, come say hello!
      </PageHero>
      <ContactDetails />
      <Footer />
    </div>
  );
}

export default ContactUs;
