(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{393:function(a,s,t){"use strict";t.r(s);var e=t(10),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"create-lms-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-lms-app"}},[a._v("#")]),a._v(" Create LMS APP")]),a._v(" "),s("p",[a._v("This package contains all the resources need to install Wellms Headless LMS from docker-images")]),a._v(" "),s("h2",{attrs:{id:"tl-dr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tl-dr"}},[a._v("#")]),a._v(" TL;DR")]),a._v(" "),s("p",[a._v("Run "),s("code",[a._v("npx --package=@escolalms/cla lms")])]),a._v(" "),s("h2",{attrs:{id:"installation-on-macos-or-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-macos-or-linux"}},[a._v("#")]),a._v(" Installation on MacOs or Linux")]),a._v(" "),s("p",[a._v("Below are instruction on how to install Wellms on MacOs or Linux.\nWindows with WSL should work fine, yet there might be some issues")]),a._v(" "),s("ul",[s("li",[a._v("please "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Create-LMS-App/issues/new",target:"_blank",rel:"noopener noreferrer"}},[a._v("do share them"),s("OutboundLink")],1),a._v(" with us.")])]),a._v(" "),s("h2",{attrs:{id:"environmental-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environmental-variables"}},[a._v("#")]),a._v(" Environmental variables")]),a._v(" "),s("h3",{attrs:{id:"laravel-specific-laravel-prefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#laravel-specific-laravel-prefix"}},[a._v("#")]),a._v(" Laravel specific. "),s("code",[a._v("LARAVEL_PREFIX")])]),a._v(" "),s("p",[a._v("After container is initialized, it "),s("a",{attrs:{href:"https://github.com/EscolaLMS/API/blob/develop/docker/envs/envs.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("looks for variables"),s("OutboundLink")],1),a._v(" with this prefix then replace current ones in "),s("code",[a._v(".env")]),a._v(" file")]),a._v(" "),s("p",[a._v("Example")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("LARAVEL_APP_ENV")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"production"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("LARAVEL_APP_KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"base64:vw6G2uP8LV22haEERtzr5yDCBraLrMwbxlbSJDA97uk="')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("LARAVEL_APP_DEBUG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"false"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("LARAVEL_APP_LOG")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"errorlog"')]),a._v("\n")])])]),s("p",[a._v("will result in")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Replacing .env "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" APP_ENV from "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" to production\nReplacing .env "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" APP_KEY from base64:pveos6JL8iCwO3MbzoyQpNx6TETMYuUpfZ18CDKl6Cw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" to base64:vw6G2uP8LV22haEERtzr5yDCBraLrMwbxlbSJDA97uk"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\nReplacing .env "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" APP_DEBUG from "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" to "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\nReplacing .env "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" APP_LOG_LEVEL from debug to debug\n")])])]),s("h3",{attrs:{id:"urls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urls"}},[a._v("#")]),a._v(" URLs")]),a._v(" "),s("p",[a._v("You can use this following variables when calling bash or makefile task")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${APP_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("api.wellms.localhost}")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADMIN_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${ADMIN_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("admin.wellms.localhost}")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FRONT_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${FRONT_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app.wellms.localhost}")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MAILHOG_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MAILHOG_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mailhog.wellms.localhost}")]),a._v('"')]),a._v("\n")])])]),s("p",[a._v("Example")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://my-super-api.localhost "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" init\n")])])]),s("p",[a._v("or")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://my-super-api.localhost "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" k8s-rebuild\n")])])]),s("h2",{attrs:{id:"kubernetes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[a._v("#")]),a._v(" Kubernetes")]),a._v(" "),s("h3",{attrs:{id:"without-helm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#without-helm"}},[a._v("#")]),a._v(" Without "),s("code",[a._v("helm")])]),a._v(" "),s("p",[a._v("All "),s("code",[a._v("yaml")]),a._v(" file templates are inside "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Create-LMS-App/tree/main/k8s/tpls",target:"_blank",rel:"noopener noreferrer"}},[s("code",[a._v("k8s/tpls")]),s("OutboundLink")],1),a._v(" folder")]),a._v(" "),s("p",[a._v("You can either generate yaml by calling bash script "),s("code",[a._v("cd k8s && bash generate.sh")]),a._v("\nor by calling makefile job `make\nor but setting all config manually")]),a._v(" "),s("p",[a._v("Once "),s("code",[a._v("yaml")]),a._v(" files are in "),s("code",[a._v("k8s")]),a._v(" folder run "),s("code",[a._v("kubectl apply -f k8s")])]),a._v(" "),s("h4",{attrs:{id:"custom-domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-domain"}},[a._v("#")]),a._v(" Custom domain")]),a._v(" "),s("p",[a._v("Those are env variables you can set while running generate")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${APP_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("api.wellms.localhost}")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADMIN_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${ADMIN_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("admin.wellms.localhost}")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FRONT_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${FRONT_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("app.wellms.localhost}")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MAILHOG_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MAILHOG_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":-")]),a._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mailhog.wellms.localhost}")]),a._v('"')]),a._v("\n")])])]),s("h3",{attrs:{id:"first-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-run"}},[a._v("#")]),a._v(" First run")]),a._v(" "),s("p",[a._v("Required dependencies:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("docker")])]),a._v(" "),s("li",[s("code",[a._v("k8s")])]),a._v(" "),s("li",[s("code",[a._v("minikube")])]),a._v(" "),s("li",[s("code",[a._v("k9s")]),a._v(" or whatever to view your kubernetes resources (e.g. "),s("code",[a._v("Lens")]),a._v(")")])]),a._v(" "),s("h4",{attrs:{id:"mac-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac-os"}},[a._v("#")]),a._v(" Mac OS")]),a._v(" "),s("p",[a._v("Run makefile commands:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("make minikube-init")])]),a._v(" "),s("li",[s("code",[a._v("make k8s-init")])]),a._v(" "),s("li",[s("code",[a._v("make minikube-tunnel")])]),a._v(" "),s("li",[a._v("wait a minute and enjoy the Wellms 😃")])]),a._v(" "),s("h3",{attrs:{id:"rebuild-existing-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rebuild-existing-instance"}},[a._v("#")]),a._v(" Rebuild existing instance")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("make minikube-force-delete")])]),a._v(" "),s("li",[s("code",[a._v("make k8s-rebuild")])]),a._v(" "),s("li",[s("code",[a._v("make minikube-tunnel")])])]),a._v(" "),s("h4",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("p",[s("code",[a._v("TODO")])]),a._v(" "),s("h3",{attrs:{id:"with-helm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#with-helm"}},[a._v("#")]),a._v(" With "),s("code",[a._v("helm")])]),a._v(" "),s("p",[s("code",[a._v("WIP")])]),a._v(" "),s("h3",{attrs:{id:"available-wellms-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-wellms-resources"}},[a._v("#")]),a._v(" Available Wellms resources:")]),a._v(" "),s("ul",[s("li",[a._v("API "),s("code",[a._v("api.wellms.localhost")])]),a._v(" "),s("li",[a._v("Front app "),s("code",[a._v("app.wellms.localhost")])]),a._v(" "),s("li",[a._v("Admin panel "),s("code",[a._v("admin.wellms.localhost")])]),a._v(" "),s("li",[a._v("Mailhog "),s("code",[a._v("mailhog.wellms.localhost")])])]),a._v(" "),s("h2",{attrs:{id:"from-docker-container-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-docker-container-images"}},[a._v("#")]),a._v(" From docker container images")]),a._v(" "),s("p",[a._v("Below are instructions how to install Wellms from [https://hub.docker.com/search?q=escolalms](https://github.com/EscolaLMS/Create-LMS-App/tree/main/docker images) in various ways.")]),a._v(" "),s("h3",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),s("ul",[s("li",[a._v("you have "),s("code",[a._v("docker")]),a._v(" installed")]),a._v(" "),s("li",[a._v("port 80 is free")])]),a._v(" "),s("h3",{attrs:{id:"installation-from-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-script"}},[a._v("#")]),a._v(" Installation from script")]),a._v(" "),s("p",[a._v("Run "),s("code",[a._v("npx --package=@escolalms/cla lms")])]),a._v(" "),s("h3",{attrs:{id:"installation-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-source"}},[a._v("#")]),a._v(" Installation from source")]),a._v(" "),s("p",[a._v("Clone this repository then,")]),a._v(" "),s("p",[a._v("in order to launch LMS")]),a._v(" "),s("p",[a._v("run "),s("code",[a._v("make init")]),a._v(" shell script")]),a._v(" "),s("h2",{attrs:{id:"instalation-on-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalation-on-windows"}},[a._v("#")]),a._v(" Instalation on Windows")]),a._v(" "),s("h3",{attrs:{id:"requirements-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements-2"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("WSL")]),a._v(" installed (https://docs.microsoft.com/en-us/windows/wsl/install)")]),a._v(" "),s("li",[s("code",[a._v("Docker")]),a._v(" installed (https://docs.docker.com/desktop/windows/install/) and configured to use WSL")]),a._v(" "),s("li",[s("code",[a._v("make")]),a._v(" available in PowerShell (for example, you can install "),s("code",[a._v("Chocolatey")]),a._v(" https://chocolatey.org/install and then install "),s("code",[a._v("make")]),a._v(" using it)")])]),a._v(" "),s("p",[s("em",[a._v("Recommended")]),a._v(": use Windows Terminal (https://apps.microsoft.com/store/detail/windows-terminal/) and latest PowerShell (https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2)")]),a._v(" "),s("h3",{attrs:{id:"installation-from-source-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-source-2"}},[a._v("#")]),a._v(" Installation from source")]),a._v(" "),s("p",[a._v("The "),s("code",[a._v("source")]),a._v(" means source code of this repository, not the actual Wellms components. Tasks describes below will install docker containers.")]),a._v(" "),s("ul",[s("li",[a._v("Clone this repository")]),a._v(" "),s("li",[a._v("Run "),s("code",[a._v("make init")]),a._v(" in PowerShell (and not in WSL shell, because it will lead to problems with binding Postgres data volume for persistence)")])]),a._v(" "),s("h2",{attrs:{id:"first-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-steps"}},[a._v("#")]),a._v(" First steps")]),a._v(" "),s("p",[a._v("Once everything is installed (takes a while)")]),a._v(" "),s("ul",[s("li",[a._v("http://api.wellms.localhost/api/documentation API Swagger documentation")]),a._v(" "),s("li",[a._v("http://admin.wellms.localhost admin panel credentials username: admin@escola-lms.com password: secret")]),a._v(" "),s("li",[a._v("http://app.wellms.localhost demo panel credentials username: student@escola-lms.com password: secret")]),a._v(" "),s("li",[a._v("http://mailhog.wellms.localhost demo panel credentials username: student@escola-lms.com password: secret")])]),a._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),s("ul",[s("li",[a._v("please create issue in this repository")]),a._v(" "),s("li",[a._v("Windows users - this package is not tested on your system.")])]),a._v(" "),s("h2",{attrs:{id:"custom-domains"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-domains"}},[a._v("#")]),a._v(" Custom domains")]),a._v(" "),s("ul",[s("li",[a._v("Amends "),s("a",{attrs:{href:"Caddyfile"}},[a._v("Caddyfile")]),a._v(" referring to the "),s("a",{attrs:{href:"https://caddyserver.com/docs/caddyfile",target:"_blank",rel:"noopener noreferrer"}},[a._v("official documentation"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("there is a "),s("code",[a._v("credentials.sh")]),a._v(" script to generate config files, example")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("APP_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://api.escolalms.com "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADMIN_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://admin.escolalms.com "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("FRONT_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://demo.escolalms.com ./credentials.sh "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MAILHOG_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://mailhog.escolalms.com "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("REPORTBRO_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://reportbro.escolalms.com ./credentials.sh\n")])])]),s("h2",{attrs:{id:"scaling-php-fpm-horizon-scheduler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scaling-php-fpm-horizon-scheduler"}},[a._v("#")]),a._v(" Scaling php-fpm, Horizon & Scheduler.")]),a._v(" "),s("p",[a._v("By default all 3 threads phpfpm, Laravels Horizon and Scheduler are severed by one "),s("a",{attrs:{href:"https://github.com/EscolaLMS/API/blob/develop/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[a._v("image container"),s("OutboundLink")],1)]),a._v(" "),s("ul",[s("li",[s("code",[a._v("php-fpm")]),a._v(" serve main Laravel REST API (with "),s("a",{attrs:{href:"https://github.com/EscolaLMS/API/tree/develop/docker/conf/nginx",target:"_blank",rel:"noopener noreferrer"}},[a._v("nginx"),s("OutboundLink")],1),a._v(" and "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Create-LMS-App/blob/main/Caddyfile",target:"_blank",rel:"noopener noreferrer"}},[a._v("caddy"),s("OutboundLink")],1),a._v(")")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://laravel.com/docs/9.x/horizon",target:"_blank",rel:"noopener noreferrer"}},[s("code",[a._v("horizon")]),s("OutboundLink")],1),a._v(" is responsible for all "),s("a",{attrs:{href:"https://laravel.com/docs/9.x/queues",target:"_blank",rel:"noopener noreferrer"}},[a._v("queue services"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://laravel.com/docs/9.x/scheduling",target:"_blank",rel:"noopener noreferrer"}},[s("code",[a._v("Task Scheduling")]),s("OutboundLink")],1),a._v(" is responsible for all cron jobs")])]),a._v(" "),s("p",[a._v("All of above including nginx are served by "),s("code",[a._v("supervisor")]),a._v(", definition files are "),s("a",{attrs:{href:"https://github.com/EscolaLMS/API/tree/develop/docker/conf/supervisor",target:"_blank",rel:"noopener noreferrer"}},[a._v("listed here"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("You can scale this by setting each process into separate image container, just by amending "),s("code",[a._v("docker-compose.yml")]),a._v(" in the following way")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" escolalms/api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" escola_lms\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/www/html/storage\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./.env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/www/html/.env\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_PHP_FPM=false\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_NGINX=false\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_HORIZON=true\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_SCHEDULER=true\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("horizon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" escolalms/api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" escola_lms\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/www/html/storage\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./.env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/www/html/.env\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_PHP_FPM=true\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_NGINX=true\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_HORIZON=false\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_SCHEDULER=true\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("scheduler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" escolalms/api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" escola_lms\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/www/html/storage\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./.env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/www/html/.env\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_PHP_FPM=true\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_NGINX=true\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_HORIZON=true\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DISBALE_SCHEDULER=false\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);