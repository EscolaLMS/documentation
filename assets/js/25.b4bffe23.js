(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{466:function(t,a,s){t.exports=s.p+"assets/img/list.0c80f815.png"},467:function(t,a,s){t.exports=s.p+"assets/img/player.7465bea4.png"},593:function(t,a,s){"use strict";s.r(a);var e=s(65),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"scorm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scorm"}},[t._v("#")]),t._v(" Scorm")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://escolalms.github.io/Scorm/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Scorm",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Scorm/branch/main/graph/badge.svg?token=gBzpyNK8DQ",alt:"codecov"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Scorm/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/EscolaLMS/Scorm/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/scorm",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/scorm",alt:"downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/scorm",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/scorm",alt:"downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/scorm",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/scorm",alt:"downloads"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"what-does-it-do"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[t._v("#")]),t._v(" What does it do")]),t._v(" "),e("p",[t._v("This package is used to store and manage SCORM packages.")]),t._v(" "),e("h2",{attrs:{id:"installing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("composer require escolalms/scorm")])]),t._v(" "),e("li",[e("code",[t._v("php artisan migrate")])]),t._v(" "),e("li",[e("code",[t._v('php artisan db:seed --class="EscolaLms\\Scorm\\Database\\Seeders\\DatabseSeeder"')])]),t._v(" "),e("li",[e("code",[t._v('php artisan db:seed --class="EscolaLms\\Scorm\\Database\\Seeders\\PermissionTableSeeder"')])])]),t._v(" "),e("h2",{attrs:{id:"database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("scorm")]),t._v(" - Scorm package main data.")]),t._v(" "),e("li",[e("code",[t._v("scorm_sco")]),t._v(" - Educational content data associated with the Scorm package.")]),t._v(" "),e("li",[e("code",[t._v("scorm_sco_tracking")]),t._v(" - Stores the user's progress.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Scorm 1 -> n ScormScos\nScorm 1 -> n ScormScoTracking\n")])])]),e("h2",{attrs:{id:"tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[t._v("#")]),t._v(" Tutorial")]),t._v(" "),e("ol",[e("li",[t._v("Get the Scorm package from "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Scorm/tree/main/database/mocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("EscolaLms\\Scorm"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://scorm.com/scorm-explained/technical-scorm/golf-examples/?utm_source=google&utm_medium=natural_search",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sample SCORM packages"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("Upload Scorm package in Zip format "),e("code",[t._v("/api/admin/scorm/upload")]),t._v(".")]),t._v(" "),e("li",[t._v("Start the player by specifying uuid Scorm SCO "),e("code",[t._v("/api/scorm/play/{uuid}")]),t._v(".")]),t._v(" "),e("li",[t._v("The package supports tracking user progress, to achieve this, you need to send an authorization token in the header.")])]),t._v(" "),e("h2",{attrs:{id:"endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("/api/admin/scorm/upload")]),t._v(" - Upload ZIP Scorm Package into app local storage.")]),t._v(" "),e("li",[e("code",[t._v("/api/scorm/play/{uuid}")]),t._v(" - SCORM SCO player.")])]),t._v(" "),e("p",[t._v("All the endpoints are defined in swagger "),e("a",{attrs:{href:"https://escolalms.github.io/Scorm/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),e("p",[t._v("Run "),e("code",[t._v("./vendor/bin/phpunit")]),t._v(" to run tests. See "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Scorm/tree/main/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests"),e("OutboundLink")],1),t._v(" folder as it's quite good staring point as documentation appendix.")]),t._v(" "),e("p",[t._v("Test details\n"),e("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/scorm",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/scorm/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/EscolaLMS/scorm/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/EscolaLMS/scorm/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"how-to-use-this-on-frontend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-on-frontend"}},[t._v("#")]),t._v(" How to use this on frontend.")]),t._v(" "),e("p",[t._v("Endpoint "),e("code",[t._v("/api/scorm/play/{uuid}")]),t._v(" returns the html file with the "),e("code",[t._v("<iframe>")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("api/storage/{scorm-version}/{uuid}/index.html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"admin-panel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[t._v("#")]),t._v(" Admin panel")]),t._v(" "),e("p",[e("strong",[t._v("List of Scorm packages")]),t._v(" "),e("img",{attrs:{src:s(466),alt:"List of Scorm packages",title:"List of Scorm packages"}})]),t._v(" "),e("p",[e("strong",[t._v("Scorm player")]),t._v(" "),e("img",{attrs:{src:s(467),alt:"Scorm player",title:"Scorm player"}})]),t._v(" "),e("h2",{attrs:{id:"permissions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),e("p",[t._v("Permissions are defined in "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Scorm/blob/main/database/seeders/PermissionTableSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("seeder"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"todo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" Todo.")]),t._v(" "),e("p",[t._v("The package does not support all available scorm formats\n"),e("a",{attrs:{href:"https://github.com/EscolaLMS/Scorm/issues/13",target:"_blank",rel:"noopener noreferrer"}},[t._v("#1"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Scorm/issues/6",target:"_blank",rel:"noopener noreferrer"}},[t._v("#2"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);