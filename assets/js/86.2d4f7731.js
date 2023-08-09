(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1952:function(s,t,a){s.exports=a.p+"assets/img/1627098472921-85639abb-364c-4fed-929d-1739cb4128cb.e867374b.png"},1953:function(s,t,a){s.exports=a.p+"assets/img/1627098472850-197fab3c-2c70-48af-969c-e0f4108abe55.a4b7f475.png"},1954:function(s,t,a){s.exports=a.p+"assets/img/1627098472851-ffe05143-de53-4d3d-8607-d825a9f9d76c.f011a234.png"},1955:function(s,t,a){s.exports=a.p+"assets/img/1627098473043-7c4d517c-465d-4261-a02d-549b7e8436c8.fff99122.png"},1956:function(s,t,a){s.exports=a.p+"assets/img/image-20220305230538320.a56fb332.png"},3112:function(s,t,a){"use strict";a.r(t);var e=a(64),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-sudo权限提升漏洞-cve-2021-3156"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-sudo权限提升漏洞-cve-2021-3156"}},[s._v("#")]),s._v(" Linux sudo权限提升漏洞 CVE-2021-3156")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("2021年1月26日，Linux安全工具sudo被发现严重的基于堆缓冲区溢出漏洞。利用这一漏洞，攻击者无需知道用户密码，一样可以获得root权限，并且是在默认配置下。此漏洞已分配为CVE-2021-3156，危险等级评分为7分。\n当sudo通过-s或-i命令行选项在shell模式下运行命令时，它将在命令参数中使用反斜杠转义特殊字符。但使用-s或-i标志运行sudoedit时，实际上并未进行转义，从而可能导致缓冲区溢出。因此只要存在sudoers文件（通常是/etc/sudoers），攻击者就可以使用本地普通用户利用sudo获得系统root权限。研究人员利用该漏洞在多个Linux发行版上成功获得了完整的root权限，包括Ubuntu 20.04（sudo 1.8.31）、Debian 10（sudo 1.8.27）和Fedora 33（sudo 1.9.2），并且sudo支持的其他操作系统和Linux发行版也很容易受到攻击。")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Sudo 1.8.2 - 1.8.31p2")]),t("br"),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Sudo 1.9.0 - 1.9.5p1")]),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("目前POC已经在Github公开")]),s._v(" "),t("br"),s._v(" "),t("a-alert",{attrs:{type:"success",message:"POC来源: https://github.com/blasty/CVE-2021-3156",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("p",[t("img",{attrs:{src:a(1952),alt:"img"}})]),s._v(" "),t("p",[s._v("当前可以验证的Linux环境为, 这里使用腾讯云中的Ubuntu镜像进行复现")]),s._v(" "),t("br"),s._v(" "),t("a-alert",{attrs:{type:"success",message:" Ubuntu 20.04.1 (Focal Fossa) - sudo 1.8.31, libc-2.31  Debian 10.0 (Buster) - sudo 1.8.27, libc-2.28",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("p",[t("img",{attrs:{src:a(1953),alt:"img"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(1954),alt:"img"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(1955),alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"漏洞poc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞poc"}},[s._v("#")]),s._v(" 漏洞POC")]),s._v(" "),t("a-alert",{attrs:{type:"success",message:"另一个无交互式shell使用的脚本:https://github.com/Rvn0xsy/CVE-2021-3156-plus",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("p",[t("img",{attrs:{src:a(1956),alt:"image-20220305230538320"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);