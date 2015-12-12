## rc-clearable-input

### Installation

`npm install rc-clearable-input`

### Usage

```
var ClearableInput = require('rc-clearable-input');

<ClearableInput
       placeholder="Search files"
       onUpdate={this.updateSearchValue}
       ref={(ref) => this.searchField = ref}
       style={{width:'130px','marginLeft':'20px','display': 'inline-block'}} />
```

### API

#### Component properties

`placeholder`

Gets passed through to the native input's `placeholder` property.

`onUpdate`

Optional. A function that gets called every time the field value changes. Necessary to trigger rerenders that depend on the field value. Takes a single argument, the new value.

```
...
updateSearchValue(val) {
  this.setState({ searchValue: val });
},
render() {
  return (
    <div>
      <ClearableInput ... />
      <br />
      Value is: {this.state.searchValue}
    </div>;
  );
}
...
```

`style`

Optional. A style to pass to the native input element.

#### Methods

`.focus()`, `.blur()`

Exposes the native input's `focus` and `blur` functions.

```
...
componentDidMount() {
  this.searchField.focus();
}
...
```


`.getValue()`

Get the current value of the text field


### Credits

This is based on a jQuery solution found on StackOverflow: http://stackoverflow.com/a/6258628
