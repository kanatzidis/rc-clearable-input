var React = require('react');

var ClearableInput = React.createClass({
  getInitialState() {
    return {
      value: '',
      onX: false
    };
  },
  focus() {
    this.clearableInput.focus();
  },
  handleChange(e) {
    var onUpdate = this.props.onUpdate || function(){};
    this.setState({value: e.target.value});
    onUpdate(e.target.value);
  },
  onKeyUp(e) {
    if(e.keyCode == 27 || e.keyCode == 13) {
      this.clearableInput.blur();
    }
  },
  onClick(e) {
    if(!this.state.onX) return;
    var onUpdate = this.props.onUpdate || function(){};

    e.preventDefault();
    this.setState({ value: '', onX: false });
    onUpdate('');
  },
  onMouseMove(e) {
    if(!this.state.value) return;
    this.setState({ onX: this.clearableInput.offsetWidth-18 < e.clientX-this.clearableInput.getBoundingClientRect().left });
  },
  render() {
    return (
      <input type="text"
             placeholder={this.props.placeholder || ''}
             className={(this.state.value?'clearable x':'clearable') + (this.state.onX?' onX':'')}
             onChange={this.handleChange}
             onMouseMove={this.onMouseMove}
             onTouchStart={this.onClick}
             onClick={this.onClick}
             onKeyUp={this.onKeyUp}
             value={this.state.value}
             ref={(ref) => this.clearableInput = ref}
             style={this.props.style || {}} />
    );
  }
});

module.exports = ClearableInput;
