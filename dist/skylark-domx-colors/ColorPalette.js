/**
 * skylark-domx-colors - The skylark dom api extenstion library for color
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-domx/skylark-domx-colors/
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-noder","skylark-domx-finder","skylark-domx-query","skylark-domx-eventer","skylark-domx-styler","skylark-domx-fx","skylark-domx-plugins","skylark-graphics-color","./colors","./helper"],function(t,e,i,s,l,o,a,r,n,h,c,p,u){"use strict";e.noop;var f=h.Plugin.inherit({klassName:"ColorPalette",pluginName:"domx.colors.palette",options:{selectors:{},texts:{},states:{showSelectionPalette:!0},palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[]},_addColorToSelectionPalette:function(t){if(this.stating("showSelectionPalette")){var i=c.parse(t).toRgbString();if(!this._paletteLookup[i]&&-1===e.inArray(i,this._selectionPalette))for(this._selectionPalette.push(i);this._selectionPalette.length>this._maxSelectionSize;)this._selectionPalette.shift()}},getUniqueSelectionPalette:function(){var t=[],e=this.options;if(this.stating("showPalette"))for(var i=0;i<this._selectionPalette.length;i++){var s=c.parse(this._selectionPalette[i]).toRgbString();this._paletteLookup[s]||t.push(this._selectionPalette[i])}return t.reverse().slice(0,e.maxSelectionSize)},_drawPalette:function(){var t=this.options,i=this.current(),s=e.map(this._paletteArray,function(e,s){return u.paletteTemplate(e,i,"sp-palette-row sp-palette-row-"+s,t)});this._selectionPalette&&s.push(u.paletteTemplate(this.getUniqueSelectionPalette(),i,"sp-palette-row sp-palette-row-selection",t)),this.$el.html(s.join(""))},_updateUI:function(){this._drawPalette()},_applyOptions:function(){var t=this.options;if(this._states={showSelectionPalette:t.showSelectionPalette},t.palette)for(var i=this._palette=t.palette.slice(0),s=this._paletteArray=e.isArray(i[0])?i:[i],l=this._paletteLookup={},o=0;o<s.length;o++)for(var a=0;a<s[o].length;a++){l[c.parse(s[o][a]).toRgbString()]=!0}this._applyStates()},_construct:function(t,e){h.Plugin.prototype._construct.call(this,t,e),this.$el=this.$(),this._init()},_init:function(){var t=this,e=this.options;this._initialColor=e.color,this._selectionPalette=e.selectionPalette.slice(0);this._applyOptions(),this._initialColor?(this.current(this._initialColor),t._addColorToSelectionPalette(this._initialColor)):this._updateUI();var s=i.isIE?"mousedown.palette":"click.palette touchstart.palette";this.$el.on(s,".sp-thumb-el",function(e){return t.current(o(e.target).closest(".sp-thumb-el").data("color")),t.emit("selected",t.current()),!1})},_applyStates:function(){},stating:function(t,e){if(void 0===e)return this._states[t];this._states[t]=e,this._applyStates()},reflow:function(){this._drawPalette()},current:function(t){if(void 0===t)return this._current;this._current=t,this._updateUI()}});return h.register(f),p.ColorPalette=f});
//# sourceMappingURL=sourcemaps/ColorPalette.js.map
