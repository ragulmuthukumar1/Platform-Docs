import React from "react";
import Link from "@docusaurus/Link";

export default function PlatformLink() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "0.5rem",
        background:
          "linear-gradient(135deg, #3182CE 0%, #319795 50%, #63B3ED 100%)",
        color: "white",
      }}
    >
      <h2>Ready to get started?</h2>
      <p>
        Access your Platform Console to manage applications, gateways, and more.
      </p>
      <Link
        className="button button--secondary button--lg"
        to="http://localhost:8080/#/login"
        style={{
          marginTop: "1rem",
          backgroundColor: "white",
          color: "#319795",
        }}
      >
        Go to Platform Console
      </Link>
    </div>
  );
}
