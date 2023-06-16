(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{305:function(e,t,a){"use strict";a.r(t);var r=a(10),s=function(e){e.options.__data__block__={mermaid_64a570ac:"sequenceDiagram\n\n    box Embeed in Web App     \n    participant Jisti\n    actor Tutor\n    participant Youtube\n    participant Web App\n    actor Student\n    end\n\n    box Administration\n    participant Admin Panel\n    actor Admin\n    end \n\n    Admin->>Admin Panel: Creates a webinar instance\n    Student->>Web App: Get access to webinar (eg. buys)\n    Tutor->>Web App: (on the day of the event) Broadcast \n    Web App->>Jisti: Broadcast with Jitsu GUI \n    Jisti->>Youtube: Broadcast to public \n    Youtube->>Web App: forward for public\n    Student->>Web App: Watches webinar with YT GUI\n\n"}},n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"webinar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webinar"}},[e._v("#")]),e._v(" Webinar")]),e._v(" "),t("p",[e._v("Package enabling live video stream")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://escolalms.github.io/Webinar/",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Webinar",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Webinar/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/EscolaLMS/Webinar/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://github.com/EscolaLMS/Webinar/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://packagist.org/packages/escolalms/webinar",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/webinar",alt:"downloads"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://packagist.org/packages/escolalms/webinar",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/webinar",alt:"downloads"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://packagist.org/packages/escolalms/webinar",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/webinar",alt:"downloads"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Webinar/maintainability",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/0c9e2593fb30e2048f95/maintainability",alt:"Maintainability"}}),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"what-does-it-do"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[e._v("#")]),e._v(" What does it do")]),e._v(" "),t("p",[e._v("This package is used for creating Webinar for EscolaLms.")]),e._v(" "),t("h2",{attrs:{id:"installing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[e._v("#")]),e._v(" Installing")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("composer require escolalms/webinar")])]),e._v(" "),t("li",[t("code",[e._v("php artisan migrate")])]),e._v(" "),t("li",[t("code",[e._v('php artisan db:seed --class="EscolaLms\\Webinar\\Database\\Seeders\\WebinarsPermissionSeeder"')])]),e._v(" "),t("li",[e._v("Integration with "),t("a",{attrs:{href:"https://github.com/EscolaLMS/Youtube",target:"_blank",rel:"noopener noreferrer"}},[e._v("Youtube"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"schedule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[e._v("#")]),e._v(" Schedule")]),e._v(" "),t("ul",[t("li",[e._v("In App\\Console\\Kernel to method schedule add\n"),t("ul",[t("li",[t("code",[e._v("$schedule->job(new ReminderAboutWebinarJob(WebinarTermReminderStatusEnum::REMINDED_HOUR_BEFORE))->everyFiveMinutes()")]),e._v(" - reminder about to webinar before one hour, executed every 5 minutes")]),e._v(" "),t("li",[t("code",[e._v("$schedule->job(new ReminderAboutWebinarJob(WebinarTermReminderStatusEnum::REMINDED_DAY_BEFORE))->everySixHours();")]),e._v(" - reminder about to webinar before one day, executed every 6 hours")])])])]),e._v(" "),t("h2",{attrs:{id:"endpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[e._v("#")]),e._v(" Endpoints")]),e._v(" "),t("p",[e._v("All the endpoints are defined in "),t("a",{attrs:{href:"https://escolalms.github.io/Webinar/",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[e._v("#")]),e._v(" Tests")]),e._v(" "),t("p",[e._v("Run "),t("code",[e._v("./vendor/bin/phpunit --filter=Webinar")]),e._v(" to run tests. See "),t("a",{attrs:{href:"https://github.com/EscolaLMS/Webinar/tree/main/tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("tests"),t("OutboundLink")],1),e._v(" folder as it's quite good staring point as documentation appendix.")]),e._v(" "),t("p",[e._v("Test details "),t("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Webinar",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Webinar/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/EscolaLMS/Webinar/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://github.com/EscolaLMS/Webinar/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("EscolaLms\\Webinar\\Events\\ReminderAboutTerm")]),e._v(" => Event is dispatched after execute cron job "),t("code",[e._v("EscolaLms\\Webinar\\Jobs\\ReminderAboutWebinarJob")]),e._v(", Event is dispatched when deadline for purchased webinars before 1 hours and 1 day")]),e._v(" "),t("li",[t("code",[e._v("EscolaLms\\Webinar\\Events\\WebinarTrainerAssigned")]),e._v(" => Event is dispatched after assigned trainer to webinar")]),e._v(" "),t("li",[t("code",[e._v("EscolaLms\\Webinar\\Events\\WebinarTrainerUnassigned")]),e._v(" => Event is dispatched after unassigned trainer from webinar")])]),e._v(" "),t("h2",{attrs:{id:"listeners"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[e._v("#")]),e._v(" Listeners")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("EscolaLms\\Webinar\\Listeners\\ReminderAboutTermListener")]),e._v(" => Listener execute a method that singed the status in the webinar reminder")])]),e._v(" "),t("h2",{attrs:{id:"how-does-this-work-on-frontend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-does-this-work-on-frontend"}},[e._v("#")]),e._v(" How does this work on frontend.")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a570ac",graph:e.$dataBlock.mermaid_64a570ac}}),t("h2",{attrs:{id:"permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),t("p",[e._v("Permissions are defined in "),t("a",{attrs:{href:"https://github.com/EscolaLMS/Webinar/tree/main/vendor/escolalms/webinar/database/seeders/WebinarsPermissionSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("seeder"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"database-relation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-relation"}},[e._v("#")]),e._v(" Database relation")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("Trainers")]),e._v(" Webinar is related belongs to many with User")]),e._v(" "),t("li",[t("code",[e._v("Tags")]),e._v(" Webinar model morph many to model tags")]),e._v(" "),t("li",[t("code",[e._v("Users")]),e._v(" Webinar is related belongs to many with User which bought webinar")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Webinar 1 -> n User\nWebinar 1 -> n Tags\nWebinar 1 -> n User\n")])])])],1)}),[],!1,null,null,null);"function"==typeof s&&s(n);t.default=n.exports}}]);