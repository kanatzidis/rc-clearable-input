var React = require('react');

var ClearableInput = React.createClass({
  displayName: 'ClearableInput',

  getInitialState() {
    return {
      value: '',
      onX: false
    };
  },
  componentDidMount() {
    this.onUpdate = this.props.onUpdate || function () {};
  },
  getValue() {
    return this.state.value;
  },
  focus() {
    this.clearableInput.focus();
  },
  blur() {
    this.clearableInput.blur();
  },
  handleChange(e) {
    this.setState({ value: e.target.value });
    this.onUpdate(e.target.value);
  },
  onKeyUp(e) {
    // On Escape or Enter
    if (e.keyCode == 27 || e.keyCode == 13) {
      this.clearableInput.blur();
    }
  },
  onClick(e) {
    if (!this.state.onX) return;

    e.preventDefault();
    this.setState({ value: '', onX: false });
    this.onUpdate('');
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
      onTouchStart: this.onClick,
      onClick: this.onClick,
      onKeyUp: this.onKeyUp,
      value: this.state.value,
      ref: ref => this.clearableInput = ref,
      style: this.props.style || {} });
  }
});

module.exports = ClearableInput;
