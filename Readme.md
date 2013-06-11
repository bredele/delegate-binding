
# delegate

  Delegate binding for Reactive

## Installation

    $ component install bredele/delegate

## API
```html
<ul class='test' delegate='click,.clickable,test'>
  <li class="clickable">clickable</li>
  <li class="notclickable">not clickable</li>
  <li class="clickable">clickable</li>
  <li class="notclickable">not clickable</li>
  <li class="clickable">clickable</li>
  <li class="clickable">clickable</li>
  <li class="clickable">clickable</li>
  <li class="clickable">clickable</li>
  <li class="notclickable">not clickable</li>
</ul>
```

```js
var Delegate = require('delegate-binding');
var view = reactive(document.querySelector('.list'));


var delegate = new Delegate(view, {
  test : function(){
    alert('haha');
  }
});

```
   
## Todo
  * find a better way to initialize binding
  * test if view is reactive
  * test scope (if not, view is default scope)

## License

  MIT
