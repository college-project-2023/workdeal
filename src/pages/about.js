import React from "react";
import AboutArea from "../components/about/AboutArea";
import Brands from "../components/common/Brands";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Testimonial2 from "../components/testimonial/Testimonial2";
import WhyChooseus2 from "./../components/whyChooseUs/WhyChooseus2";
function AboutPage() {
  return (
    <Layout>
      <Breadcrumb pageName="About Us" pageTitle="About Us" />
      <AboutArea />
      <Testimonial2 />
      <WhyChooseus2 />
      <Brands />
    </Layout>
  );
}

export default AboutPage;
