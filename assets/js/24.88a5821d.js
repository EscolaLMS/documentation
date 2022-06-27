(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{464:function(t,e,s){t.exports=s.p+"assets/img/reports.bb591004.png"},465:function(t,e,s){t.exports=s.p+"assets/img/course.332cf2d2.png"},592:function(t,e,s){"use strict";s.r(e);var a=s(65),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"escolalms-reports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#escolalms-reports"}},[t._v("#")]),t._v(" EscolaLMS Reports")]),t._v(" "),a("p",[t._v("Package for statistics & reports")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://escolalms.github.io/Reports/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Reports",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Reports/branch/main/graph/badge.svg?token=O91FHNKI6R",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Reports/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/Reports/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/reports",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/reports",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/reports",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/reports",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/reports",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/reports",alt:"downloads"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),a("p",[t._v("This package contains web API for retrieving statistical data about other LMS components (or event any arbitrary non-LMS Models for which Metrics and/or Reports are registered).")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("composer require escolalms/reports")])]),t._v(" "),a("li",[a("code",[t._v("php artisan migrate")])]),t._v(" "),a("li",[a("code",[t._v('php artisan db:seed --class="EscolaLms\\Reports\\Database\\Seeders\\ReportsPermissionSeeder"')])]),t._v(" "),a("li",[t._v("optional: "),a("code",[t._v("php artisan vendor:publish --tag=reports")]),t._v(" to publish config file")])]),t._v(" "),a("h2",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("EscolaLms\\Courses")]),t._v(" for all Courses related stats and metrics")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Cart")]),t._v(" for all metrics related to calculating amounts of money spent")])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("By editing published config "),a("code",[t._v("reports.php")]),t._v(" you can:")]),t._v(" "),a("ol",[a("li",[t._v("Change which metrics are available in API (by editing "),a("code",[t._v("metrics")]),t._v(")")]),t._v(" "),a("li",[t._v("Change settings for each Metric (by editing "),a("code",[t._v("metric_configuration")]),t._v(")\n"),a("ol",[a("li",[a("code",[t._v("limit")]),t._v(" defines how many data points will be calculated by default (if you don't pass limit as query parameter); for example: "),a("code",[t._v("TutorsPopularityMetric")]),t._v(" with "),a("code",[t._v("limit")]),t._v(" set to 10 will return popularity of 10 most popular Tutors")]),t._v(" "),a("li",[a("code",[t._v("history")]),t._v(" is a boolean that defines if this metric should be automatically calculated and stored in database")]),t._v(" "),a("li",[a("code",[t._v("cron")]),t._v(" is cron config which determines how often automatic calculation of metrics happens")])])]),t._v(" "),a("li",[t._v("Change which stats are available in API (by editing "),a("code",[t._v("stats")]),t._v(") and to which Model they are mapped")])]),t._v(" "),a("h3",{attrs:{id:"stats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stats"}},[t._v("#")]),t._v(" Stats")]),t._v(" "),a("p",[t._v("Stats are used for calculating some statistical data about given single Model (for example Course or Topic). No historical data is stored, only current data is available.")]),t._v(" "),a("h4",{attrs:{id:"available-stats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-stats"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Available stats")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("EscolaLms\\Reports\\Stats\\Course\\AverageTime")]),t._v(" - average time spent on Course by users subscribed to it")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Reports\\Stats\\Course\\AverageTimePerTopic")]),t._v(" - average time spent on Course by users subscribed to it, grouped by topic")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Reports\\Stats\\Course\\MoneyEarned")]),t._v(" - sum of money earned by given Course")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Reports\\Stats\\Course\\PeopleBought")]),t._v(" - count of users that bought given Course")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Reports\\Stats\\Course\\PeopleFinished")]),t._v(" - count of how many users finished given Course")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Reports\\Stats\\Course\\PeopleStarted")]),t._v(" - count of how many users started learning given Course")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Reports\\Stats\\Topic\\AverageTime")]),t._v(" - average time spent on Topic by users subscribed to Course which this topic is part of")])]),t._v(" "),a("h4",{attrs:{id:"creating-your-own-stat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-own-stat"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Creating your own stat")])]),t._v(" "),a("p",[t._v("To create your own Stat, you need to create class implementing "),a("code",[t._v("EscolaLms\\Reports\\Stats\\StatContract")]),t._v(".\nAfter creating a Stat you need to register it by adding it to "),a("code",[t._v("stats")]),t._v(" array in config file.")]),t._v(" "),a("h3",{attrs:{id:"metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[t._v("#")]),t._v(" Metrics")]),t._v(" "),a("p",[t._v("Metrics are used for reporting data accumulated over time. Historical data is stored for each day using scheduled job, and requesting a metric returns that historical data (that is, metric values stored at given date).")]),t._v(" "),a("h4",{attrs:{id:"available-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-metrics"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Available metrics")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("EscolaLms\\Reports\\Metrics\\CoursesMoneySpentMetric")]),t._v(" - calculates total money spent for every Course (historical data represents total money spent up to given date)")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Reports\\Metrics\\CoursesPopularityMetric")]),t._v(" - calculates how many users were subscribed to every Course")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Reports\\Metrics\\CoursesSecondsSpentMetric")]),t._v(" - calculates how much times users spent learning every Course")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Reports\\Metrics\\TutorsPopularityMetric")]),t._v(" - calculates how many users were subscribed to courses created by given Tutor")])]),t._v(" "),a("h4",{attrs:{id:"creating-your-own-metric"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-own-metric"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Creating your own metric")])]),t._v(" "),a("p",[t._v("To create your own Metric, you need to create class implementing "),a("code",[t._v("EscolaLms\\Reports\\Metrics\\Contracts\\MetricContract")]),t._v(". You can extend "),a("code",[t._v("EscolaLms\\Reports\\Metrics\\AbstractMetric")]),t._v(" to use default implementations of most of the methods declared in this interface.\nAfter creating a Metric you need to register it by adding it to "),a("code",[t._v("metrics")]),t._v(" array in config file.")]),t._v(" "),a("h2",{attrs:{id:"endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),a("p",[t._v("All the endpoints are defined in "),a("a",{attrs:{href:"https://escolalms.github.io/Reports/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"metrics-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metrics-endpoints"}},[t._v("#")]),t._v(" Metrics endpoints")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("GET /api/admin/reports/metrics")]),t._v(" returns list of "),a("code",[t._v("metrics")]),t._v(" configured in "),a("code",[t._v("reports.php")]),t._v(" config file")]),t._v(" "),a("li",[a("code",[t._v("GET /api/admin/reports/report")]),t._v(" calculates data for chosen metric; you can pass following query parameters to this endpoint:\n"),a("ol",[a("li",[a("code",[t._v("metric={classname}")]),t._v(" is required; "),a("code",[t._v("classname")]),t._v(" is one of the "),a("code",[t._v("metrics")]),t._v(" returned in "),a("code",[t._v("/api/admin/reports/metrics")]),t._v(" endpoit")]),t._v(" "),a("li",[a("code",[t._v("limit={int}")]),t._v(" is optional; determines the maximum number of data points that will be returned")]),t._v(" "),a("li",[a("code",[t._v("date={date}")]),t._v(" is optional; will try to load historical report data for given date or return "),a("code",[t._v("404")]),t._v(" if there is no data available; without this param, endpoint will return today's data")])])])]),t._v(" "),a("h3",{attrs:{id:"stats-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stats-endpoints"}},[t._v("#")]),t._v(" Stats endpoints")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("GET /api/admin/stats/available")]),t._v(" returns list of "),a("code",[t._v("stats")]),t._v(" configured in "),a("code",[t._v("reports.php")]),t._v(" config file")]),t._v(" "),a("li",[t._v("`GET /api/admin/stats/")])]),t._v(" "),a("h2",{attrs:{id:"tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("./vendor/bin/phpunit --filter='EscolaLms\\\\Reports\\\\Tests'")]),t._v(" to run tests.")]),t._v(" "),a("p",[t._v("Test details: "),a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Reports",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Reports/branch/main/graph/badge.svg?token=O91FHNKI6R",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Reports/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/Reports/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[t._v("No Events are defined in this package.")]),t._v(" "),a("h2",{attrs:{id:"listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[t._v("#")]),t._v(" Listeners")]),t._v(" "),a("p",[t._v("No Listeners are defined in this package.")]),t._v(" "),a("h2",{attrs:{id:"how-to-use-this-package-on-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-package-on-frontend"}},[t._v("#")]),t._v(" How to use this package on Frontend")]),t._v(" "),a("h3",{attrs:{id:"admin-panel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[t._v("#")]),t._v(" Admin Panel")]),t._v(" "),a("h4",{attrs:{id:"reports-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reports-dashboard"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Reports dashboard")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(464),alt:"Reports dashboard",title:"Reports dashboard"}})]),t._v(" "),a("h4",{attrs:{id:"course-stats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#course-stats"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Course Stats")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(465),alt:"Course statistics",title:"Course statistics"}})]),t._v(" "),a("h2",{attrs:{id:"permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),a("p",[t._v("Permissions are defined in "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Reports/blob/main/src/Enums/ReportsPermissionsEnum.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enum"),a("OutboundLink")],1),t._v(" and seeded in "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Reports/blob/main/database/seeders/ReportsPermissionSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Seeder"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);