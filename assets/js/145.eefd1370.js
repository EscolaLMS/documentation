(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{569:function(t,s,a){"use strict";a.r(s);var e=a(65),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notifications"}},[t._v("#")]),t._v(" Notifications")]),t._v(" "),a("p",[t._v("Notifications package")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://escolalms.github.io/notifications/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/notifications",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/notifications/branch/main/graph/badge.svg?token=gBzpyNK8DQ",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/notifications/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/notifications/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/notifications",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/notifications",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/notifications",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/notifications",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/notifications",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/notifications",alt:"downloads"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"what-does-it-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[t._v("#")]),t._v(" What does it do")]),t._v(" "),a("p",[t._v("This package is used for logging and broadcasting notifications for all "),a("code",[t._v("EscolaLms")]),t._v(" packages events.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("composer require escolalms/notifications")])]),t._v(" "),a("li",[a("code",[t._v("php artisan migrate")])]),t._v(" "),a("li",[a("code",[t._v('php artisan db:seed --class="EscolaLms\\Notifications\\Database\\Seeders\\NotificationsPermissionsSeeder"')])])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("All events emitted by EscolaLms packages will be logged in database and can be listed through API (and Admin Panel).\nThere is a configuration file in which you can define events which should be excluded from being stored.")]),t._v(" "),a("h2",{attrs:{id:"endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),a("p",[t._v("All the endpoints are defined in "),a("a",{attrs:{href:"https://escolalms.github.io/notifications/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("./vendor/bin/phpunit --filter 'EscolaLms\\\\Notifications\\\\Tests'")]),t._v(" to run tests. See "),a("a",{attrs:{href:"tests"}},[t._v("tests")]),t._v(" folder as it's quite good staring point as documentation appendix.")]),t._v(" "),a("p",[t._v("Test details:\n"),a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/notifications",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/notifications/branch/main/graph/badge.svg?token=gBzpyNK8DQ",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/notifications/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/notifications/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"admin-panel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[t._v("#")]),t._v(" Admin panel")]),t._v(" "),a("h4",{attrs:{id:"left-menu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#left-menu"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Left menu")])]),t._v(" "),a("p",[a("img",{attrs:{src:"docs/notifications/menu.png",alt:"Menu",title:"Menu"}})]),t._v(" "),a("h4",{attrs:{id:"list-of-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-notifications"}},[t._v("#")]),t._v(" "),a("strong",[t._v("List of notifications")])]),t._v(" "),a("p",[a("img",{attrs:{src:"docs/notifications/list.png",alt:"List of notifications",title:"List of notifications"}})]),t._v(" "),a("h2",{attrs:{id:"permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),a("p",[t._v("Permissions are defined in "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Notifications/blob/main/database/seeders/NotificationsPermissionsSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("seeder"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[t._v("No Events are defined in this package.")]),t._v(" "),a("h2",{attrs:{id:"listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[t._v("#")]),t._v(" Listeners")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("EscolaLms\\Notifications\\Listeners\\NotifiableEventListener")]),t._v(" - this listener listens to all events in "),a("code",[t._v("EscolaLms")]),t._v(" namespace")])]),t._v(" "),a("h2",{attrs:{id:"roadmap-todo-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roadmap-todo-troubleshooting"}},[t._v("#")]),t._v(" Roadmap. Todo. Troubleshooting")]),t._v(" "),a("ul",[a("li",[t._v("???")])])])}),[],!1,null,null,null);s.default=i.exports}}]);