import Layout from "../components/layout";
import Hero from "../components/hero";
import Feature from "../components/feature";
import CallToAction from "../components/cta";
import Pricing from "../components/pricing";


function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Feature />
      <Pricing />
      <CallToAction />
    </Layout>
  );
}

export default IndexPage;
