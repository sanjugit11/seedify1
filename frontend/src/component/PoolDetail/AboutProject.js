import React from "react";
import "./AboutProject.css";

import bitcoin from "../../images/bitcoin.png";

const AboutProject = ({pool_detail}) => {
  return (
    <div>
      <div className="about_project">
        <div className="container_cust">
          <div className="inner_about_project">
            <h3>About the Project</h3>
            <div className="content_grid">
              <div className="content">
                <p>
                  <strong>Description</strong>
                  {pool_detail.description}
                </p>
                <p>
                  <strong>project goals</strong>
                  {pool_detail.project_goal}
                </p>
                <p>
                  <strong>project team</strong>
                  {pool_detail.project_team}
                </p>
              </div>
              <div className="content">
                <p>
                  <strong>Project submitter</strong>

                  <span>
                    <img className="avtr" src={bitcoin} alt="" />
                    Jenny Wison
                  </span>
                  <span>
                    <img className="avtr" src={bitcoin} alt="" />
                    Jenny Wison
                  </span>
                </p>
                <div className="l_inks">
                  <ul>
                    <li>
                      <a href="#jj">whitepaper</a>
                    </li>
                    <li>
                      <a href="#ll">litepaper</a>
                    </li>
                    <li>
                      <a href="#;">Pitch Deck</a>
                    </li>
                    <li>
                      <a href="#ff">Additional documents & links</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
