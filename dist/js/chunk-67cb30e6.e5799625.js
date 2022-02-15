(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67cb30e6"],{1780:function(e,t,c){"use strict";var a=c("7a23"),l={class:"w-100"},o=Object(a["createElementVNode"])("div",{class:"pb-10 pb-lg-15"},[Object(a["createElementVNode"])("h2",{class:"fw-bolder text-dark"},"Billing Details"),Object(a["createElementVNode"])("div",{class:"text-gray-400 fw-bold fs-6"},[Object(a["createTextVNode"])(" If you need more info, please check out "),Object(a["createElementVNode"])("a",{href:"#",class:"text-primary fw-bolder"},"Help Page"),Object(a["createTextVNode"])(". ")])],-1),s={class:"w-100"},n={class:"d-flex flex-column mb-7 fv-row"},r=Object(a["createElementVNode"])("label",{class:"d-flex align-items-center fs-6 fw-bold form-label mb-2"},[Object(a["createElementVNode"])("span",{class:"required"},"Name On Card"),Object(a["createElementVNode"])("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Specify a card holder's name"})],-1),d={class:"d-flex flex-column mb-7 fv-row"},i=Object(a["createElementVNode"])("label",{class:"required fs-6 fw-bold form-label mb-2"},"Card Number",-1),b={class:"position-relative"},m=Object(a["createElementVNode"])("div",{class:"position-absolute translate-middle-y top-50 end-0 me-5"},[Object(a["createElementVNode"])("img",{src:"media/svg/card-logos/visa.svg",alt:"",class:"h-25px"}),Object(a["createElementVNode"])("img",{src:"media/svg/card-logos/mastercard.svg",alt:"",class:"h-25px"}),Object(a["createElementVNode"])("img",{src:"media/svg/card-logos/american-express.svg",alt:"",class:"h-25px"})],-1),f={class:"row mb-10"},p={class:"col-md-8 fv-row"},u=Object(a["createElementVNode"])("label",{class:"required fs-6 fw-bold form-label mb-2"},"Expiration Date",-1),O={class:"row fv-row"},j={class:"col-6"},v=["label","value"],N={class:"col-6"},V=["label","value"],g={class:"col-md-4 fv-row"},E=Object(a["createElementVNode"])("label",{class:"d-flex align-items-center fs-6 fw-bold form-label mb-2"},[Object(a["createElementVNode"])("span",{class:"required"},"CVV"),Object(a["createElementVNode"])("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Enter a card CVV code"})],-1),x={class:"position-relative"},h={class:"position-absolute translate-middle-y top-50 end-0 me-3"},w={class:"svg-icon svg-icon-2hx"},y={class:"d-flex flex-stack"},k=Object(a["createElementVNode"])("div",{class:"me-5"},[Object(a["createElementVNode"])("label",{class:"fs-6 fw-bold form-label"},"Save Card for further billing?"),Object(a["createElementVNode"])("div",{class:"fs-7 fw-bold text-gray-400"}," If you need more info, please check budget planning ")],-1),C={class:"form-check form-switch form-check-custom form-check-solid"},T=Object(a["createElementVNode"])("span",{class:"form-check-label fw-bold text-gray-400"}," Save Card ",-1);function _(e,t,c,_,B,S){var M=Object(a["resolveComponent"])("Field"),A=Object(a["resolveComponent"])("ErrorMessage"),P=Object(a["resolveComponent"])("inline-svg");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[o,Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",n,[r,Object(a["createVNode"])(M,{type:"text",class:"form-control form-control-solid",placeholder:"",name:"nameOnCard"}),Object(a["createVNode"])(A,{class:"fv-plugins-message-container invalid-feedback",name:"nameOnCard"})]),Object(a["createElementVNode"])("div",d,[i,Object(a["createElementVNode"])("div",b,[Object(a["createVNode"])(M,{type:"text",class:"form-control form-control-solid",placeholder:"Enter card number",name:"cardNumber"}),Object(a["createVNode"])(A,{class:"fv-plugins-message-container invalid-feedback",name:"cardNumber"}),m])]),Object(a["createElementVNode"])("div",f,[Object(a["createElementVNode"])("div",p,[u,Object(a["createElementVNode"])("div",O,[Object(a["createElementVNode"])("div",j,[Object(a["createVNode"])(M,{name:"cardExpiryMonth",class:"form-select form-select-solid select2-hidden-accessible",placeholder:"Month",as:"select"},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(12,(function(e){return Object(a["createElementVNode"])("option",{key:e,label:e,value:e},null,8,v)})),64))]})),_:1}),Object(a["createVNode"])(A,{class:"fv-plugins-message-container invalid-feedback",name:"cardExpiryMonth"})]),Object(a["createElementVNode"])("div",N,[Object(a["createVNode"])(M,{name:"cardExpiryYear",class:"form-select form-select-solid select2-hidden-accessible",placeholder:"Year",as:"select"},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(10,(function(e){return Object(a["createElementVNode"])("option",{key:e,label:e+((new Date).getFullYear()-1),value:e},null,8,V)})),64))]})),_:1}),Object(a["createVNode"])(A,{class:"fv-plugins-message-container invalid-feedback",name:"cardExpiryYear"})])])]),Object(a["createElementVNode"])("div",g,[E,Object(a["createElementVNode"])("div",x,[Object(a["createVNode"])(M,{type:"text",class:"form-control form-control-solid",minlength:"3",maxlength:"4",placeholder:"CVV",name:"cardCvv"}),Object(a["createVNode"])(A,{class:"fv-plugins-message-container invalid-feedback",name:"cardCvv"}),Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("span",w,[Object(a["createVNode"])(P,{src:"media/icons/duotune/finance/fin002.svg"})])])])])]),Object(a["createElementVNode"])("div",y,[k,Object(a["createElementVNode"])("label",C,[Object(a["createVNode"])(M,{type:"checkbox",class:"form-check-input",name:"saveCard",value:"1"}),T])])])])}var B=c("7bb1"),S=Object(a["defineComponent"])({name:"step-4",components:{Field:B["b"],ErrorMessage:B["a"]}}),M=c("6b0d"),A=c.n(M);const P=A()(S,[["render",_]]);t["a"]=P},"409a":function(e,t,c){"use strict";var a=c("7a23"),l={class:"w-100"},o={class:"pb-8 pb-lg-10"},s=Object(a["createElementVNode"])("h2",{class:"fw-bolder text-dark"},"Your Are Done!",-1),n={class:"text-gray-400 fw-bold fs-6"},r=Object(a["createTextVNode"])(" If you need more info, please "),d=Object(a["createTextVNode"])("Sign In"),i=Object(a["createTextVNode"])(". "),b={class:"mb-0"},m=Object(a["createElementVNode"])("div",{class:"fs-6 text-gray-600 mb-5"}," Writing headlines for blog posts is as much an art as it is a science and probably warrants its own post, but for all advise is with what works for your great & amazing audience. ",-1),f={class:"notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"},p={class:"svg-icon svg-icon-2tx svg-icon-warning me-4"},u=Object(a["createStaticVNode"])('<div class="d-flex flex-stack flex-grow-1"><div class="fw-bold"><h4 class="text-gray-800 fw-bolder">We need your attention!</h4><div class="fs-6 text-gray-600"> To start using great tools, please, please <a href="#" class="fw-bolder">Create Team Platform</a></div></div></div>',1);function O(e,t,c,O,j,v){var N=Object(a["resolveComponent"])("router-link"),V=Object(a["resolveComponent"])("inline-svg");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[Object(a["createElementVNode"])("div",o,[s,Object(a["createElementVNode"])("div",n,[r,Object(a["createVNode"])(N,{to:"/sign-in",class:"link-primary fw-bolder"},{default:Object(a["withCtx"])((function(){return[d]})),_:1}),i])]),Object(a["createElementVNode"])("div",b,[m,Object(a["createElementVNode"])("div",f,[Object(a["createElementVNode"])("span",p,[Object(a["createVNode"])(V,{src:"media/icons/duotune/general/gen044.svg"})]),u])])])}var j=Object(a["defineComponent"])({name:"step-5",components:{}}),v=c("6b0d"),N=c.n(v);const V=N()(j,[["render",O]]);t["a"]=V},"8e21":function(e,t,c){"use strict";var a=c("7a23"),l={class:"w-100"},o=Object(a["createElementVNode"])("div",{class:"pb-10 pb-lg-15"},[Object(a["createElementVNode"])("h2",{class:"fw-bolder text-dark"},"Account Info"),Object(a["createElementVNode"])("div",{class:"text-gray-400 fw-bold fs-6"},[Object(a["createTextVNode"])(" If you need more info, please check out "),Object(a["createElementVNode"])("a",{href:"#",class:"link-primary fw-bolder"},"Help Page"),Object(a["createTextVNode"])(". ")])],-1),s={class:"mb-10 fv-row"},n=Object(a["createElementVNode"])("label",{class:"d-flex align-items-center form-label mb-3"},[Object(a["createTextVNode"])(" Specify Team Size "),Object(a["createElementVNode"])("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Provide your team size to help us setup your billing"})],-1),r={class:"row mb-2","data-kt-buttons":"true"},d={class:"col"},i={class:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"},b=Object(a["createElementVNode"])("span",{class:"fw-bolder fs-3"},"1-1",-1),m={class:"col"},f={class:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4 active"},p=Object(a["createElementVNode"])("span",{class:"fw-bolder fs-3"},"2-10",-1),u={class:"col"},O={class:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"},j=Object(a["createElementVNode"])("span",{class:"fw-bolder fs-3"},"10-50",-1),v={class:"col"},N={class:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"},V=Object(a["createElementVNode"])("span",{class:"fw-bolder fs-3"},"50+",-1),g=Object(a["createElementVNode"])("div",{class:"form-text"}," Customers will see this shortened version of your statement descriptor ",-1),E={class:"mb-10 fv-row"},x=Object(a["createElementVNode"])("label",{class:"form-label mb-3"},"Team Account Name",-1),h={class:"mb-0 fv-row"},w=Object(a["createElementVNode"])("label",{class:"d-flex align-items-center form-label mb-5"},[Object(a["createTextVNode"])(" Select Account Plan "),Object(a["createElementVNode"])("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Monthly billing will be based on your account plan"})],-1),y={class:"mb-0"},k={class:"d-flex flex-stack mb-5 cursor-pointer"},C={class:"d-flex align-items-center me-2"},T={class:"symbol symbol-50px me-6"},_={class:"symbol-label"},B={class:"svg-icon svg-icon-1 svg-icon-gray-600"},S=Object(a["createElementVNode"])("span",{class:"d-flex flex-column"},[Object(a["createElementVNode"])("span",{class:"fw-bolder text-gray-800 text-hover-primary fs-5"},"Company Account"),Object(a["createElementVNode"])("span",{class:"fs-6 fw-bold text-gray-400"},"Use images to enhance your post flow")],-1),M={class:"form-check form-check-custom form-check-solid"},A={class:"d-flex flex-stack mb-5 cursor-pointer"},P={class:"d-flex align-items-center me-2"},D={class:"symbol symbol-50px me-6"},I={class:"symbol-label"},F={class:"svg-icon svg-icon-1 svg-icon-gray-600"},q=Object(a["createElementVNode"])("span",{class:"d-flex flex-column"},[Object(a["createElementVNode"])("span",{class:"fw-bolder text-gray-800 text-hover-primary fs-5"},"Developer Account"),Object(a["createElementVNode"])("span",{class:"fs-6 fw-bold text-gray-400"},"Use images to your post time")],-1),z={class:"form-check form-check-custom form-check-solid"},H={class:"d-flex flex-stack mb-0 cursor-pointer"},U={class:"d-flex align-items-center me-2"},Y={class:"symbol symbol-50px me-6"},L={class:"symbol-label"},R={class:"svg-icon svg-icon-1 svg-icon-gray-600"},J=Object(a["createElementVNode"])("span",{class:"d-flex flex-column"},[Object(a["createElementVNode"])("span",{class:"fw-bolder text-gray-800 text-hover-primary fs-5"},"Testing Account"),Object(a["createElementVNode"])("span",{class:"fs-6 fw-bold text-gray-400"},"Use images to enhance time travel rivers")],-1),K={class:"form-check form-check-custom form-check-solid"};function W(e,t,c,W,G,Q){var X=Object(a["resolveComponent"])("Field"),Z=Object(a["resolveComponent"])("ErrorMessage"),$=Object(a["resolveComponent"])("inline-svg");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[o,Object(a["createElementVNode"])("div",s,[n,Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("label",i,[Object(a["createVNode"])(X,{type:"radio",class:"btn-check",name:"accountTeamSize",value:"1-1"}),b])]),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("label",f,[Object(a["createVNode"])(X,{type:"radio",class:"btn-check",name:"accountTeamSize",value:"2-10"}),p])]),Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("label",O,[Object(a["createVNode"])(X,{type:"radio",class:"btn-check",name:"accountTeamSize",value:"10-50"}),j])]),Object(a["createElementVNode"])("div",v,[Object(a["createElementVNode"])("label",N,[Object(a["createVNode"])(X,{type:"radio",class:"btn-check",name:"accountTeamSize",checked:"",value:"50+"}),V])])]),g]),Object(a["createElementVNode"])("div",E,[x,Object(a["createVNode"])(X,{type:"text",class:"form-control form-control-lg form-control-solid",name:"accountName",placeholder:"",value:""}),Object(a["createVNode"])(Z,{name:"accountName",class:"fv-plugins-message-container invalid-feedback"})]),Object(a["createElementVNode"])("div",h,[w,Object(a["createElementVNode"])("div",y,[Object(a["createElementVNode"])("label",k,[Object(a["createElementVNode"])("span",C,[Object(a["createElementVNode"])("span",T,[Object(a["createElementVNode"])("span",_,[Object(a["createElementVNode"])("span",B,[Object(a["createVNode"])($,{src:"media/icons/duotune/finance/fin001.svg"})])])]),S]),Object(a["createElementVNode"])("span",M,[Object(a["createVNode"])(X,{class:"form-check-input",type:"radio",name:"accountPlan",value:"1"})])]),Object(a["createElementVNode"])("label",A,[Object(a["createElementVNode"])("span",P,[Object(a["createElementVNode"])("span",D,[Object(a["createElementVNode"])("span",I,[Object(a["createElementVNode"])("span",F,[Object(a["createVNode"])($,{src:"media/icons/duotune/graphs/gra006.svg"})])])]),q]),Object(a["createElementVNode"])("span",z,[Object(a["createVNode"])(X,{class:"form-check-input",type:"radio",checked:"",name:"accountPlan",value:"2"})])]),Object(a["createElementVNode"])("label",H,[Object(a["createElementVNode"])("span",U,[Object(a["createElementVNode"])("span",Y,[Object(a["createElementVNode"])("span",L,[Object(a["createElementVNode"])("span",R,[Object(a["createVNode"])($,{src:"media/icons/duotune/graphs/gra008.svg"})])])]),J]),Object(a["createElementVNode"])("span",K,[Object(a["createVNode"])(X,{class:"form-check-input",type:"radio",name:"accountPlan",value:"3"})])])])])])}var G=c("7bb1"),Q=Object(a["defineComponent"])({name:"step-2",components:{Field:G["b"],ErrorMessage:G["a"]}}),X=c("6b0d"),Z=c.n(X);const $=Z()(Q,[["render",W]]);t["a"]=$},bd3f:function(e,t,c){"use strict";var a=c("7a23"),l={class:"w-100"},o=Object(a["createElementVNode"])("div",{class:"pb-10 pb-lg-12"},[Object(a["createElementVNode"])("h2",{class:"fw-bolder text-dark"},"Business Details"),Object(a["createElementVNode"])("div",{class:"text-gray-400 fw-bold fs-6"},[Object(a["createTextVNode"])(" If you need more info, please check out "),Object(a["createElementVNode"])("a",{href:"#",class:"link-primary fw-bolder"},"Help Page"),Object(a["createTextVNode"])(". ")])],-1),s={class:"fv-row mb-10"},n=Object(a["createElementVNode"])("label",{class:"form-label required"},"Business Name",-1),r={class:"fv-row mb-10"},d=Object(a["createElementVNode"])("label",{class:"d-flex align-items-center form-label"},[Object(a["createElementVNode"])("span",{class:"required"},"Shortened Descriptor"),Object(a["createElementVNode"])("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-html":"true"})],-1),i=Object(a["createElementVNode"])("div",{class:"form-text"}," Customers will see this shortened version of your statement descriptor ",-1),b={class:"fv-row mb-10"},m=Object(a["createElementVNode"])("label",{class:"form-label required"},"Corporation Type",-1),f=Object(a["createElementVNode"])("option",null,null,-1),p=Object(a["createElementVNode"])("option",{value:"1"},"S Corporation",-1),u=Object(a["createElementVNode"])("option",{value:"1"},"C Corporation",-1),O=Object(a["createElementVNode"])("option",{value:"2"},"Sole Proprietorship",-1),j=Object(a["createElementVNode"])("option",{value:"3"},"Non-profit",-1),v=Object(a["createElementVNode"])("option",{value:"4"},"Limited Liability",-1),N=Object(a["createElementVNode"])("option",{value:"5"},"General Partnership",-1),V={class:"fv-row mb-10"},g=Object(a["createElementVNode"])("label",{class:"form-label"},"Business Description",-1),E={class:"fv-row mb-0"},x=Object(a["createElementVNode"])("label",{class:"fs-6 fw-bold form-label required"},"Contact Email",-1);function h(e,t,c,h,w,y){var k=Object(a["resolveComponent"])("Field"),C=Object(a["resolveComponent"])("ErrorMessage");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[o,Object(a["createElementVNode"])("div",s,[n,Object(a["createVNode"])(k,{name:"businessName",class:"form-control form-control-lg form-control-solid",value:"Keenthemes Inc."}),Object(a["createVNode"])(C,{name:"businessName",class:"fv-plugins-message-container invalid-feedback"})]),Object(a["createElementVNode"])("div",r,[d,Object(a["createVNode"])(k,{name:"businessDescriptor",class:"form-control form-control-lg form-control-solid",value:"KEENTHEMES"}),Object(a["createVNode"])(C,{name:"businessDescriptor",class:"fv-plugins-message-container invalid-feedback"}),i]),Object(a["createElementVNode"])("div",b,[m,Object(a["createVNode"])(k,{name:"businessType",class:"form-select form-select-lg form-select-solid","data-control":"select2","data-placeholder":"Select...","data-allow-clear":"true","data-hide-search":"true",as:"select"},{default:Object(a["withCtx"])((function(){return[f,p,u,O,j,v,N]})),_:1}),Object(a["createVNode"])(C,{name:"businessType",class:"fv-plugins-message-container invalid-feedback"})]),Object(a["createElementVNode"])("div",V,[g,Object(a["createVNode"])(k,{type:"text",name:"businessDescription",class:"form-control form-control-lg form-control-solid",rows:"3"})]),Object(a["createElementVNode"])("div",E,[x,Object(a["createVNode"])(k,{name:"businessEmail",class:"form-control form-control-lg form-control-solid",value:"corp@support.com"}),Object(a["createVNode"])(C,{name:"businessEmail",class:"fv-plugins-message-container invalid-feedback"})])])}var w=c("7bb1"),y=Object(a["defineComponent"])({name:"step-3",components:{Field:w["b"],ErrorMessage:w["a"]}}),k=c("6b0d"),C=c.n(k);const T=C()(y,[["render",h]]);t["a"]=T},f526:function(e,t,c){"use strict";var a=c("7a23"),l={class:"w-100"},o=Object(a["createStaticVNode"])('<div class="pb-10 pb-lg-15"><h2 class="fw-bolder d-flex align-items-center text-dark"> Choose Account Type <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Billing is issued based on your selected account type"></i></h2><div class="text-gray-400 fw-bold fs-6"> If you need more info, please check out <a href="#" class="link-primary fw-bolder">Help Page</a>. </div></div>',1),s={class:"fv-row"},n={class:"row"},r={class:"col-lg-6"},d={class:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10",for:"kt_create_account_form_account_type_personal"},i={class:"svg-icon svg-icon-3x me-5"},b=Object(a["createElementVNode"])("span",{class:"d-block fw-bold text-start"},[Object(a["createElementVNode"])("span",{class:"text-dark fw-bolder d-block fs-4 mb-2"}," Personal Account "),Object(a["createElementVNode"])("span",{class:"text-gray-400 fw-bold fs-6"},"If you need more info, please check it out")],-1),m={class:"col-lg-6"},f={class:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center",for:"kt_create_account_form_account_type_corporate"},p={class:"svg-icon svg-icon-3x me-5"},u=Object(a["createElementVNode"])("span",{class:"d-block fw-bold text-start"},[Object(a["createElementVNode"])("span",{class:"text-dark fw-bolder d-block fs-4 mb-2"},"Corporate Account"),Object(a["createElementVNode"])("span",{class:"text-gray-400 fw-bold fs-6"},"Create corporate account to mane users")],-1);function O(e,t,c,O,j,v){var N=Object(a["resolveComponent"])("Field"),V=Object(a["resolveComponent"])("inline-svg"),g=Object(a["resolveComponent"])("ErrorMessage");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[o,Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(N,{type:"radio",class:"btn-check",name:"accountType",value:"personal",id:"kt_create_account_form_account_type_personal"}),Object(a["createElementVNode"])("label",d,[Object(a["createElementVNode"])("span",i,[Object(a["createVNode"])(V,{src:"media/icons/duotune/communication/com005.svg"})]),b])]),Object(a["createElementVNode"])("div",m,[Object(a["createVNode"])(N,{type:"radio",class:"btn-check",name:"accountType",value:"corporate",id:"kt_create_account_form_account_type_corporate"}),Object(a["createElementVNode"])("label",f,[Object(a["createElementVNode"])("span",p,[Object(a["createVNode"])(V,{src:"media/icons/duotune/finance/fin006.svg"})]),u])]),Object(a["createVNode"])(g,{name:"accountType"})])])])}var j=c("7bb1"),v=Object(a["defineComponent"])({name:"step-1",components:{Field:j["b"],ErrorMessage:j["a"]}}),N=c("6b0d"),V=c.n(N);const g=V()(v,[["render",O]]);t["a"]=g},fd34:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return s}));var a=c("0613"),l=c("38e0"),o=function(e,t){a["a"].dispatch(l["a"].SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})},s=function(e){a["a"].dispatch(l["a"].SET_BREADCRUMB_ACTION,{title:e})}}}]);
//# sourceMappingURL=chunk-67cb30e6.e5799625.js.map