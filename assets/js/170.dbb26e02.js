(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{464:function(t,s,a){"use strict";a.r(s);var e=a(10),i=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"notifications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notifications"}},[t._v("#")]),t._v(" Notifications")]),t._v(" "),s("p",[t._v("Notifications package")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://escolalms.github.io/Notifications/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/notifications",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/notifications/branch/main/graph/badge.svg?token=gBzpyNK8DQ",alt:"codecov"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/EscolaLMS/notifications/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.com/EscolaLMS/notifications/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/notifications",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/notifications",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/notifications",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/notifications",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/notifications",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/notifications",alt:"downloads"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"what-does-it-do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[t._v("#")]),t._v(" What does it do")]),t._v(" "),s("p",[t._v("This package is used for logging and broadcasting notifications for all "),s("code",[t._v("EscolaLms")]),t._v(" packages events.")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("composer require escolalms/notifications")])]),t._v(" "),s("li",[s("code",[t._v("php artisan migrate")])]),t._v(" "),s("li",[s("code",[t._v('php artisan db:seed --class="EscolaLms\\Notifications\\Database\\Seeders\\NotificationsPermissionsSeeder"')])])]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("All events emitted by EscolaLms packages will be logged in database and can be listed through API (and Admin Panel).\nThere is a configuration file in which you can define events which should be excluded from being stored.")]),t._v(" "),s("h2",{attrs:{id:"endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),s("p",[t._v("All the endpoints are defined in "),s("a",{attrs:{href:"https://escolalms.github.io/Notifications/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),s("p",[t._v("Run "),s("code",[t._v("./vendor/bin/phpunit --filter 'EscolaLms\\\\Notifications\\\\Tests'")]),t._v(" to run tests. See "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Notifications/tree/main/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests"),s("OutboundLink")],1),t._v(" folder as it's quite good staring point as documentation appendix.")]),t._v(" "),s("p",[t._v("Test details:\n"),s("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/notifications",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/notifications/branch/main/graph/badge.svg?token=gBzpyNK8DQ",alt:"codecov"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/EscolaLMS/notifications/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.com/EscolaLMS/notifications/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"admin-panel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[t._v("#")]),t._v(" Admin panel")]),t._v(" "),s("h4",{attrs:{id:"left-menu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#left-menu"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Left menu")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Notifications/main/docs/menu.png",alt:"Menu",title:"Menu"}})]),t._v(" "),s("h4",{attrs:{id:"list-of-notifications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-notifications"}},[t._v("#")]),t._v(" "),s("strong",[t._v("List of notifications")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Notifications/main/docs/list.png",alt:"List of notifications",title:"List of notifications"}})]),t._v(" "),s("h2",{attrs:{id:"permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),s("p",[t._v("Permissions are defined in "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Notifications/tree/main/vendor/escolalms/notifications/database/seeders/NotificationsPermissionsSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("seeder"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("p",[t._v("No Events are defined in this package.")]),t._v(" "),s("h2",{attrs:{id:"listeners"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[t._v("#")]),t._v(" Listeners")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("EscolaLms\\Notifications\\Listeners\\NotifiableEventListener")]),t._v(" - this listener listens to all events in "),s("code",[t._v("EscolaLms")]),t._v(" namespace")])]),t._v(" "),s("h2",{attrs:{id:"roadmap-todo-troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roadmap-todo-troubleshooting"}},[t._v("#")]),t._v(" Roadmap. Todo. Troubleshooting")]),t._v(" "),s("ul",[s("li",[t._v("???")])])])}),[],!1,null,null,null);s.default=i.exports}}]);