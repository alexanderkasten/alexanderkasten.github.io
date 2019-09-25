import{h}from"../dynamic-task-components.core.js";import{a as KeyCodes}from"./chunk-d8a0f336.js";var DateInputValidator=function(){function e(){}return e.prototype.validateKey=function(e){var t=e.keyCode===KeyCodes.ENTER,n=e.keyCode===KeyCodes.BACKSPACE,r=2===e.target.value.length||5===e.target.value.length,i=this.isCopyAndPastePressed(e),o=this.isKeyValid(e,n,i);if(e.keyCode===KeyCodes.TAB)return!0;if(t)return this.isValidDate(e.target.value);if(r){if(n)return!0;e.target.value=e.target.value.concat(".")}return o},e.prototype.isValidDate=function(e){var t=parseInt(e.substring(6,10)),n=parseInt(e.substring(3,5)),r=parseInt(e.substring(0,2));return this.isDayInMonth(r,n,t)},e.prototype.isDayInMonth=function(e,t,n){return e<=new Date(n,t,0).getDate()},e.prototype.isCopyAndPastePressed=function(e){return(e.keyCode===KeyCodes.C||e.keyCode===KeyCodes.V)&&(e.ctrlKey||e.metaKey)},e.prototype.isKeyValid=function(e,t,n){return e.keyCode<=KeyCodes.NINE&&e.keyCode>=KeyCodes.ZERO||t||n},e}(),DateFormField=function(){function e(){this.isValid=!0,this.validationRegex="^(0?[1-9]|[12][0-9]|3[01])([ \\.])(0?[1-9]|1[012])\\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$",this._inputValidator=new DateInputValidator}return Object.defineProperty(e.prototype,"name",{get:function(){return this.formField.id},enumerable:!0,configurable:!0}),e.prototype.componentWillLoad=function(){this.value=this.formField.defaultValue},e.prototype.render=function(){var e=this;return h("div",{class:"form-group"},h("label",{htmlFor:this.formField.id},this.formField.label),h("input",{type:"text","data-provide":"datepicker",class:"form-control",maxlength:"10",placeholder:"--.--.----",pattern:this.validationRegex,id:this.formField.id,value:this.value,onChange:function(t){return e._handleChange(t)},onKeyDown:function(t){return e._handleKeyDown(t)}}))},e.prototype._handleChange=function(e){this.value=e.target.value,this.isValid=this._inputValidator.isValidDate(e.target.value),this._setStyle(e)},e.prototype._setStyle=function(e){var t=0===e.target.value.length;document.getElementById(this.formField.id).style.borderColor=this.isValid||t?"":"red",t&&(this.isValid=!0)},e.prototype._handleKeyDown=function(e){this._inputValidator.validateKey(e)||e.preventDefault()},Object.defineProperty(e,"is",{get:function(){return"date-form-field"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{value:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"/**style-placeholder:date-form-field:**/"},enumerable:!0,configurable:!0}),e}();export{DateFormField as a};