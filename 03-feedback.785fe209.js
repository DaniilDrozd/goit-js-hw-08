!function(){var e,t,n,i,o,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={};function l(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var f="Expected a function",u=0/0,s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt,g="object"==typeof r&&r&&r.Object===Object&&r,p="object"==typeof self&&self&&self.Object===Object&&self,y=g||p||Function("return this")(),b=Object.prototype.toString,h=Math.max,j=Math.min,S=function(){return y.Date.now()};function O(e){var t=void 0===e?"undefined":l(e);return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":l(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==b.call(t))return u;if(O(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=O(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var i=d.test(e);return i||m.test(e)?v(e.slice(2),i?2:8):c.test(e)?u:+e}a=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(f);return O(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,r,a,l,u,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(f);function v(t){var n=i,r=o;return i=o=void 0,s=t,a=e.apply(r,n)}function g(e){var n=e-u,i=e-s;return void 0===u||n>=t||n<0||d&&i>=r}function p(){var e,n,i,o=S();if(g(o))return y(o);l=setTimeout(p,(e=o-u,n=o-s,i=t-e,d?j(i,r-n):i))}function y(e){return(l=void 0,m&&i)?v(e):(i=o=void 0,a)}function b(){var e,n=S(),r=g(n);if(i=arguments,o=this,u=n,r){if(void 0===l)return s=e=u,l=setTimeout(p,t),c?v(e):a;if(d)return l=setTimeout(p,t),v(u)}return void 0===l&&(l=setTimeout(p,t)),a}return t=T(t)||0,O(n)&&(c=!!n.leading,r=(d="maxWait"in n)?h(T(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),b.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=u=o=l=void 0},b.flush=function(){return void 0===l?a:y(S())},b}(e,t,{leading:i,maxWait:t,trailing:o})};var w="feedback-from-state",x=document.querySelector(".feedback-form"),E={};x.addEventListener("input",((e=a)&&e.__esModule?e.default:e)(function(){var e=x.elements,t=e.email,n=e.message;E.email=t.value,E.message=n.value,localStorage.setItem(w,JSON.stringify(E))},500)),x.addEventListener("submit",function(e){e.preventDefault();var t=x.elements.email.value,n=x.elements.message.value;if(""===t||""===n){alert("Please fill in all the fields!");return}console.log({email:t,message:n}),localStorage.removeItem(w),x.reset()}),t=JSON.parse(localStorage.getItem(w))||{},i=(n=x.elements).email,o=n.message,i.value=t.email||"",o.value=t.message||""}();
//# sourceMappingURL=03-feedback.785fe209.js.map