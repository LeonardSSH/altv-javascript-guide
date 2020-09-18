(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{370:function(a,t,e){a.exports=e.p+"assets/img/cmd_altvpkg.5c759b65.gif"},371:function(a,t,e){a.exports=e.p+"assets/img/vscode_entry.da9c2b21.png"},372:function(a,t,e){a.exports=e.p+"assets/img/cmd_loaded.d7cb8ca1.png"},373:function(a,t,e){a.exports=e.p+"assets/img/vscode_server_test.1453e7f8.png"},374:function(a,t,e){a.exports=e.p+"assets/img/vscode_client_test.aa03a20c.png"},447:function(a,t,e){"use strict";e.r(t);var s=e(25),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"instalacia-serverovych-suborov"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalacia-serverovych-suborov"}},[a._v("#")]),a._v(" Inštalácia serverových súborov")]),a._v(" "),s("h2",{attrs:{id:"predom-nevyhnutne"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#predom-nevyhnutne"}},[a._v("#")]),a._v(" Predom nevyhnutné")]),a._v(" "),s("p",[a._v("Skôr ako začnete, nainštalujte si tieto a pomocné programy.")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/en/download/current/",target:"_blank",rel:"noopener noreferrer"}},[a._v("NodeJS 13+"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[a._v("Visual Studio Code"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[a._v("GIT"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://altv.mp/#/downloads",target:"_blank",rel:"noopener noreferrer"}},[a._v("alt:V Klient"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"vseobecne-predpoklady"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vseobecne-predpoklady"}},[a._v("#")]),a._v(" Všeobecné predpoklady")]),a._v(" "),s("p",[a._v("Táto príručka bude predpokladať, že budete pracovať vo vývojovom prostredí Windows.")]),a._v(" "),s("ul",[s("li",[a._v("Mali by ste vedieť, ako používať príkazový riadok alebo Powershell")]),a._v(" "),s("li",[a._v("Mali by ste vedieť, ako otvoriť príkazový riadok alebo Powershell")]),a._v(" "),s("li",[a._v("Mali by ste vedieť, že súbory .exe môžete spúšťať v príkazovom riadku alebo v aplikácii Powershell")]),a._v(" "),s("li",[a._v("Mali by ste vedieť veľmi základný JavaScript.")])]),a._v(" "),s("p",[s("strong",[a._v("Dôležité")])]),a._v(" "),s("p",[a._v("Všetky bloky kódu s predponou "),s("code",[a._v("$")]),a._v(" sú určené na spustenie v príkazovom riadku alebo Powershelle.")]),a._v(" "),s("p",[s("strong",[a._v("NEKOPÍRUJTE")]),a._v(" pri kopírovaní príkazov samotný "),s("code",[a._v("$")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"instalacia-altv-pkg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalacia-altv-pkg"}},[a._v("#")]),a._v(" Inštalácia altv-pkg")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/stuyk/altv-pkg",target:"_blank",rel:"noopener noreferrer"}},[a._v("altv-pkg"),s("OutboundLink")],1),a._v(" je nástroj, ktorý vám rýchlo umožní spustiť binárne súbory servera v systémoch Windows alebo Linux. Získate tým tiež základný zdroj, s ktorým môžete pracovať.")]),a._v(" "),s("p",[a._v("Môžete ho nainštalovať z príkazového riadku.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g altv-pkg\n")])])]),s("p",[a._v("Ak narazíte na problémy s inštaláciou globálnych súborov, otvorte "),s("strong",[a._v("Powershell")]),a._v(" ako "),s("strong",[a._v("Správca")]),a._v(" a spustite nasledujúci príkaz.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted -Force"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Inštaláciu overte kontrolou verzie.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ altv-pkg --version\n")])])]),s("h2",{attrs:{id:"pouzivanie-altv-pkg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pouzivanie-altv-pkg"}},[a._v("#")]),a._v(" Používanie altv-pkg")]),a._v(" "),s("p",[a._v("Po inštalácii budeme sťahovať súbory na serveri.")]),a._v(" "),s("p",[a._v("Vytvorte adresár pre váš server. Potom otvorte príkazový riadok v danom adresári.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ altv-pkg d release\n")])])]),s("p",[a._v("Zobrazí sa výzva na získanie informácií ohľadom gamemódu ktorý vytvárate.")]),a._v(" "),s("p",[a._v("V predvolenom nastavení sa súbory servera a súbory "),s("em",[a._v("resource")]),a._v(" generujú automaticky vo vašom aktuálnom adresári.")]),a._v(" "),s("p",[a._v("Postupujte podľa pokynov na obrazovke.")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("N")]),a._v(" pri "),s("code",[a._v("Using voice?")])]),a._v(" "),s("li",[s("strong",[a._v("Y")]),a._v(" pre "),s("code",[a._v("Generate example resource?")])])]),a._v(" "),s("p",[s("img",{attrs:{src:e(370),alt:""}})]),a._v(" "),s("h2",{attrs:{id:"pochopenie-stiahnutych-suborov"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pochopenie-stiahnutych-suborov"}},[a._v("#")]),a._v(" Pochopenie stiahnutých súborov")]),a._v(" "),s("p",[a._v("Je dôležité prediskutovať niekoľko súborov a všeobecnú štruktúru vytvorenú po stiahnutí binárnych súborov na serveri. Tu sú súbory alebo niektoré všeobecné súbory, ktoré sa mali stiahnuť po spustení programu "),s("code",[a._v("altv-pkg d release")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("|   altv-server.exe\n|   libnode.dll\n|   package-lock.json\n|   package.json\n|   server.cfg\n|   update.json\n|\n+---data\n|       vehmodels.bin\n|       vehmods.bin\n|\n+---modules\n|       js-module.dll\n|\n\\node_modules\n\\---resources\n    \\---example\n        |   resource.cfg\n        |\n        +---client\n        |       startup.js\n        |\n        \\---server\n                startup.js\n")])])]),s("h3",{attrs:{id:"altv-server-exe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#altv-server-exe"}},[a._v("#")]),a._v(" altv-server.exe")]),a._v(" "),s("p",[a._v("Toto je váš hlavný binárny súbor na spustenie servera. Môžete to spustiť z príkazového riadku.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ altv-server.exe\n")])])]),s("p",[a._v("Použite "),s("code",[a._v("Ctrl + C")]),a._v(" pre "),s("em",[a._v("killnutie")]),a._v(" servera.")]),a._v(" "),s("h3",{attrs:{id:"package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[a._v("#")]),a._v(" package.json")]),a._v(" "),s("p",[a._v("Toto je miesto, kde budú definované vaše "),s("code",[a._v("node_modules")]),a._v(", ktoré používate. Tu inštalujete balíčky, ktoré môže používať server. Majte na pamäti, že "),s("code",[a._v("node_modules")]),a._v(" nemôžete používať na strane klienta.")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"altv-pkgserver"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Don\'t worry we made this package.json for you."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"index.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"update"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"altv-pkg d release"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"stuyk"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"module"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"prettier"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"printWidth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"tabWidth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"singleQuote"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"bracketSpacing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"devDependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"@altv/types-client"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^1.1.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"@altv/types-natives"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^1.1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"@altv/types-server"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^1.4.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"@altv/types-webview"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^1.0.2"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Dôležité kroky z definície v tejto štruktúre.")]),a._v(" "),s("ul",[s("li",[a._v("Používame "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"}},[a._v("rozšírenie Prettier pre VSCode"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("Používame  "),s("code",[a._v('"type": "module"')]),a._v(" pre podporu "),s("a",{attrs:{href:"https://www.w3schools.com/js/js_es6.asp",target:"_blank",rel:"noopener noreferrer"}},[a._v("ES6 Syntaxu"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("li",[a._v("Súbory nášho servera môžeme aktualizovať spustením programu "),s("code",[a._v("$ npm run update")]),a._v(" zo základného adresára.")])]),a._v(" "),s("p",[a._v("Jedná sa hlavne o štruktúru package.json a väčšinou funguje ako normálny projekt NodeJS.")]),a._v(" "),s("h3",{attrs:{id:"server-cfg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-cfg"}},[a._v("#")]),a._v(" server.cfg")]),a._v(" "),s("p",[a._v("Na konfiguráciu vášho servera sa používa vlastný syntaktický "),s("em",[a._v("parser")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("name: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"TestServer"')]),a._v(",\nhost: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.0.0"')]),a._v(",\nport: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7788")]),a._v(",\nplayers: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),a._v(",\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('#password: "verysecurepassword",')]),a._v("\nannounce: false,\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#token: no-token,")]),a._v("\ngamemode: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Freeroam"')]),a._v(",\nwebsite: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test.com"')]),a._v(",\nlanguage: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en"')]),a._v(",\ndescription: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test"')]),a._v(",\ndebug: false,\nmodules: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"js-module"')]),a._v(",\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(",\nresources: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"example"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(",\ntags: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"customTag1"')]),a._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"customTag2"')]),a._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"customTag3"')]),a._v(",\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"customTag4"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h4",{attrs:{id:"password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[a._v("#")]),a._v(" password")]),a._v(" "),s("p",[a._v("Password (Heslo) je voliteľný parameter. Komentované s "),s("code",[a._v("#")]),a._v(".")]),a._v(" "),s("h4",{attrs:{id:"token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[a._v("#")]),a._v(" token")]),a._v(" "),s("p",[a._v("Token je voliteľný parameter. Komentované s "),s("code",[a._v("#")]),a._v(". Token môžete získať z alt:V Discord kontaktovaním jedného z bot-ov v zozname členov.")]),a._v(" "),s("h4",{attrs:{id:"debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[a._v("#")]),a._v(" debug")]),a._v(" "),s("p",[a._v("Odporúča sa nastaviť túto hodnotu na "),s("code",[a._v("true")]),a._v(", aby ste mohli pracovať so serverom vo vývojovom režime. Toto umožní opätovné pripojenie k vášmu serveru, ak tiež nastavíte ladenie v "),s("a",{attrs:{href:"https://wiki.altv.mp/Altv.cfg",target:"_blank",rel:"noopener noreferrer"}},[a._v("konfigurácii klienta"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("h4",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[a._v("#")]),a._v(" resources")]),a._v(" "),s("p",[a._v("Tu zadáte zoznam priečinkov v priečinku "),s("code",[a._v("/resources")]),a._v(", ktoré chcete použiť. Všetky zdroje musia mať vo svojom príslušnom priečinku súbor "),s("code",[a._v("resource.cfg")]),a._v(", aby sa mohli načítať ako zdroj.")]),a._v(" "),s("p",[a._v("Tu je "),s("code",[a._v("resource.cfg")]),a._v(" z priečinka "),s("code",[a._v("/resources/example")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("type: js,\nmain: server/startup.js,\nclient-main: client/startup.js,\nclient-files: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n\tclient/*\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(",\ndeps: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("Hlavným vstupným bodom na strane servera je resource "),s("code",[a._v("example")]),a._v(" je "),s("code",[a._v("/resources/example/server/startup.js")])]),a._v(" "),s("p",[a._v("To isté platí pre stranu klienta, ale namiesto "),s("code",[a._v("server")]),a._v(" používa "),s("code",[a._v("client")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[a._v("#")]),a._v(" /data")]),a._v(" "),s("p",[a._v("V tomto priečinku máme dátové súbory, ktoré nám pomáhajú definovať, ktoré názvy vozidiel zodpovedajú akým hodnotám. Mali by sa stiahnuť a použiť automaticky.")]),a._v(" "),s("h3",{attrs:{id:"modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[a._v("#")]),a._v(" /modules")]),a._v(" "),s("p",[a._v("Tu načítate špeciálne súbory "),s("code",[a._v(".dll")]),a._v(" alebo "),s("code",[a._v(".so")]),a._v(" pre moduly, ktoré používajú rôzne jazyky. tj. C#, Lua atď. Spravidla ich generujú používatelia vyvíjajúci pre alt:V alebo sú vytvorené komunitou.")]),a._v(" "),s("h3",{attrs:{id:"node-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-modules"}},[a._v("#")]),a._v(" /node_modules")]),a._v(" "),s("p",[a._v("Toto je miesto, kde sú nainštalované balíčky stiahnuté z NPM. Tu je príklad inštalácie kryptografickej knižnice Stanford Javascript z NPM.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i sjcl\n")])])]),s("h3",{attrs:{id:"resources-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources-2"}},[a._v("#")]),a._v(" /resources")]),a._v(" "),s("p",[s("em",[a._v("Resources")]),a._v(" priečinok slúži na vytváranie nových "),s("em",[a._v("resource")]),a._v(" balíčkov, ktoré je možné načítať do súboru "),s("code",[a._v("server.cfg")]),a._v(". Dôrazne sa odporúča, aby ste pri vytváraní veľmi veľkého projektu z dôvodu výkonu a ľahkého použitia zostali pri jedinom prostriedku.")]),a._v(" "),s("h2",{attrs:{id:"otvorenie-vasho-pracovneho-priestoru"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#otvorenie-vasho-pracovneho-priestoru"}},[a._v("#")]),a._v(" Otvorenie vášho pracovného priestoru")]),a._v(" "),s("p",[a._v("Otvorte priečinok, kde nastavujete svoj alt:V server vo VS:Code.")]),a._v(" "),s("p",[a._v("Mal by vyzerať asi ako na obrázku nižšie.")]),a._v(" "),s("p",[s("img",{attrs:{src:e(371),alt:""}})]),a._v(" "),s("p",[a._v("Svoj kód môžete začať písať vo vnútri "),s("code",[a._v("resources/example/startup.js")]),a._v(".")]),a._v(" "),s("p",[a._v("Uistite sa, že váš "),s("code",[a._v("server.cfg")]),a._v(" obsahuje "),s("code",[a._v("example")]),a._v(" v sekcii "),s("code",[a._v("resources")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("resources: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"example"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(",\n")])])]),s("p",[a._v("Spustite server z príkazového riadku a ubezpečte sa, že je všetko správne načítané.")]),a._v(" "),s("p",[s("img",{attrs:{src:e(372),alt:""}})]),a._v(" "),s("h2",{attrs:{id:"pripojenie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pripojenie"}},[a._v("#")]),a._v(" Pripojenie")]),a._v(" "),s("p",[a._v("Môžete sa pripojiť otvorením klienta alt:V a použitím priameho pripojenia.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("127.0.0.1:7788\n")])])]),s("h2",{attrs:{id:"na-strane-servera"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#na-strane-servera"}},[a._v("#")]),a._v(" Na strane servera")]),a._v(" "),s("p",[a._v("Kód na strane servera by mal byť napísaný v priečinku "),s("code",[a._v("server")]),a._v(".")]),a._v(" "),s("p",[a._v("Musíte tiež importovať "),s("code",[a._v("types")]),a._v(" pre alt:V stranu servera.")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/// <reference types="@altv/types-server" />')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" alt "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'alt-server'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nalt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Vaša serverová strana by teraz mala mať automatické dokončovanie.")]),a._v(" "),s("p",[s("img",{attrs:{src:e(373),alt:""}})]),a._v(" "),s("h2",{attrs:{id:"na-strane-klienta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#na-strane-klienta"}},[a._v("#")]),a._v(" Na strane klienta")]),a._v(" "),s("p",[a._v("Kód na strane klienta by mal byť napísaný v priečinku "),s("code",[a._v("client")]),a._v(".")]),a._v(" "),s("p",[a._v("Toto je jediná sekcia, kde môžete aktívne používať "),s("code",[a._v("native")]),a._v(".")]),a._v(" "),s("p",[a._v("Musíte tiež importovať "),s("code",[a._v("types")]),a._v(" pre alt:V na strane klienta.")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/// <reference types="@altv/types-client" />')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/// <reference types="@altv/types-natives" />')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" alt "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'alt-client'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" native "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'natives'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nalt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("You connected! Nice!")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Vaša klientská strana by teraz mala mať automatické dokončovanie.")]),a._v(" "),s("p",[s("img",{attrs:{src:e(374),alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);