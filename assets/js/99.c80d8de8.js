(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{379:function(e,a,t){"use strict";t.r(a);var s=t(14),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"headless-h5p-laravel-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headless-h5p-laravel-api"}},[e._v("#")]),e._v(" Headless H5P Laravel API")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://escolalms.github.io/H5P/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/H5P",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/H5P/branch/main/graph/badge.svg?token=ci4VPQbrOI",alt:"codecov"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Core/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/H5P/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/headless-h5p",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/headless-h5p",alt:"downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/headless-h5p",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/headless-h5p",alt:"downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/headless-h5p",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/headless-h5p",alt:"downloads"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/H5P/maintainability",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/6316e8dc93a06d28c6a0/maintainability",alt:"Maintainability"}}),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("p",[e._v("The lib allows headlessly")]),e._v(" "),a("ul",[a("li",[e._v("play all h5p content - exposed all essential data, yet player is needed")]),e._v(" "),a("li",[e._v("edit all h5p content - exposed all essential data, yet editor is needed")]),e._v(" "),a("li",[e._v("CRUD libraries")]),e._v(" "),a("li",[e._v("CRUD content")]),e._v(" "),a("li",[e._v("upload library from "),a("code",[e._v(".h5p")]),e._v(" file")]),e._v(" "),a("li",[e._v("upload content from "),a("code",[e._v(".h5p")]),e._v(" file")])]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://escolalms.github.io/H5P/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger"),a("OutboundLink")],1),e._v(" documented endpoints.")]),e._v(" "),a("p",[e._v("Some "),a("a",{attrs:{href:"https://github.com/EscolaLMS/H5P/tree/main/tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("tests"),a("OutboundLink")],1),e._v(" can also be a great point of start.")]),e._v(" "),a("p",[e._v("To play the content you can use "),a("a",{attrs:{href:"https://github.com/EscolaLMS/H5P-player",target:"_blank",rel:"noopener noreferrer"}},[e._v("EscolaLMS H5P Player"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("composer require escolalms/headless-h5p")])]),e._v(" "),a("li",[a("code",[e._v("php artisan migrate")])]),e._v(" "),a("li",[a("code",[e._v("php artisan h5p:storage-link")]),e._v(" see below")]),e._v(" "),a("li",[e._v('`php db:seed --class="EscolaLms\\HeadlessH5P\\Database\\Seeders\\PermissionTableSeeder" see below')])]),e._v(" "),a("h3",{attrs:{id:"storage-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-links"}},[e._v("#")]),e._v(" Storage links")]),e._v(" "),a("p",[e._v("You need to publish many of files to be availabe as public link.")]),e._v(" "),a("p",[a("code",[e._v("php artisan h5p:storage-link")]),e._v(" which creates a symbolic link from "),a("code",[e._v("storage/app/h5")]),e._v(" and "),a("code",[e._v("vendor/h5p/h5p-core")]),e._v(" and "),a("code",[e._v("vendor/h5p/h5p-editor")]),e._v(" to be accesible to public, as follows")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public_path('h5p') => storage_path('app/h5p'),\npublic_path('h5p-core') => base_path().'vendor/h5p/h5p-core',\npublic_path('h5p-editor') => base_path().'vendor/h5p/h5p-editor',\n")])])]),a("h3",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[e._v("#")]),e._v(" Cors")]),e._v(" "),a("p",[e._v("All the endpoints need to be accesible from other domains, so "),a("a",{attrs:{href:"https://laravel.com/docs/8.x/routing#cors",target:"_blank",rel:"noopener noreferrer"}},[e._v("CORS"),a("OutboundLink")],1),e._v(" must be properlly set.")]),e._v(" "),a("p",[e._v("Except of endpoints assets must expose CORS headers as well. You achive that by setting Apache/Nginx/Caddy/Whatever settings - below is example for Nginx for wildcard global access.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("location ~* \\.(eot|ttf|woff|woff2|jpg|jpeg|gif|png|wav|mp3|mp4|mov|ogg|webv)$ {\n    add_header Access-Control-Allow-Origin *;\n}\n")])])]),a("h3",{attrs:{id:"authorisation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorisation"}},[e._v("#")]),e._v(" Authorisation")]),e._v(" "),a("p",[e._v("Most of the endpoints require authorisation, this is possible with laravel passport")]),e._v(" "),a("p",[e._v("There is a "),a("a",{attrs:{href:"https://github.com/EscolaLMS/H5P/blob/main/database/seeders/PermissionTableSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("seeder"),a("OutboundLink")],1),e._v(" to must be run in order to authrize")]),e._v(" "),a("p",[e._v("User model is taken from "),a("a",{attrs:{href:"https://github.com/EscolaLMS/Auth",target:"_blank",rel:"noopener noreferrer"}},[e._v("Auth"),a("OutboundLink")],1),e._v(" package.")]),e._v(" "),a("h3",{attrs:{id:"seeder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seeder"}},[e._v("#")]),e._v(" Seeder")]),e._v(" "),a("p",[e._v("To seed content and library")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('php artisan db:seed --class="\\EscolaLms\\HeadlessH5P\\Database\\Seeders\\ContentLibrarySeeder"\n')])])]),a("p",[e._v("You can seed library and content with build-in seeders as command that are accessible with")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("php artisan h5p:seed")]),e._v(" to add just libraries")]),e._v(" "),a("li",[a("code",[e._v("php artisan h5p:seed --addContent")]),e._v(" to add content with libraries")])]),e._v(" "),a("h2",{attrs:{id:"road-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#road-map"}},[e._v("#")]),e._v(" Road map")]),e._v(" "),a("ul",[a("li",[e._v("rewrite h5p core in a way like "),a("a",{attrs:{href:"https://github.com/lumieducation/lumi",target:"_blank",rel:"noopener noreferrer"}},[e._v("luminare in typescript"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);