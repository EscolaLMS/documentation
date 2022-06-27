(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{427:function(t,s,a){t.exports=a.p+"assets/img/list_of_users.d1c5a7cc.png"},428:function(t,s,a){t.exports=a.p+"assets/img/user_form.6200502d.png"},429:function(t,s,a){t.exports=a.p+"assets/img/user_categories.cf5e969f.png"},430:function(t,s,a){t.exports=a.p+"assets/img/list_of_groups.ace278cb.png"},431:function(t,s,a){t.exports=a.p+"assets/img/group_form.4cd70ade.png"},432:function(t,s,a){t.exports=a.p+"assets/img/my_profile.26afe26f.png"},568:function(t,s,a){"use strict";a.r(s);var e=a(65),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"auth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auth"}},[t._v("#")]),t._v(" Auth")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://escolalms.github.io/Auth/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Auth",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Auth/branch/main/graph/badge.svg?token=O91FHNKI6R",alt:"codecov"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Core/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/EscolaLMS/Auth/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/auth",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/auth",alt:"downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/auth",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/auth",alt:"downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://packagist.org/packages/escolalms/auth",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/auth",alt:"downloads"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Auth/maintainability",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/b8df1362d2c9363e6e6e/maintainability",alt:"Maintainability"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"what-does-it-do"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[t._v("#")]),t._v(" What does it do")]),t._v(" "),e("p",[t._v("Package for user authentication. In addition, the package includes:")]),t._v(" "),e("ul",[e("li",[t._v("user management,")]),t._v(" "),e("li",[t._v("group management,")]),t._v(" "),e("li",[t._v("profile management,")]),t._v(" "),e("li",[t._v("registration.")])]),t._v(" "),e("h2",{attrs:{id:"installing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("composer require escolalms/auth")])]),t._v(" "),e("li",[e("code",[t._v("php artisan migrate")])]),t._v(" "),e("li",[e("code",[t._v('php artisan db:seed --class="EscolaLms\\Auth\\Database\\Seeders\\AuthPermissionSeeder"')])])]),t._v(" "),e("h2",{attrs:{id:"database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("category_user")]),t._v(" - Table is used to store the user categories.")]),t._v(" "),e("li",[e("code",[t._v("groups")]),t._v(" - Table for storing groups.")]),t._v(" "),e("li",[e("code",[t._v("group_user")]),t._v(" - Table for storing groups assigned to the user.")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("User 1 -> n Categories\nUser 1 -> n Groups\n")])])]),e("h2",{attrs:{id:"endpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),e("p",[t._v("All the endpoints are defined in "),e("a",{attrs:{href:"https://escolalms.github.io/Auth/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),e("p",[t._v("Run "),e("code",[t._v("./vendor/bin/phpunit")]),t._v(" to run tests.\n"),e("a",{attrs:{href:"https://github.com/EscolaLMS/Core/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/EscolaLMS/Auth/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Auth",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Auth/branch/main/graph/badge.svg?token=O91FHNKI6R",alt:"codecov"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("AccountBlocked")]),t._v(" - Event is dispatched after blocking the user's account ("),e("code",[t._v("is_active=false")]),t._v(").")]),t._v(" "),e("li",[e("code",[t._v("AccountConfirmed")]),t._v(" - Event is dispatched after the user verifies the account.")]),t._v(" "),e("li",[e("code",[t._v("AccountDeleted")]),t._v(" - Event is dispatched after deleting the user.")]),t._v(" "),e("li",[e("code",[t._v("AccountMustBeEnableByAdmin")]),t._v(" - Event is dispatched when the user registers and "),e("code",[t._v("Config::get('escola_auth.account_must_be_enabled_by_admin') === SettingStatusEnum::ENABLED")])]),t._v(" "),e("li",[e("code",[t._v("AccountRegistered")]),t._v(" - Event is dispatched after the account is registered.")]),t._v(" "),e("li",[e("code",[t._v("ForgotPassword")]),t._v(" - Event is dispatched when a password reset request is sent.")]),t._v(" "),e("li",[e("code",[t._v("Login")]),t._v(" - Event is dispatched on successful login.")]),t._v(" "),e("li",[e("code",[t._v("Logout")]),t._v(" - Event is dispatched after logout.")]),t._v(" "),e("li",[e("code",[t._v("PasswordChanged")]),t._v(" - Event is dispatched after the password changed.")]),t._v(" "),e("li",[e("code",[t._v("ResetPassword")]),t._v(" - Event is dispatched after resetting the password.")]),t._v(" "),e("li",[e("code",[t._v("UserAddedToGroup")]),t._v(" - Event is dispatched after adding the user to the group.")]),t._v(" "),e("li",[e("code",[t._v("UserRemovedFromGroup")]),t._v(" - Event is dispatched after removing the user from the group.")])]),t._v(" "),e("h2",{attrs:{id:"listeners"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[t._v("#")]),t._v(" Listeners")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("CreatePasswordResetToken")]),t._v(" - The listener listens for the ForgotPassword event and executes the following method.")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("handle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("ForgotPassword")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("void")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_callable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRunEventForgotPassword")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRunEventForgotPassword")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUser")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("userRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'password_reset_token'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Str")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getKey")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("refresh")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResetPassword")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("password_reset_token")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getReturnUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This is useful if you are using "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Templates-Email",target:"_blank",rel:"noopener noreferrer"}},[t._v("TemplateEmail"),e("OutboundLink")],1),t._v(" and you don't want to send the default e-mails.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("CreatePasswordResetToken")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRunEventForgotPassword")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$templateRepository")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("TemplateRepositoryContract")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("empty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$templateRepository")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findTemplateDefault")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("ForgotPassword")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("EmailChannel")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v("SendEmailVerificationNotification")]),t._v(" - The listener listens for the AccountRegistered event and executes the following method.")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("handle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Registered")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_callable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRunEventEmailVerification")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRunEventEmailVerification")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("user")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MustVerifyEmail")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasVerifiedEmail")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendEmailVerificationNotification")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"how-to-use-this-on-frontend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-on-frontend"}},[t._v("#")]),t._v(" How to use this on frontend")]),t._v(" "),e("h3",{attrs:{id:"admin-panel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[t._v("#")]),t._v(" Admin panel")]),t._v(" "),e("p",[e("strong",[t._v("List of users")]),t._v(" "),e("img",{attrs:{src:a(427),alt:"List of users",title:"List of users"}})]),t._v(" "),e("p",[e("strong",[t._v("Creating/editing user")]),t._v(" "),e("img",{attrs:{src:a(428),alt:"Creating/editing user",title:"User form"}})]),t._v(" "),e("p",[e("strong",[t._v("User categories")]),t._v(" "),e("img",{attrs:{src:a(429),alt:"User categories",title:"User categories"}})]),t._v(" "),e("p",[e("strong",[t._v("List of groups")]),t._v(" "),e("img",{attrs:{src:a(430),alt:"List of groups",title:"List of groups"}})]),t._v(" "),e("p",[e("strong",[t._v("Creating/editing group")]),t._v(" "),e("img",{attrs:{src:a(431),alt:"Creating/editing group",title:"Creating/editing group"}})]),t._v(" "),e("p",[e("strong",[t._v("My profile")]),t._v(" "),e("img",{attrs:{src:a(432),alt:"My profile",title:"My profile"}})]),t._v(" "),e("h2",{attrs:{id:"permissions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),e("p",[t._v("Permissions are defined in "),e("a",{attrs:{href:"https://github.com/EscolaLMS/Auth/blob/main/database/seeders/AuthPermissionSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("seeder"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);