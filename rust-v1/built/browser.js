let N=0,O=`string`,J=1,Q=`Object`,L=`utf-8`,I=null,K=`undefined`,R=4,P=`function`,G=128,F=Array,M=Error,H=undefined;var z=(async(a,b)=>{if(typeof Response===P&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===P){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==I){return `${a}`};if(b==O){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==I){return `Symbol`}else{return `Symbol(${b})`}};if(b==P){const b=a.name;if(typeof b==O&&b.length>N){return `Function(${b})`}else{return `Function`}};if(F.isArray(a)){const b=a.length;let c=`[`;if(b>N){c+=l(a[N])};for(let d=J;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>J){d=c[J]}else{return toString.call(a)};if(d==Q){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return Q}};if(a instanceof M){return `${a.name}: ${a.message}\n${a.stack}`};return d});var B=((a,b)=>{});var v=((c,d,e)=>{try{a._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd0b897679c2e95a1(c,d,u(e))}finally{b[t++]=H}});var g=(a=>{if(d===b.length)b.push(b.length+ J);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function y(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var r=(()=>{if(q===I||q.byteLength===N){q=new Int32Array(a.memory.buffer)};return q});var x=(a=>a===H||a===I);var c=(a=>b[a]);var E=(async(b)=>{if(a!==H)return a;if(typeof b===K){b=new URL(`browser_bg.wasm`,import.meta.url)};const c=A();if(typeof b===O||typeof Request===P&&b instanceof Request||typeof URL===P&&b instanceof URL){b=fetch(b)};B(c);const {instance:d,module:e}=await z(await b,c);return C(d,e)});var D=(b=>{if(a!==H)return a;const c=A();B(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return C(d,b)});var C=((b,c)=>{a=b.exports;E.__wbindgen_wasm_module=c;q=I;i=I;a.__wbindgen_start();return a});var A=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==J){b.a=N;return !0};const c=!1;return c});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===H;return b});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbg_instanceof_Window_9029196b662bc42a=(a=>{let b;try{b=c(a) instanceof Window}catch{b=!1}const d=b;return d});b.wbg.__wbg_document_f7ace2b956f30a4f=(a=>{const b=c(a).document;return x(b)?N:g(b)});b.wbg.__wbg_scrollY_ce1c292df2cc37b6=function(){return y((a=>{const b=c(a).scrollY;return b}),arguments)};b.wbg.__wbg_querySelectorAll_c03e8664a5a0f0c5=function(){return y(((a,b,d)=>{const e=c(a).querySelectorAll(k(b,d));return g(e)}),arguments)};b.wbg.__wbg_setProperty_b95ef63ab852879e=function(){return y(((a,b,d,e,f)=>{c(a).setProperty(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_add_3eafedc4b2a28db0=function(){return y(((a,b,d)=>{c(a).add(k(b,d))}),arguments)};b.wbg.__wbg_remove_8ae45e50cb58bb66=function(){return y(((a,b,d)=>{c(a).remove(k(b,d))}),arguments)};b.wbg.__wbg_classList_5f2fc1d67656292e=(a=>{const b=c(a).classList;return g(b)});b.wbg.__wbg_instanceof_HtmlElement_6f4725d4677c7968=(a=>{let b;try{b=c(a) instanceof HTMLElement}catch{b=!1}const d=b;return d});b.wbg.__wbg_style_3801009b2339aa94=(a=>{const b=c(a).style;return g(b)});b.wbg.__wbg_addEventListener_a5963e26cd7b176b=function(){return y(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_length_7aeee1534dbcb390=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_c77649dd3862b63a=((a,b)=>{const d=c(a)[b>>>N];return x(d)?N:g(d)});b.wbg.__wbg_newnoargs_581967eacc0e2604=((a,b)=>{const c=new Function(k(a,b));return g(c)});b.wbg.__wbg_call_cb65541d95d71282=function(){return y(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_b51585de1b234aff=(()=>{const a=new Object();return g(a)});b.wbg.__wbg_self_1ff1d729e9aae938=function(){return y((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_5f4faef6c12b79ec=function(){return y((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_1d39714405582d3c=function(){return y((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_651f05c6a0944d1c=function(){return y((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbg_set_092e06b0f9d71865=function(){return y(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/R+ J]=g;r()[b/R+ N]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new M(k(a,b))});b.wbg.__wbindgen_closure_wrapper59=((a,b,c)=>{const d=s(a,b,24,v);return g(d)});return b});var e=(a=>{if(a<132)return;b[a]=d;d=a});var s=((b,c,d,e)=>{const f={a:b,b:c,cnt:J,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=N;try{return e(c,f.b,...b)}finally{if(--f.cnt===N){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var p=((a,b,c)=>{if(c===H){const c=n.encode(a);const d=b(c.length,J)>>>N;j().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,J)>>>N;const f=j();let g=N;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==N){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,J)>>>N;const b=j().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written};m=g;return e});var j=(()=>{if(i===I||i.byteLength===N){i=new Uint8Array(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>N;return h.decode(j().subarray(a,a+ b))});var u=(a=>{if(t==J)throw new M(`out of js stack`);b[--t]=a;return t});let a;const b=new F(G).fill(H);b.push(H,I,!0,!1);let d=b.length;const h=typeof TextDecoder!==K?new TextDecoder(L,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw M(`TextDecoder not available`)}};if(typeof TextDecoder!==K){h.decode()};let i=I;let m=N;const n=typeof TextEncoder!==K?new TextEncoder(L):{encode:()=>{throw M(`TextEncoder not available`)}};const o=typeof n.encodeInto===P?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=I;let t=G;function w(){a.main()}export default E;export{w as main,D as initSync}