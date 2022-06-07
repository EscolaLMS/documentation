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

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "EscolaLMS/documentation",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "main",
    editLinkText: "Suggest changes on this page",
    lastUpdated: false,
    nav: [
      {
        text: "Technical Documentations",
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
        ],
      },
      {
        text: "Github",
        link: "https://github.com/EscolaLMS",
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
            ["guide", "Quickstart Guide"],
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
            /*
            ["lorem1", "Dashboard"],
            ["lorem2", "Users"],
            ["lorem3", "User Groups"],
            ["lorem4", "Orders"],
            ["lorem5", "Payments"],
            ["lorem6", "Courses"],
            ["lorem7", "H5Ps"],
            ["lorem8", "SCORMs"],
            ["lorem9", "Consultations"],
            ["lorem11", "Stationary Events"],
            ["lorem12", "Products"],
            ["lorem13", "Webinars"],
            ["lorem14", "Templates"],
            ["lorem15", "Files"],
            ["lorem16", "Categories"],
            ["lorem17", "Settings"],
            ["lorem18", "Roles"],
            ["lorem19", "Notifications"],
            ["lorem20", "Questionnaires"],
            ["lorem21", "Reports"],
            */
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
            ["lorem1", "Core"],

            [
              "lorem2",
              "API Laravel REST API. Main module that compose all Laravel packages",
            ],

            [
              "auth",
              "Auth. User authentication. Roles & Permission Management",
            ],

            [
              "assign-without-account",
              "Package enabling accessing courses and products without having account.",
            ],

            ["cart", "Cart. General shop management."],

            ["categories", "Categories"],

            [
              "consultations",
              "Consultations. One to one conversation package with `jitsi`",
            ],

            ["lorem7", "Core. Core Package "],

            ["courses", "Courses. and content package"],

            [
              "courses-import-export",
              "Courses Import Export. ZIP package and duplicate feature.",
            ],

            [
              "csv-users",
              "CSV-Users. Exporting and importing users in `.csv` format",
            ],

            [
              "fakturownia",
              "Fakturownia-Integration. Generates Invoice from Fakturowania",
            ],

            ["files", "Files. Uploading, deleting and reusing files."],

            ["lorem13", "H5P Headless."],

            ["images", "Images. Responsive and compressions processing module"],

            ["invoices", "Invoices generation."],

            ["jitsi", "Jitsi."],

            ["lorem17", "Docker Images."],

            ["lrs", "LRS xAPI Learning Record Stores"],

            ["mailerlite", "MailerLite. Customized group for LMS events"],

            ["mattermost", "Mattermost."],

            ["model-fields", "Model Fields. Extra attributes to any model"],

            ["notifications", "Notifications."],

            ["lorem22", "Pages. Simple CMS."],

            [
              "payments",
              "Payments. Facades that allows to connect payment gateways",
            ],

            ["lorem24", "Permissions and Roles."],

            ["questionnaire", "Questionnaire. Answers & Reports"],

            ["reports", "Reports. Courses reports."],

            ["scorm", "Scorm. Attach Scorm packages to courses"],

            [
              "settings",
              "Settings. Additional global fields of various types and other package setup",
            ],

            ["stationary-events", "Stationary Events."],

            ["tags", "Tags. Tagging for any Module"],

            ["templates", "Templates."],

            [
              "lorem32",
              "Templates-Certificates. Editing certificate templates",
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

            ["tracker", "Tracker."],

            ["lorem37", "Translations."],

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
            ["lorem1", "Backend customization"],
            ["lorem2", "Admin panel customization"],
            ["lorem3", "Developing packages"],
            ["lorem4", "Contributing"],
            ["lorem5", "Permissions"],
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
