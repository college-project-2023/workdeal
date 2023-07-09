import Link from "next/link";
import React, { useState, useEffect } from "react";
//import BlogSidebar from "../components/blog/BlogSidebar";
import Breadcrumb from "../components/common/Breadcrumb";
import axios from "axios";
import Layout from "./../components/layout/Layout";

function BlogDetailsPage() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/blog", {
        withCredentials: true,
      })
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <Layout>
      <Breadcrumb pageName="News Feed" pageTitle="News Feed" />
      <section id="down" className="blog-details-area sec-m-top">
        <div className="container">
          {data && data.map(function (item, i) {
            return (
              <div className="row" key={i}>
                <div className="col-lg-8">
                  <div className="blog-details-content">
                    <h3>{item.header1}</h3>

                    <div className="date-cmnt">
                      <a href="#">
                        <i className="bi bi-calendar-week" />
                        {item.date}
                      </a>
                      <a href="#">
                        <i className="bi bi-person-circle" />
                        Posted by WorkDeal
                      </a>
                    </div>
                    <div className="thumbnail">
                      {item && <img src={item.image1} alt="" />}
                    </div>
                    <p>{item.content1}</p>
                    <blockquote>
                      <i className="bi bi-quote" />
                      <p>
                        “If you are ordering service online for home cleaning,
                        make sure to be safe. we are providing our best service
                        to the customers. still it's worker's responsibility as
                        well as client's to make safer deal”
                      </p>
                    </blockquote>
                    <div className="details-wrapper">
                      <div className="row">
                        <div className="col-lg-6">
                          <h4>
                            Tips for preventing monsoone water from entering
                            house
                          </h4>
                          <p>{item.content2}</p>
                        </div>
                        <div className="col-lg-6">
                          <img src={item.image2} alt="" />
                        </div>
                      </div>
                      <ul>
                        <li>
                          <i className="bi bi-circle-fill" />
                          {item.li1}
                        </li>
                        <li>
                          <i className="bi bi-circle-fill" />
                          {item.li2}
                        </li>
                        <li>
                          <i className="bi bi-circle-fill" />
                          {item.li3}
                        </li>
                        <li>
                          <i className="bi bi-circle-fill" />
                          {item.li4}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export default BlogDetailsPage;
