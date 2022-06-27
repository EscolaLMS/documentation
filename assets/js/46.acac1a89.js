(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{512:function(e,t,o){"use strict";o.r(t);var a=o(65),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("In order to create your own Wellms backend REST API you have few options")]),e._v(" "),o("h2",{attrs:{id:"api-project-with-makefile-cli-and-docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api-project-with-makefile-cli-and-docker"}},[e._v("#")]),e._v(" API Project with "),o("code",[e._v("makefile")]),e._v(" CLI and "),o("code",[e._v("docker")])]),e._v(" "),o("h3",{attrs:{id:"option-1-composer-create"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-1-composer-create"}},[e._v("#")]),e._v(" Option 1. "),o("code",[e._v("composer create")])]),e._v(" "),o("ol",[o("li",[o("code",[e._v("composer create-project escolallms/api wellms")])]),e._v(" "),o("li",[e._v("That creates a project in "),o("code",[e._v("wellms")]),e._v(" folder")])]),e._v(" "),o("h3",{attrs:{id:"option-2-cloning-repo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#option-2-cloning-repo"}},[e._v("#")]),e._v(" Option 2. Cloning repo")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("git clone git@github.com:EscolaLMS/API.git")])]),e._v(" "),o("li",[e._v("That creates a project in "),o("code",[e._v("wellms")]),e._v(" folder")])]),e._v(" "),o("h3",{attrs:{id:"using-makefile-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-makefile-commands"}},[e._v("#")]),e._v(" Using "),o("code",[e._v("makefile")]),e._v(" commands")]),e._v(" "),o("p",[e._v("Inside the folder run "),o("code",[e._v("make init")])]),e._v(" "),o("p",[e._v("There are some assumptions to make command above works file")]),e._v(" "),o("ul",[o("li",[e._v("you have "),o("code",[e._v("docker")]),e._v(" and "),o("code",[e._v("docker-compose")])]),e._v(" "),o("li",[e._v("ports defined in "),o("a",{attrs:{href:"https://github.com/EscolaLMS/API/blob/develop/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose.yml"),o("OutboundLink")],1),e._v(" are free")])]),e._v(" "),o("p",[e._v("This should install you default application with the following credentials")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Role")]),e._v(" "),o("th",[e._v("Email ID")]),e._v(" "),o("th",[e._v("Password")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Admin")]),e._v(" "),o("td",[e._v("admin@escolalms.com")]),e._v(" "),o("td",[e._v("secret")])]),e._v(" "),o("tr",[o("td",[e._v("Tutor")]),e._v(" "),o("td",[e._v("tutor@escolalms.com")]),e._v(" "),o("td",[e._v("secret")])]),e._v(" "),o("tr",[o("td",[e._v("Student")]),e._v(" "),o("td",[e._v("student@escolalms.com")]),e._v(" "),o("td",[e._v("secret")])])])]),e._v(" "),o("p",[e._v("Application will be accessible on "),o("a",{attrs:{href:"http://localhost:1001",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:1001"),o("OutboundLink")],1),e._v("\nYou should see API documentation (Swagger UI) at "),o("a",{attrs:{href:"http://localhost:1001/api/documentation#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:1001/api/documentation#/"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Now you can add your code as you could in standard "),o("a",{attrs:{href:"https://laravel.com/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Application"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"without-docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#without-docker"}},[e._v("#")]),e._v(" Without "),o("code",[e._v("docker")])]),e._v(" "),o("ol",[o("li",[e._v("Clone repo https://github.com/EscolaLMS/API on your machine")]),e._v(" "),o("li",[e._v("Create your "),o("code",[e._v(".env")]),e._v(" file base on the example "),o("a",{attrs:{href:"https://github.com/EscolaLMS/API/blob/develop/.env.example",target:"_blank",rel:"noopener noreferrer"}},[e._v(".env.example"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Follow the installation like standard "),o("a",{attrs:{href:"https://laravel.com/docs/9.x/installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Application installation"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Configure "),o("a",{attrs:{href:"https://laravel.com/docs/9.x/queues",target:"_blank",rel:"noopener noreferrer"}},[e._v("queues"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://laravel.com/docs/9.x/scheduling",target:"_blank",rel:"noopener noreferrer"}},[e._v("scheduling"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Add "),o("code",[e._v("CORS")]),e._v(" definition to your server (those are static files that are not handled by Laravel) for h5p files, see "),o("a",{attrs:{href:"https://github.com/EscolaLMS/H5P#cors",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/EscolaLMS/H5P#cors"),o("OutboundLink")],1)])]),e._v(" "),o("h3",{attrs:{id:"seeding-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#seeding-content"}},[e._v("#")]),e._v(" Seeding content")]),e._v(" "),o("ul",[o("li",[e._v("the only "),o("code",[e._v("essential")]),e._v(" seeder is "),o("a",{attrs:{href:"https://github.com/EscolaLMS/API/blob/develop/database/seeds/PermissionsSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("database/seeds/PermissionsSeeder.php"),o("OutboundLink")],1),e._v(" which seeds all the "),o("a",{attrs:{href:"https://spatie.be/docs/laravel-permission/v5/introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("permissions"),o("OutboundLink")],1),e._v(" required by packages")]),e._v(" "),o("li",[e._v("if you use the above you need to create at least one admin. "),o("a",{attrs:{href:"https://github.com/EscolaLMS/Auth",target:"_blank",rel:"noopener noreferrer"}},[e._v("See commands sections in Auth package"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("you can seed all the mock data with default "),o("a",{attrs:{href:"https://github.com/EscolaLMS/API/blob/develop/database/seeds/DatabaseSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("DatabaseSeeder"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);