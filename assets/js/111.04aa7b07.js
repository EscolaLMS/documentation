(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{391:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"payments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payments"}},[t._v("#")]),t._v(" Payments")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://escolalms.github.io/payments/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/payments",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Files/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/payments/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/payments/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/payments",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/dt/escolalms/payments",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/payments",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/v/escolalms/payments",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://packagist.org/packages/escolalms/payments",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/packagist/l/escolalms/payments",alt:"downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://codeclimate.com/github/EscolaLMS/payments/maintainability",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/e42a94f20c76b719fc38/maintainability",alt:"Maintainability"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://dashboard.stryker-mutator.io/reports/github.com/EscolaLMS/payments/main",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FEscolaLMS%2Fpayments%2Fmain",alt:"Mutation testing badge"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),a("p",[t._v("This package lets you create Payments and process them using integrations with external payment providers (gateways).")]),t._v(" "),a("h2",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),a("ul",[a("li",[t._v("Stripe integration is based on "),a("code",[t._v("league/omnipay")]),t._v(" and "),a("code",[t._v("omnipay/stripe")]),t._v(" packages.")]),t._v(" "),a("li",[t._v("Przelewy24 integration is based on "),a("code",[t._v("mnastalski/przelewy24-php")]),t._v(" package.")]),t._v(" "),a("li",[t._v("Optional integration with "),a("code",[t._v("escolalms/settings")]),t._v(" package enables changing payment gateway api keys & secrets using Settings API (and Admin Panel).")])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("composer require escolalms/payments")])]),t._v(" "),a("li",[a("code",[t._v("php artisan migrate")])]),t._v(" "),a("li",[a("code",[t._v('php artisan db:seed --class="EscolaLms\\Cart\\Database\\Seeders\\CartPermissionSeeder"')])])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h3",{attrs:{id:"facades"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#facades"}},[t._v("#")]),t._v(" Facades")]),t._v(" "),a("h4",{attrs:{id:"payments-facade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payments-facade"}},[t._v("#")]),t._v(" Payments Facade")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("EscolaLms\\Payments\\Facades\\Payments")]),t._v(" for starting payment processing.\nYou can create PaymentProcessor` either from a model using Payable trait or from precreated Payment object.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Dtos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PaymentMethodDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Cart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Cart must implement Payable interface and use Payable trait")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentMethodDto")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateFromRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$processor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Payments")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("processPayment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$processor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("purchase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will emit PaymentPaid event on success")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentStatus")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PAID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"paymentgateway-facade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paymentgateway-facade"}},[t._v("#")]),t._v(" PaymentGateway Facade")]),t._v(" "),a("p",[t._v("With "),a("code",[t._v("EscolaLms\\Payments\\Facades\\PaymentGateway")]),t._v(" you can call payment provider gateways directly.")]),t._v(" "),a("p",[t._v("For existing payment you can for example do:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Dtos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PaymentMethodDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PaymentGateway")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Payment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentMethodDto")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateFromRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentDto")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentDto")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateFromPayment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or you can create it manually")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentGateway")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("purchase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will use default payment driver")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Important")]),t._v(": This will not save "),a("code",[t._v("Payment")]),t._v(" object.")]),t._v(" "),a("p",[t._v("To use specific driver, you can call")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentGateway")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'stripe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("purchase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"available-payment-drivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-payment-drivers"}},[t._v("#")]),t._v(" Available payment drivers")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("stripe")]),t._v(" (using "),a("code",[t._v("Stripe Payment Intent")]),t._v(")")]),t._v(" "),a("li",[a("strong",[t._v("free")])]),t._v(" "),a("li",[a("strong",[t._v("przelewy24")])]),t._v(" "),a("li",[t._v("TODO: "),a("em",[t._v("stripe-checkout")])])]),t._v(" "),a("h3",{attrs:{id:"payable-trait-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payable-trait-interface"}},[t._v("#")]),t._v(" Payable Trait & Interface")]),t._v(" "),a("p",[a("code",[t._v("Payable")]),t._v(" trait and interface are the core of this package, enabling simplified calling of "),a("code",[t._v("PaymentsService")]),t._v(" and "),a("code",[t._v("GatewayManager")]),t._v(".\nWhen you include it in your model that represents a "),a("code",[t._v("Payable")]),t._v(" (for example "),a("code",[t._v("Cart")]),t._v(" or "),a("code",[t._v("Order")]),t._v(" or "),a("code",[t._v("Product")]),t._v(") you can begin payment processing for that "),a("code",[t._v("Payable")]),t._v(" by calling "),a("code",[t._v("$payable->process()")]),t._v("\nwhich calls "),a("code",[t._v("Payments::processPayable($this)")]),t._v(" and automatically creates a "),a("code",[t._v("Payment")]),t._v(" and returns a "),a("code",[t._v("PaymentProcessor")]),t._v(" instance for that Payment.")]),t._v(" "),a("p",[a("code",[t._v("EscolaLms\\Cart")]),t._v(" package uses this trait and interface in "),a("code",[t._v("EscolaLms\\Cart\\Models\\Order")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"payment-processor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-processor"}},[t._v("#")]),t._v(" Payment Processor")]),t._v(" "),a("p",[a("code",[t._v("EscolaLms\\Payments\\Entities\\PaymentProcessor")]),t._v(" is a special class which wraps around "),a("code",[t._v("Payment")]),t._v("\nand contains functionality related to processing that payment, for example generating links to payment gateways, automatically setting payment status after purchase, emiting events related to payment status, etc.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Dtos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PaymentMethodDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PaymentProcessor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EscolaLms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Payment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Payment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PaymentMethodDto")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instantiateFromRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$processor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PaymentProcessor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$payment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// instead of using Payments facade")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$processor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("purchase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$paymentMethodDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("PaymentProcessor")]),t._v(" automatically selects "),a("code",[t._v("free")]),t._v(" driver when payment amount equals 0.")]),t._v(" "),a("h3",{attrs:{id:"payment-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-model"}},[t._v("#")]),t._v(" Payment Model")]),t._v(" "),a("p",[t._v("This package defines a "),a("code",[t._v("EscolaLms\\Payments\\Models\\Payment")]),t._v(" which contains all data abount given payment required for payment gateways to work.")]),t._v(" "),a("h2",{attrs:{id:"endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[t._v("#")]),t._v(" Endpoints")]),t._v(" "),a("p",[t._v("All the endpoints are defined in "),a("a",{attrs:{href:"https://escolalms.github.io/payments/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/documentation-swagger-green",alt:"swagger"}}),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),a("p",[t._v("Run "),a("code",[t._v("./vendor/bin/phpunit")]),t._v(" to run tests. See "),a("a",{attrs:{href:"https://github.com/EscolaLMS/payments/tree/main/tests/Mocks/Payable.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("tests/Mocks/Payable"),a("OutboundLink")],1),t._v(" as an example how a Payable is defined.")]),t._v(" "),a("p",[t._v("Test details: "),a("a",{attrs:{href:"https://codecov.io/gh/EscolaLMS/payments",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codecov.io/gh/EscolaLMS/Files/branch/main/graph/badge.svg?token=NRAN4R8AGZ",alt:"codecov"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/EscolaLMS/payments/actions/workflows/test.yml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/EscolaLMS/payments/actions/workflows/test.yml/badge.svg",alt:"phpunit"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("EscolaLms\\Payments\\Events\\PaymentCancelled")]),t._v(" - - emited after payment processing is cancelled (by user action or possibly by timeout sent from payment gateway)")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Payments\\Events\\PaymentFailed")]),t._v(" - emited after payment has failed (payment gateway returns error)")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Payments\\Events\\PaymentRegistered")]),t._v(" - emited when new Payment is created")]),t._v(" "),a("li",[a("code",[t._v("EscolaLms\\Payments\\Events\\PaymentSuccess")]),t._v(" - emited when payment gateway returns success")])]),t._v(" "),a("h2",{attrs:{id:"listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listeners"}},[t._v("#")]),t._v(" Listeners")]),t._v(" "),a("p",[t._v("No Listeners are defined in this package.")]),t._v(" "),a("h2",{attrs:{id:"how-to-use-this-package-on-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-this-package-on-frontend"}},[t._v("#")]),t._v(" How to use this package on Frontend")]),t._v(" "),a("h3",{attrs:{id:"admin-panel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[t._v("#")]),t._v(" Admin Panel")]),t._v(" "),a("h4",{attrs:{id:"left-menu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#left-menu"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Left Menu")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/payments/main/docs/menu.png",alt:"Admin panel menu",title:"Admin panel menu"}})]),t._v(" "),a("h4",{attrs:{id:"list-of-payments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-payments"}},[t._v("#")]),t._v(" "),a("strong",[t._v("List of Payments")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/payments/main/docs/list.png",alt:"List of Payments",title:"List of Payments"}})]),t._v(" "),a("h2",{attrs:{id:"permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[t._v("#")]),t._v(" Permissions")]),t._v(" "),a("p",[t._v("Permissions are defined in "),a("a",{attrs:{href:"https://github.com/EscolaLMS/payments/tree/main/src/Enums/CartPermissionsEnum.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enum"),a("OutboundLink")],1),t._v(" and seeded in "),a("a",{attrs:{href:"database/seeders/CartPermissionSeeder.php"}},[t._v("Seeder")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"roadmap-todo-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roadmap-todo-troubleshooting"}},[t._v("#")]),t._v(" Roadmap. Todo. Troubleshooting")]),t._v(" "),a("ul",[a("li",[t._v("???")])])])}),[],!1,null,null,null);a.default=n.exports}}]);