// sidebars.js
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // User Manual - based on frontend components structure
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/login-guide"],
    },
    {
      type: "category",
      label: "Dashboard",
      items: ["dashboard/overview"],
    },
    {
      type: "category",
      label: "User Management",
      items: ["users/overview"],
    },
    {
      type: "category",
      label: "Tenants",
      items: ["tenants/overview"],
    },
    {
      type: "category",
      label: "Applications",
      items: ["applications/overview"],
    },
    {
      type: "category",
      label: "Devices & Gateways",
      items: ["devices/overview"],
    },
    {
      type: "category",
      label: "Inventory Management",
      items: ["inventory/overview"],
    },
    {
      type: "category",
      label: "API Keys",
      items: ["api-keys/overview"],
    },
    {
      type: "category",
      label: "Admin Features",
      items: ["admin/overview"],
    },
  ],
};

module.exports = sidebars;
