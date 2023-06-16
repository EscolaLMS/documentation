(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{458:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jitsi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jitsi"}},[t._v("#")]),t._v(" Jitsi")]),t._v(" "),s("p",[t._v("Jitsi integration")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/Jitsi",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Jitsi/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Jitsi/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.com/EscolaLMS/Jitsi/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/jitsi",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/jitsi",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/jitsi",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/jitsi",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/escolalms/jitsi",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/jitsi",alt:"downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Jitsi/maintainability",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/0fe584397e06ef32618f/maintainability",alt:"Maintainability"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/Jitsi/test_coverage",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/0fe584397e06ef32618f/test_coverage",alt:"Test Coverage"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"what-does-it-do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[t._v("#")]),t._v(" What does it do")]),t._v(" "),s("p",[t._v("This package introduce just a facade that you can use to generate parameters for jitsi player")]),t._v(" "),s("h2",{attrs:{id:"installing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("composer require escolalms/jitsi")])]),t._v(" "),s("li",[t._v("Setup environmental config to point to Jitsi service - use either "),s("code",[t._v("env")]),t._v(" file or "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Settings package"),s("OutboundLink")],1),t._v(" (settings should be visible in the settings endpoint)")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'host'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'JITSI_HOST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'meet-stage.escolalms.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'app_id'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'JITSI_APP_ID'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'meet-id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'secret'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'JITSI_APP_SECRET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'secret'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'package_status'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'enabled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If "),s("code",[t._v("app_id")]),t._v(" or "),s("code",[t._v("secret")]),t._v(" service will skip "),s("code",[t._v("JWT")]),t._v(" token generation.")]),t._v(" "),s("p",[t._v("Once you provide the above you can generate parameters, example from tinker")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EscolaLms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Jitsi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Jitsi")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChannelData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"czesc ziomku"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'logoImageUrl'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'https://escola.pl/_next/image?url=%2Fimages%2Flogo-escola.svg&w=3840&q=75'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("would generate some thing like")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"data"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"domain"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"meet-stage.escolalms.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"roomName"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"czescZiomku"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"configOverwrite"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"logoImageUrl"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"https://escola.pl/_next/image?url=%2Fimages%2Flogo-escola.svg&w=3840&q=75"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"interfaceConfigOverwrite"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"userInfo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"id"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"name"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Osman Kanu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"displayName"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Osman Kanu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"email"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"student@escola-lms.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"moderator"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"jwt"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtZWV0LWlkIiwiYXVkIjoibWVldC1pZCIsInN1YiI6Im1lZXQtc3RhZ2UuZXNjb2xhbG1zLmNvbSIsImV4cCI6MTY0MzY1OTM1NCwicm9vbSI6ImN6ZXNjWmlvbWt1IiwidXNlciI6eyJpZCI6MSwibmFtZSI6Ik9zbWFuIEthbnUiLCJkaXNwbGF5TmFtZSI6Ik9zbWFuIEthbnUiLCJlbWFpbCI6InN0dWRlbnRAZXNjb2xhLWxtcy5jb20iLCJtb2RlcmF0b3IiOmZhbHNlfX0.xnFV-Kk63c3YRADzkSQLz6FP71yfEUO7Q53isFGkv_U"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"host"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"meet-stage.escolalms.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"url"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"https://meet-stage.escolalms.com/czescZiomku?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtZWV0LWlkIiwiYXVkIjoibWVldC1pZCIsInN1YiI6Im1lZXQtc3RhZ2UuZXNjb2xhbG1zLmNvbSIsImV4cCI6MTY0MzY1OTM1NCwicm9vbSI6ImN6ZXNjWmlvbWt1IiwidXNlciI6eyJpZCI6MSwibmFtZSI6Ik9zbWFuIEthbnUiLCJkaXNwbGF5TmFtZSI6Ik9zbWFuIEthbnUiLCJlbWFpbCI6InN0dWRlbnRAZXNjb2xhLWxtcy5jb20iLCJtb2RlcmF0b3IiOmZhbHNlfX0.xnFV-Kk63c3YRADzkSQLz6FP71yfEUO7Q53isFGkv_U"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("pass this object into endpoint that generates jitsi call. You should definitely "),s("a",{attrs:{href:"https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-web-sdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("read the manual before"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Example")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" JitsiMeeting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@jitsi/web-sdk/lib/components/JitsiMeeting"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  IJitsiMeetExternalApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  IJitsiMeetingProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@jitsi/web-sdk/lib/types"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dataFromEndpoint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  domain"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meet-stage.escolalms.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  roomName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"czescZiomku"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  configOverwrite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  interfaceConfigOverwrite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  userInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    displayName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Osman Kanu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    email"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"student@escola-lms.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  jwt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtZWV0LWlkIiwiYXVkIjoibWVldC1pZCIsInN1YiI6Im1lZXQtc3RhZ2UuZXNjb2xhbG1zLmNvbSIsImV4cCI6MTY0MzY1OTM1NCwicm9vbSI6ImN6ZXNjWmlvbWt1IiwidXNlciI6eyJpZCI6MSwibmFtZSI6Ik9zbWFuIEthbnUiLCJkaXNwbGF5TmFtZSI6Ik9zbWFuIEthbnUiLCJlbWFpbCI6InN0dWRlbnRAZXNjb2xhLWxtcy5jb20iLCJtb2RlcmF0b3IiOmZhbHNlfX0.xnFV-Kk63c3YRADzkSQLz6FP71yfEUO7Q53isFGkv_U"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IJitsiMeetingProps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("dataFromEndpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onApiReady")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api ready"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JitsiMeeting")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token spread"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),s("p",[t._v("Run "),s("code",[t._v("./vendor/bin/phpunit --filter 'EscolaLms\\\\Jitsi\\\\Tests'")]),t._v(" to run tests. See "),s("a",{attrs:{href:"https://github.com/EscolaLMS/Jitsi/tree/main/tests",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests"),s("OutboundLink")],1),t._v(" folder as it's quite good staring point as documentation appendix.")])])}),[],!1,null,null,null);s.default=e.exports}}]);