(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{440:function(s,e,t){"use strict";t.r(e);var a=t(10),r=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"courses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#courses"}},[s._v("#")]),s._v(" Courses")]),s._v(" "),e("p",[s._v("Courses and content package")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://escolalms.github.io/Courses/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Courses",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Courses/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Courses/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/EscolaLMS/Courses/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/courses",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/courses",alt:"downloads"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/courses",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/courses",alt:"downloads"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/courses",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/courses",alt:"downloads"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Courses/maintainability",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/0c9e2593fb30e2048f95/maintainability",alt:"Maintainability"}}),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://dashboard.stryker-mutator.io/reports/github.com/EscolaLMS/Courses/main",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FEscolaLMS%2FCourses%2Fmain",alt:"Mutation testing badge"}}),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"what-does-it-do"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[s._v("#")]),s._v(" What does it do")]),s._v(" "),e("p",[s._v("This package is used for creating Course for EscolaLms.")]),s._v(" "),e("h2",{attrs:{id:"installing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[s._v("#")]),s._v(" Installing")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("composer require escolalms/courses")])]),s._v(" "),e("li",[e("code",[s._v("php artisan migrate")])]),s._v(" "),e("li",[e("code",[s._v('php artisan db:seed --class="EscolaLms\\Courses\\Database\\Seeders\\CoursesPermissionSeeder"')])])]),s._v(" "),e("h2",{attrs:{id:"schedule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[s._v("#")]),s._v(" Schedule")]),s._v(" "),e("ul",[e("li",[s._v("Schedules are available in ScheduleServiceProvider\n"),e("ul",[e("li",[e("code",[s._v("$schedule->job(CheckForDeadlines::class)->hourly()")]),s._v(" - executed every hours")]),s._v(" "),e("li",[e("code",[s._v("$schedule->job(ActivateCourseJob::class)->daily()")]),s._v(" - executed every days")])])])]),s._v(" "),e("h2",{attrs:{id:"endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[s._v("#")]),s._v(" Endpoints")]),s._v(" "),e("p",[s._v("All the endpoints are defined in "),e("a",{attrs:{href:"https://escolalms.github.io/Courses/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[s._v("#")]),s._v(" Tests")]),s._v(" "),e("p",[s._v("Run "),e("code",[s._v("./vendor/bin/phpunit --filter 'EscolaLms\\\\Courses\\\\Tests'")]),s._v(" to run tests. See "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Courses/tree/main/tests",target:"_blank",rel:"noopener noreferrer"}},[s._v("tests"),e("OutboundLink")],1),s._v(" folder as it's quite good staring point as documentation appendix.")]),s._v(" "),e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[s._v("#")]),s._v(" Events")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CourseAccessFinished")]),s._v(" => Event is dispatched when users lost access to course.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CourseAccessStarted")]),s._v(" => Event is dispatched when users received access to course.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CourseAssigned")]),s._v(" => Event is dispatched when admin assigned access user.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CourseDeadlineSoon")]),s._v(" => Event is dispatched when course deadline is coming out.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CoursedPublished")]),s._v(" => Event is dispatched when course is published.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CourseFinished")]),s._v(" => Event is dispatched when course is ended.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CourseStarted")]),s._v(" => Event is dispatched when course is started.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CourseStatusChanged")]),s._v(" => Event is dispatched when course has a status change.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CourseTutorAssigned")]),s._v(" => Event is dispatched when tutor is assigned to course.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CourseTutorUnassigned")]),s._v(" => Event is dispatched when tutor is unassigned to course.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\CourseUnassigned")]),s._v(" => Event is dispatched when user is unassigned to course.")]),s._v(" "),e("li",[e("code",[s._v("EscolaLms\\Courses\\Events\\TopicFinished")]),s._v(" => Event is dispatched when course topic is finished.")])]),s._v(" "),e("h2",{attrs:{id:"permissions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[s._v("#")]),s._v(" Permissions")]),s._v(" "),e("p",[s._v("Permissions are defined in "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Courses/tree/main/vendor/escolalms/courses/database/seeders/CoursesPermissionSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("seeder"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"model-relation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#model-relation"}},[s._v("#")]),s._v(" Model relation")]),s._v(" "),e("p",[s._v("The model user must be extended with the class HasCourses :")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class User extends EscolaLms\\Core\\Models\\User\n{\n    use HasCourses;\n")])])]),e("h2",{attrs:{id:"database-relation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-relation"}},[s._v("#")]),s._v(" Database relation")]),s._v(" "),e("p",[s._v("There is simple relation. "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Courses/tree/main/doc",target:"_blank",rel:"noopener noreferrer"}},[s._v("see docs for diagram"),e("OutboundLink")],1)]),s._v(" "),e("ol",[e("li",[e("code",[s._v("Course")]),s._v(" general category of the course")]),s._v(" "),e("li",[e("code",[s._v("Lesson")]),s._v(" grouped by Course")]),s._v(" "),e("li",[e("code",[s._v("Topic")]),s._v(" grouped by Lesson")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Course 1 -> n Lesson\nLesson 1 -> n Topic\nTopic 1 -> 1 TopicContent\n")])])]),e("p",[e("code",[s._v("TopicContent")]),s._v(" is an abstract model, this package contains some sample implementatio eg, "),e("code",[s._v("RichText")]),s._v(", "),e("code",[s._v("Audio")]),s._v(", "),e("code",[s._v("Video")]),s._v(", "),e("code",[s._v("H5P")]),s._v(" and "),e("code",[s._v("Image")])]),s._v(" "),e("p",[s._v("You create any of the Content model by post to the same Topic endponit (create and update), "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Courses/tree/main/doc",target:"_blank",rel:"noopener noreferrer"}},[s._v("see docs examples"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("strong",[s._v("Note")]),s._v(" that "),e("code",[s._v("/api/topics")]),s._v(" is using "),e("code",[s._v("form-data")]),s._v(" - this is due to PHP nature of posting files")]),s._v(" "),e("p",[s._v("List of possible "),e("code",[s._v("TopicContent")]),s._v("s is availabe in the endpoint "),e("code",[s._v("/api/topics/types")])]),s._v(" "),e("h2",{attrs:{id:"curriculum-sylabus-program"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#curriculum-sylabus-program"}},[s._v("#")]),s._v(" Curriculum/Sylabus/Program")]),s._v(" "),e("p",[s._v("App user access the course by fetching "),e("code",[s._v("GET /api/courses/{id}/program")]),s._v(" endpoint. This is after user purchase or has other access to the course. this endpoints renders tree of Course, Lessons, Topic with Contents essential to render whole course.")]),s._v(" "),e("h2",{attrs:{id:"adding-new-topiccontent-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-topiccontent-type"}},[s._v("#")]),s._v(" Adding new "),e("code",[s._v("TopicContent")]),s._v(" type")]),s._v(" "),e("p",[s._v("In the ServiceProvider register your class like")]),s._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[s._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ServiceProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[s._v("EscolaLms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Courses"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Facades"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Topic")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[s._v("CustomServiceProvider")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceProvider")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("Topic")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerContentClass")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("TopicContentCustom")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// or")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("Topic")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerContentClasses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("TopicContentCustom")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("TopicAnotherContentCustom")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// also register JSON Resource for a type")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("Topic")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerResourceClasses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("Audio")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'client'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("ClientAudioResource")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'admin'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("AdminAudioResource")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'export'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("ExportAudioResource")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("see "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Courses/tree/main/src/EscolaLmsCourseServiceProvider.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("EscolaLmsCourseServiceProvider.php"),e("OutboundLink")],1),s._v(" as reference as well as "),e("a",{attrs:{href:"package2/src/Models/TopicContent"}},[s._v("Models/TopicContent")])]),s._v(" "),e("h3",{attrs:{id:"content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[s._v("#")]),s._v(" Content")]),s._v(" "),e("p",[s._v("Package comes with seeder that create course with lessons and topics")]),s._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[s._v("php artisan db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("seed "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"\\EscolaLms\\Courses\\Database\\Seeders\\CoursesSeeder"')]),s._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);