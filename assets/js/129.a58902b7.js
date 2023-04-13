(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{422:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"auth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auth"}},[t._v("#")]),t._v(" Auth")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://escolalms.github.io/Auth/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Auth",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Auth/branch/main/graph/badge.svg?token=O91FHNKI6R",alt:"codecov"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Core/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.com/EscolaLMS/Auth/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/auth",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/auth",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/auth",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/auth",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/auth",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/auth",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Auth/maintainability",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/b8df1362d2c9363e6e6e/maintainability",alt:"Maintainability"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://dashboard.stryker-mutator.io/reports/github.com/EscolaLMS/Auth/main",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FEscolaLMS%2FAuth%2Fmain",alt:"Mutation testing badge"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"what-does-it-do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[t._v("#")]),t._v(" What does it do")]),t._v(" "),s("p",[t._v("Package for user authentication. In addition, the package includes:")]),t._v(" "),s("ul",[s("li",[t._v("user management,")]),t._v(" "),s("li",[t._v("group management,")]),t._v(" "),s("li",[t._v("profile management,")]),t._v(" "),s("li",[t._v("registration.")])]),t._v(" "),s("h2",{attrs:{id:"installing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("composer require escolalms/auth")])]),t._v(" "),s("li",[s("code",[t._v("php artisan migrate")])]),t._v(" "),s("li",[s("code",[t._v('php artisan db:seed --class="EscolaLms\\Auth\\Database\\Seeders\\AuthPermissionSeeder"')])])]),t._v(" "),s("p",[t._v("Optional:")]),t._v(" "),s("ul",[s("li",[t._v("Run command "),s("code",[t._v("escolalms:admin")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("escolalms:admin")]),t._v(" - create account with role admin")])]),t._v(" "),s("h2",{attrs:{id:"database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("category_user")]),t._v(" - Table is used to store the user categories.")]),t._v(" "),s("li",[s("code",[t._v("groups")]),t._v(" - Table for storing groups.")]),t._v(" "),s("li",[s("code",[t._v("group_user")]),t._v(" - Table for storing groups assigned to the user.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("User 1 -> n Categories\nUser 1 -> n Groups\n")])])]),s("h2",{attrs:{id:"endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),s("p",[t._v("All the endpoints are defined in "),s("a",{attrs:{href:"https://escolalms.github.io/Auth/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),s("p",[t._v("Run "),s("code",[t._v("./vendor/bin/phpunit")]),t._v(" to run tests.\n"),s("a",{attrs:{href:"https://github.com/EscolaLMS/Core/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.com/EscolaLMS/Auth/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Auth",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Auth/branch/main/graph/badge.svg?token=O91FHNKI6R",alt:"codecov"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("AccountBlocked")]),t._v(" - Event is dispatched after blocking the user's account ("),s("code",[t._v("is_active=false")]),t._v(").")]),t._v(" "),s("li",[s("code",[t._v("AccountConfirmed")]),t._v(" - Event is dispatched after the user verifies the account.")]),t._v(" "),s("li",[s("code",[t._v("AccountDeleted")]),t._v(" - Event is dispatched after deleting the user.")]),t._v(" "),s("li",[s("code",[t._v("AccountMustBeEnableByAdmin")]),t._v(" - Event is dispatched when the user registers and "),s("code",[t._v("Config::get('escola_auth.account_must_be_enabled_by_admin') === SettingStatusEnum::ENABLED")])]),t._v(" "),s("li",[s("code",[t._v("AccountRegistered")]),t._v(" - Event is dispatched after the account is registered.")]),t._v(" "),s("li",[s("code",[t._v("ForgotPassword")]),t._v(" - Event is dispatched when a password reset request is sent.")]),t._v(" "),s("li",[s("code",[t._v("Login")]),t._v(" - Event is dispatched on successful login.")]),t._v(" "),s("li",[s("code",[t._v("Logout")]),t._v(" - Event is dispatched after logout.")]),t._v(" "),s("li",[s("code",[t._v("PasswordChanged")]),t._v(" - Event is dispatched after the password changed.")]),t._v(" "),s("li",[s("code",[t._v("ResetPassword")]),t._v(" - Event is dispatched after resetting the password.")]),t._v(" "),s("li",[s("code",[t._v("UserAddedToGroup")]),t._v(" - Event is dispatched after adding the user to the group.")]),t._v(" "),s("li",[s("code",[t._v("UserRemovedFromGroup")]),t._v(" - Event is dispatched after removing the user from the group.")])]),t._v(" "),s("h2",{attrs:{id:"listeners"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[t._v("#")]),t._v(" Listeners")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("CreatePasswordResetToken")]),t._v(" - The listener listens for the ForgotPassword event and executes the following method.")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("handle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("ForgotPassword")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("void")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_callable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRunEventForgotPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRunEventForgotPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("userRepository")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'password_reset_token'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Str")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("refresh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResetPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("password_reset_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getReturnUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This is useful if you are using "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Templates-Email",target:"_blank",rel:"noopener noreferrer"}},[t._v("TemplateEmail"),s("OutboundLink")],1),t._v(" and you don't want to send the default e-mails.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("CreatePasswordResetToken")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRunEventForgotPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$templateRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("TemplateRepositoryContract")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("empty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$templateRepository")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findTemplateDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("ForgotPassword")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("EmailChannel")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("SendEmailVerificationNotification")]),t._v(" - The listener listens for the AccountRegistered event and executes the following method.")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("handle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Registered")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_callable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRunEventEmailVerification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRunEventEmailVerification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MustVerifyEmail")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasVerifiedEmail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendEmailVerificationNotification")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"how-to-use-this-on-frontend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-on-frontend"}},[t._v("#")]),t._v(" How to use this on frontend")]),t._v(" "),s("h3",{attrs:{id:"admin-panel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[t._v("#")]),t._v(" Admin panel")]),t._v(" "),s("p",[s("strong",[t._v("List of users")]),t._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Auth/main/docs/list_of_users.png",alt:"List of users",title:"List of users"}})]),t._v(" "),s("p",[s("strong",[t._v("Creating/editing user")]),t._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Auth/main/docs/user_form.png",alt:"Creating/editing user",title:"User form"}})]),t._v(" "),s("p",[s("strong",[t._v("User categories")]),t._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Auth/main/docs/user_categories.png",alt:"User categories",title:"User categories"}})]),t._v(" "),s("p",[s("strong",[t._v("List of groups")]),t._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Auth/main/docs/list_of_groups.png",alt:"List of groups",title:"List of groups"}})]),t._v(" "),s("p",[s("strong",[t._v("Creating/editing group")]),t._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Auth/main/docs/group_form.png",alt:"Creating/editing group",title:"Creating/editing group"}})]),t._v(" "),s("p",[s("strong",[t._v("My profile")]),t._v(" "),s("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/Auth/main/docs/my_profile.png",alt:"My profile",title:"My profile"}})]),t._v(" "),s("h2",{attrs:{id:"permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),s("p",[t._v("Permissions are defined in "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Auth/tree/main/database/seeders/AuthPermissionSeeder.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("seeder"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);