!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCkeditor=t():e.VueCkeditor=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));var o={version:"0.2.0",component:r.default,plugin:{install:function(e,t){var n=t.name,o=t.editors;e.prototype.$VueCkeditorEditors=o||{},e.component(n||r.default.name,r.default)}}};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-ckeditor",render:function(e){return e("div")},props:{config:{default:function(){return{language:"en"}},required:!1,type:Object},editors:{default:function(){return{}},required:!1,type:Object},readonly:{default:function(){return!1},required:!1,type:Boolean},type:{required:!0,type:String},uploadAdapter:{default:function(){return null},required:!1,type:Function},value:{default:function(){return""},required:!1,type:String}},data:function(){return{instance:null}},watch:{value:function(e){var t=this.instance;null!=t&&e!==t.getData()&&t.setData(e)}},methods:{create:function(){var e=this;if(null==this.instance){var t=this.type,n=this.$VueCkeditorEditors||this.editors;if(!Object.keys(n).length)throw new Error("There are no CKEditor 5 implementations.");var r=n[t];if(null==r)throw new Error("Wrong key '"+t+"'. Allowed keys: "+Object.keys(n));r.create(this.$el,this.config).then(function(t){e.instance=t,e.createUploadAdapter(),e.$emit("ready",t);var n=e.instance;n.isReadOnly=e.readonly,n.model.document.on("change",e.update),n.setData(e.value)}).catch(function(e){console.log(e)})}},createUploadAdapter:function(){var e=this.uploadAdapter,t=this.instance;if(null!=e&&null!=t){var n=t.plugins.get("FileRepository");null!=n&&(n.createUploadAdapter=function(t){return new e(t)})}},destroy:function(){var e=this.instance;null!=e&&(e.destroy(),this.$emit("destroy",e))},update:function(){var e=this.instance.getData();this.value!==e&&this.$emit("input",e)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}}}]).default});
//# sourceMappingURL=vue-ckeditor5.js.map