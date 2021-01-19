import React from "react";
import "./Who_Is_Mary.styles.css";

function WhoIsMary() {
  return (
    <section className="WhoIsMary_Container" id="WhyMary">
      <div className="why-mary-text-content ">
        <h2>Why Mary Rosinski</h2>
        <div className="about-mary-text">
          <p>
            <span className="BigAndBold">Real Estate Expert:</span> I bring 40
            years of real estate and business experience and perspectives to the
            council.
            <p>
              I support property and tenants’ rights, housing opportunities
              which build strong communities, and well thought out development.
            </p>
            <p>
              As an active member of the North Shore Barrington board of
              Realtors, and chair of the Diversity and Fair Housing Committee, I
              am committed to prioritizing diversity and fair housing in
              Evanston in addition to the 60 surrounding communities which NSBAR
              serves.
            </p>
          </p>
          <div className="MaryAwardPic">
            <small className="PicText">
              Mary Receiving an Award from NSBAR
            </small>
          </div>
          <p>
            Real estate provides extensive knowledge of the challenges, hopes
            and dreams of individuals, families, business owners and investors
            to find properties for their futures. It also provides insights into
            the importance of clear community planning and zoning policies, as
            well as what communities need to have in order to attract people and
            businesses.
          </p>
          <p className="BigAndBold">I am excited to:</p>
          <ul>
            <li className="Italicized">
              Make our real estate assets work for us, bringing in revenue
            </li>
            <li className="Italicized">
              Establish plans to preserve and maintain our real estate and use
              the principle of adaptive reuse to preserve our real estate assets
              and secure grants.
            </li>
          </ul>
        </div>
      </div>
      <div className="why-image-wrapper">
        <div className="MaryAwardPicCol">
          <small className="PicTextCol">
            Mary Receiving an Award from NSBAR
          </small>
        </div>
        <div className="why-image-container">
          <div className="pic2">
            <small className="PicTextCol">
              Mary with Realtors in Springfield
            </small>
          </div>
        </div>
        <div className="why-image-container">
          <div className="pic3">
            <small className="PicTextCol">
              Collaborating with the grandson of Jens Jensen 2019
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhoIsMary;
