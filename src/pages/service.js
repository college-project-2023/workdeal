import Link from "next/link";
import React, { useState,useEffect,useRef,useContext  } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ServiceFilter from "../components/service/ServiceFilter";
import Layout from "./../components/layout/Layout";
import axios from "axios";
import { MyContext } from "../components/context";

 function Servicepage() {

  const filters = useRef({"location":"","category":"","pricerange":"","rating":""}); 
  const {serviceName,updateServiceName} = useContext(MyContext);
  const [serviceData,setServicedata]=useState([]);
  const previousFliter = useRef({});

  const fetchData = async () => {    
    try{      
      await axios.get('http://localhost:5000/data',{params : {
        tag : filters.current.category,
        location:filters.current.location,
        price : filters.current.pricerange,
        rating : filters.current.rating
      }}).then((res)=>{
        setServicedata(res.data);
      })
    }catch(error) {
      console.error(error);
    }
  };
  async function onSendpage(send){
    
    filters.current = send;
    if(filters.current.category!=previousFliter.current.category || filters.current.location!=previousFliter.current.location || filters.current.pricerange!=previousFliter.current.pricerange || filters.current.rating!=previousFliter.current.rating){
      fetchData();
     previousFliter.current.category = filters.current.category;
     previousFliter.current.location = filters.current.location;
     previousFliter.current.pricerange = filters.current.pricerange;
     previousFliter.current.rating = filters.current.rating;
   }
    
  };

  const handleServiceClick = (val) => {
    updateServiceName(val);
  }

  
  useEffect(()=>{
    updateServiceName("")
  },[])
  
 
  return (
    <Layout>
      <Breadcrumb pageName="Our Services" pageTitle="Our Services" />
      <section id="down" className="services-area sec-m-top">
        <div className="container">
          
          <ServiceFilter sendtopage={onSendpage}/>
          <div className="row g-4">
            {serviceData.map((item) => (
                <div
                  key={item._id}
                  className="col-md-6 col-lg-4 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-service layout-2">
                    <div className="thumb">
                      <Link  legacyBehavior href="/service-details">
                        <a>
                          <img onClick={()=>handleServiceClick({"uid":item.uid,"service":item.title,"thumb":item.thumb,"name":item.author_name,"price":item.price,"author_thumb":item.author_thumb})} src={"assets/images/cre-service/"+item.title+".jpg"} alt="" />
                        </a>
                      </Link>
                      <div className="tag">
                        <Link legacyBehavior href="/service-details">
                          <a onClick={()=>handleServiceClick({"uid":item.uid,"service":item.title,"thumb":item.thumb,"name":item.author_name,"price":item.price,"author_thumb":item.author_thumb})}>{item.tag}</a>                      
                        </Link>  
                      <strong className="strong1">
                            <i
                              className={
                                item.rating >= 1 ? "bi bi-star-fill" : "bi bi-star"
                              }
                            />
                            <i
                              className={
                                item.rating >= 2 ? "bi bi-star-fill" : "bi bi-star"
                              }
                            />
                            <i
                              className={
                                item.rating >= 3 ? "bi bi-star-fill" : "bi bi-star"
                              }
                            />
                            <i
                              className={
                                item.rating >= 4 ? "bi bi-star-fill" : "bi bi-star"
                              }
                            />
                            <i
                              className={
                                item.rating >= 5 ? "bi bi-star-fill" : "bi bi-star"
                              }
                            />
                            <b className="b1">({item.rating}/5)</b>
                          </strong>
                          </div>
                     
                    </div>
                    <div className="single-inner">
                      <div className="author-info">
                        <div className="author-thumb">
                          <img src={item.author_thumb} alt="" />
                        </div>
                        <div className="author-content">
                          <span>{item.author_name}</span>
                        </div>
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a  onClick={()=>handleServiceClick({"uid":item.uid,"service":item.title,"thumb":item.thumb,"name":item.author_name,"price":item.price,"author_thumb":item.author_thumb,"tag":item.tag})}>{item.title}</a>
                        </Link>
                      </h4>
                      <div className="started">
                        <Link legacyBehavior href="/service-details">
                          <a>
                            Book Now
                            <span>
                              <i onClick={()=>handleServiceClick({"uid":item.uid,"service":item.title,"thumb":item.thumb,"name":item.author_name,"price":item.price,"author_thumb":item.author_thumb,"tag":item.tag})}  className="bi bi-arrow-right" />
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
          
        </div>
      </section>
      
    </Layout>
  );
}

export default Servicepage;
