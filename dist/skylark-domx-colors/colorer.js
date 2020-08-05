/**
 * skylark-domx-colors - The skylark dom api extenstion library for color
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx/skylark-domx-colors/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-query","./colors","./ColorBox","./ColorPane"],function(s,a,e,l,i){var d=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),p=["<div class='sp-container'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>","</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("");return e.colorer=function(e,t){var c=(t=s.mixin({color:!1,flat:!1,appendTo:"body",maxSelectionSize:7,preferredFormat:!1,containerClassName:"",replacerClassName:"",theme:"sp-light",offset:null},t)).theme,n=t.flat,r=t.appendTo,v=a(e),o=a(p,e.ownerDocument).addClass(c),u=v.is("input"),f=(u&&v.attr("type"),this._shouldReplace=u&&!n),h=f?a(d).addClass(c).addClass(t.className).addClass(t.replacerClassName):a([]);if(delete t.flat,delete t.appendTo,t.color=t.color||u&&v.val(),f&&v.after(h).hide(),o.toggleClass("sp-flat",n).addClass(t.containerClassName),n){v.after(o).hide();var m=new i(o[0],t);return o.show(),m}var b="parent"===r?v.parent():a(r);return 1!==b.length&&(b=a("body")),b.append(o),t.pane.template=o,new l(h[0],t)}});
//# sourceMappingURL=sourcemaps/colorer.js.map
