const { description } = require("../../package");

module.exports = {
  base: "/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Technical documentation of Wellms",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  //theme: "@vuepress/theme-blog",
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */

  themeConfig: {
    repo: "EscolaLMS/documentation",
    editLinks: true,
    docsDir: "docs/src",
    docsBranch: "main",
    editLinkText: "Suggest changes on this page",
    lastUpdated: false,
    nav: [
      {
        text: "Documentation",
        items: [
          {
            text: "Getting Started",
            link: "/getting-started/",
          },
          {
            text: "Admin Panel (App)",
            link: "/app-guide/",
          },
          {
            text: "Api Reference",
            link: "/api-reference/",
          },
          {
            text: "Packages",
            link: "/packages/",
          },
          {
            text: "Development",
            link: "/development/",
          },
          {
            text: "Tutorials",
            link: "/tutorials/",
          },
          {
            text: "Demo",
            link: "/getting-started/demo/",
          },
        ],
      },
      {
        text: "Blog",
        link: "/blog/",
      },
      {
        text: "External Links",
        items: [
          {
            text: "Road map & Freature Requests",
            link: "https://wellms.canny.io/",
          },
          {
            text: "Github main page",
            link: "https://github.com/EscolaLMS",
          },
          {
            text: "Components Reference",
            link: "https://escolalms.github.io/Components/",
          },
          {
            text: "SDK Reference",
            link: "https://escolalms.github.io/sdk/",
          },
          {
            text: "API REST Reference",
            link: "https://escolalms.github.io/API/",
          },
          {
            text: "C4 model - software architecture",
            link: "https://structurizr.com/share/75191",
          },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [],
        },
      ],

      "/getting-started/": [
        {
          title: "Getting Started",
          collapsable: false,
          children: [
            ["", "Introduction"],
            ["guide", "Quickstart Installation (CLA)"],
            ["installation", "Installation"],
            ["headless-architecture", "Headless Architecture"],
            ["help-support", "Help & Support"],
            ["license", "License"],
            ["demo", "Demo"],
            ["telemetry", "Usage Information (telemetry)"],
          ],
        },
      ],
      "/app-guide/": [
        {
          title: "App Guide",
          collapsable: false,
          children: [
            ["", "Overview"],
            ["tables", "General Tables, Sorting and filtering"],
            [
              "assign-without-account",
              "Package enabling accessing courses and products without having account.",
            ],
            [
              "auth",
              "Auth. User authentication. Roles & Permission Management",
            ],
            ["bookmarks-notes", "Bookmarks and Notes for Course Topic"],

            ["cart", "Cart. General shop management."],
            ["categories", "Categories"],
            ["consultation-access", "Consultation Access."],
            [
              "consultations",
              "Consultations. One to one conversation package with `jitsi`",
            ],
            ["course-access", "Course Access."],

            ["courses", "Courses. Main e-learning package"],

            [
              "courses-import-export",
              "Courses Import Export. ZIP package and duplicate feature.",
            ],
            [
              "csv-users",
              "CSV-Users. Exporting and importing users in `.csv` format",
            ],
            ["fakturownia-integration", "fakturowania"],
            ["files", "Files. Uploading, deleting and reusing files."],
            ["h5p", "h5p"],
            ["images", "Images. Responsive and compressions processing module"],
            ["invoices", "Invoices generation."],
            ["mailerlite", "MailerLite. Customized group for LMS events"],
            ["mattermost", "Mattermost."],
            ["model-fields", "Model Fields. Extra attributes to any model"],
            ["notifications", "Notifications."],
            ["pages", "Pages. Simple CMS."],
            [
              "payments",
              "Payments. Facades that allows to connect payment gateways",
            ],

            ["permissions", "Permissions and Roles."],

            ["questionnaire", "Questionnaire. Answers & Reports"],

            ["reports", "Reports. Courses reports."],

            ["scorm", "Scorm. Attach Scorm packages to courses"],
            [
              "settings",
              "Settings. Additional global fields of various types and other package setup",
            ],

            ["stationary-events", "Stationary Events."],

            ["tags", "Tags. Tagging for any Module"],

            ["tasks", "Tasks. User Tasks"],
            [
              "templates-email",
              "Templates-Email. Notification management with custom mjml templates.",
            ],

            [
              "templates-pdf",
              "Templates-PDF. Templates in fabric.js frontend rendering format.",
            ],

            [
              "templates-sms",
              "Templates-SMS. Notification management with custom templates",
            ],
            [
              "templates",
              "General template package that allows connecting other channels",
            ],
            ["topic-type-gift", "GIFT Quiz"],

            ["topic-type-project", "Topic Type Project"],
            ["topic-types", "Topic Types"],
            ["tracker", "Tracker."],

            ["translations", "Translations."],
            ["video", "Video Processing. Generation `hls` streaming formats"],

            [
              "vouchers",
              "Vouchers. E-commerce vouchers to manage cart promotion",
            ],

            [
              "webinar",
              "Webinar. Live video stream with `Jitsi` and `YouTube`",
            ],
            ["youtube", "Youtube. Package Youtube integration"],
          ],
        },
      ],
      "/api-reference/": [
        {
          title: "API Reference",
          collapsable: false,
          children: [
            ["", "Introduction"],
            ["rest", "REST API"],
            ["sdk", "Java/Type Script Software development kit"],
            ["cli", "CLI"],
            ["components", "Components"],
            ["translation", "Translation"],
          ],
        },
      ],
      "/packages/": [
        {
          title: "Packages",
          collapsable: false,
          children: [
            ["", "Introduction"],

            [
              "api",
              "API Laravel REST API. Main module that compose all Laravel packages",
            ],

            [
              "assign-without-account",
              "Package enabling accessing courses and products without having account.",
            ],

            [
              "auth",
              "Auth. User authentication. Roles & Permission Management",
            ],

            [
              "aws-ecs-terraform",
              "AWS ECS Terraform configuration file for one-click installation",
            ],
            ["bookmarks-notes", "Bookmarks and Notes for Course Topic"],
            ["cart", "Cart. General shop management."],

            ["categories", "Categories"],

            ["cmi5", "cmi5 integration"],

            ["components", "Frontend styleguide and components"],

            ["consultation-access", "Consultation Access."],

            [
              "consultations",
              "Consultations. One to one conversation package with `jitsi`",
            ],

            ["core", "Core"],

            ["course-access", "Course Access."],

            ["courses", "Courses. Main e-learning package"],

            [
              "create-lms-app",
              "Bash script to install WellmsLMS with oneliner",
            ],

            [
              "csv-users",
              "CSV-Users. Exporting and importing users in `.csv` format",
            ],

            [
              "courses-import-export",
              "Courses Import Export. ZIP package and duplicate feature.",
            ],

            [
              "fakturownia",
              "Fakturownia-Integration. Generates Invoice from Fakturowania",
            ],

            ["files", "Files. Uploading, deleting and reusing files."],

            ["front", "React SPA Front Demo to show headless implementation"],

            ["h5p", "H5P Headless."],

            ["h5p-player", "Headless H5P Player and editor components."],

            ["images", "Images. Responsive and compressions processing module"],

            ["invoices", "Invoices generation."],

            [
              "jitsi",
              "This package introduce just a facade that you can use to generate parameters for jitsi player.",
            ],

            ["laravel-docker", "Laravel Docker Images."],

            ["lrs", "LRS xAPI Learning Record Stores"],

            ["mailerlite", "MailerLite. Customized group for LMS events"],

            ["mattermost", "Mattermost."],

            ["model-fields", "Model Fields. Extra attributes to any model"],

            ["notifications", "Notifications."],

            ["pages", "Pages. Simple CMS."],

            [
              "payments",
              "Payments. Facades that allows to connect payment gateways",
            ],

            ["permissions", "Permissions and Roles."],

            ["questionnaire", "Questionnaire. Answers & Reports"],

            ["reports", "Reports. Courses reports."],

            ["scorm", "Scorm. Attach Scorm packages to courses"],

            [
              "sdk",
              "Frontend API Connector. Definition of reusable components and frontend services.",
            ],

            [
              "settings",
              "Settings. Additional global fields of various types and other package setup",
            ],

            ["stationary-events", "Stationary Events."],

            ["tags", "Tags. Tagging for any Module"],

            ["tasks", "Tasks. User Tasks"],

            [
              "templates",
              "General template package that allows connecting other channels",
            ],

            [
              "templates-email",
              "Templates-Email. Notification management with custom mjml templates.",
            ],

            [
              "templates-pdf",
              "Templates-PDF. Templates in fabric.js frontend rendering format.",
            ],

            [
              "templates-sms",
              "Templates-SMS. Notification management with custom templates",
            ],

            [
              "topic-types",
              "Topic Types. List of possible Topic Types for Course content",
            ],

            ["topic-type-gift", "GIFT Quiz"],

            ["topic-type-project", "Topic Type Project"],

            ["tracker", "Tracker."],

            ["translations", "Translations."],

            ["ts-models", "TypeScript Models generated from the packages."],

            ["video", "Video Processing. Generation `hls` streaming formats"],

            [
              "vouchers",
              "Vouchers. E-commerce vouchers to manage cart promotion",
            ],

            [
              "webinar",
              "Webinar. Live video stream with `Jitsi` and `YouTube`",
            ],
            ["youtube", "Youtube. Package Youtube integration"],
          ],
        },
      ],

      "/development/": [
        {
          title: "Development",
          collapsable: false,
          children: [
            ["", "Introduction"],
            ["cra", "Create Wellms App"],
            ["backend", "Backend customization"],
            ["admin", "Admin panel customization"],
            ["frontend", "Frontend development"],
            ["contributing", "Contributing"],
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "vuepress-plugin-mermaidjs",
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "blog",
            dirname: "_blogs",
            path: "/_blog/",
            itemPermalink: "/blog/:year/:month/:day/:slug",
            itemLayout: "Layout",
          },
        ],
      },
    ],
  ],
};
