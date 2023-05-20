import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "./../components/layout/Layout";

function CustomError() {
  return (
    <Layout>
      <Breadcrumb pageName="404" pageTitle="404" />
      <section className="error-area sec-m">
        <div className="container">
          <div className="error-content">
            <img src="assets/images/error.png" alt="" />
            <h2>Sorry we can’t find that page</h2>
            <p>
              The page you are looking for was moved, removed, renamed or never
              existed
            </p>
            <div className="cmn-btn">
              <Link legacyBehavior href="/">
                <a>Back Home</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CustomError;
