!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a={makeRow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new Array(9);return t.fill(e),t},makeMatrix:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.from({length:9},function(){return e.makeRow(t)})},shuffle:function(e){for(var t=e.length-2,n=0;n<=t;n++){var r=n+Math.floor(Math.random()*(e.length-n)),a=[e[r],e[n]];e[n]=a[0],e[r]=a[1]}return e},checkFillable:function(e,t,n,r){for(var a=e[n],i=this.makeRow().map(function(t,n){return e[n][r]}),u=o.convertToBoxIndex(n,r).boxIndex,c=o.getBoxCells(e,u),s=0;s<9;s++)if(a[s]===t||i[s]===t||c[s]===t)return!1;return!0}},o={getBoxCells:function(e,t){for(var n=3*Math.floor(t/3),r=t%3*3,a=[],o=0;o<9;o++){var i=n+Math.floor(o/3),u=r+o%3;a.push(e[i][u])}return a},convertToBoxIndex:function(e,t){return{boxIndex:3*Math.floor(e/3)+Math.floor(t/3),cellIndex:e%3*3+t%3}},convertFromBoxIndex:function(e,t){return{boxIndex:3*Math.floor(e/3)+Math.floor(t/3),celIndex:e%3*3+t%3}}};e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"matrix",get:function(){return a}},{key:"box",get:function(){return o}}]),e}()},function(e,t,n){"use strict";var r=n(2),a=n(6),o=new r($("#container"));o.build(),o.layout();var i=new a($("#popupNumbers"));o.bindPopup(i),$("#check").on("click",function(e){o.check()&&alert("成功！")}),$("#reset").on("click",function(e){o.reset()}),$("#clear").on("click",function(e){o.clear()}),$("#rebuild").on("click",function(e){o.rebuild()})},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(0);var a=n(3),o=n(5),i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._$container=t}return r(e,[{key:"build",value:function(){var e=new a;e.make();var t=e.puzzleMatrix,n=["row_g_top","row_g_middle","row_g_bottom"],r=["col_g_left","col_g_center","col_g_right"],o=t.map(function(e){return e.map(function(e,t){return $("<span>").addClass(r[t%3]).addClass(e?"tips":"empty").text(e)})}).map(function(e,t){return $("<div>").addClass("row").addClass(n[t%3]).append(e)});this._$container.append(o)}},{key:"layout",value:function(){var e=$("span:first",this._$container).width();$("span",this._$container).height(e).css({"line-height":e+"px","font-size":e<32?e+"px":""})}},{key:"bindPopup",value:function(e){this._$container.on("click","span",function(t){var n=$(t.target);n.is(".tips")||e.popup(n)})}},{key:"rebuild",value:function(){this._$container.empty(),this.build(),this.layout()}},{key:"check",value:function(){var e=this._$container.children().map(function(e,t){return $(t).children().map(function(e,t){return parseInt($(t).text())||0})}).toArray().map(function(e){return e.toArray()}),t=new o(e);if(t.check())return!0;var n=t.matrixMarks;this._$container.children().each(function(e,t){$(t).children().each(function(t,r){$(r).is(".tips")||n[e][t]?$(r).removeClass("error"):$(r).addClass("error")})})}},{key:"reset",value:function(){this._$container.find("span:not(.tips)").removeClass("error mark1 mark2").addClass("empty").text(0)}},{key:"clear",value:function(){this._$container.find("span.error").removeClass("error")}}]),e}();e.exports=i},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=n(4);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=new a;t.generate(),this.soluteMatrix=t.matrix}return r(e,[{key:"make",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;this.puzzleMatrix=this.soluteMatrix.map(function(t){return t.map(function(t){return 9*Math.random()<e?0:t})})}}]),e}()},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=n(0);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"generate",value:function(){for(;!this.internalGenerate();)console.warn("try again")}},{key:"internalGenerate",value:function(){this.matrix=a.matrix.makeMatrix(),this.orders=a.matrix.makeMatrix().map(function(e){return e.map(function(e,t){return t})}).map(function(e){return a.matrix.shuffle(e)});for(var e=1;e<=9;e++)if(!this.fillNumber(e))return!1;return!0}},{key:"fillNumber",value:function(e){return this.fillRow(e,0)}},{key:"fillRow",value:function(e,t){if(t>8)return!0;for(var n=this.matrix[t],r=this.orders[t],o=0;o<9;o++){var i=r[o];if(!n[i]&&a.matrix.checkFillable(this.matrix,e,t,i)){if(n[i]=e,this.fillRow(e,t+1))return!0;n[i]=0}}return!1}}]),e}()},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e){var t=e.length,n=new Array(t);n.fill(!0);for(var r=0;r<9;r++)if(n[r]){var a=e[r];if(a)for(var o=r+1;o<t;o++)a===e[o]&&(n[r]=n[o]=!1);else n[r]=!1}return n}var o=n(0);e.exports=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._matrix=t,this._matrixMasks=o.matrix.makeMatrix(!0)}return r(e,[{key:"check",value:function(){return this.checkRows(),this.checkCols(),this.checkBoxes(),this._success=this._matrixMasks.every(function(e){return e.every(function(e){return e})}),this._success}},{key:"checkRows",value:function(){for(var e=0;e<9;e++)for(var t=a(this._matrix[e]),n=0;n<t.length;n++)t[n]||(this._matrixMasks[e][n]=!1)}},{key:"checkCols",value:function(){for(var e=0;e<9;e++){for(var t=[],n=0;n<9;n++)t[n]=this._matrix[n][e];for(var r=a(t),o=0;o<r.length;o++)r[o]||(this._matrixMasks[o][e]=!1)}}},{key:"checkBoxes",value:function(){for(var e=0;e<9;e++)for(var t=a(o.box.getBoxCells(this._matrix,e)),n=0;n<9;n++)if(!t[n]){var r=o.box.convertFromBoxIndex(e,n);r.rowIndex,r.colIndex;this._matrixMasks[e][n]=!1}}},{key:"matrixMarks",get:function(){return this._matrixMasks}},{key:"isSuccess",get:function(){return this._success}}]),e}()},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();e.exports=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._$panel=t.hide().removeClass("hide"),this._$panel.on("click","span",function(e){var t=n._$taegetCell,r=$(e.target);r.hasClass("mark1")?t.hasClass("mark1")?t.removeClass("mark1"):t.removeClass("mark2").addClass("mark1"):r.hasClass("mark2")?t.hasClass("mark2")?t.removeClass("mark2"):t.removeClass("mark1").addClass("mark2"):r.hasClass("empty")?t.text(0).addClass("empty"):t.removeClass("empty").text(r.text()),n.hide()})}return r(e,[{key:"popup",value:function(e){this._$taegetCell=e;var t=e.position(),n=t.left,r=t.top;this._$panel.css({left:n+"px",top:r+"px"}).show()}},{key:"hide",value:function(){this._$panel.hide()}}]),e}()}]);
//# sourceMappingURL=index.js.map