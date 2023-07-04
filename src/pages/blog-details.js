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
                <b>Deep Clean the Carpets:</b> Start by thoroughly cleaning your carpets. Vacuum the entire house to remove loose dirt, and consider renting a carpet cleaner or hiring professionals for a deeper cleanse.
                </p>
                <p><b>Dust and Wipe Down Surfaces:</b> Grab a microfiber cloth and go room by room, dusting and wiping down surfaces. Focus on areas like window sills, baseboards, light fixtures, and ceiling fans. Take the time to clean any winter decorations before storing them away.</p>
                <p><b>Freshen Up the Windows:</b>Clean your windows inside and out to remove winter grime and restore clarity. Use a glass cleaner or a solution of vinegar and water for streak-free results.</p>
                <p>
                <b>Air Out the House:</b> Open the windows on a sunny day to let in fresh air and circulate it throughout the house. This will help eliminate any stale odors and create a welcoming atmosphere.
                </p>
                <p><b>Clean and Organize Closets:</b> Declutter and organize your closets. Sort through winter clothing, pack away items not needed until next year, and donate or discard any unused items. Utilize storage bins or vacuum-sealed bags to maximize space.</p>
                <p><b>Refresh Bedding and Linens:</b> Wash or dry clean winter bedding, such as comforters, blankets, and flannel sheets. Replace them with lighter linens suitable for spring. Flip and rotate your mattress for even wear and improved comfort.</p>
                <blockquote>
                  <i className="bi bi-quote" />
                  <p>
                  "Out with winter's mess, let cleanliness prevail,
A rejuvenated home, where happiness sets sail!"
                  </p>
                </blockquote>
                <div className="details-wrapper">
                  <div className="row">
                    <div className="col-lg-6">
                      <h4>Tips for how to set up a garden in the monsoon</h4>
                      <p>
                       
                      <b>Choose the Right Plants:</b> Select plants that are well-suited for the monsoon climate. Opt for varieties that can tolerate excessive moisture, such as tropical plants, ferns, and certain types of flowers like marigolds or impatiens. Avoid plants that are prone to waterlogging or root rot.
                      </p>
                      <p><b>Provide Adequate Drainage:</b> Ensure proper drainage in your garden to prevent waterlogging. Incorporate raised beds or add organic matter to improve soil drainage. Avoid planting in low-lying areas where water tends to accumulate.</p>
                      <p><b>Create Proper Sloping and Grading:</b> Grade your garden area to allow water to flow away from your plants and prevent water pooling. Construct gentle slopes or install drainage channels to divert excess water away from the garden.</p>
                      <p><b>Provide Shelter for Delicate Plants:</b> If you have delicate or potted plants that are susceptible to excessive rainfall, consider providing them with temporary shelter, such as a canopy or placing them under a covered area. This will protect them from heavy rain and prevent waterlogging.</p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/images/blog/blog-inner.jpg" alt="" />
                    </div>
                  </div>
                  <ul>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Choose plants that can tolerate excessive moisture.
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Ensure proper drainage to prevent waterlogging.
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Grade your garden area for proper sloping and grading.
                    </li>
                   
                    <li>
                      <i className="bi bi-circle-fill" />
                      Provide shelter for delicate plants during heavy rain.
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Regularly inspect and prune for disease prevention.
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
                      <h4>Nakul Mehta</h4>
                      <a href="#">
                        <i className="bi bi-calendar-week" />
                        25 January 2023
                      </a>
                      <p>
                      "I love the 'What's Going On' page! It's such a great resource for staying updated on local events and getting helpful home service tips. The success stories and expert advice sections are my favorites. Keep up the fantastic work!"
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
                      <h4>Nima Shah</h4>
                      <a href="#">
                        <i className="bi bi-calendar-week" />
                        25 January 2023
                      </a>
                      <p>
                      "This 'What's Going On' page is exactly what I needed! It's so convenient to have a central place to find local events and get inspired by success stories. The tips and industry trends are a bonus. Thank you for providing such valuable content!"
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
                      <h4>Yaksh Sheth</h4>
                      <a href="#">
                        <i className="bi bi-calendar-week" />
                        25 January 2023
                      </a>
                      <p>
                      "I can't get enough of the 'What's Going On' page! It's a one-stop-shop for all things home services and beyond. The local event calendar keeps me updated, and the cleaning tips and expert advice are a valuable bonus. I highly recommend checking it out!"
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
          </div>
        </div>
      </section>
      <Brands />
    </Layout>
  );
}

export default BlogDetailsPage;
