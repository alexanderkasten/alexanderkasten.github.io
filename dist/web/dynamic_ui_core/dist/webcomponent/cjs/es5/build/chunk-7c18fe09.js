"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dynamic_task_components_core_js_1 = require("../dynamic-task-components.core.js");
var EnumFormField = function () { function e() { this.isValid = !0; } return Object.defineProperty(e.prototype, "name", { get: function () { return this.formField.id; }, enumerable: !0, configurable: !0 }), e.prototype.componentWillLoad = function () { this.value = this.formField.defaultValue; }, e.prototype.render = function () { var e = this; return dynamic_task_components_core_js_1.h("div", { class: "form-group" }, dynamic_task_components_core_js_1.h("label", null, this.formField.label), dynamic_task_components_core_js_1.h("select", { class: "form-control", id: this.formField.id, name: this.formField.label, onInput: function (t) { return e._handleSelect(t); } }, this.formField.enumValues.map(function (t) { return dynamic_task_components_core_js_1.h("option", { value: t.id, selected: e.value === t.id }, t.name); }))); }, e.prototype._handleSelect = function (e) { this.value = e.target.value; }, Object.defineProperty(e, "is", { get: function () { return "enum-form-field"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { value: { state: !0 } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return "/**style-placeholder:enum-form-field:**/"; }, enumerable: !0, configurable: !0 }), e; }();
exports.a = EnumFormField;