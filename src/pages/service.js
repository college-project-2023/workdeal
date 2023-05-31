import Link from "next/link";
import React, { useState,useEffect,useRef } from "react";
import Brands from "../components/common/Brands";
import Breadcrumb from "../components/common/Breadcrumb";
import ServiceFilter from "../components/service/ServiceFilter";
//import serviceData from "../data/service/popular-Services.json";
import Layout from "./../components/layout/Layout";
import axios from "axios";
 function Servicepage() {
  const [serviceData,setServicedata]=useState([]);
  const filters = useRef({"location": "vadodara","category":"sda","pricerange":"sda","rating":"sda"});
  const previousFliter = useRef({});
  const fetchData = async () => {    
    try{      
      await axios.get('http://localhost:5000/data',{params : {
        tag : filters.current.category,
        location:filters.current.location,
        price : filters.current.pricerange,
        rating : filters.current.rating
      }}).then((res)=>{
        console.log(res.data);
        setServicedata(res.data);
      })
    }catch(error) {
      console.error(error);
    }
  };
  async function onSendpage(send){
    
    filters.current = send;
    console.log(filters.current.category);
    if(filters.current.category!=previousFliter.current.category || filters.current.location!=previousFliter.current.location || filters.current.pricerange!=previousFliter.current.pricerange || filters.current.rating!=previousFliter.current.rating){
      fetchData();
     previousFliter.current.category = filters.current.category;
     previousFliter.current.location = filters.current.location;
     previousFliter.current.pricerange = filters.current.pricerange;
     previousFliter.current.rating = filters.current.rating;
     console.log(previousFliter.current.category);
   }
    
  };

  //useEffect(() => {
    
   
    //onSendpage();
  //}, []);
  console.log(filters.current.pricerange!=previousFliter.current.pricerange);
  //useEffect(()=>{
    
  //},[])
  
 
  return (
    <Layout>
      <Breadcrumb pageName="Our Services" pageTitle="Our Services" />
      <section id="down" className="services-area sec-m-top">
        <div className="container">
          
          <ServiceFilter sendtopage={onSendpage}/>
          <div className="row g-4">
            {serviceData.map((item) => (
                <div
                  key={item.id}
                  className="col-md-6 col-lg-4 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service layout-2">
                    <div className="thumb">
                      <Link legacyBehavior href="#">
                        <a>
                          <img src={item.thumb} alt="" />
                        </a>
                      </Link>
                      <div className="tag">
                        <Link legacyBehavior href="/service">
                          <a>{item.tag}</a>
                        </Link>
                      </div>
                      <div className="wish">
                        <Link legacyBehavior href="/account">
                          <a>
                            <i className="bi bi-suit-heart" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="single-inner">
                      <div className="author-info">
                        <div className="author-thumb">
                          <img src={item.author_thumb} alt="" />
                        </div>
                        <div className="author-content">
                          <span>{item.author_name}</span>
                          <div className="ratting">
                            <ul className="stars">
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                            <strong>(5/5)</strong>
                          </div>
                        </div>
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a>{item.title}</a>
                        </Link>
                      </h4>
                      <div className="started">
                        <Link legacyBehavior href="/service-details">
                          <a>
                            View Details
                            <span>
                              <i className="bi bi-arrow-right" />
                            </span>
                          </a>
                        </Link>
                        <span>
                          <small>$</small>
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              
            ))}
          </div>
          <div
            className="paginatation wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <ul className="paginate">
              <li>
                <a href="#">Previous</a>
              </li>
              <li>
                <a href="#">01</a>
              </li>
              <li className="active">
                <a href="#">02</a>
              </li>
              <li>
                <a href="#">03</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Brands />
    </Layout>
  );
}

export default Servicepage;
