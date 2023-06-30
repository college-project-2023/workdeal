import Link from "next/link";
import React from "react";
//import BlogSidebar from "../components/blog/BlogSidebar";
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
                  Show Your House Some Love with These Cleaning Tips for the Starting
                  of Monsoon
                </h3>
                <div className="date-cmnt">
                  <a href="#">
                    <i className="bi bi-calendar-week" />
                    25 January 2023
                  </a>
                  <a href="#">
                    <i className="bi bi-person-circle" />
                    Posted by WorkDeal
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
                    “If you are ordering service online for home cleaning, make sure to be safe. we are providing our best service to the customers. still it's worker's responsibility as well as client's to make safer deal”
                  </p>
                </blockquote>
                <div className="details-wrapper">
                  <div className="row">
                    <div className="col-lg-6">
                      <h4>Tips for preventing monsoone water from entering house</h4>
                      <p>
                      Cleaning and preventing monsoon water from entering your house requires proactive measures. Here are some tips to help you clean monsoon water from your house and prevent it effectively:
                      Clear Drainage Systems: Ensure that your gutters, downspouts, and drains are clear of debris, leaves, and other obstructions. Regularly clean and maintain these systems to allow proper flow and prevent water from backing up and entering your house.
                      Check for Leaks and Cracks: Inspect your roof, walls, windows, and doors for any leaks or cracks that may allow water to seep into your house during heavy rainfall. Repair any damages promptly to prevent water infiltration
                    </p>
                    </div>
                    <div className="col-lg-6">
                      <img src="assets/images/blog/blog-inner.jpg" alt="" />
                    </div>
                  </div>
                  <ul>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Clear Drainage Systems
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Check for Leaks and Cracks
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Waterproof Exterior Surfaces
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Install Sump Pump
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Use Sandbags or Flood Barriers
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Maintain Proper Landscaping
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Seal Windows and Doors
                    </li>
                    <li>
                      <i className="bi bi-circle-fill" />
                      Keep Emergency Supplies Ready
                    </li>
                    
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BlogDetailsPage;
