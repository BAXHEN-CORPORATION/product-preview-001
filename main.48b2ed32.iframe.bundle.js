(self.webpackChunkproduct_preview_001=self.webpackChunkproduct_preview_001||[]).push([[179],{"./src/components/CartIcon/CartIcon.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DarkIcon:function(){return DarkIcon},Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var D_Work_baxhen_corporation_product_preview_001_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_CartIcon__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/CartIcon/CartIcon.tsx")),_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/CartIcon",component:_CartIcon__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{fill:{control:"color",description:"Icon color",defaultValue:"white"}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__.Z,{alignItems:"center",justifyContent:"center",bgcolor:"common.cream",p:8,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CartIcon__WEBPACK_IMPORTED_MODULE_1__.Z,(0,D_Work_baxhen_corporation_product_preview_001_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},args))})},Default=Template.bind({});Default.args={};var DarkIcon=Template.bind({});DarkIcon.args={fill:"black"},Default.parameters=(0,D_Work_baxhen_corporation_product_preview_001_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({storySource:{source:'(args) => (\r\n  <Stack\r\n    alignItems="center"\r\n    justifyContent="center"\r\n    bgcolor="common.cream"\r\n    p={8}\r\n  >\r\n    <CartIcon {...args} />\r\n  </Stack>\r\n)'}},Default.parameters),DarkIcon.parameters=(0,D_Work_baxhen_corporation_product_preview_001_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({storySource:{source:'(args) => (\r\n  <Stack\r\n    alignItems="center"\r\n    justifyContent="center"\r\n    bgcolor="common.cream"\r\n    p={8}\r\n  >\r\n    <CartIcon {...args} />\r\n  </Stack>\r\n)'}},DarkIcon.parameters);var __namedExportsOrder=["Default","DarkIcon"]},"./src/container/ProductCard/ProductCard.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},NoImage:function(){return NoImage},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ProductCard_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),product_image_namespaceObject=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__.p+"0a2d715fcd991044d163.png"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),CartIcon=__webpack_require__("./src/components/CartIcon/CartIcon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProductCard=function ProductCard(_ref){var productImageUrl=_ref.productImageUrl,title=_ref.title,category=_ref.category,description=_ref.description,fullPrice=_ref.fullPrice,price=_ref.price,onClick=_ref.onClick;return(0,jsx_runtime.jsxs)(Stack.Z,{sx:{height:{mobile:"100%",tablet:"450px"},width:{mobile:"100%",tablet:"600px"},borderRadius:"10px",overflow:"hidden"},direction:{mobile:"column",tablet:"row"},children:[(0,jsx_runtime.jsx)(Box.Z,{height:{mobile:"240px",tablet:"100%"},flex:{mobile:"unset",tablet:1},children:(0,jsx_runtime.jsx)("img",{style:{width:"100%",height:"100%",objectFit:"cover"},src:productImageUrl,alt:title})}),(0,jsx_runtime.jsxs)(Stack.Z,{flex:1,bgcolor:"common.white",padding:"24px",spacing:3,children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"overline",children:category}),(0,jsx_runtime.jsx)(Typography.Z,{variant:"display",children:title}),(0,jsx_runtime.jsx)(Typography.Z,{variant:"body",children:description}),(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",spacing:"19px",children:[(0,jsx_runtime.jsxs)(Typography.Z,{variant:"display",color:"primary.main",children:["$",price]}),(0,jsx_runtime.jsxs)(Typography.Z,{variant:"body",component:"del",children:["$",fullPrice]})]}),(0,jsx_runtime.jsx)(Button.Z,{onClick:onClick,variant:"contained",startIcon:(0,jsx_runtime.jsx)(CartIcon.Z,{}),children:"Add to Cart"})]})]})};ProductCard.defaultProps={productImageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"};var ProductCard_ProductCard=ProductCard;try{ProductCard.displayName="ProductCard",ProductCard.__docgenInfo={description:"",displayName:"ProductCard",props:{category:{defaultValue:null,description:"Product's category",name:"category",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"Product's name",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Product's description",name:"description",required:!0,type:{name:"string"}},fullPrice:{defaultValue:null,description:"Product's full price",name:"fullPrice",required:!0,type:{name:"number"}},price:{defaultValue:null,description:"Product's discount price",name:"price",required:!0,type:{name:"number"}},productImageUrl:{defaultValue:{value:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"},description:"Product's image url",name:"productImageUrl",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Product's action when the user clicks on add to cart button",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/container/ProductCard/ProductCard.tsx#ProductCard"]={docgenInfo:ProductCard.__docgenInfo,name:"ProductCard",path:"src/container/ProductCard/ProductCard.tsx#ProductCard"})}catch(__react_docgen_typescript_loader_error){}var ProductCard_stories={title:"Containers/ProductCard",component:ProductCard_ProductCard,argTypes:{title:{control:"text",description:"Product's name"},category:{control:"text",description:"Product's category (i.e PERFUME, ELECTRONICS, FASHION)"},description:{control:"text",description:"Product's description"},price:{control:"number",description:"Product's end price"},fullPrice:{control:"number",description:"Product's full price without discount"},productImageUrl:{control:"text",description:"Product's photo",defaultValue:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"},onClick:{control:"none"}}},Template=function Template(args){return(0,jsx_runtime.jsx)(Stack.Z,{alignItems:"center",justifyContent:"center",bgcolor:"common.cream",p:8,children:(0,jsx_runtime.jsx)(ProductCard_ProductCard,(0,objectSpread2.Z)({},args))})},Default=Template.bind({});Default.args={title:"Gabrielle Essence Eau De Parfum",category:"PERFUME",description:"A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",fullPrice:169.99,price:149.99,productImageUrl:product_image_namespaceObject};var NoImage=Template.bind({});NoImage.args={title:"Gabrielle Essence Eau De Parfum",category:"PERFUME",description:"A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",fullPrice:169.99,price:149.99},Default.parameters=(0,objectSpread2.Z)({storySource:{source:'(args) => (\r\n  <Stack\r\n    alignItems="center"\r\n    justifyContent="center"\r\n    bgcolor="common.cream"\r\n    p={8}\r\n  >\r\n    <ProductCard {...args} />\r\n  </Stack>\r\n)'}},Default.parameters),NoImage.parameters=(0,objectSpread2.Z)({storySource:{source:'(args) => (\r\n  <Stack\r\n    alignItems="center"\r\n    justifyContent="center"\r\n    bgcolor="common.cream"\r\n    p={8}\r\n  >\r\n    <ProductCard {...args} />\r\n  </Stack>\r\n)'}},NoImage.parameters);var __namedExportsOrder=["Default","NoImage"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),ThemeProvider=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js")),CssBaseline=__webpack_require__("./node_modules/@mui/material/CssBaseline/CssBaseline.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),theme=(0,createTheme.Z)({typography:{display:{fontFamily:"'Fraunces', serif",fontSize:"32px",lineHeight:"32px"},body:{fontFamily:"'Montserrat', sans-serif",fontSize:"14px",lineHeight:"23px",fontWeight:500},button:{fontFamily:"'Montserrat', sans-serif",fontSize:"14px",lineHeight:"17px",fontWeight:700},overline:{fontFamily:"'Montserrat', sans-serif",fontSize:"12px",lineHeight:"auto",fontWeight:500}},palette:{primary:{main:"#3D8168",dark:"#1A4032"},common:{cream:"#F2EAE2",aurometal:"#6C7289",gunmetal:"#1C232B"}},breakpoints:{values:{mobile:0,tablet:700,desktop:1280}}}),styles_theme=theme=(0,createTheme.Z)({components:{MuiButton:{styleOverrides:{root:{height:"48px",borderRadius:"8px",textTransform:"unset"}}}}},theme),client=__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js"),emotion_element_cbed451f_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-cbed451f.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*",control:"none"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},previewTabs:{canvas:{hidden:!0}},viewMode:"docs"};(0,client.addDecorator)((function(story){return(0,jsx_runtime.jsx)(ThemeProvider.Z,{theme:styles_theme,children:(0,jsx_runtime.jsxs)(emotion_element_cbed451f_browser_esm.b,{theme:styles_theme,children:[(0,jsx_runtime.jsx)(CssBaseline.ZP,{}),story()]})})}));var __namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/CartIcon/CartIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),CardIcon=function CardIcon(_ref){var fill=_ref.fill;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"15",height:"16",viewBox:"0 0 15 16",fill:fill,xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8649 8.1664C13.7779 8.52626 14.3794 9.40635 14.3831 10.3878C14.381 11.2088 13.9589 11.9716 13.2644 12.4094C13.4723 12.7661 13.5825 13.1712 13.584 13.584C13.5914 14.5429 13.0268 15.4139 12.1485 15.7985C11.2701 16.1831 10.2471 16.0073 9.54753 15.3516C8.84795 14.6959 8.60643 13.6863 8.93348 12.785H7.0477C7.40887 13.78 7.07458 14.8942 6.22528 15.5261C5.37597 16.158 4.21274 16.158 3.36344 15.5261C2.51413 14.8942 2.17985 13.78 2.54101 12.785H1.59812C1.15681 12.785 0.799059 12.4272 0.799059 11.9859C0.799059 11.5446 1.15681 11.1868 1.59812 11.1868H11.9859C12.4272 11.1868 12.785 10.8291 12.785 10.3878C12.785 9.94648 12.4272 9.58873 11.9859 9.58873H3.76357C3.39211 9.60145 3.06093 9.35638 2.96451 8.99742L0.982843 1.59813H0V1.548e-05H1.59812C1.96072 -0.00157591 2.27893 0.241186 2.37321 0.591319L2.6369 1.59813H13.584C13.8259 1.59095 14.0581 1.69379 14.2153 1.87781C14.3692 2.07435 14.4224 2.33151 14.3591 2.57299L12.8649 8.1664ZM4.39483 7.99061H11.2587L12.5452 3.19625H3.06839L4.39483 7.99061ZM4.79436 14.3831C4.35305 14.3831 3.9953 14.0253 3.9953 13.584C3.9953 13.1427 4.35305 12.785 4.79436 12.785C5.23566 12.785 5.59342 13.1427 5.59342 13.584C5.59342 14.0253 5.23566 14.3831 4.79436 14.3831ZM10.3878 13.584C10.3878 14.0253 10.7455 14.3831 11.1868 14.3831C11.6281 14.3831 11.9859 14.0253 11.9859 13.584C11.9859 13.1427 11.6281 12.785 11.1868 12.785C10.7455 12.785 10.3878 13.1427 10.3878 13.584Z",fill:fill})})};CardIcon.defaultProps={fill:"white"},__webpack_exports__.Z=CardIcon;try{CartIcon.displayName="CartIcon",CartIcon.__docgenInfo={description:"",displayName:"CartIcon",props:{fill:{defaultValue:{value:"white"},description:"",name:"fill",required:!1,type:{name:"Color"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CartIcon/CartIcon.tsx#CartIcon"]={docgenInfo:CartIcon.__docgenInfo,name:"CartIcon",path:"src/components/CartIcon/CartIcon.tsx#CartIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/CartIcon/CartIcon.stories.tsx":"./src/components/CartIcon/CartIcon.stories.tsx","./container/ProductCard/ProductCard.stories.tsx":"./src/container/ProductCard/ProductCard.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[119],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);