"use strict";(self.webpackChunkrust_project=self.webpackChunkrust_project||[]).push([[235],{235:(e,n,t)=>{t.a(e,(async(e,r)=>{try{t.r(n),t.d(n,{__wbg_set_wasm:()=>c.oT,__wbindgen_throw:()=>c.Or,grayscale:()=>c.se});var o=t(530),c=t(838),u=e([o]);o=(u.then?(await u)():u)[0],(0,c.oT)(o),r()}catch(e){r(e)}}))},838:(e,n,t)=>{let r;function o(e){r=e}t.d(n,{Or:()=>b,oT:()=>o,se:()=>w}),e=t.hmd(e);let c=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let u=null;function d(){return null!==u&&0!==u.byteLength||(u=new Uint8Array(r.memory.buffer)),u}function i(e,n){return e>>>=0,c.decode(d().subarray(e,e+n))}let l=0,a=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const _="function"==typeof a.encodeInto?function(e,n){return a.encodeInto(e,n)}:function(e,n){const t=a.encode(e);return n.set(t),{read:e.length,written:t.length}};let f=null;function s(){return null!==f&&0!==f.byteLength||(f=new Int32Array(r.memory.buffer)),f}function w(e){let n,t;try{const u=r.__wbindgen_add_to_stack_pointer(-16),f=function(e,n,t){if(void 0===t){const t=a.encode(e),r=n(t.length)>>>0;return d().subarray(r,r+t.length).set(t),l=t.length,r}let r=e.length,o=n(r)>>>0;const c=d();let u=0;for(;u<r;u++){const n=e.charCodeAt(u);if(n>127)break;c[o+u]=n}if(u!==r){0!==u&&(e=e.slice(u)),o=t(o,r,r=u+3*e.length)>>>0;const n=d().subarray(o+u,o+r);u+=_(e,n).written}return l=u,o}(e,r.__wbindgen_malloc,r.__wbindgen_realloc),w=l;r.grayscale(u,f,w);var o=s()[u/4+0],c=s()[u/4+1];return n=o,t=c,i(o,c)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,t)}}function b(e,n){throw new Error(i(e,n))}},530:(e,n,t)=>{var r=t(838);e.exports=t.v(n,e.id,"2cebf984ad4729e2b24d",{"./index_bg.js":{__wbindgen_throw:r.Or}})}}]);