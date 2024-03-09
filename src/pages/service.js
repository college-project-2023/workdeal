import Link from "next/link";
import React, { useState, useEffect, useRef, useContext } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ServiceFilter from "../components/service/ServiceFilter";
import Layout from "./../components/layout/Layout";
import axios from "axios";
import { MyContext } from "../components/context";
import { Dialog } from "@mui/material";

function Servicepage() {
  var gettingdata=true;
  const filters = useRef({
    location: "",
    category: "",
    pricerange: "",
    rating: "",
  });
  const { serviceName, updateServiceName } = useContext(MyContext);
  const [serviceData, setServicedata] = useState([]);
  const previousFliter = useRef({});

  const fetchData = async () => {
    setLoading(true);
    gettingdata=true;
    try {
      await axios
        .get("http://localhost:5000/data", {
          params: {
            tag: filters.current.category,
            location: filters.current.location,
            price: filters.current.pricerange,
            rating: filters.current.rating,
          },
          
        })
        .then((res) => {
          gettingdata=false;
          setServicedata(res.data);
          setLoadingOff();
          console.log(res);
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
      setLoadingOff();
    }
  };
  console.log(filters.current.category);

  function onSendpage(send) {
    filters.current = send;
    if (
      filters.current.category != previousFliter.current.category ||
      filters.current.location != previousFliter.current.location ||
      filters.current.pricerange != previousFliter.current.pricerange ||
      filters.current.rating != previousFliter.current.rating
    ) {
      fetchData();
      previousFliter.current.category = filters.current.category;
      previousFliter.current.location = filters.current.location;
      previousFliter.current.pricerange = filters.current.pricerange;
      previousFliter.current.rating = filters.current.rating;
    }
  }

  const handleServiceClick = (val) => {
    updateServiceName(val);
  };


  const [loading, setLoading] = useState(true);

  function setLoadingOff() {
    if (!gettingdata) {
      setLoading(false);
      gettingdata=false;
    }
  }

  return (
    <Layout>
      <Dialog open={loading} onClose={setLoadingOff}>
        <div class="container p-4">
          <center>
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
            <h3>Hold On</h3>
            <p>
              while we are looking for best service provide that suits you best
            </p>
          </center>
        </div>
      </Dialog>
      <Breadcrumb pageName="Our Services" pageTitle="Our Services" />
      <section id="down" className="services-area sec-m-top">
        <div className="container">
          <ServiceFilter sendtopage={onSendpage} />
          <div className="row g-4">
            
            {serviceData.map((item,i) => (
             
              <div
                key={item._id}
                style={{'overflow':'hidden'}}
                className="col-md-6 col-lg-3 wow animate fadeInLeft"
              >
                <div className="single-service layout-2">
                  <div className="thumb">
                    <Link legacyBehavior href="/service-details">
                      <a>
                        <img
                          onClick={() =>
                            handleServiceClick({
                              uid: item[13],
                              service: item[10],
                              thumb: item[11],
                              name: item[2],
                              price: item[7],
                              author_thumb: item[3],
                              tag: item[9],
                            })
                          }
                          src={
                            "assets/images/cre-service/" +  item[12] + ".jpg"
                          }
                          alt=""
                        />
                      </a>
                    </Link>
                    <div className="tag">
                      <div class="col-12" >{i==0 &&<h5 class="col-8 recomend-tag ">Recomended</h5>}</div>
                        
                      <Link legacyBehavior href="/service-details">
                        <a
                          onClick={() =>
                            handleServiceClick({
                              uid: item[13],
                              service: item[10],
                              thumb: item[11],
                              name: item[2],
                              price: item[7],
                              author_thumb: item[3],
                              tag: item[10],
                            })
                          }
                        >
                          {item[10]}
                        </a>
                      </Link>
                      <strong className="strong1">
                        <i
                          className={
                            item[8] >= 1 ? "bi bi-star-fill" : "bi bi-star"
                          }
                        />
                        <i
                          className={
                            item[8] >= 2 ? "bi bi-star-fill" : "bi bi-star"
                          }
                        />
                        <i
                          className={
                            item[8]>= 3 ? "bi bi-star-fill" : "bi bi-star"
                          }
                        />
                        <i
                          className={
                            item[8] >= 4 ? "bi bi-star-fill" : "bi bi-star"
                          }
                        />
                        <i
                          className={
                            item[8] >= 5 ? "bi bi-star-fill" : "bi bi-star"
                          }
                        />
                        <b className="b1">
                          ({ item[8] ?  item[8] : "0"}/5)
                        </b>
                      </strong>
                    </div>
                  </div>
                  <div className="single-inner">
                    <div className="author-info">
                      <div className="author-thumb">
                        <img
                          src={
                            item[3]
                              ? item[3]
                              : "assets/images/acc.png"
                          }
                          alt=""
                        />
                      </div>
                      <div className="author-content">
                        <span>{item[2]}</span>
                      </div>
                    </div>
                    <div className="started">
                      <Link legacyBehavior href="/service-details">
                        <a
                          onClick={() =>
                            handleServiceClick({
                              
                              uid: item[13],
                              service: item[10],
                              thumb: item[11],
                              name: item[2],
                              price: item[7],
                              author_thumb: item[3],
                              tag: item[10],
                            })
                          }
                        >
                          Book Now
                          <span>
                            <i className="bi bi-arrow-right" />
                          </span>
                        </a>
                      </Link>
                      <span>
                        <small>RS</small>
                        {item[7]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Servicepage;
