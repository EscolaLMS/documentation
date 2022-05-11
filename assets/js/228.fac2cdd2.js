(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{640:function(t,e,s){"use strict";s.r(e);var o=s(62),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"consultations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consultations"}},[t._v("#")]),t._v(" Consultations")]),t._v(" "),s("p",[t._v("One to one conversation package")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://escolalms.github.io/Consultations/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Consultations",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Consultations/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Consultations/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.com/EscolaLMS/Consultations/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/consultations",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/consultations",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/consultations",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/consultations",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/consultations",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/consultations",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Consultations/maintainability",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/0c9e2593fb30e2048f95/maintainability",alt:"Maintainability"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"what-does-it-do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[t._v("#")]),t._v(" What does it do")]),t._v(" "),s("p",[t._v("This package is used for creating Consultation for EscolaLms.")]),t._v(" "),s("h2",{attrs:{id:"installing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("composer require escolalms/consultations")])]),t._v(" "),s("li",[s("code",[t._v("php artisan migrate")])]),t._v(" "),s("li",[s("code",[t._v('php artisan db:seed --class="EscolaLms\\Consultations\\Database\\Seeders\\ConsultationsPermissionSeeder"')])])]),t._v(" "),s("h2",{attrs:{id:"schedule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[t._v("#")]),t._v(" Schedule")]),t._v(" "),s("ul",[s("li",[t._v("In App\\Console\\Kernel to method schedule add\n"),s("ul",[s("li",[s("code",[t._v("$schedule->job(new ReminderAboutConsultationJob(ConsultationTermReminderStatusEnum::REMINDED_HOUR_BEFORE))->everyFiveMinutes()")]),t._v(" - reminder about to consultation before one hour, executed every 5 minutes")]),t._v(" "),s("li",[s("code",[t._v("$schedule->job(new ReminderAboutWebinarJob(ConsultationTermReminderStatusEnum::REMINDED_DAY_BEFORE))->everySixHours();")]),t._v(" - reminder about to consultation before one day, executed every 6 hours")])])])]),t._v(" "),s("h2",{attrs:{id:"endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),s("p",[t._v("All the endpoints are defined in "),s("a",{attrs:{href:"https://escolalms.github.io/Consultations/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),s("p",[t._v("Run "),s("code",[t._v("./vendor/bin/phpunit --filter=Consultation")]),t._v(" to run tests. See "),s("a",{attrs:{href:"tests"}},[t._v("tests")]),t._v(" folder as it's quite good staring point as documentation appendix.")]),t._v(" "),s("p",[t._v("Test details "),s("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Consultations",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Consultations/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Consultations/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.com/EscolaLMS/Consultations/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("EscolaLms\\Consultations\\Events\\ApprovedTerm")]),t._v(" => Event is dispatched when trainer approved term reported with buyer. Event refers to users, who have permissions students")]),t._v(" "),s("li",[s("code",[t._v("EscolaLms\\Consultations\\Events\\ApprovedTermWithTrainer")]),t._v(" => Event is dispatched when trainer approved term reported with buyer. Event refers to users, who have permissions tutor")]),t._v(" "),s("li",[s("code",[t._v("EscolaLms\\Consultations\\Events\\ChangeTerm")]),t._v(" => Event is dispatched when trainer changes term in buyed consultations. Event refers to users, who have permissions students")]),t._v(" "),s("li",[s("code",[t._v("EscolaLms\\Consultations\\Events\\RejectTerm")]),t._v(" => Event is dispatched when trainer rejects term reported with buyer. Event refers to users, who have permissions students")]),t._v(" "),s("li",[s("code",[t._v("EscolaLms\\Consultations\\Events\\RejectTermWithTrainer")]),t._v(" => Event is dispatched when trainer rejects term reported with buyer. Event refers to users, who have permissions tutor")]),t._v(" "),s("li",[s("code",[t._v("EscolaLms\\Consultations\\Events\\ReminderAboutTerm")]),t._v(" => Event is dispatched after execute cron job "),s("code",[t._v("EscolaLms\\Consultations\\Jobs\\ReminderAboutConsultationJob")]),t._v(", Event is dispatched when deadline for purchased consultation before 1 hours and 1 day. Event refers to users, who have permissions students")]),t._v(" "),s("li",[s("code",[t._v("EscolaLms\\Consultations\\Events\\ReminderTrainerAboutTerm")]),t._v(" => Event is dispatched some time before start consultation. Event refers to users, who have permissions tutor")]),t._v(" "),s("li",[s("code",[t._v("EscolaLms\\Consultations\\Events\\ReportTerm")]),t._v(" => Event is dispatched after reported term with buyer consultation")])]),t._v(" "),s("h2",{attrs:{id:"listeners"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[t._v("#")]),t._v(" Listeners")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("EscolaLms\\Webinar\\Listeners\\ReminderAboutTermListener")]),t._v(" => Listener execute a method that singed the status in the webinar reminder")])]),t._v(" "),s("h2",{attrs:{id:"how-to-use-this-on-frontend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-on-frontend"}},[t._v("#")]),t._v(" How to use this on frontend.")]),t._v(" "),s("h3",{attrs:{id:"admin-panel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[t._v("#")]),t._v(" Admin panel")]),t._v(" "),s("p",[s("strong",[t._v("Left menu")])]),t._v(" "),s("p",[s("img",{attrs:{src:"docs/consultations/menu.png",alt:"Menu",title:"Menu"}})]),t._v(" "),s("p",[s("strong",[t._v("List of consultations")])]),t._v(" "),s("p",[s("img",{attrs:{src:"docs/consultations/list.png",alt:"List of consultations",title:"List of consultations"}})]),t._v(" "),s("p",[s("strong",[t._v("Creating/editing consultation")])]),t._v(" "),s("p",[s("img",{attrs:{src:"docs/consultations/new_consultation.png",alt:"Creating/editing consultation",title:"Creating or editing consultation"}})]),t._v(" "),s("h3",{attrs:{id:"front-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#front-application"}},[t._v("#")]),t._v(" Front Application")]),t._v(" "),s("p",[t._v("...")]),t._v(" "),s("h2",{attrs:{id:"permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),s("p",[t._v("Permissions are defined in "),s("a",{attrs:{href:"vendor/escolalms/consultations/database/seeders/ConsultationsPermissionSeeder.php"}},[t._v("seeder")])]),t._v(" "),s("h2",{attrs:{id:"database-relation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-relation"}},[t._v("#")]),t._v(" Database relation")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Author")]),t._v(" Consultation is related belong to with User")]),t._v(" "),s("li",[s("code",[t._v("ProposedTerms")]),t._v(" Consultation model has many to models ConsultationProposedTerm")]),t._v(" "),s("li",[s("code",[t._v("Categories")]),t._v(" Consultation belongs to many with models Categories")]),t._v(" "),s("li",[s("code",[t._v("Users")]),t._v(" Consultation is related belongs to many with User which bought consultation")]),t._v(" "),s("li",[s("code",[t._v("Terms")]),t._v(" Consultation model has many to models ConsultationUserPivot. It is reported terms")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Consultation 1 -> 1 Author\nConsultation 1 -> n ProposedTerms\nConsultation 1 -> n Categories\nConsultation 1 -> n Users\nConsultation 1 -> n Terms\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);