import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import easytouse from "@site/static/Images/easytouse.png";
import powerful from "@site/static/Images/creative.png";
import developer from "@site/static/Images/coding.png";

const FeatureList = [
  {
    title: "Easy to Use",
    img: easytouse,
    description: (
      <>
        Our platform is intuitive and easy to navigate, focusing on building
        great applications.
      </>
    ),
  },
  {
    title: "Powerful Features",
    img: powerful,
    description: (
      <>
        From application management to API gateways, our platform provides all
        the tools you need.
      </>
    ),
  },
  {
    title: "Built for Developers",
    img: developer,
    description: (
      <>
        Extend or customize your workflow with our comprehensive API and
        developer tools.
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
