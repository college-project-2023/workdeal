import React from "react";
import AboutArea from "../components/about/AboutArea";
import Brands from "../components/common/Brands";
import Breadcrumb from "../components/common/Breadcrumb";
import HowItWork4 from "../components/howItWork/HowItWork4";
import Layout from "../components/layout/Layout";
import Testimonial2 from "../components/testimonial/Testimonial2";
import Home2Blog from "./../components/blog/Home2Blog";
import WhyChooseus2 from "./../components/whyChooseUs/WhyChooseus2";
function AboutPage() {
  return (
    <Layout>
      <Breadcrumb pageName="About Us" pageTitle="About Us" />
      <AboutArea />
      <HowItWork4 />
      <Testimonial2 />
      <WhyChooseus2 />
      <Home2Blog />
      <Brands />
    </Layout>
  );
}

export default AboutPage;
