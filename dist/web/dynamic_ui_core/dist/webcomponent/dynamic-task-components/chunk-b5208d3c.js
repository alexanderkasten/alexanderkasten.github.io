const e=window.DynamicTaskComponents.h;import{a as t}from"./chunk-75b119d8.js";class i{constructor(){this.isValid=!0,this.validationRegex="^(-?\\d+(,|\\.)\\d+)|(-?\\d+)$",this._numberinputValidator=new t(this.validationRegex)}get name(){return this.formField.id}componentWillLoad(){this.value=this.formField.defaultValue}render(){return e("div",{class:"form-group"},e("label",null,this.formField.label),e("input",{type:"text",class:"form-control",id:this.formField.id,name:this.formField.label,placeholder:"0.0",value:this.value,pattern:this.validationRegex,onKeyDown:e=>this._handleKeyDown(e),onInput:e=>this._handleInput(e),onChange:e=>this._handleChange(e)}))}_handleChange(e){this.isValid=this._numberinputValidator.isValid(e.target.value),this._setStyle(e)}_handleInput(e){const t=e.target.value;this._numberinputValidator.isValid(t)?this.value=parseFloat(t.replace(",",".")):e.preventDefault()}_setStyle(e){const t=0===e.target.value.length;document.getElementById(this.formField.id).style.borderColor=this.isValid||t?"":"red",t&&(this.isValid=!0)}_handleKeyDown(e){this._numberinputValidator.validateKey(e)||e.preventDefault()}static get is(){return"number-form-field"}static get properties(){return{value:{state:!0}}}static get style(){return"/**style-placeholder:number-form-field:**/"}}export{i as a};