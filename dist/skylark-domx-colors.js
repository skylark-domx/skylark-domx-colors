/**
 * skylark-domx-colors - The skylark dom api extenstion library for color
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx/skylark-domx-colors/
 * @license MIT
 */
!function(t,e){var s=e.define,require=e.require,i="function"==typeof s&&s.amd,a=!i&&"undefined"!=typeof exports;if(!i&&!s){var o={};s=e.define=function(t,e,s){"function"==typeof s?(o[t]={factory:s,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var s=e.split("/"),i=t.split("/");s.pop();for(var a=0;a<i.length;a++)"."!=i[a]&&(".."==i[a]?s.pop():s.push(i[a]));return s.join("/")}(e,t)}),resolved:!1,exports:null},require(t)):o[t]={factory:null,resolved:!0,exports:s}},require=e.require=function(t){if(!o.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=o[t];if(!module.resolved){var s=[];module.deps.forEach(function(t){s.push(require(t))}),module.exports=module.factory.apply(e,s)||null,module.resolved=!0}return module.exports}}if(!s)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-domx-colors/colors",["skylark-langx/skylark"],function(t){return t.attach("domx.colores",{})}),t("skylark-domx-colors/Indicator",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-noder","skylark-domx-eventer","skylark-domx-finder","skylark-domx-query","skylark-domx-plugins"],function(t,e,s,i,a,o,l,r){var n=r.Plugin.inherit({klassName:"Indicator",pluginName:"domx.indicator",options:{},_construct:function(t,e){this.overrided(t,e),this.listenTo(this.elmx(),"mousedown",t=>{this._start(t)})},_move:function(t){if(this._dragging){var e=this._offset,s=t.pageX,i=t.pageY,a=this._maxWidth,o=this._maxHeight,l=Math.max(0,Math.min(s-e.left,a)),r=Math.max(0,Math.min(i-e.top,o)),n=this.options.onmove;n&&n.apply(this._elm,[l,r,t])}},_start:function(t){var e=t.which?3==t.which:2==t.button;if(!e&&!this._dragging){var s=this.options.onstart;if(!s||!1!==s.apply(this._elm,arguments)){this._dragging=!0;var i=this.$();this._maxHeight=i.height(),this._maxWidth=i.width(),this._offset=i.offset();var o=this.$(document);this.listenTo(o,{mousemove:t=>{this._move(t)},mouseup:t=>{this._stop(t)}}),o.find("body").addClass("sp-dragging"),this._move(t),a.stop(t)}}},_stop:function(t){var e=this.$(document);this._dragging&&(this.unlistenTo(e),e.find("body").removeClass("sp-dragging"),onstop=this.options.onstop,onstop&&this._delay(function(){onstop.apply(this._elm,arguments)})),this._dragging=!1}});return r.register(n),n}),t("skylark-domx-colors/ColorPane",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-noder","skylark-domx-finder","skylark-domx-query","skylark-domx-eventer","skylark-domx-styler","skylark-domx-fx","skylark-domx-plugins","skylark-domx-popups","skylark-graphics-color","./colors","./Indicator"],function(t,e,s,i,a,o,l,r,n,h,p,d,c,u){"use strict";e.noop;var g=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),f=["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>","</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("");function _(t,e,s,i){for(var a=[],l=0;l<t.length;l++){var r=t[l];if(r){var n=d.parse(r),h=n.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";h+=d.equals(e,r)?" sp-thumb-active":"";var p=n.toString(i.preferredFormat||"rgb"),c="background-color:"+n.toRgbString();a.push('<span title="'+p+'" data-color="'+n.toRgbString()+'" class="'+h+'"><span class="sp-thumb-inner" style="'+c+';" /></span>')}else{a.push(o("<div />").append(o('<span data-color="" style="background-color:transparent;" class="sp-clear-display"></span>').attr("title",i.texts.noColorSelectedText)).html())}}return"<div class='sp-cf "+s+"'>"+a.join("")+"</div>"}var v=h.Plugin.inherit({klassName:"ColorPane",pluginName:"domx.colors.pane",options:{selectors:{pickerContainer:".sp-picker-container",toggleButton:".sp-palette-toggle",paletteContainer:".sp-palette",dragger:".sp-color",dragHelper:".sp-dragger",slider:".sp-hue",slideHelper:".sp-slider",alphaSliderInner:".sp-alpha-inner",alphaSlider:".sp-alpha",alphaSlideHelper:".sp-alpha-handle",textInput:".sp-input",initialColorContainer:".sp-initial",cancelButton:".sp-cancel",clearButton:".sp-clear",chooseButton:".sp-choose"},draggingClass:"sp-dragging",texts:{cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected"},states:{showPalette:!1,showPaletteOnly:!1,togglePaletteOnly:!1,showSelectionPalette:!0,showInput:!1,allowEmpty:!1,showButtons:!0,showInitial:!1,showAlpha:!1},color:!1,flat:!1,clickoutFiresChange:!0,hideAfterPaletteSelect:!1,appendTo:"body",maxSelectionSize:7,preferredFormat:!1,containerClassName:"",replacerClassName:"",theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,offset:null},_addColorToSelectionPalette:function(t){if(this.stating("showSelectionPalette")){var s=d.parse(t).toRgbString();if(!this._paletteLookup[s]&&-1===e.inArray(s,this._selectionPalette))for(this._selectionPalette.push(s);this._selectionPalette.length>this._maxSelectionSize;)this._selectionPalette.shift()}},getUniqueSelectionPalette:function(){var t=[],e=this.options;if(this.stating("showPalette"))for(var s=0;s<this._selectionPalette.length;s++){var i=d.parse(this._selectionPalette[s]).toRgbString();this._paletteLookup[i]||t.push(this._selectionPalette[s])}return t.reverse().slice(0,e.maxSelectionSize)},_drawPalette:function(){var t=this.options,s=this.get(),i=e.map(this._paletteArray,function(e,i){return _(e,s,"sp-palette-row sp-palette-row-"+i,t)});this._selectionPalette&&i.push(_(this.getUniqueSelectionPalette(),s,"sp-palette-row sp-palette-row-selection",t)),this.$paletteContainer.html(i.join(""))},_drawInitial:function(){var t=this.options;if(this.stating("showInitial")){var e=this._colorOnShow,s=this.get();this.$initialColorContainer.html(_([e,s],s,"sp-palette-row-initial",t))}},_updateHelperLocations:function(){var t=this._currentSaturation,e=this._currentValue;if(this.stating("allowEmpty")&&this._isEmpty)this.$alphaSlideHelper.hide(),this.$slideHelper.hide(),this.$dragHelper.hide();else{this.$alphaSlideHelper.show(),this.$slideHelper.show(),this.$dragHelper.show();var s=t*this._dragWidth,i=this._dragHeight-e*this._dragHeight;s=Math.max(-this._dragHelperHeight,Math.min(this._dragWidth-this._dragHelperHeight,s-this._dragHelperHeight)),i=Math.max(-this._dragHelperHeight,Math.min(this._dragHeight-this._dragHelperHeight,i-this._dragHelperHeight)),this.$dragHelper.css({top:i+"px",left:s+"px"});var a=this._currentAlpha*this._alphaWidth;this.$alphaSlideHelper.css({left:a-this._alphaSlideHelperWidth/2+"px"});var o=this._currentHue*this._slideHeight;this.$slideHelper.css({top:o-this._slideHelperHeight+"px"})}},_updateOriginalInput:function(t){var e=this.get(),s="";d.equals(e,this._colorOnShow);e&&(s=e.toString(this._currentPreferredFormat),this._addColorToSelectionPalette(e)),this._isInput&&this.$el.val(s)},_updateUI:function(){this.options;this._dragWidth=this.$dragger.width(),this._dragHeight=this.$dragger.height(),this._dragHelperHeight=this.$dragHelper.height(),this._slideWidth=this.$slider.width(),this._slideHeight=this.$slider.height(),this._slideHelperHeight=this.$slideHelper.height(),this._alphaWidth=this.$alphaSlider.width(),this._alphaSlideHelperWidth=this.$alphaSlideHelper.width(),this.$textInput.removeClass("sp-validation-error"),this._updateHelperLocations();var t=d.parse({h:360*this._currentHue,s:1,v:1});this.$dragger.css("background-color",t.toHexString());var e=this._currentPreferredFormat;this._currentAlpha<1&&(0!==this._currentAlpha||"name"!==e)&&("hex"!==e&&"hex3"!==e&&"hex6"!==e&&"name"!==e||(e="rgb"));var i=this.get({format:e}),a="";if(this.$previewElement.removeClass("sp-clear-display"),this.$previewElement.css("background-color","transparent"),!i&&this.stating("allowEmpty"))this.$previewElement.addClass("sp-clear-display");else{var o=i.toHexString(),l=i.toRgbString();if(this.$previewElement.css("background-color",l),this.stating("showAlpha")){var r=i.toRgb();r.a=0;var n=d.parse(r).toRgbString(),h="linear-gradient(left, "+n+", "+o+")";s.isIE?this.$alphaSliderInner.css("filter",d.parse(n).toFilter({gradientType:1},o)):(this.$alphaSliderInner.css("background","-webkit-"+h),this.$alphaSliderInner.css("background","-moz-"+h),this.$alphaSliderInner.css("background","-ms-"+h),this.$alphaSliderInner.css("background","linear-gradient(to right, "+n+", "+o+")"))}a=i.toString(e)}this.stating("showInput")&&this.$textInput.val(a),this.stating("showPalette")&&this._drawPalette(),this._drawInitial()},_applyOptions:function(){var t=this.options;if(this._states={allowEmpty:t.states.allowEmpty,showInput:t.states.showInput,showAlpha:t.states.showAlpha,showButtons:t.states.showButtons,togglePaletteOnly:t.states.togglePaletteOnly,showPalette:t.states.showPalette,showPaletteOnly:t.states.showPaletteOnly,showInitial:t.states.showInitial},t.palette)for(var s=this._palette=t.palette.slice(0),i=this._paletteArray=e.isArray(s[0])?s:[s],a=this._paletteLookup={},o=0;o<i.length;o++)for(var l=0;l<i[o].length;l++){var r=d.parse(i[o][l]).toRgbString();a[r]=!0}this.$container.toggleClass("sp-flat",t.flat).addClass(t.containerClassName),this._applyStates(),this.reflow()},_construct:function(t,e){this.overrided(t,e),this.$el=this.$();var s=this.options,i=s.theme,a=(this._selectionPalette=s.selectionPalette.slice(0),this.$container=o(f,t.ownerDocument).addClass(i)),l=(this.$pickerContainer=a.find(s.selectors.pickerContainer),this.$dragger=a.find(s.selectors.dragger),this.$dragHelper=a.find(s.selectors.dragHelper),this.$slider=a.find(s.selectors.slider),this.$slideHelper=a.find(s.selectors.slideHelper),this.$alphaSliderInner=a.find(s.selectors.alphaSliderInner),this.$alphaSlider=a.find(s.selectors.alphaSlider),this.$alphaSlideHelper=a.find(s.selectors.alphaSlideHelper),this.$textInput=a.find(s.selectors.textInput),this.$paletteContainer=a.find(s.selectors.paletteContainer),this.$initialColorContainer=a.find(s.selectors.initialColorContainer),this.$cancelButton=a.find(s.selectors.cancelButton),this.$clearButton=a.find(s.selectors.clearButton),this.$chooseButton=a.find(s.selectors.chooseButton),this.$toggleButton=a.find(s.selectors.toggleButton),this._isInput=this.$el.is("input")),r=(l&&"color"===this.$el.attr("type")&&inputTypeColorSupport(),this._shouldReplace=l&&!s.flat),n=this.$replacer=r?o(g).addClass(i).addClass(s.className).addClass(s.replacerClassName):o([]),h=(this.$offsetElement=r?n:this.$el,this.$previewElement=n.find(".sp-preview-inner"),this._initialColor=s.color||l&&this.$el.val());this._colorOnShow=!1,this._currentPreferredFormat=s.preferredFormat,this._isEmpty=!h;this._init()},_init:function(){var t=this,e=this.options;function i(){(t._dragHeight<=0||t._dragWidth<=0||t._slideHeight<=0)&&t.reflow(),t._isDragging=!0,t.$container.addClass(t.options.draggingClass),t._shiftMovementDirection=null}function a(){t._isDragging=!1,t.$container.removeClass(t.options.draggingClass)}function r(){t._updateUI()}if(s.isIE&&this.$container.find("*:not(input)").attr("unselectable","on"),this._shouldReplace&&this.$el.after(this.$replacer).hide(),e.flat)this.$el.after(this.$container).hide();else{var n="parent"===e.appendTo?this.$el.parent():o(e.appendTo);1!==n.length&&(n=o("body")),n.append(this.$container)}function h(){var e=textInput.val();if(null!==e&&""!==e||!t._allowEmpty){var s=d.parse(e);s.isValid()?(t.set(s),r(),t._updateOriginalInput()):t.$textInput.addClass("sp-validation-error")}else t.set(null),r(),t._updateOriginalInput()}function p(s){return s.data&&s.data.ignore?(t.set(o(s.target).closest(".sp-thumb-el").data("color")),r()):(t.set(o(s.target).closest(".sp-thumb-el").data("color")),r(),e.hideAfterPaletteSelect?(self_updateOriginalInput(!0),t.hide()):t._updateOriginalInput()),!1}this._applyOptions(),this.listenTo(this.$offsetElement,"click touchstart",function(e){t.toggle(),e.stopPropagation(),o(e.target).is("input")||e.preventDefault()}),this.$textInput.change(h),this.$textInput.on("paste",function(){setTimeout(h,1)}),this.$textInput.keydown(function(t){13==t.keyCode&&h()}),this.$cancelButton.text(e.texts.cancelText),this.listenTo(this.$cancelButton,"click",function(e){l.stop(e),t.revert(),t.hide()}),this.$clearButton.attr("title",e.texts.clearText),this.listenTo(this.$clearButton,"click",function(s){l.stop(s),t._isEmpty=!0,r(),e.flat&&t._updateOriginalInput(!0)}),this.$chooseButton.text(e.texts.chooseText),this.listenTo(this.$chooseButton,"click",function(e){l.stop(e),isValid()&&(t._updateOriginalInput(!0),t.hide())}),this.listenTo(this.$toggleButton,"click",function(e){l.stop(e),t.stating("showPaletteOnly",!t.stating("showPaletteOnly"))}),this.$alphaSlider.plugin("domx.indicator",{onmove:function(e,s,i){t._currentAlpha=e/t._alphaWidth,t._isEmpty=!1,i.shiftKey&&(t._currentAlpha=Math.round(10*t._currentAlpha)/10),r()},onstart:i,onstop:a}),this.$slider.plugin("domx.indicator",{onmove:function(e,s,i){t._currentHue=parseFloat(s/t._slideHeight),t._isEmpty=!1,t.stating("showAlpha")||(t._currentAlpha=1),r()},onstart:i,onstop:a}),this.$dragger.plugin("domx.indicator",{onmove:function(e,s,i){if(i.shiftKey){if(!t._shiftMovementDirection){var a=t._currentSaturation*t._dragWidth,o=t._dragHeight-t._currentValue*t._dragHeight,l=Math.abs(e-a)>Math.abs(s-o);t._shiftMovementDirection=l?"x":"y"}}else t._shiftMovementDirection=null;var n=!t._shiftMovementDirection||"x"===t._shiftMovementDirection,h=!t._shiftMovementDirection||"y"===t._shiftMovementDirection;n&&(t._currentSaturation=parseFloat(e/t._dragWidth)),h&&(t._currentValue=parseFloat((t._dragHeight-s)/t._dragHeight)),t._isEmpty=!1,t.stating("showAlpha")||(t._currentAlpha=1),r()},onstart:i,onstop:a}),this._initialColor?(this.set(this._initialColor),t._updateUI(),this._currentPreferredFormat=e.preferredFormat||d.parse(this._initialColor).format,t._addColorToSelectionPalette(this._initialColor)):this._updateUI(),e.flat&&this.show();var c=s.isIE?"mousedown.ColorPane":"click.ColorPane touchstart.ColorPane";this.$paletteContainer.on(c,".sp-thumb-el",p),this.$initialColorContainer.on(c,".sp-thumb-el:nth-child(1)",{ignore:!0},p)},revert:function(){this.set(this._colorOnShow,!0),this._updateOriginalInput(!0)},get:function(t){return t=t||{},this._allowEmpty&&this._isEmpty?null:d.parse({h:360*this._currentHue,s:this._currentSaturation,v:this._currentValue,a:Math.round(1e3*this._currentAlpha)/1e3})},set:function(t,e){var s,i,a=this.options;d.equals(t,this.get())?this._updateUI():(!t&&this.stating("allowEmpty")?this._isEmpty=!0:(this._isEmpty=!1,s=d.parse(t),i=s.toHsv(),this._currentHue=i.h%360/360,this._currentSaturation=i.s,this._currentValue=i.v,this._currentAlpha=i.a),this._updateUI(),s&&s.isValid()&&!e&&(this._currentPreferredFormat=a.preferredFormat||s.getFormat()))},_applyStates:function(){var t=this._states;t.showPaletteOnly&&(t.showPalette=!0),this.$toggleButton.text(t.showPaletteOnly?this.option("texts.togglePaletteMoreText"):this.option("texts.togglePaletteLessText")),this.$container.toggleClass("sp-input-disabled",!t.showInput).toggleClass("sp-clear-enabled",!!t.allowEmpty).toggleClass("sp-alpha-enabled",t.showAlpha).toggleClass("sp-buttons-disabled",!t.showButtons).toggleClass("sp-palette-buttons-disabled",!t.togglePaletteOnly).toggleClass("sp-palette-disabled",!t.showPalette).toggleClass("sp-palette-only",t.showPaletteOnly).toggleClass("sp-initial-disabled",!t.showInitial),t.allowEmpty||this.$clearButton.hide(),t.showPaletteOnly&&!this.option("flat")&&this.$container.css("left","-="+(this.$pickerContainer.outerWidth(!0)+5)),this._dragWidth=this.$dragger.width(),this._dragHeight=this.$dragger.height(),this._dragHelperHeight=this.$dragHelper.height(),this._slideWidth=this.$slider.width(),this._slideHeight=this.$slider.height(),this._slideHelperHeight=this.$slideHelper.height(),this._alphaWidth=this.$alphaSlider.width(),this._alphaSlideHelperWidth=this.$alphaSlideHelper.width()},stating:function(t,e){if(void 0===e)return this._states[t];this._states[t]=e,this._applyStates()},reflow:function(){if(!this.option("flat")){this.$container.css("position","absolute");var t=this.option("offset");t?this.$container.offset(t):this.$container.offset(p.calcOffset(this.$container[0],this.$offsetElement[0]))}this._updateHelperLocations(),this.stating("showPalette")&&this._drawPalette()},toggle:function(){this._visible?this.hide():this.show()},show:function(){this._visible?this.reflow():(this._visible=!0,this.$replacer.addClass("sp-active"),this.$container.removeClass("sp-hidden"),this.reflow(),this._updateUI(),this._colorOnShow=this.get())},hide:function(){this._visible&&!this._flat&&(this._visible=!1,this.$replacer.removeClass("sp-active"),this.$container.addClass("sp-hidden"))},destroy:function(){this.$el.show(),this.$offsetElement.off("click.ColorPane touchstart.ColorPane"),this.$container.remove(),this.$replacer.remove()}});return h.register(v),v.localization={},c.ColorPane=v}),t("skylark-domx-colors/colorer",["./colors","./ColorPane"],function(t,e){return t.colorer=function(t,s){return new e(t,s)}}),t("skylark-domx-colors/ColorPalette",["./colors"],function(t){}),t("skylark-domx-colors/ColorPicker",["./colors"],function(t){}),t("skylark-domx-colors/i18n/localization",[],function(){return{}}),t("skylark-domx-colors/i18n/texts_ja",["./localization"],function(t){return t.ja={cancelText:"中止",chooseText:"選択"}}),t("skylark-domx-colors/i18n/texts_zh-cn",["./localization"],function(t){return t["zh-cn"]={cancelText:"取消",chooseText:"选择",clearText:"清除",togglePaletteMoreText:"更多选项",togglePaletteLessText:"隐藏",noColorSelectedText:"尚未选择任何颜色"}}),t("skylark-domx-colors/i18n/texts_zh-tw",["./localization"],function(t){return t["zh-tw"]={cancelText:"取消",chooseText:"選擇",clearText:"清除",togglePaletteMoreText:"更多選項",togglePaletteLessText:"隱藏",noColorSelectedText:"尚未選擇任何顏色"}}),t("skylark-domx-colors/main",["skylark-domx-query","./colors","./colorer","./ColorPalette","./ColorPicker","./ColorPane","./i18n/texts_ja","./i18n/texts_zh-cn","./i18n/texts_zh-tw"],function(t,e,s){return t.fn.colorer=t.wraps.wrapper_every_act(s,e),e}),t("skylark-domx-colors",["skylark-domx-colors/main"],function(t){return t})}(s),!i){var l=require("skylark-langx-ns");a?module.exports=l:e.skylarkjs=l}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-colors.js.map
