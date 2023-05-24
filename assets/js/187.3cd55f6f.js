(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{481:function(t,a,e){"use strict";e.r(a);var s=e(10),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tracker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tracker"}},[t._v("#")]),t._v(" Tracker")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://escolalms.github.io/Tracker/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Tracker",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Tracker/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Tracker/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/Tracker/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/tracker",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/tracker",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/tracker",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/tracker",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/tracker",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/tracker",alt:"downloads"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"what-does-it-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[t._v("#")]),t._v(" What does it do")]),t._v(" "),a("p",[t._v("The package is used to track the api route.\nTracker is enabled by default and track routes with "),a("code",[t._v("/api/admin")]),t._v(" prefix.\nBy default, "),a("code",[t._v("/api/admin/tracks/routes")]),t._v(" is ignored.")]),t._v(" "),a("h2",{attrs:{id:"installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("composer require escolalms/tracker")])]),t._v(" "),a("li",[a("code",[t._v("php artisan migrate")])]),t._v(" "),a("li",[a("code",[t._v('php artisan db:seed --class="EscolaLms\\Tracker\\Database\\Seeders\\TrackerPermissionSeeder"')])])]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("You can configure this package by specifying keys in the .env file.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("TRACKER_ENABLED")]),t._v(" - enable or disable route tracking")]),t._v(" "),a("li",[a("code",[t._v("TRACKER_ROUTE_PREFIX")]),t._v(" - set tracked route prefix")]),t._v(" "),a("li",[a("code",[t._v("TRACKER_CONNECTION")]),t._v(" - database connection, by default "),a("code",[t._v("sqlite")])])]),t._v(" "),a("p",[t._v("You can also use "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Tracker/tree/main/src/Facades/Tracker.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("facade"),a("OutboundLink")],1),t._v(" to configure tracker.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Tracker")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Http")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'api/admin/example-route'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Tracker")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Tracker")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ignoreUris")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'api/admin/example-route'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Http")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'api/admin/example-route'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Tracker")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Http")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'api/example-route'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("TrackRoutes - stores tracked routes\n")])])]),a("p",[t._v("Table "),a("code",[t._v("track_routes")]),t._v(" sample rows")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("user_id")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("path")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("full_path")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("method")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("extra")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("created_at")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("updated_at")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/api/admin/example-1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/api/admin/example-1?key=value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NULL")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2022-04-14 08:49:25")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2022-04-14 08:49:25")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("33")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/api/admin/example-2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/api/admin/example-2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("NULL")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2022-04-14 08:49:25")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2022-04-14 08:49:25")])])])]),t._v(" "),a("h2",{attrs:{id:"endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://escolalms.github.io/Tracker/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("./vendor/bin/phpunit")]),t._v(" to run tests. See "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Tracker/tree/main/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests"),a("OutboundLink")],1),t._v(" folder as it's quite good staring point as documentation appendix.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Tracker",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Tracker/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Tracker/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/Tracker/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),a("p",[t._v("Permissions are defined in "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Tracker/tree/main/database/seeders/TrackerPermissionSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("seeder"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);