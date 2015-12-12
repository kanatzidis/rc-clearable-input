var React = require('react');

var ClearableInput = React.createClass({
  displayName: 'ClearableInput',

  getInitialState() {
    return {
      value: '',
      onX: false
    };
  },
  focus() {
    this.clearableInput.focus();
  },
  getValue() {
    return this.state.value;
  },
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
    this.props.onUpdate(e.target.value);
  },
  onKeyUp(e) {
    if (e.keyCode == 27 || e.keyCode == 13) {
      this.clearableInput.blur();
    }
  },
  onClick(e) {
    if (!this.state.onX) return;

    e.preventDefault();
    this.setState({ searchValue: '', onX: false });
  },
  onMouseMove(e) {
    if (!this.state.value) return;
    this.setState({ onX: this.clearableInput.offsetWidth - 18 < e.clientX - this.clearableInput.getBoundingClientRect().left });
  },
  render() {
    return React.createElement('input', { type: 'text',
      placeholder: this.props.placeholder || '',
      className: (this.state.value ? 'clearable x' : 'clearable') + (this.state.onX ? ' onX' : ''),
      onChange: this.handleChange,
      onMouseMove: this.onMouseMove,
      onClick: this.onClick,
      onTouchStart: this.onClick,
      onKeyUp: this.onKeyUp,
      value: this.state.value,
      ref: ref => this.clearableInput = ref,
      style: this.props.style || {} });
  }
});

module.exports = ClearableInput;
