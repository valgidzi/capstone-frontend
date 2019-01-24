(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,a){e.exports=a(453)},192:function(e,t,a){},212:function(e,t,a){},214:function(e,t,a){},216:function(e,t,a){},218:function(e,t,a){},257:function(e,t,a){},371:function(e,t,a){},381:function(e,t){},440:function(e,t,a){},442:function(e,t,a){},444:function(e,t,a){},446:function(e,t,a){},448:function(e,t,a){},450:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(35),s=a.n(r),c=a(456),i=a(455),l=(a(192),a(6)),u=a(7),d=a(9),m=a(8),h=a(10),f=a(71),p=a(16),b=a.n(p),g=(a(212),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this))).onInputChange=function(e){var t=e.target.name,n=e.target.value,o={};o[t]=n,a.setState(o)},a.getScore=function(e){b.a.post("http://teachers-corner-api.us-west-2.elasticbeanstalk.com/textscore/",e).then(function(e){console.log(e.data.score),a.setState({text:e.data.text,score:e.data.score});var t={text:a.state.text,score:a.state.score};a.props.textScoreCallback(t)}).catch(function(e){a.setState({errors:e.message})})},a.onFormSubmit=function(e){if(e.preventDefault(),""===a.props.user)a.setState({errors:"You must be logged in to do that."});else{var t={text:a.state.text};console.log(t),a.getScore(t),a.setState({showVocabButton:!0,showResetButton:!0})}},a.onResetButtonClick=function(){a.setState({text:"",score:"",showVocabButton:!1,showResetButton:!1}),a.props.startOverCallback()},a.state={text:"",score:"",showVocabButton:!1,showResetButton:!1,errors:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=o.a.createElement("button",{className:"btn btn-secondary btn-lg",onClick:this.props.displayVocabFormCallback},"Explore Vocabulary"),t=o.a.createElement("button",{className:"btn btn-secondary btn-lg",onClick:this.onResetButtonClick},"Start Over"),a=this.state.score?"Learner Level: ".concat(this.state.score):"Get Learner Level";return o.a.createElement("section",null,o.a.createElement("div",{className:"errors-container"},this.state.errors),o.a.createElement("div",{className:"text-nav"},o.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg",onClick:this.onFormSubmit},a),this.state.showVocabButton?e:"",this.state.showResetButton?t:""),o.a.createElement("form",{className:"text-form-container",id:"newtextform",onSubmit:this.onFormSubmit},o.a.createElement("textarea",{className:"form-control",rows:"8",name:"text",form:"newtextform",placeholder:"Type or paste the text you want to work with",value:this.state.text,onChange:this.onInputChange})))}}]),t}(n.Component)),v=(a(214),function(e){return o.a.createElement("div",{className:"suggested-word-container"},o.a.createElement("button",{type:"button",className:"btn btn-outline-info",onClick:function(){console.log(e.word),e.onSuggestedWordClickCallback(e.word)}},e.word))}),w=(a(216),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this))).onInputChange=function(e){var t=e.target.name,n=e.target.value,o={};o[t]=n,a.setState(o)},a.getDefinitions=function(e){var t="http://teachers-corner-api.us-west-2.elasticbeanstalk.com/definitions/?word=".concat(e.word);b.a.get(t).then(function(e){console.log(t),console.log(e.data.definitions),a.setState({definitions:e.data.definitions,highlight:!0})}).catch(function(e){a.setState({errors:e.message})})},a.setClickedWord=function(e){a.setState({word:e})},a.onFormSubmit=function(e){e.preventDefault();var t={word:a.state.word};a.getDefinitions(t)},a.onDefSelection=function(e){e.preventDefault();var t={word:a.state.word,definition:a.state.selectedDef};a.props.selectedDefCallback(t),a.setState({word:"",definitions:[],selectedDef:"",highlight:!1})},a.state={word:"",definitions:[],selectedDef:"",suggestedWords:[],highlight:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={text:this.props.text};console.log(t),b.a.post("http://teachers-corner-api.us-west-2.elasticbeanstalk.com/difficultwords/",t).then(function(t){console.log(t.data);var a=t.data.words.filter(function(e,t,a){return a.indexOf(e)===t});e.setState({suggestedWords:a})}).catch(function(t){e.setState({error:t.message})})}},{key:"render",value:function(){var e=this,t=this.state.definitions.map(function(e,t){return o.a.createElement("option",{key:t,value:e},e)}),a=this.state.suggestedWords.map(function(t,a){return o.a.createElement(v,{key:a,word:t,onSuggestedWordClickCallback:e.setClickedWord})});return o.a.createElement("div",{className:"all-vocab-forms-container"},o.a.createElement("div",{className:"suggested-words-container"},a),o.a.createElement("form",{className:"vocab-form-container",id:"vocabform",onSubmit:this.onFormSubmit},o.a.createElement("input",{type:"text",className:"form-control form-control-lg",name:"word",placeholder:"Type a word into the text box or click a suggested word above",value:this.state.word,onChange:this.onInputChange}),o.a.createElement("input",{type:"submit",className:"btn btn-outline-dark btn-lg",value:"Get Definition"})),o.a.createElement("form",{className:"definition-form-container",id:"definitionform",onSubmit:this.onDefSelection},o.a.createElement("select",{name:"selectedDef",value:this.state.selectedDef,onChange:this.onInputChange,className:this.state.highlight?"form-control highlight":"form-control"},o.a.createElement("option",{key:"blank",value:"Select a definition"},"Select a definition"),t),o.a.createElement("input",{type:"submit",className:"btn btn-outline-dark btn-lg",value:"Select Definition"})))}}]),t}(n.Component)),E=a(48),k=a(49),y=a(17),C=(a(218),a(18)),O=a(28);function j(){var e=Object(y.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  background-color: white;\n"]);return j=function(){return e},e}var x=C.a.div(j()),S=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(O.b,{key:this.props.word.id,draggableId:this.props.word.id,index:this.props.index},function(t){return o.a.createElement(x,Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),e.props.word.content,t.placeholder)})}}]),t}(o.a.Component);a(257);function N(){var e=Object(y.a)(["\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n"]);return N=function(){return e},e}function H(){var e=Object(y.a)(["\n  padding: 8px;\n"]);return H=function(){return e},e}function D(){var e=Object(y.a)(["\n  background-color: white;\n"]);return D=function(){return e},e}var F=C.a.div(D()),I=C.a.h3(H()),L=C.a.div(N()),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={hidden:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=function(){e.setState({hidden:!0}),e.props.hideColumnCallback(e.props.column.title)};return o.a.createElement("div",{className:this.state.hidden?"hidden":"visible"},o.a.createElement(O.b,{draggableId:this.props.column.id,index:this.props.index},function(a){return o.a.createElement(F,Object.assign({},a.draggableProps,{ref:a.innerRef}),o.a.createElement(I,a.dragHandleProps,"   "),o.a.createElement(O.c,{droppableId:e.props.column.id,type:"word"},function(a){return o.a.createElement(L,Object.assign({ref:a.innerRef},a.droppableProps),e.props.words.map(function(e,t){return o.a.createElement(S,{key:e.id,word:e,index:t})}),o.a.createElement("button",{onClick:t,className:"btn btn-outline-danger"},"X"),a.placeholder)}))}))}}]),t}(o.a.Component),B=a(27),M=a(185),U=a(176),W=a.n(U),R=a(177),G=a(178),T=a(179),_=a(29),A=a(180);function z(){var e=Object(y.a)(["\n  position: relative;\n  padding: 1px 18px 17px;\n  margin: 0 -20px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 20px;\n"]);return z=function(){return e},e}function P(){var e=Object(y.a)(["\n  display: inline-block;\n  margin-left: 15px;\n;"]);return P=function(){return e},e}function K(){var e=Object(y.a)(["\n  cursor: pointer;\n  color: ",";\n"]);return K=function(){return e},e}function J(){var e=Object(y.a)(["\n  margin: 15px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n\n  background-color: white;\n  padding: 10px;\n"]);return J=function(){return e},e}var X=C.a.div(J()),Y=C.a.span(K(),function(e){return e.reversed?e.active?"white":"#aaa":e.active?"black":"#ccc"}),$=C.a.div(P()),q=Object(C.a)($)(z()),Q={em:"italic",strong:"bold",u:"underline"},Z=[{deserialize:function(e,t){if("p"===e.tagName.toLowerCase())return{object:"block",type:"paragraph",data:{className:e.getAttribute("class")},nodes:t(e.childNodes)}},serialize:function(e,t){if("block"===e.object&&"paragraph"===e.type)return o.a.createElement("p",{className:e.data.get("className")},t)}},{deserialize:function(e,t){var a=Q[e.tagName.toLowerCase()];if(a)return{object:"mark",type:a,nodes:t(e.childNodes)}},serialize:function(e,t){if("mark"===e.object)switch(e.type){case"bold":return o.a.createElement("strong",null,t);case"italic":return o.a.createElement("em",null,t);case"underlined":return o.a.createElement("u",null,t)}}}],ee=new A.a({rules:Z}),te=Object(_.isKeyHotkey)("mod+b"),ae=Object(_.isKeyHotkey)("mod+i"),ne=Object(_.isKeyHotkey)("mod+u"),oe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:ee.deserialize(a.props.text)},a.schema={marks:{highlight:{isAtomic:!0}}},a.hasMark=function(e){return a.state.value.activeMarks.some(function(t){return t.type===e})},a.onSaveClick=function(){var e=a.state.value,t=ee.serialize(e);console.log(t),a.props.onSaveClickCallback(t)},a.ref=function(e){a.editor=e},a.renderMarkButton=function(e,t){var n=a.hasMark(e);return o.a.createElement(Y,{active:n,onMouseDown:function(t){return a.onClickMark(t,e)}},o.a.createElement(W.a,{icon:t}))},a.renderMark=function(e,t,a){var n=e.children,r=e.mark,s=e.attributes;switch(r.type){case"bold":return o.a.createElement("strong",s,n);case"italic":return o.a.createElement("em",s,n);case"underlined":return o.a.createElement("u",s,n);case"highlight":return o.a.createElement("span",Object.assign({},s,{style:{backgroundColor:"#ffeeba"}}),n);default:return a()}},a.onChange=function(e){var t=e.value;a.setState({value:t})},a.onKeyDown=function(e,t,a){var n;if(te(e))n="bold";else if(ae(e))n="italic";else{if(!ne(e))return a();n="underlined"}e.preventDefault(),t.toggleMark(n)},a.onClickMark=function(e,t){e.preventDefault(),a.editor.toggleMark(t)},a.onInputChange=function(e){var t=Object(B.a)(Object(B.a)(a)).editor,n=t.value,o=e.target.value,r=n.document.getTexts(),s=[];r.forEach(function(e){var t=e.key,a=e.text.split(o),n=0;a.forEach(function(e,a){0!==a&&s.push({anchor:{key:t,offset:n-o.length},focus:{key:t,offset:n},mark:{type:"highlight"}}),n=n+e.length+o.length})}),t.withoutSaving(function(){t.setDecorations(s)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(X,null,o.a.createElement(q,null,this.renderMarkButton("bold",R.bold),this.renderMarkButton("italic",G.italic),this.renderMarkButton("underlined",T.underline),o.a.createElement("div",null,o.a.createElement("input",{type:"search",placeholder:"Search the text...",onChange:this.onInputChange}))),o.a.createElement(M.a,{spellCheck:!0,autoFocus:!0,placeholder:"Enter some rich text...",ref:this.ref,value:this.state.value,onChange:this.onChange,onKeyDown:this.onKeyDown,renderMark:this.renderMark,schema:this.schema}),o.a.createElement("button",{type:"button",className:"btn btn-outline-success",onClick:this.onSaveClick},"Save Handout"))}}]),t}(o.a.Component),re=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this))).onInputChange=function(e){var t=e.target.name,n=e.target.value,o={};o[t]=n,a.setState(o)},a.onImageFormSubmit=function(e){e.preventDefault(),a.props.addImageUrlCallback(a.state.imageUrl),a.setState({imageUrl:""})},a.state={imageUrl:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{id:"imageform",onSubmit:this.onImageFormSubmit},o.a.createElement("input",{type:"text",className:"form-control",name:"imageUrl",placeholder:"Image URL",value:this.state.imageUrl,onChange:this.onInputChange}),o.a.createElement("input",{type:"submit",className:"btn btn-outline-success",value:"Add Image"}))}}]),t}(n.Component);function se(){var e=Object(y.a)(["\n  display: flex;\n"]);return se=function(){return e},e}var ce=C.a.div(se()),ie=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).onInputChange=function(e){var t=e.target.name,n=e.target.value,o={};o[t]=n,a.setState(o)},a.onDragEnd=function(e){var t=e.destination,n=e.source,o=e.draggableId,r=e.type;if(console.log(t),console.log(n),console.log(o),console.log(a.state.words),t&&(t.droppableId!==n.droppableId||t.index!==n.index))if("column"!==r){var s=a.state.columns[n.droppableId],c=Array.from(s.wordIds);c.splice(n.index,1),c.splice(t.index,0,o);var i=Object(k.a)({},s,{wordIds:c}),l=Object(k.a)({},a.state,{columns:Object(k.a)({},a.state.columns,Object(E.a)({},i.id,i))});a.setState(l)}else{var u=Array.from(a.state.columnOrder);u.splice(n.index,1),u.splice(t.index,0,o);var d=Object(k.a)({},a.state,{columnOrder:u});a.setState(d)}};var n,o,r=function(e,t){return Object.assign.apply(Object,[{}].concat(Object(f.a)(e.map(function(e){return Object(E.a)({},e[t],e)}))))};for(a.state={title:"",directions:"",displayWords:!0,displayDefinitions:!0,words:r(e.words,"id"),defs:r(e.defs,"id"),columns:{"column-1":{id:"column-1",title:"Words",wordIds:[]},"column-2":{id:"column-2",title:"Definitions",wordIds:[]}},columnOrder:["column-1","column-2"]},n=0;n<Object.keys(a.state.words).length;n++)a.state.columns["column-1"].wordIds.push("word-".concat(n+1));for(o=0;o<Object.keys(a.state.defs).length;o++)a.state.columns["column-2"].wordIds.push("def-".concat(o+1));return a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=function(t){"Words"===t?e.setState({displayWords:!1}):"Definitions"===t&&e.setState({displayDefinitions:!1})};return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{id:"titleform"},o.a.createElement("input",{type:"text",className:"form-control",name:"title",placeholder:"Title",value:this.state.title,onChange:this.onInputChange})),o.a.createElement(re,{addImageUrlCallback:function(t){e.setState({imageUrl:t})}}),this.state.imageUrl?o.a.createElement("img",{src:this.state.imageUrl,alt:this.state.imageUrl}):"",o.a.createElement("form",{id:"directionsform"},o.a.createElement("input",{type:"text",className:"form-control",name:"directions",placeholder:"Directions",value:this.state.directions,onChange:this.onInputChange})),o.a.createElement(oe,{text:this.props.text,onSaveClickCallback:function(t){var a=e.state.columns["column-1"].wordIds.map(function(t){return e.state.words[t].content}),n=e.state.columns["column-2"].wordIds.map(function(t){return e.state.defs[t].content+"@"}),o={title:e.state.title,directions:e.state.directions,image_url:e.state.imageUrl,display_words:e.state.displayWords,display_defintions:e.state.displayDefinitions,column_order:e.state.columnOrder.toString(),text:t,words:a.toString(),definitions:n.toString()};console.log(o),e.props.saveHandoutCallback(o)}}),o.a.createElement(O.a,{onDragEnd:this.onDragEnd},o.a.createElement(O.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},function(a){return o.a.createElement(ce,Object.assign({},a.droppableProps,{ref:a.innerRef}),e.state.columnOrder.map(function(a,n){var r=e.state.columns[a],s="Words"===r.title?e.state.words:e.state.defs,c=r.wordIds.map(function(e){return s[e]});return o.a.createElement(V,{key:r.id,column:r,words:c,index:n,hideColumnCallback:t})}),a.placeholder)})))}}]),t}(o.a.Component),le=(a(371),a(182)),ue=a.n(le),de=a(183),me=a.n(de),he=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).takeScreenshot=function(){me()(document.body,{useCORS:!0}).then(function(e){window.open().document.write('<div><img src="'+e.toDataURL()+'" width="1000" /></div> ')})},a.state={materials:[],hideView:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.text,a=this.props.data.words.split(",").map(function(e,t){return o.a.createElement("p",{key:t},e)}),n=this.props.data.definitions,r=n.slice(0,n.length-1),s=[];r.split("@").forEach(function(e){var t=","===e[0]?e.slice(1):e;s.push(t)});var c=s.map(function(e,t){return o.a.createElement("p",{key:t},e)}),i=this.props.data.column_order.split(",");return o.a.createElement("div",{className:"handout-view-container"},o.a.createElement("button",{onClick:this.takeScreenshot,"data-html2canvas-ignore":"true"},"Print"),o.a.createElement("h2",null,this.props.data.title),o.a.createElement("div",null,o.a.createElement("img",{src:this.props.data.image_url,alt:this.props.data.image_url})),o.a.createElement("h5",null,this.props.data.directions),o.a.createElement("div",{className:"text-container"},ue()(t)),o.a.createElement("div",{className:"columns-container"},o.a.createElement("div",{className:"column-1"===i[0]&&!e.props.data.display_words||"column-2"===i[0]&&!e.props.data.display_definitions?"hidden":"column"},"column-1"===i[0]?a:c),o.a.createElement("div",{className:"column-1"===i[1]&&!e.props.data.display_words||"column-2"===i[1]&&!e.props.data.display_definitions?"hidden":"column"},"column-1"===i[1]?a:c)))}}]),t}(n.Component),fe=(a(440),function(e){return o.a.createElement("div",{className:"selection-container"},o.a.createElement("button",{onClick:function(){console.log(e.word),e.onDeleteClickCallback(e.word)},className:"btn btn-small delete"},"X"),o.a.createElement("div",{className:"selection-text"},e.word,": ",e.def))}),pe=(a(442),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).textScore=function(e){console.log(e),a.setState({text:e.text,score:e.score})},a.selectedDef=function(e){console.log(e),a.setState(function(t){return{selections:[].concat(Object(f.a)(t.selections),[[e.word,e.definition]])}})},a.deleteSelection=function(e){var t=a.state.selections;t.forEach(function(a,n){a[0]===e&&t.splice(n,1)}),a.setState({selections:t})},a.saveHandout=function(e){e.user=a.state.user,e.score=a.state.score,console.log(e),b.a.post("http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/",e).then(function(e){console.log(e.data),a.displayHandoutView(e.data)}).catch(function(e){console.log(e.message)})},a.displayVocabForm=function(){a.setState({showTextForm:!0,showVocabForm:!0,showGenerateHandouts:!1,showHandoutView:!1})},a.displayGenerateHandouts=function(){a.setState({showGenerateHandouts:!0,showTextForm:!1,showVocabForm:!1,showHandoutView:!1})},a.displayHandoutView=function(e){a.setState({showGenerateHandouts:!1,showTextForm:!1,showVocabForm:!1,showHandoutView:!0,handout:e})},a.startOver=function(){a.setState({text:"",score:"",definitions:[],selections:[],showTextForm:!0,showGenerateHandouts:!1,showHandoutView:!1,showVocabForm:!1})},a.state={user:e.user,text:"",score:"",definitions:[],selections:[],showTextForm:!0,showGenerateHandouts:!1,showHandoutView:!1,showVocabForm:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showTextForm?o.a.createElement(g,{textScoreCallback:this.textScore,displayVocabFormCallback:this.displayVocabForm,startOverCallback:this.startOver,user:this.state.user}):"",a=this.state.showVocabForm?o.a.createElement(w,{selectedDefCallback:this.selectedDef,text:this.state.text}):"",n=this.state.selections.map(function(t){return o.a.createElement(fe,{key:t[0],word:t[0],def:t[1],onDeleteClickCallback:e.deleteSelection})}),r=this.state.selections.map(function(e,t){return{id:"word-".concat(t+1),content:e[0]}}),s=this.state.selections.map(function(e,t){return{id:"def-".concat(t+1),content:e[1]}}),c="<p>"+this.state.text+"</p>",i=this.state.showGenerateHandouts?o.a.createElement(ie,{text:c,words:r,defs:s,saveHandoutCallback:this.saveHandout}):"",l=this.state.showHandoutView?o.a.createElement(he,{data:this.state.handout}):"";return o.a.createElement("section",{className:"text-container-container"},this.state.showVocabForm?o.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg",onClick:this.displayGenerateHandouts},"Generate Handouts"):"",o.a.createElement("div",{className:"text-container-forms"},t,a),o.a.createElement("div",{className:"selections-list-container"},this.state.showTextForm&&""!==this.state.score?n:""),o.a.createElement("div",{className:"text-container-handouts"},i,l))}}]),t}(n.Component)),be=(a(444),function(e){return o.a.createElement("div",{className:"card width"},o.a.createElement("div",{className:"handout-card card-body"},o.a.createElement("h5",{className:"card-title"},e.data.title),o.a.createElement("p",{className:"card-text"},e.data.directions),o.a.createElement("p",{className:"card-text"},e.data.score),o.a.createElement("p",{className:"card-text"},"Created by ",e.data.user),o.a.createElement("button",{onClick:function(){console.log(e.data.id),e.onHandoutDetailClickCallback(e.data.id)}},"View")))}),ge=(a(446),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).onInputChange=function(e){var t=e.target.name,n=e.target.value,o={};o[t]=n,a.setState(o)},a.onFormSubmit=function(e){e.preventDefault(),console.log(a.state.selectedLevel),a.props.onSelectLevelCallback(a.state.selectedLevel)},a.state={selectedLevel:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=["Select a learner level","A1 - Low","A1 - High","A2 - Low","A2 - High","B1 - Low","B1 - High","B2 - Low","B2 - High","C1 - Low","C1 - High","C2 - Low","C2 - High"].map(function(e,t){return o.a.createElement("option",{key:t,value:e},e)});return o.a.createElement("div",null,o.a.createElement("form",{className:"level-form-container",id:"levelform",onSubmit:this.onFormSubmit},o.a.createElement("select",{name:"selectedLevel",value:this.state.selectedLevel,onChange:this.onInputChange,className:"form-control level-form"},e),o.a.createElement("input",{type:"submit",className:"btn btn-outline-dark",value:"Select Level"}),o.a.createElement("button",{type:"button",className:"btn btn-outline-dark",onClick:this.props.clearFilterCallback},"Clear Filter")))}}]),t}(n.Component)),ve=(a(448),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).onInputChange=function(e){var t=e.target.name,n=e.target.value,o={};o[t]=n,a.setState(o)},a.getDetail=function(){b.a.get("http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/1/").then(function(e){console.log(e.data)}).catch(function(e){console.log(e.message)})},a.levelFilter=function(e){var t=[];return a.state.handouts.forEach(function(a){a.score===e&&t.push(a)}),t},a.onSelectLevel=function(e){console.log(a.levelFilter(e)),a.setState({levelFilteredHandouts:a.levelFilter(e),selectedLevel:e,filter:!0})},a.clearFilter=function(){a.setState({levelFilteredHandouts:[],selectedLevel:"",filter:!1})},a.state={handouts:[],selectedHandout:"",levelFilteredHandouts:[],selectedLevel:"",view:!1,edit:!1,filter:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/").then(function(t){console.log(t.data),e.setState({handouts:t.data})}).catch(function(t){e.setState({error:t.message})})}},{key:"render",value:function(){var e=this,t=this.state.handouts.map(function(t){return o.a.createElement(be,{key:t.id,data:t,onHandoutDetailClickCallback:e.props.selectedHandoutCallback})}),a=this.state.levelFilteredHandouts.map(function(t){return o.a.createElement(be,{key:t.id,data:t,onHandoutDetailClickCallback:e.props.selectedHandoutCallback})}),n="".concat(this.props.user,"'s Handouts");return o.a.createElement("section",{className:"handout-list-container"},o.a.createElement("h4",{className:"title"},n),o.a.createElement(ge,{onSelectLevelCallback:this.onSelectLevel,clearFilterCallback:this.clearFilter}),o.a.createElement("div",{className:"handout-list"},this.state.filter?a:t))}}]),t}(n.Component)),we=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).getDetail=function(){b.a.get("http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/1/").then(function(e){console.log(e.data)}).catch(function(e){console.log(e.message)})},a.setSelectedHandout=function(e){console.log(e),b.a.get("http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/".concat(e,"/")).then(function(e){console.log(e.data),a.setState({selectedHandout:e.data,view:!0})}).catch(function(e){console.log(e.message),a.setState({error:e.message})})},a.state={user:e.user,handouts:[],selectedHandout:"",view:!1,edit:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.view||this.state.edit?"":o.a.createElement(ve,{selectedHandoutCallback:this.setSelectedHandout,user:this.state.user}),t=this.state.view?o.a.createElement(he,{data:this.state.selectedHandout}):"";return o.a.createElement("section",null,e,t)}}]),t}(n.Component),Ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this))).onInputChange=function(e){var t=e.target.name,n=e.target.value,o={};o[t]=n,a.setState(o)},a.onFormSubmit=function(e){e.preventDefault();var t=a.state.user;a.setState({showForm:!1}),a.props.logInUserCallback(t)},a.state={user:"",showForm:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.showForm?o.a.createElement("form",{className:"login-form-container",id:"loginform",onSubmit:this.onFormSubmit},o.a.createElement("label",{htmlFor:"user"},"Username:"),o.a.createElement("input",{type:"text",className:"form-control form-control-lg",name:"user",value:this.state.user,onChange:this.onInputChange}),o.a.createElement("input",{type:"submit",className:"btn btn-outline-dark btn-lg",value:"Log In"})):"Welcome, ".concat(this.state.user,"! "))}}]),t}(n.Component),ke=a(454),ye=(a(450),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={user:""},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=function(t){e.setState({user:t})},a=o.a.createElement("ul",{className:"nav-menu","data-html2canvas-ignore":"true"},o.a.createElement(ke.a,{to:"/"},o.a.createElement("h1",null,"teachers corner")),o.a.createElement(ke.a,{to:"/"},o.a.createElement("button",{className:"btn btn-secondary btn-lg",type:"button",onClick:function(){e.setState({user:""})}},"Log Out")),o.a.createElement(ke.a,{to:"/textscore"},o.a.createElement("button",{className:"btn btn-secondary btn-lg",type:"button"},"Create")),o.a.createElement(ke.a,{to:"/search"},o.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg"},"Search"))),n=o.a.createElement("ul",{className:"nav-menu","data-html2canvas-ignore":"true"},o.a.createElement(ke.a,{to:"/"},o.a.createElement("h1",null,"teachers' corner")),o.a.createElement(ke.a,{to:"/login"},o.a.createElement("button",{className:"btn btn-secondary btn-lg",type:"button"},"Log In"))),r=""===this.state.user?n:a;return o.a.createElement("div",null,r,o.a.createElement(i.a,{exact:!0,path:"/login",render:function(e){return o.a.createElement(Ee,{logInUserCallback:t})}}),o.a.createElement(i.a,{exact:!0,path:"/textscore",render:function(t){return o.a.createElement(pe,{user:e.state.user})}}),o.a.createElement(i.a,{exact:!0,path:"/search",render:function(t){return o.a.createElement(we,{user:e.state.user})}}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(i.a,{path:"/",component:ye})));s.a.render(Ce,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[187,2,1]]]);
//# sourceMappingURL=main.cf48f0ee.chunk.js.map