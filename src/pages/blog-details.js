import Link from "next/link";
import React from "react";
import BlogSidebar from "../components/blog/BlogSidebar";
import Breadcrumb from "../components/common/Breadcrumb";
import Brands from "./../components/common/Brands";
import Layout from "./../components/layout/Layout";
function BlogDetailsPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Blog Details" pageTitle="Blog Details" />
      <section id="down" className="blog-details-area sec-m-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <h3>
                  Show Your House Some Love with These Cleaning Tips for the End
                  of Winter
                </h3>
                <div className="date-cmnt">
                  <a href="#">
                    <i className="bi bi-calendar-week" />
                    25 January 2023
                  </a>
                  <a href="#">
                    <i className="bi bi-person-circle" />
                    Posted by Admin
                  </a>
                  <a href="#">
                    <i className="bi bi-chat-left-text" />
                    15 Comments
                  </a>
                </div>
                <div className="thumbnail">
                  <img src="assets/images/blog/blog-standard-2.jpg" alt="" />
                </div>
                <p>
                  Gochujang ugh viral, butcher pabst put a bird on it meditation
                  austin craft beer banh. Distillery ramps af, goch ujang hell
                  of VHS kitsch austin. Vegan air plant trust fund, poke
                  sartorial ennui next lev el photo booth coloring book etsy
                  green juice meditation austin craft beer.
                </p>
                <p>
                  One advanced diverted domestic repeated bringing you old.
                  Possible procured her trifling laughter thoughts property she
                  met way. Companions shy had solicitude favourable own. Which
                  could saw guest man now heard but. Lasted my coming uneasy
                  marked so should. Gravity letters it amongst herself dearest
                  an windows by. Wooded ladies she basket season age her uneasy
                  saw. Discourse unwilling am no described dejection incommode
                  no listening of. Before nature his parish boy.
                </p>
                <blockquote>
                  <i className="bi bi-quote" />
                  <p>
                    “If the delivery provider maintains all the standards then
                    it is safe to have get products delivered to you. It is hard
                    to maintain but still safer to get your products ordered If
                    you’ve been following the crypto space”
                  </p>
                </blockquote>
                <div className="details-wrapper">
                  <div className="row">
                    <div className="col-lg-6">
                      <h4>How can have anything you ant in life if you ?</h4>
                      <p>
                        Gochujang ugh viral, butcher pabst put a bird on it
                        meditation austin craft beer banh. Distillery ramps af,
                        goch ujang hell of VHS kitsch austin. Vegan air plant
                        trust fund, poke sartorial ennui next lev el photo booth
                        coloring book etsy green juice meditation austin craft
                        beer.circumstances more than minus id quod maxime
                        placeat facere possimus.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/images/blog/blog-inner.jpg" alt="" />
                    </div>
                  </div>
                  <ul>
                    <li>
                      <i className="bi bi-circle-fill" />
                      There are many variations of passages of Lorem Ipsum
                      available Abominable.
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Necessary, making this the first true generator on the
                      Internet.
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Obtain pain of because is pain, but because you nally cire
                      umstances more than.
                    </li>
                  </ul>
                </div>
                <h4>Creative Electric &amp; Plumbing Training</h4>
                <p>
                  Obtain pain of because is pain, but because you nally
                  circumstances more than some work um soluta nobis est eligendi
                  optio cumque nihil impedit quo minus id quod maxime placeat
                  facere possimus, omn is voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem ibusdam et aut officiis debit is
                  aut rerum necessitatibus saepe eveniet et molestiae non
                  recusandae
                </p>
                <div className="single-post-tag-social">
                  <div className="tags">
                    <span>Post Tag:</span>
                    <Link legacyBehavior href="/blog-details">
                      <a>Cars,</a>
                    </Link>
                    <Link legacyBehavior href="/blog-details">
                      <a>Cleaning,</a>
                    </Link>
                    <Link legacyBehavior href="/blog-details">
                      <a>Plumbing,</a>
                    </Link>
                    <Link legacyBehavior href="/blog-details">
                      <a>Electric</a>
                    </Link>
                  </div>
                  <ul className="post-share">
                    <li>
                      <a href="https://www.facebook.com">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-details-comment">
                <h4>(04) Comments</h4>
                <div className="comments-item">
                  <div className="single-comment">
                    <div className="cmnt-author">
                      <img src="assets/images/blog/comment-1.jpg" alt="" />
                    </div>
                    <div className="cmnt-content">
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
                      <h4>Robat Fox SR</h4>
                      <a href="#">
                        <i className="bi bi-calendar-week" />
                        25 January 2023
                      </a>
                      <p>
                        Aenean dolor massa, rhoncus ut tortor in, pretium tempus
                        neque. Vestibulum venenati leo et dic tum finibus. Nulla
                        vulputate dolor sit amet tristique dapibus.
                      </p>
                      <div className="reply">
                        <a href="#">
                          <i className="bi bi-reply" />
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-comment">
                    <div className="cmnt-author">
                      <img src="assets/images/blog/comment-2.jpg" alt="" />
                    </div>
                    <div className="cmnt-content">
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
                      <h4>Esther Howard</h4>
                      <a href="#">
                        <i className="bi bi-calendar-week" />
                        25 January 2023
                      </a>
                      <p>
                        Aenean dolor massa, rhoncus ut tortor in, pretium tempus
                        neque. Vestibulum venenati leo et dic tum finibus. Nulla
                        vulputate dolor sit amet tristique dapibus.
                      </p>
                      <div className="reply">
                        <a href="#">
                          <i className="bi bi-reply" />
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="single-comment">
                    <div className="cmnt-author">
                      <img src="assets/images/blog/comment-3.jpg" alt="" />
                    </div>
                    <div className="cmnt-content">
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
                      <h4>Selena mou</h4>
                      <a href="#">
                        <i className="bi bi-calendar-week" />
                        25 January 2023
                      </a>
                      <p>
                        Aenean dolor massa, rhoncus ut tortor in, pretium tempus
                        neque. Vestibulum venenati leo et dic tum finibus. Nulla
                        vulputate dolor sit amet tristique dapibus.
                      </p>
                      <div className="reply">
                        <a href="#">
                          <i className="bi bi-reply" />
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-form">
                  <h4>Leave A Comment's</h4>
                  <p>Your email address will not be published.</p>
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name :"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email :"
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                        <textarea
                          name="message"
                          cols={30}
                          rows={10}
                          placeholder="Write Message :"
                          defaultValue={""}
                        />
                        <input type="submit" defaultValue="submit now" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
      <Brands />
    </Layout>
  );
}

export default BlogDetailsPage;
