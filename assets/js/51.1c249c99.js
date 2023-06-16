(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{347:function(e,t,a){"use strict";a.r(t);var s=a(10),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"admin-panel-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel-documentation"}},[e._v("#")]),e._v(" Admin panel documentation")]),e._v(" "),t("p",[e._v("Coming soon more documentation on this package")]),e._v(" "),t("p",[e._v("In this section, you can:")]),e._v(" "),t("ul",[t("li",[e._v("Set up global settings between instances.")]),e._v(" "),t("li",[e._v("Set up settings for the admin panel.")]),e._v(" "),t("li",[e._v("Set up settings for each installed package.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/EscolaLMS/settings/assets/214608/0bbaac29-4182-41fe-8b24-c5f511bc296a",alt:"image"}})]),e._v(" "),t("h2",{attrs:{id:"user-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-settings"}},[e._v("#")]),e._v(" User Settings")]),e._v(" "),t("p",[e._v("In this section, you can create your own variables that will be accessible throughout all instances. Some use cases include:")]),e._v(" "),t("ul",[t("li",[e._v("Additional logos.")]),e._v(" "),t("li",[e._v("Cookie consent message.")]),e._v(" "),t("li",[e._v("Texts for all blocks.")]),e._v(" "),t("li",[e._v("Texts that would appear in the header or footer.")])]),e._v(" "),t("p",[e._v('You can easily create or update these variables. Once you press the "New" button, you need to fill in the following fields:')]),e._v(" "),t("ul",[t("li",[e._v("Group: This field is used to group your keys (useful for frontend implementation), so all the keys are grouped under any name you need.")]),e._v(" "),t("li",[e._v("Key: Unique name of your variable.")]),e._v(" "),t("li",[e._v("Enumerable: Whether this value should appear in an endpoint that lists all user settings.")]),e._v(" "),t("li",[e._v("Public: Whether this value is available for everyone, even anonymous users.")])]),e._v(" "),t("p",[e._v("Next, you need to select the type of your variable:")]),e._v(" "),t("ul",[t("li",[e._v("Text")]),e._v(" "),t("li",[e._v("Markdown")]),e._v(" "),t("li",[e._v("JSON")]),e._v(" "),t("li",[e._v("File")]),e._v(" "),t("li",[e._v("Image")]),e._v(" "),t("li",[e._v("Boolean")]),e._v(" "),t("li",[e._v("Number")])]),e._v(" "),t("p",[e._v("For more sophisticated cases, you should select "),t("code",[e._v("JSON")]),e._v(". The rest of the types are self-explanatory.")]),e._v(" "),t("h2",{attrs:{id:"global-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-settings"}},[e._v("#")]),e._v(" Global Settings")]),e._v(" "),t("p",[e._v("Global Settings are settings that have default values that you can change. They are referred to in many sections of the admin panel, such as hiding particular elements or disabling SCORM. Each key is either self-explanatory or is described by a tooltip.")]),e._v(" "),t("h2",{attrs:{id:"package-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-settings"}},[e._v("#")]),e._v(" Package Settings")]),e._v(" "),t("p",[e._v("Each package has its own settings that you can manage from the admin panel. For example:")]),e._v(" "),t("ul",[t("li",[e._v("From the "),t("code",[e._v("auth")]),e._v(" package, you can disable registration.")]),e._v(" "),t("li",[e._v("From the "),t("code",[e._v("auth")]),e._v(" package, you can set up that "),t("code",[e._v("account_must_be_enabled_by_admin")]),e._v(".")])]),e._v(" "),t("p",[e._v("This is the place where you can enable social media single sign-on, change the default currency, and so on.")]),e._v(" "),t("h2",{attrs:{id:"course-additional-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#course-additional-settings"}},[e._v("#")]),e._v(" Course - Additional Settings")]),e._v(" "),t("p",[t("code",[e._v("boolean (default: false)")]),e._v(" showInCourseAdditionalSettings-"),t("strong",[e._v("public")])]),e._v(" "),t("p",[e._v("If you want to be able to mark course as "),t("strong",[e._v("public")]),e._v(", which means "),t("strong",[e._v("free")]),e._v(" of charge, you need to set value of this setting to "),t("code",[e._v("true")]),e._v(". It's "),t("code",[e._v("false")]),e._v(" by default, because that feature isn't use often.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("✅ Here's example of this setting enabled:\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/settings/main/./docs/settings/setting-additional-public-true.png",alt:""}})]),e._v(" "),t("p",[e._v("Then, in course attributes you should see this option available:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/settings/main/./docs/settings/setting-additional-public.png",alt:""}})])])]),e._v(" "),t("h2",{attrs:{id:"templates-hide-tabs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#templates-hide-tabs"}},[e._v("#")]),e._v(" Templates - Hide tabs")]),e._v(" "),t("p",[t("code",[e._v("boolean (default: false)")]),e._v(" hideTemplateTab-"),t("strong",[e._v("email")])]),e._v(" "),t("p",[t("code",[e._v("boolean (default: false)")]),e._v(" hideTemplateTab-"),t("strong",[e._v("sms")])]),e._v(" "),t("p",[e._v("By default all tabs are shown.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/settings/main/./docs/settings/templates-tabs-default.png",alt:""}})]),e._v(" "),t("p",[e._v("Let's hide "),t("strong",[e._v("email")]),e._v(" and "),t("strong",[e._v("sms")]),e._v(" tabs.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/settings/main/./docs/settings/templates-tabs-disabled.png",alt:""}})]),e._v(" "),t("p",[e._v("Result:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/EscolaLMS/settings/main/./docs/settings/templates-tabs-hidden.png",alt:""}})])])}),[],!1,null,null,null);t.default=i.exports}}]);