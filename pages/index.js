import Layout from "../components/layout";
import Hero from "../components/hero";
import Feature from "../components/feature";
import CallToAction from "../components/cta";


function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Feature />
      <CallToAction />
    </Layout>
  );
}

export default IndexPage;
