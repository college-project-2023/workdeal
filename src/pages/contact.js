import React from "react";
import Breadcrumb from "./../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";
import { useContext,useEffect } from "react";
import { MyContext } from "../components/context";

function ContactPage() {
  const {isService}=useContext(MyContext);
  useEffect(()=>{
    console.log(isService)
  },[isService])
  return (
    <Layout>
      <Breadcrumb pageName="Contact" pageTitle="Contact" />
      <section id="down" className="contact-us-area sec-m">
        <div className="container">
          <div className="contact-info">
            <div className="row gy-4 align-items-center">
              <div className="col-md-6 col-lg-4">
                <div className="info">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="desc">
                    <h4>Location</h4>
                    <p>168/170, Ave 01, York Drive Rich Mirpur, Dhaka-1216</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="info">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="desc">
                    <h4>Phone</h4>
                    <a href="tel:01761111456">+91 7833445323</a>
                    <a href="tel:01761111555">+91 7833445323</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="info">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="desc">
                    <h4>Message Us</h4>
                    <a href="mailto:info@example.com">info@example.com</a>
                    <a href="mailto:info@support.com">info@support.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span>We’re Ready To Help You</span>
            <h2>Send Message</h2>
            <p>Fill out below form to book service</p>
            <form action="#" method="post">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" name="name" placeholder="Your Name :" />
                </div>
                <div className="col-lg-6">
                  <input type="email" name="email" placeholder="Your Email :" />
                </div>
                <div className="col-12">
                  <input type="text" name="subject" placeholder="Subject" />
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Write Message :"
                    defaultValue={""}
                  />
                  <input type="submit" defaultValue="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
