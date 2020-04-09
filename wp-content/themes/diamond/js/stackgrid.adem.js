// stackgrid.adem.js - adwm.co
// Licensed under the MIT license - http://opensource.org/licenses/MIT
// Copyright (C) 2015 Andrew Prasetya
(function(){!function(){return this.Stackgrid=function(){var t,n,e,i,o;return i={height:0,width:0},(i.update=function(){i.height=window.innerHeight,i.width=window.innerWidth})(),e={debounceTimeout:void 0,complete:function(){},debounce:function(t,n){clearTimeout(this.debounceTimeout),this.debounceTimeout=window.setTimeout(t,n)},handler:function(){i.update(),e.debounce(e.complete,o.config.resizeDebounceDelay)}},t={$container:void 0,$items:void 0,containerHeight:0,containerWidth:0,items:[],numberOfColumns:0,updateSelectors:function(){},appendItem:function(){},populateItems:function(){},calculateNumberOfColumns:function(){},updateNumberOfColumns:function(){}},t.updateSelectors=function(){this.$container=document.querySelector(o.config.containerSelector),this.$items=document.querySelectorAll(o.config.containerSelector+" > "+o.config.itemsSelector)},t.appendItem=function(t){t.style.width=o.config.columnWidth+"px",this.items.push([t,t.offsetHeight,0,0])},t.populateItems=function(){var t,n,e,i,o;for(this.items=[],o=this.$items,t=e=0,i=o.length;i>e;t=++e)n=o[t],this.appendItem(n)},t.calculateNumberOfColumns=function(){var t;return t=o.config.isFluid?Math.floor((i.width-o.config.gutter)/(o.config.columnWidth+o.config.gutter)):o.config.numberOfColumns,t>this.items.length&&(t=this.items.length),this.items.length&&0>=t&&(t=1),t},t.updateNumberOfColumns=function(){this.numberOfColumns=this.calculateNumberOfColumns()},t.layout=function(){n[o.config.layout].setup(),this.items.length&&n[o.config.layout].loop()},t.draw=function(){var t,n;this.containerWidth=(o.config.columnWidth+o.config.gutter)*this.numberOfColumns,t=this.containerHeight+o.config.gutter,n=this.containerWidth+o.config.gutter,o.config.scaleContainer(this.$container,n,t,function(t){return function(){var n,e,i,u,c,r,s;for(n=function(){},r=t.items,s=[],e=u=0,c=r.length;c>u;e=++u)i=r[e],s.push(o.config.moveItem(i[0],i[2],i[3],n));return s}}(this))},n={columnPointer:0,ordinal:{stack:[],setup:function(){var n;this.stack=function(){var e,i,o,u;for(u=[],n=e=0,i=t.numberOfColumns-1;i>=0?i>=e:e>=i;n=i>=0?++e:--e)u.push((o=0,n=o[0],o));return u}()},plot:function(e){t.items[e][2]=o.config.gutter+(o.config.columnWidth+o.config.gutter)*n.columnPointer,t.items[e][3]=o.config.gutter+this.stack[n.columnPointer],this.stack[n.columnPointer]+=t.items[e][1]+o.config.gutter,this.stack[n.columnPointer]>t.containerHeight&&(t.containerHeight=this.stack[n.columnPointer]),n.columnPointer++,n.columnPointer>=t.numberOfColumns&&(n.columnPointer=0)},loop:function(){var n,e,i;for(n=e=0,i=t.items.length-1;i>=0?i>=e:e>=i;n=i>=0?++e:--e)this.plot(n)}},optimized:{stack:[],setup:function(){var n;this.stack=function(){var e,i,o,u;for(u=[],n=e=0,i=t.numberOfColumns-1;i>=0?i>=e:e>=i;n=i>=0?++e:--e)u.push((o=[n,0],n=o[0],o));return u}()},plot:function(e){t.items[e][2]=o.config.gutter+(o.config.columnWidth+o.config.gutter)*this.stack[0][0],t.items[e][3]=o.config.gutter+this.stack[0][1],this.stack[0][1]+=t.items[e][1]+o.config.gutter,this.stack[0][1]>t.containerHeight&&(t.containerHeight=this.stack[0][1]),this.stack.sort(function(t,n){return t[1]-n[1]}),n.columnPointer++,n.columnPointer>=t.numberOfColumns&&(n.columnPointer=0)},loop:function(){var n,e,i;for(n=e=0,i=t.items.length-1;i>=0?i>=e:e>=i;n=i>=0?++e:--e)this.plot(n)}}},n.reset=function(){t.containerHeight=0,this.columnPointer=0},o={config:{containerSelector:void 0,itemsSelector:void 0,columnWidth:320,gutter:20,isFluid:!1,layout:"ordinal",numberOfColumns:4,resizeDebounceDelay:350}},o.config.moveItem=function(t,n,e,i){t.style.left=n+"px",t.style.top=e+"px",i()},o.config.scaleContainer=function(t,n,e,i){t.style.height=e+"px",t.style.width=n+"px",i()},e.complete=function(){t.calculateNumberOfColumns()!==t.numberOfColumns&&o.config.isFluid&&o.restack()},o.initialize=function(n,i){window.addEventListener("resize",e.handler),this.config.containerSelector=n,this.config.itemsSelector=i,t.updateSelectors(),t.populateItems(),t.updateNumberOfColumns(),t.layout(),t.draw()},o.reset=function(){t.container={width:0,height:0},t.items=[],t.updateSelectors(),t.populateItems(),n.reset(),this.restack()},o.append=function(e,i){var u;u=t.items.length,t.appendItem(e),t.calculateNumberOfColumns()===t.numberOfColumns?(n[o.config.layout].plot(u),t.draw()):this.restack()},o.restack=function(){t.updateNumberOfColumns(),n.reset(),t.layout(),t.draw()},o}}()}).call(this);