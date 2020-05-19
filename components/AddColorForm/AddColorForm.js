"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AddColorForm = props => {
  let _title, _color;

  const submit = e => {
    e.preventDefault();
    props.onNewColor(_title.value, _color.value);
    _title.value = "";
    _color.value = "#000000";

    _title.focus();
  };

  return /*#__PURE__*/_react.default.createElement("form", {
    className: "add-color",
    onSubmit: submit
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: input => _title = input,
    type: "text",
    placeholder: "color title...",
    required: true,
    className: "text-input"
  }), /*#__PURE__*/_react.default.createElement("input", {
    ref: input => _color = input,
    type: "color",
    required: true,
    className: "color-input"
  }), /*#__PURE__*/_react.default.createElement("button", null, "ADD"));
};

var _default = AddColorForm;
exports.default = _default;