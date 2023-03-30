(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{413:function(t,e,o){"use strict";o.r(e);var a=o(14),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"youtube"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#youtube"}},[t._v("#")]),t._v(" Youtube")]),t._v(" "),e("p",[t._v("Package Youtube integration")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Youtube",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Youtube/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Youtube/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/EscolaLMS/Youtube/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/youtube",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/youtube",alt:"downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/youtube",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/youtube",alt:"downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/youtube",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/youtube",alt:"downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Youtube/maintainability",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/0fe584397e06ef32618f/maintainability",alt:"Maintainability"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Youtube/test_coverage",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/0fe584397e06ef32618f/test_coverage",alt:"Test Coverage"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"what-does-it-do"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[t._v("#")]),t._v(" What does it do")]),t._v(" "),e("p",[t._v("This package is used for creating Youtube livestream for Webinar in EscolaLms.")]),t._v(" "),e("h2",{attrs:{id:"installing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("composer require escolalms/youtube")])]),t._v(" "),e("li",[t._v("configure integration in https://console.cloud.google.com/")])]),t._v(" "),e("h2",{attrs:{id:"configuration-in-console-cloude-youtube"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-in-console-cloude-youtube"}},[t._v("#")]),t._v(" Configuration in console cloude youtube")]),t._v(" "),e("p",[t._v("Login in console cloud google and create new project\n"),e("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Youtube/main/docs/create_new_project_in_google_console.png",alt:"Create new project in google console",title:"Create new project in google console"}}),t._v("\nAfter created project got to the interfaces api and enable YouTube Data API v3\n"),e("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Youtube/main/docs/enable_yt_data_api.png",alt:"Enable interface Youtube data api",title:"Enable interface Youtube data api"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Youtube/main/docs/login_data.png",alt:"Copy Login data from youtube api",title:"Copy Login data from youtube api"}}),t._v("\nGo to Login Data and create Api key and OAuth 2.0 client IDs and enter data for variables:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("services.youtube.client_id")])]),t._v(" "),e("li",[e("code",[t._v("services.youtube.client_secret")])]),t._v(" "),e("li",[e("code",[t._v("services.youtube.api_key")])]),t._v(" "),e("li",[e("code",[t._v("services.youtube.redirect_url")])])]),t._v(" "),e("p",[t._v("After entered data, you must generate refresh token.\nIf you generated refresh token with api from endpoints:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('api/admin/g-token/generate POST {"email": "email"} AUTHORIZE')]),t._v(" and opened generated url and follow the instructions")]),t._v(" "),e("li",[t._v("After action upper yt generated refresh token for variable "),e("code",[t._v("services.youtube.refresh_token")]),t._v("\nOr you can generated refresh token manual and enter for variable "),e("code",[t._v("services.youtube.refresh_token")])])]),t._v(" "),e("h2",{attrs:{id:"tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),e("p",[t._v("Run "),e("code",[t._v("./vendor/bin/phpunit --filter=Youtube")]),t._v(" to run tests. See "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Youtube/tree/main/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests"),e("OutboundLink")],1),t._v(" folder as it's quite good staring point as documentation appendix.")]),t._v(" "),e("p",[t._v("Test details "),e("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Youtube",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Youtube/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Youtube/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/EscolaLMS/Youtube/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);