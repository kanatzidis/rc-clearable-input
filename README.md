## rc-clearable-input

### Installation

`var ClearableInput = require('rc-clearable-input');`

### Usage

```
<ClearableInput
       placeholder="Search files"
       onUpdate={this.updateSearchValue}
       ref={(ref) => this.searchField = ref}
       style={{width:'130px','marginLeft':'20px','display': 'inline-block'}} />
```

### Credits

This is based on a jQuery solution found on StackOverflow: http://stackoverflow.com/a/6258628
