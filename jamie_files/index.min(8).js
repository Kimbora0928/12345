!function(){var r,n,u={};window.lda=r={},window.ldc=n={module:{},register:function(n,t,e){var r;return Array.isArray(n)?this.apps.push(r={f:t,d:n}):r=this.module[n]={f:e,d:t},r},evtHandler:{},on:function(n,t){var e;return((e=this.evtHandler)[n]||(e[n]=[])).push(t)},fire:function(n){for(var t,e,r,i,o=[],a=[],s=1,l=arguments.length;s<l;++s)a.push(arguments[s]);for(t=a,s=0,r=(e=this.evtHandler[n]||[]).length;s<r;++s)i=e[s],o.push(i.apply(this,t));return o},actHandler:{},action:function(n,t){var e;return"object"!=typeof n?"object"==typeof t?r[n]=t:((e=this.actHandler)[n]||(e[n]=[])).push(t):(u.name||(console.warn("ldc.action(): Action registered after module initialization will be anonymous actions."),console.warn("You can name the action set explicitly if you have to do this."),console.warn("e.g., ldc.action('name', { actions ... });"),console.warn("related action object: ",n)),u.name?r[u.name]=n:void 0)},act:function(n){for(var t,e,r,i,o=[],a=[],s=1,l=arguments.length;s<l;++s)a.push(arguments[s]);for(t=a,s=0,r=(e=this.actHandler[n]||[]).length;s<r;++s)i=e[s],o.push(i.apply(this,t));return o},apps:[],app:function(){for(var n,t=[],e=0,r=arguments.length;e<r;++e)t.push(arguments[e]);return n=t,this.apps=this.apps.concat(n)},init:function(n){for(var t,s=this,e=[],l=function(n){var t,e,r,i="object"==typeof n?[{},"",n]:[{},n,s.module[n]],o=i[0],a=i[1],n=i[2];if(!n)return null;if(n.o)return n.o;if("initing"===n.state)throw new Error("circular dependency");for(n.state="initing",t=0,e=(i=n.d).length;t<e;++t)o[r=i[t]]=l(r);return n.state="inited",u.name=a,n.o=n.f.call(n._o={},o),u.name=null,n.o},r=0,i=(n=n?Array.isArray(n)?n:[n]:this.apps).length;r<i;++r)t=n[r],e.push(l(t));return e},run:function(n){return this.init(n),null}},window.addEventListener("DOMContentLoaded",function(){return n.init()})}.call(this);
