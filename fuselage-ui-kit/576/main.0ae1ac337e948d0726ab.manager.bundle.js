(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1050:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(13);var colors=__webpack_require__(360),esm=__webpack_require__(138),create=__webpack_require__(253),package_0=__webpack_require__(361),logo=__webpack_require__.p+"static/media/logo.d570bdd1.svg";esm.a.setConfig({theme:Object(create.a)({base:"light",brandTitle:package_0.name,brandImage:logo,brandUrl:package_0.homepage,colorPrimary:colors.n500,colorSecondary:colors.b500})})},360:function(module){module.exports=JSON.parse('{"n100":"#f7f8fa","n200":"#f2f3f5","n300":"#eeeff1","n400":"#e4e7ea","n500":"#cbced1","n600":"#9ea2a8","n700":"#6c727a","n800":"#2f343d","n900":"#1f2329","b100":"#e8f2ff","b200":"#d1ebfe","b300":"#76b7fc","b400":"#549df9","b500":"#1d74f5","b600":"#095ad2","b700":"#10529e","b800":"#01336b","b900":"#012247","g100":"#e5fbf4","g200":"#c0f6e4","g300":"#96f0d2","g400":"#6ce9c0","g500":"#2de0a5","g600":"#1ecb92","g700":"#19ac7c","g800":"#158d65","g900":"#106d4f","r100":"#fddade","r200":"#fbb5be","r300":"#f98f9d","r400":"#f76a7d","r500":"#f5455c","r600":"#db0c27","r700":"#b30a20","r800":"#8b0719","r900":"#630512","y100":"#fff6d6","y200":"#ffecad","y300":"#ffe383","y400":"#ffd95a","y500":"#ffd031","y600":"#f3be08","y700":"#dfac00","y800":"#b68d00","y900":"#8e6d00","p100":"#f9effc","p200":"#edd0f7","p300":"#dca0ef","p400":"#ca71e7","p500":"#9f22c7","p600":"#7f1b9f","p700":"#5f1477","p800":"#4a105d","p900":"#350b42","o100":"#fde8d7","o200":"#fad1b0","o300":"#f7b27b","o400":"#f59b53","o500":"#f38c39","o600":"#e26d0e","o700":"#bd5a0b","o800":"#974809","o900":"#713607","white":"#ffffff"}')},361:function(module){module.exports=JSON.parse('{"name":"@rocket.chat/fuselage-ui-kit","version":"0.30.1","description":"UiKit elements for Rocket.Chat Apps built under Fuselage design system","homepage":"https://rocketchat.github.io/Rocket.Chat.Fuselage/","author":{"name":"Rocket.Chat","url":"https://rocket.chat/"},"license":"MIT","repository":{"type":"git","url":"git+https://github.com/RocketChat/Rocket.Chat.Fuselage.git","directory":"packages/fuselage-ui-kit"},"bugs":{"url":"https://github.com/RocketChat/Rocket.Chat.Fuselage/issues"},"main":"dist/cjs/index.js","module":"dist/esm/index.js","types":"dist/esm/index.d.ts","files":["/dist"],"publishConfig":{"access":"public"},"scripts":{"build":"run-s .:build:clean .:build:version .:build:esm .:build:cjs",".:build:clean":"rimraf dist",".:build:version":"write-version-module",".:build:esm":"tsc -p tsconfig-esm.json",".:build:cjs":"tsc -p tsconfig-cjs.json","lint":"lint","lint-and-fix":"lint-and-fix","lint-staged":"lint-staged","docs":"cross-env NODE_ENV=production build-storybook -o ../../static/fuselage-ui-kit","storybook":"start-storybook -p 6006","build-storybook":"cross-env NODE_ENV=production build-storybook","update-storybook":"run-s .:update-storybook:build-storybook .:update-storybook:loki-update",".:update-storybook:build-storybook":"run-s build-storybook",".:update-storybook:loki-update":"loki update --chromeDockerImage=chinello/alpine-chrome:latest --chromeFlags=\\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\\" --verboseRenderer --requireReference --reactUri file:./storybook-static","prettier-format":"prettier \'src/**/*\' --write","loki:test":"loki test --chromeDockerImage=chinello/alpine-chrome:latest --chromeFlags=\\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\\" --verboseRenderer --requireReference --reactUri file:./storybook-static"},"peerDependencies":{"@rocket.chat/fuselage-polyfills":"*","@rocket.chat/icons":"*","react":"^17.0.2","react-dom":"^17.0.2"},"devDependencies":{"@rocket.chat/apps-engine":"^1.27.1","@rocket.chat/eslint-config-alt":"workspace:packages/eslint-config-alt","@rocket.chat/fuselage-polyfills":"workspace:packages/fuselage-polyfills","@rocket.chat/icons":"workspace:packages/icons","@rocket.chat/prettier-config":"workspace:packages/prettier-config","@storybook/addon-essentials":"^6.3.4","@storybook/addons":"^6.3.4","@storybook/builder-webpack5":"^6.3.4","@storybook/manager-webpack5":"^6.3.4","@storybook/react":"^6.3.4","@storybook/source-loader":"^6.3.4","@storybook/theming":"^6.3.4","@types/react":"^17.0.34","@types/react-dom":"^17.0.11","babel-loader":"^8.2.2","cross-env":"^7.0.3","eslint":"^8.2.0","lint-all":"workspace:tools/lint-all","lint-staged":"^11.2.6","loki":"^0.28.1","normalize.css":"^8.0.1","npm-run-all":"^4.1.5","prettier":"^2.3.2","react":"^17.0.2","react-dom":"^17.0.2","rimraf":"^3.0.2","typescript":"^4.4.3","webpack":"^5.41.1","write-version-module":"workspace:tools/write-version-module"},"dependencies":{"@rocket.chat/fuselage":"workspace:packages/fuselage","@rocket.chat/fuselage-hooks":"workspace:packages/fuselage-hooks","@rocket.chat/styled":"workspace:packages/styled","@rocket.chat/ui-kit":"workspace:packages/ui-kit","tslib":"^2.3.1"},"loki":{"configurations":{"desktop":{"target":"chrome.docker","width":1440,"height":896,"deviceScaleFactor":1,"mobile":false,"fitWindow":false},"tablet":{"target":"chrome.docker","width":768,"height":970,"deviceScaleFactor":1,"mobile":false,"fitWindow":false},"mobile":{"target":"chrome.docker","preset":"iPhone 7"}}}}')},575:function(module,exports,__webpack_require__){__webpack_require__(576),__webpack_require__(1050),__webpack_require__(1042),__webpack_require__(1051),__webpack_require__(1043),__webpack_require__(1046),__webpack_require__(1045),__webpack_require__(1047),__webpack_require__(1044),__webpack_require__(1048),module.exports=__webpack_require__(1049)},652:function(module,exports){}},[[575,2,3]]]);