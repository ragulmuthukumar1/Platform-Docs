import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./index.module.css";

// Import your PNG logo for the hero
import heroImage from "@site/static/Images/platform.png";
import heroDarkImage from "@site/static/Images/platform.png"; // Consider adding a dark variant

// Import your 5 platform project images
import project1 from "@site/static/Images/api.png";
import project2 from "@site/static/Images/gateway.png";
import project3 from "@site/static/Images/network-switch.png";
import project4 from "@site/static/Images/router.png";
import project5 from "@site/static/Images/private-key.png";
import project6 from "@site/static/Images/user.png";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const [isMobile, setIsMobile] = useState(false);

  const projectImages = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Calculate random positions for each image (like particles)
  const getRandomPosition = (index) => {
    if (isMobile) {
      // More compact layout for mobile
      const positions = [
        { top: "15%", left: "10%", size: "60px" },
        { top: "10%", left: "70%", size: "60px" },
        { top: "65%", left: "15%", size: "65px" },
        { top: "60%", left: "75%", size: "65px" },
        { top: "35%", left: "45%", size: "60px" },
        { top: "60%", left: "75%", size: "65px" },
      ];
      return positions[index];
    } else {
      // Desktop layout - more spread out
      const positions = [
        { top: "0%", left: "10%", size: "60px" },
        { top: "0%", left: "70%", size: "60px" },
        { top: "99%", left: "20%", size: "65px" },
        { top: "99%", left: "85%", size: "65px" },
        { top: "30%", left: "99%", size: "60px" },
        { top: "60%", left: "0%", size: "65px" },
      ];
      return positions[index];
    }
  };

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx("container", styles.container)}>
        {/* Hero image with dark mode support */}
        <img
          src={colorMode === "dark" ? heroDarkImage || heroImage : heroImage}
          className={styles.heroLogo}
          alt="Platform Logo"
        />

        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={styles.ctaButton} to="/docs/intro">
            Get Started
          </Link>
        </div>

        {/* Project images as particles */}
        <div className={styles.particlesContainer}>
          {projectImages.map((image, index) => {
            const position = getRandomPosition(index);
            return (
              <div
                key={index}
                className={styles.particle}
                style={{
                  top: position.top,
                  left: position.left,
                  width: position.size,
                  height: position.size,
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <img
                  src={image}
                  className={styles.particleImage}
                  alt={`Platform Project ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader;
