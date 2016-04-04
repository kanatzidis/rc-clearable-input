'use strict';

var React = require('react');

var ClearableInput = React.createClass({
  displayName: 'ClearableInput',
  getInitialState: function getInitialState() {
    return {
      value: '',
      onX: false
    };
  },
  componentDidMount: function componentDidMount() {
    this.onUpdate = this.props.onUpdate || function () {};
    this.style = ".clearable{\n background: #fff url(data:image/gif;base64,R0lGODlhBwAHAIAAAP///5KSkiH5BAAAAAAALAAAAAAHAAcAAAIMTICmsGrIXnLxuDMLADs=) no-repeat right -10px center;\n border: 1px solid #999;\n padding: 3px 18px 3px 4px; /* Use the same right padding (18) in jQ! */\n border-radius: 3px;\n color: #4f4f4f;\n line-height:normal;\n transition: background 0.4s;\n }\n .clearable.x  { background-position: right 5px center; }\n .clearable.onX{ cursor: pointer; }\n .clearable::-ms-clear {display: none; width:0; height:0;}\n";
  },
  getValue: function getValue() {
    return this.state.value;
  },
  focus: function focus() {
    return this.clearableInput.focus();
  },
  blur: function blur() {
    return this.clearableInput.blur();
  },
  handleChange: function handleChange(e) {
    this.setState({ value: e.target.value });
    this.onUpdate(e.target.value);
  },
  onKeyUp: function onKeyUp(e) {
    // On Escape or Enter
    if (e.keyCode == 27 || e.keyCode == 13) {
      this.clearableInput.blur();
    }
  },
  onClick: function onClick(e) {
    if (!this.state.onX) return;

    e.preventDefault();
    this.setState({ value: '', onX: false });
    this.onUpdate('');
  },
  onMouseMove: function onMouseMove(e) {
    if (!this.state.value) return;
    this.setState({ onX: this.clearableInput.offsetWidth - 18 < e.clientX - this.clearableInput.getBoundingClientRect().left });
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'span',
      null,
      React.createElement(
        'style',
        null,
        this.style
      ),
      React.createElement('input', { type: 'text',
        placeholder: this.props.placeholder || '',
        className: (this.state.value ? 'clearable x' : 'clearable') + (this.state.onX ? ' onX' : ''),
        onChange: this.handleChange,
        onMouseMove: this.onMouseMove,
        onTouchStart: this.onClick,
        onClick: this.onClick,
        onKeyUp: this.onKeyUp,
        value: this.state.value,
        ref: function ref(_ref) {
          return _this.clearableInput = _ref;
        },
        style: this.props.style || {} })
    );
  }
});

module.exports = ClearableInput;
