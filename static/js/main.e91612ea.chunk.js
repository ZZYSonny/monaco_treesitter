(this.webpackJsonpmonaco_treesitter=this.webpackJsonpmonaco_treesitter||[]).push([[0],{90:function(t,e,n){},92:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var r=n(13),a=n.n(r),i=n(33),o=n.n(i),s=n(0),u=n(1),c=n(2),h=n(3),p=n(7),d=n.n(p),l=n(16),f=n(35),g=n(26),v=n.n(g),b=n(34);function m(t,e){return{startLineNumber:t.startPosition.row+1,startColumn:t.startPosition.column+1,endLineNumber:t.endPosition.row+1,endColumn:t.endPosition.column+1,message:e,severity:b.a.Error}}function j(t){return t.isMissing()?[m(t,"Missing ".concat(t.type))]:"ERROR"===t.type?[m(t,"ERROR")]:t.hasError()?t.children.flatMap(j):[]}var O=function(){function t(e,n,r,a){Object(s.a)(this,t),this.editor=void 0,this.model=void 0,this.monaco=void 0,this.parser=void 0,this.language=void 0,this.tree=void 0,this.model=e.getModel(),this.editor=e,this.monaco=n,this.parser=r,this.language=a,this.tree=this.parser.parse(this.editor.getValue())}return Object(u.a)(t,[{key:"updateMarkerFromTree",value:function(){var t=j(this.tree.rootNode);this.monaco.editor.setModelMarkers(this.model,"owner",t)}},{key:"init",value:function(){var t=Object(l.a)(d.a.mark((function t(){var e=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.updateMarkerFromTree(),this.editor.onDidChangeModelContent((function(t){e.tree=e.parser.parse(e.editor.getValue()),e.updateMarkerFromTree()}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),y=n(6),w=n(5),k="https://tree-sitter.github.io/",M=new Map([["cpp",function(t){Object(c.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"init",value:function(){var t=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.a)(Object(w.a)(n.prototype),"init",this).call(this);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),n}(O)],["python",O]]);function x(t,e,n){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(d.a.mark((function t(e,n,r){var a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.init();case 2:return a=new v.a,t.next=5,v.a.Language.load(k+"tree-sitter-"+e+".wasm");case 5:return i=t.sent,a.setLanguage(i),t.abrupt("return",new(M.get(e)||O)(n,r,a,i));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(90);var E=n(18),F=function(t){Object(c.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={props:t},r}return Object(u.a)(n,[{key:"handleEditorDidMount",value:function(){var t=Object(l.a)(d.a.mark((function t(e,n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(this.props.language,e,n);case 2:return r=t.sent,t.next=5,r.init();case 5:e.setValue("#include<iostream>\nusing namespace std;\n\nint main(){\n\n}\n");case 6:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(E.jsx)(f.a,{height:"90vh",defaultLanguage:this.props.language,onMount:this.handleEditorDidMount.bind(this),theme:"light",options:this.props.options})}}]),n}(a.a.Component),L=function(t){Object(c.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={},r}return Object(u.a)(n,[{key:"render",value:function(){return Object(E.jsx)(F,{language:"python",onReady:function(t){return console.log(t)},options:{fontSize:18}})}}]),n}(a.a.Component),R=(n(92),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),i(t),o(t)}))});o.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(L,{})}),document.getElementById("root")),R()}},[[93,1,2]]]);
//# sourceMappingURL=main.e91612ea.chunk.js.map