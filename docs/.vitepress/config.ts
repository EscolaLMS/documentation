import { withMermaid } from "vitepress-plugin-mermaid";

import { defineConfigWithTheme } from "vitepress";
import { genFeed, processData } from "./../../src/config";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme(
  withMermaid({
    ignoreDeadLinks: true,
    buildEnd: genFeed,
    async transformPageData(pageData, ctx) {
      await processData(pageData, ctx);
    },
    title: "Wellms LMS docs",
    description:
      "Wellms is the world's first open-source headless Learning management system (LMS) that puts developers as first class citizens.",
    themeConfig: {
      editLink: {
        pattern:
          "https://github.com/EscolaLMS/documentation/edit/main/docs/:path",
      },
      blog: {
        title: "Wellms journey Blog",
        description: "All these articles were written by wellms developers",
        defaultAuthor: "Mateusz Wojczal",
        categoryIcons: {
          article: "i-[heroicons-outline/book-open]",
          tutorial: "i-[heroicons-outline/academic-cap]",
          document: "i-[heroicons-outline/annotation]",
        },
        tagIcons: {
          github: "i-[carbon/logo-github]",
          vue: "i-[carbon/logo-vue]",
        },
      },
      search: {
        provider: "local",
      },
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        {
          text: "Documentation",
          items: [
            {
              text: "Getting Started",
              link: "/getting-started/",
              activeMatch: "/getting-started/",
            },
            {
              text: "Admin Panel (App)",
              link: "/app-guide/",
              activeMatch: "/app-guide/",
            },
            {
              text: "Api Reference",
              link: "/api-reference/",
              activeMatch: "/api-reference/",
            },
            {
              text: "Packages",
              link: "/packages/",
              activeMatch: "/packages/",
            },
            {
              text: "Development",
              link: "/development/",
              activeMatch: "/development/",
            },
            {
              text: "Tutorials",
              link: "/tutorials/",
              activeMatch: "/tutorials/",
            },
            {
              text: "Demo",
              link: "/getting-started/demo/",
              activeMatch: "/getting-started/",
            },
          ],
        },
        {
          text: "Blog",
          activeMatch: "/blog/",
          items: [
            {
              text: "Blog Home",
              link: "/blog/",
              activeMatch: "/blog/$",
            },
            {
              text: "Tags",
              link: "/blog/tags",
              activeMatch: "/blog/tags",
            },
            {
              text: "Archives",
              link: "/blog/archives",
              activeMatch: "/blog/archives",
            },
            // {
            //   text: 'RSS Feed',
            //   link: '/blog/feed.rss',
            // },
          ],
        },

        {
          text: "FAQ",
          activeMatch: "/faq/",
          link: "/faq/",
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
              link: "https://escolalms.github.io/c4-software-architecture/master",
            },
            {
              text: "Ulam Format",
              link: "https://escolalms.github.io/headless-format/",
            },
          ],
        },
      ],

      sidebar: {
        "/faq/": [
          {
            collapsable: false,
            items: [
              { text: "FAQ", link: "/faq/" },
              { text: "Integrations", link: "/faq/integrations" },
              { text: "Paid features", link: "/faq/paid-features" },
            ],
          },
        ],
        "/guide/": [
          {
            title: "Guide",
            collapsable: false,
          },
        ],

        "/getting-started/": [
          {
            title: "Getting Started",
            collapsable: false,
            items: [
              {
                text: "Introduction",
                link: "/getting-started/",
              },
              {
                text: "Quickstart Installation (CLA)",
                link: "/getting-started/guide",
              },
              { text: "Installation", link: "/getting-started/installation" },
              {
                text: "Headless Architecture",
                link: "/getting-started/headless-architecture",
              },
              {
                text: "Help & Support",
                link: "/getting-started/help-support",
              },
              { text: "License", link: "/getting-started/license" },
              { text: "Demo", link: "/getting-started/demo" },
              {
                text: "Usage Information (telemetry)",
                link: "/getting-started/telemetry",
              },
            ],
          },
        ],
        "/app-guide/": [
          {
            title: "App Guide",
            collapsable: false,
            items: [
              { text: "Overview", link: "/app-guide/" },
              // {
              //   text: "General Tables, Sorting and filtering",
              //   link: "/app-guide/tables",
              // },
              {
                text: "Package enabling accessing courses and products without having account.",
                link: "/app-guide/assign-without-account",
              },
              {
                text: "Auth. User authentication. Roles & Permission Management",
                link: "/app-guide/auth",
              },
              {
                text: "Bookmarks and Notes for Course Topic",
                link: "/app-guide/bookmarks-notes",
              },
              {
                text: "Cart. General shop management.",
                link: "/app-guide/cart",
              },
              { text: "Categories", link: "/app-guide/categories" },
              // {
              //   text: "Consultation Access.",
              //   link: "/app-guide/consultation-access",
              // },
              // {
              //   text: "Consultations. One to one conversation package with `jitsi`",
              //   link: "/app-guide/consultations",
              // },
              { text: "Course Access.", link: "/app-guide/course-access" },
              {
                text: "Courses. Main e-learning package",
                link: "/app-guide/courses",
              },
              {
                text: "Courses Import Export. ZIP package and duplicate feature.",
                link: "/app-guide/courses-import-export",
              },
              // {
              //   text: "CSV-Users. Exporting and importing users in `.csv` format",
              //   link: "/app-guide/csv-users",
              // },
              // {
              //   text: "fakturowania",
              //   link: "/app-guide/fakturownia-integration",
              // },
              // {
              //   text: "Files. Uploading, deleting and reusing files.",
              //   link: "/app-guide/files",
              // },
              {
                text: "H5P. Rich HTML5 Content and Applications",
                link: "/app-guide/h5p",
              },
              // {
              //   text: "Images. Responsive and compressions processing module",
              //   link: "/app-guide/images",
              // },
              // { text: "Invoices generation.", link: "/app-guide/invoices" },
              {
                text: "MailerLite. Customized group for LMS events",
                link: "/app-guide/mailerlite",
              },
              { text: "Mattermost.", link: "/app-guide/mattermost" },
              // {
              //   text: "Model Fields. Extra attributes to any model",
              //   link: "/app-guide/model-fields",
              // },
              // { text: "Notifications.", link: "/app-guide/notifications" },
              // { text: "Pages. Simple CMS.", link: "/app-guide/pages" },
              // {
              //   text: "Payments. Facades that allows to connect payment gateways",
              //   link: "/app-guide/payments",
              // },
              // {
              //   text: "Permissions and Roles.",
              //   link: "/app-guide/permissions",
              // },
              // {
              //   text: "Questionnaire. Answers & Reports",
              //   link: "/app-guide/questionnaire",
              // },
              // {
              //   text: "Reports. Courses reports.",
              //   link: "/app-guide/reports",
              // },
              {
                text: "Scorm. Attach Scorm packages to courses",
                link: "/app-guide/scorm",
              },
              {
                text: "Settings. Additional global fields of various types and other package setup",
                link: "/app-guide/settings",
              },
              // {
              //   text: "Stationary Events.",
              //   link: "/app-guide/stationary-events",
              // },
              // {
              //   text: "Tags. Tagging for any Module",
              //   link: "/app-guide/tags",
              // },
              { text: "Tasks. User Tasks", link: "/app-guide/tasks" },
              // {
              //   text: "Templates-Email. Notification management with custom mjml templates.",
              //   link: "/app-guide/templates-email",
              // },
              // {
              //   text: "Templates-PDF. Templates in fabric.js frontend rendering format.",
              //   link: "/app-guide/templates-pdf",
              // },
              {
                text: "Templates-SMS. Notification management with custom templates",
                link: "/app-guide/templates-sms",
              },
              // {
              //   text: "General template package that allows connecting other channels",
              //   link: "/app-guide/templates",
              // },
              // { text: "GIFT Quiz", link: "/app-guide/topic-type-gift" },
              {
                text: "Project Topic Type ",
                link: "/app-guide/topic-type-project",
              },
              // { text: "Topic Types", link: "/app-guide/topic-types" },
              { text: "Tracker.", link: "/app-guide/tracker" },
              // { text: "Translations.", link: "/app-guide/translations" },
              {
                text: "Video Processing. Generation `hls` streaming formats",
                link: "/app-guide/video",
              },
              // {
              //   text: "Vouchers. E-commerce vouchers to manage cart promotion",
              //   link: "/app-guide/vouchers",
              // },
              // {
              //   text: "Webinar. Live video stream with `Jitsi` and `YouTube`",
              //   link: "/app-guide/webinar",
              // },
              {
                text: "Youtube. Package Youtube integration",
                link: "/app-guide/youtube",
              },
            ],
          },
        ],
        "/api-reference/": [
          {
            title: "API Reference",
            collapsable: false,
            items: [
              { text: "Introduction", link: "/api-reference/" },
              { text: "REST API", link: "/api-reference/rest" },
              {
                text: "JavaScript/TypeScript Software development kit",
                link: "/api-reference/sdk",
              },
              { text: "CLI", link: "/api-reference/cli" },
              { text: "Components", link: "/api-reference/components" },
              { text: "Translation", link: "/api-reference/translation" },
            ],
          },
        ],
        "/packages/": [
          {
            title: "Packages",
            collapsable: false,
            items: [
              { text: "Introduction", link: "/packages/" },
              {
                text: "API Laravel REST API. Main module that compose all Laravel packages",
                link: "/packages/api",
              },
              {
                text: "Package enabling accessing courses and products without having account.",
                link: "/packages/assign-without-account",
              },
              {
                text: "Auth. User authentication. Roles & Permission Management",
                link: "/packages/auth",
              },
              {
                text: "AWS ECS Terraform configuration file for one-click installation",
                link: "/packages/aws-ecs-terraform",
              },
              {
                text: "Bookmarks and Notes for Course Topic",
                link: "/packages/bookmarks-notes",
              },
              {
                text: "Cart. General shop management.",
                link: "/packages/cart",
              },
              { text: "Categories", link: "/packages/categories" },
              { text: "cmi5 integration", link: "/packages/cmi5" },
              {
                text: "Frontend styleguide and components",
                link: "/packages/components",
              },
              {
                text: "Consultation Access.",
                link: "/packages/consultation-access",
              },
              {
                text: "Consultations. One to one conversation package with `jitsi`",
                link: "/packages/consultations",
              },
              { text: "Core", link: "/packages/core" },
              { text: "Course Access.", link: "/packages/course-access" },
              {
                text: "Courses. Main e-learning package",
                link: "/packages/courses",
              },
              {
                text: "Bash script to install WellmsLMS with oneliner",
                link: "/packages/create-lms-app",
              },
              {
                text: "CSV-Users. Exporting and importing users in `.csv` format",
                link: "/packages/csv-users",
              },
              {
                text: "Courses Import Export. ZIP package and duplicate feature.",
                link: "/packages/courses-import-export",
              },
              {
                text: "Fakturownia-Integration. Generates Invoice from Fakturowania",
                link: "/packages/fakturownia",
              },
              {
                text: "Files. Uploading, deleting and reusing files.",
                link: "/packages/files",
              },
              {
                text: "React SPA Front Demo to show headless implementation",
                link: "/packages/front",
              },
              { text: "H5P Headless.", link: "/packages/h5p" },
              {
                text: "Headless H5P Player and editor components.",
                link: "/packages/h5p-player",
              },
              {
                text: "Images. Responsive and compressions processing module",
                link: "/packages/images",
              },
              { text: "Invoices generation.", link: "/packages/invoices" },
              {
                text: "This package introduce just a facade that you can use to generate parameters for jitsi player.",
                link: "/packages/jitsi",
              },
              {
                text: "Laravel Docker Images.",
                link: "/packages/laravel-docker",
              },
              {
                text: "LRS xAPI Learning Record Stores",
                link: "/packages/lrs",
              },
              {
                text: "MailerLite. Customized group for LMS events",
                link: "/packages/mailerlite",
              },
              { text: "Mattermost.", link: "/packages/mattermost" },
              {
                text: "Model Fields. Extra attributes to any model",
                link: "/packages/model-fields",
              },
              { text: "Notifications.", link: "/packages/notifications" },
              { text: "Pages. Simple CMS.", link: "/packages/pages" },
              {
                text: "Payments. Facades that allows to connect payment gateways",
                link: "/packages/payments",
              },
              {
                text: "Permissions and Roles.",
                link: "/packages/permissions",
              },
              {
                text: "Questionnaire. Answers & Reports",
                link: "/packages/questionnaire",
              },
              { text: "Reports. Courses reports.", link: "/packages/reports" },
              {
                text: "Scorm. Attach Scorm packages to courses",
                link: "/packages/scorm",
              },
              {
                text: "Frontend API Connector. Definition of reusable components and frontend services.",
                link: "/packages/sdk",
              },
              {
                text: "Settings. Additional global fields of various types and other package setup",
                link: "/packages/settings",
              },
              {
                text: "Stationary Events.",
                link: "/packages/stationary-events",
              },
              { text: "Tags. Tagging for any Module", link: "/packages/tags" },
              { text: "Tasks. User Tasks", link: "/packages/tasks" },
              {
                text: "General template package that allows connecting other channels",
                link: "/packages/templates",
              },
              {
                text: "Templates-Email. Notification management with custom mjml templates.",
                link: "/packages/templates-email",
              },
              {
                text: "Templates-PDF. Templates in fabric.js frontend rendering format.",
                link: "/packages/templates-pdf",
              },
              {
                text: "Templates-SMS. Notification management with custom templates",
                link: "/packages/templates-sms",
              },
              {
                text: "Topic Types. List of possible Topic Types for Course content",
                link: "/packages/topic-types",
              },
              { text: "GIFT Quiz", link: "/packages/topic-type-gift" },
              {
                text: "Topic Type Project",
                link: "/packages/topic-type-project",
              },
              { text: "Tracker.", link: "/packages/tracker" },
              { text: "Translations.", link: "/packages/translations" },
              {
                text: "TypeScript Models generated from the packages.",
                link: "/packages/ts-models",
              },
              {
                text: "Video Processing. Generation `hls` streaming formats",
                link: "/packages/video",
              },
              {
                text: "Vouchers. E-commerce vouchers to manage cart promotion",
                link: "/packages/vouchers",
              },
              {
                text: "Webinar. Live video stream with `Jitsi` and `YouTube`",
                link: "/packages/webinar",
              },
              {
                text: "Youtube. Package Youtube integration",
                link: "/packages/youtube",
              },
            ],
          },
        ],

        "/development/": [
          {
            title: "Development",
            collapsable: false,
            items: [
              { text: "Introduction", link: "/development/" },
              { text: "Create Wellms App", link: "/development/cra" },
              {
                text: "Continuous integration (CI) i Continuous Delivery",
                link: "/development/ci_cd",
              },
              { text: "Backend customization", link: "/development/backend" },
              {
                text: "Admin panel customization",
                link: "/development/admin",
              },
              { text: "Frontend development", link: "/development/frontend" },
              { text: "Contributing", link: "/development/contributing" },
            ],
          },
        ],
      },

      socialLinks: [{ icon: "github", link: "https://github.com/EscolaLMS/" }],
    },
  })
);
