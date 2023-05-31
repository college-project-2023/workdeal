import Link from "next/link";
import React from "react";

function Breadcrumb({ pageTitle, pageName }) {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper">
              <h2>{pageTitle}</h2>
              <span>
                <Link legacyBehavior href="/">
                  <a>Home</a>
                </Link>
                <i className="bi bi-chevron-right" />
                {pageName}
              </span>
              <div className="arrow-down">
                <a href="#down">
                  <i className="bi bi-chevron-down" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
